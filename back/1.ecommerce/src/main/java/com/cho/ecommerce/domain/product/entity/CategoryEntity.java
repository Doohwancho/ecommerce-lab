package com.cho.ecommerce.domain.product.entity;

import com.cho.ecommerce.global.config.database.DatabaseConstants;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.io.Serializable;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "CATEGORY")
@Getter
@Setter
@JsonIgnoreProperties({"optionEntities", "products"})
public class CategoryEntity implements Serializable {
    
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "category_seq")
//    @SequenceGenerator(
//        name = "category_seq",
//        sequenceName = "CATEGORY_SEQ",
//        allocationSize = 1000
//    )
    @Column(name = "CATEGORY_ID")
    private Long categoryId;
    
    @NotBlank(message = "Category code is required")
    @Column(name = "CATEGORY_CODE", length = DatabaseConstants.CATEGORY_CODE_SIZE)
    private String categoryCode;
    
    @NotBlank(message = "Name is required")
    @Column(name = "NAME", length = DatabaseConstants.CATEGORY_NAME_SIZE)
    private String name;
    
    @Column(name = "PARENT_CATEGORY_ID")
    private Long parentCategoryId;
    
    @Min(0)
    @Column(name = "DEPTH")
    private Integer depth;
    
    @JsonManagedReference
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private Set<OptionEntity> optionEntities;
    
    @JsonManagedReference
    @OneToMany(mappedBy = "category")
    private Set<ProductEntity> products;
    
    public void update(String categoryCode, String name) {
        this.categoryCode = categoryCode;
        this.name = name;
    }
    
    public String getCategoryCode() {
        return this.categoryCode;
    }
    
    public String getName() {
        return this.name;
    }
    
    public void setCategoryCode(String categoryCode) {
        this.categoryCode = categoryCode;
    }
    
    public void setName(String name) {
        this.name = name;
    }
}
