package com.cho.ecommerce.domain.member.entity;


import com.cho.ecommerce.domain.order.entity.OrderEntity;
import com.cho.ecommerce.global.config.database.DatabaseConstants;
import com.cho.ecommerce.global.config.security.SecurityConstants;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Table(
    name = "MEMBER",
    indexes = {
        @Index(name = "idx_userId", columnList = "USER_ID"),
        @Index(name = "idx_username", columnList = "NAME")
    },
    uniqueConstraints = {
        @UniqueConstraint(name = "uk_user_id", columnNames = "USER_ID")
    }
)
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class UserEntity implements
    UserDetails { // UserDetailService를 구현한 클래스를 따로 분리해서 만들어서 처리해도 된다.
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "member_seq")
//    @SequenceGenerator(
//        name = "member_seq",
//        sequenceName = "MEMBER_SEQ",
//        allocationSize = 1000
//    )
    @Column(name = "MEMBER_ID")
    private Long memberId;
    
    @NotBlank(message = "Username is required")
    @Column(name = "USER_ID", length = DatabaseConstants.MEMBER_USERNAME_SIZE) //unique = true
    //MYSQL의 utf8mb4은 최대 764byte(== 191 * 4) 까지 저장 가능
    private String username;
    
    @NotBlank(message = "Name is required")
    @Column(length = DatabaseConstants.MEMBER_NAME_SIZE, name = "NAME")
    private String name;
    
    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    @Column(length = DatabaseConstants.EMAIL_SIZE) //MYSQL의 utf8mb4은 최대 764byte(== 191 * 4) 까지 저장 가능
    private String email;

//    private String picUrl; //TODO - apply user picture
    
    @NotNull(message = "Address is required")
    @OneToOne(cascade = CascadeType.ALL) //Casecade로 지정하면, UserEntity를 저장하면 AddressEntity도 자동 저장된다.
//    @JoinColumn(name = "ADDRESS_ID", referencedColumnName = "ADDRESS_ID")
    @JoinColumn(name = "ADDRESS_ID")
    private AddressEntity address;
    
    @NotBlank(message = "Password is required")
    @JsonIgnore
    @Column(length = DatabaseConstants.PASSWORD_SIZE)
    //prevent the password from being included when the object is serialized into JSON format
    private String password;
    
    @NotBlank(message = "Role is required")
    @Column(length = DatabaseConstants.ROLE_SIZE)
    private String role;
    
    private boolean enabled; //attribute is a flag to indicate the user's status. If enabled is true, the user can log in. If enabled is false, the user cannot log in. This is useful in scenarios where you might want to temporarily (or permanently) deactivate a user's account without deleting it.
    
    //    @NotBlank(message = "failedAttempt is required") //note: Integer은 @NotBlank를 쓰면 에러난다!
    @Min(0)
    @Max(SecurityConstants.MAX_LOGIN_ATTEMPTS + 1)
    @Column(name = "FAILED_ATTEMPT")
    private Integer failedAttempt;
    
    @JsonIgnore //for error - "Could not write JSON: (was java.lang.NullPointerException)"
//    @NotEmpty(message = "User must have at least one authority")
    @OneToMany(mappedBy = "userEntity", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<UserAuthorityEntity> userAuthorities;
    
    @Column(name = "CREATED_AT")
    @NotNull(message = "User must have created datetime")
    //note: @NotEmpty는 LocalDateTime과 호환이 안되서 에러난다! @NotNull을 써야한다!
    private LocalDateTime created;
    
    @Column(name = "UPDATED_AT")
    @NotNull(message = "User must have updated datetime")
    private LocalDateTime updated;
    
    
    @JsonIgnore
    @OneToMany(mappedBy = "member", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @Builder.Default
    private Set<OrderEntity> orders = new HashSet<>();
    
    
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (userAuthorities == null || userAuthorities.isEmpty()) {
            return Collections.emptyList();
        }
        return userAuthorities.stream().map(userAuthority -> new SimpleGrantedAuthority(
            userAuthority.getAuthorityEntity().getAuthority())).collect(Collectors.toList());
    }
    
    @Override
    public String getPassword() {
        return password;
    }
    
    
    @Override
    public boolean isAccountNonExpired() {
        return enabled;
    }
    
    //use-case)
    //a user might be locked out after several failed login attempts
    @Override
    public boolean isAccountNonLocked() {
        return enabled;
    }
    
    //Indicates whether the user's credentials (password) have expired.
    @Override
    public boolean isCredentialsNonExpired() {
        return enabled;
    }
    
    @Override
    public boolean isEnabled() {
        return enabled;
    }
    
    
    public Set<UserAuthorityEntity> getUserAuthorities() {
        return this.userAuthorities;
    }
    
    public void setUserAuthorities(UserAuthorityEntity userAuthorityEntity) {
        if (this.userAuthorities == null) {
            this.userAuthorities = new HashSet<>();
        }
        this.userAuthorities.add(userAuthorityEntity);
    }
    
    public void setUserAuthorities(Set<UserAuthorityEntity> userAuthorities) {
        if (this.userAuthorities == null) {
            this.userAuthorities = new HashSet<>();
        }
        this.userAuthorities.addAll(userAuthorities);
    }
    
    public String getUsername() {
        return this.username;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }
    
    public String getEmail() {
        return this.email;
    }
    
    public boolean getEnabled() {
        return this.enabled;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public void setCreated(LocalDateTime created) {
        this.created = created;
    }
    
    public void setUpdated(LocalDateTime updated) {
        this.updated = updated;
    }
    
    public void setPassword(String password) {
        this.password = password;
    }
    
    public void setRole(String role) {
        this.role = role;
    }
    
    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }
    
    @Override
    public String toString() {
        return "User{" + "memberId=" + memberId + ", username='" + username + '\'' + ", email='"
            + email + '\'' + ", name='" + name + '\'' + ", password='" + password + '\''
            + ", role='" + role + '\'' + ", enabled=" + enabled + ", created=" + created
            + ", updated=" + updated + '}';
    }
    
    // Implementing hashCode() and equals() without referencing userAuthorities to avoid recursion
    // You can use Objects.hash() and Objects.equals() for simplicity
    @Override
    public int hashCode() {
        return Objects.hash(memberId, username, email, name, password, role, enabled, created,
            updated);
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        UserEntity userEntity = (UserEntity) obj;
        return enabled == userEntity.enabled && Objects.equals(memberId, userEntity.memberId)
            && Objects.equals(username, userEntity.username) && Objects.equals(email,
            userEntity.email) && Objects.equals(name, userEntity.name) && Objects.equals(password,
            userEntity.password) && Objects.equals(role, userEntity.role) && Objects.equals(created,
            userEntity.created) && Objects.equals(updated, userEntity.updated);
    }
}
