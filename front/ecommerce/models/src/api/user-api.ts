/* tslint:disable */
/* eslint-disable */
/**
 * ecommerce API
 * ecommerce API MVP
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../../base';
// @ts-ignore
import { ErrorResponseDTO } from '../../src/model';
// @ts-ignore
import { LoginPage200Response } from '../../src/model';
// @ts-ignore
import { LoginRequestDTO } from '../../src/model';
// @ts-ignore
import { LoginResponseDTO } from '../../src/model';
// @ts-ignore
import { LoginUser401Response } from '../../src/model';
// @ts-ignore
import { RegisterRequestDTO } from '../../src/model';
// @ts-ignore
import { RegisterResponseDTO } from '../../src/model';
// @ts-ignore
import { RegisterRoleUserDefaultResponse } from '../../src/model';
// @ts-ignore
import { UserDetailsResponseDTO } from '../../src/model';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns user details for a given username
         * @summary Get user information by username
         * @param {string} username The username of the user to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserByUsername: async (username: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            assertParamExists('getUserByUsername', 'username', username)
            const localVarPath = `/users/{username}`
                .replace(`{${"username"}}`, encodeURIComponent(String(username)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Shows the login page or a logout success message based on the logout parameter
         * @summary Display login page or logout message
         * @param {string} [logout] Logout query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginPage: async (logout?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (logout !== undefined) {
                localVarQueryParameter['logout'] = logout;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Authenticates the user and returns a login status message.
         * @summary Authenticate a user
         * @param {LoginRequestDTO} loginRequestDTO User credentials for authentication
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginUser: async (loginRequestDTO: LoginRequestDTO, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'loginRequestDTO' is not null or undefined
            assertParamExists('loginUser', 'loginRequestDTO', loginRequestDTO)
            const localVarPath = `/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(loginRequestDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the Result of Register Attempt
         * @summary register a user
         * @param {RegisterRequestDTO} registerRequestDTO User registration details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerRoleUser: async (registerRequestDTO: RegisterRequestDTO, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'registerRequestDTO' is not null or undefined
            assertParamExists('registerRoleUser', 'registerRequestDTO', registerRequestDTO)
            const localVarPath = `/register`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(registerRequestDTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns user details for a given username
         * @summary Get user information by username
         * @param {string} username The username of the user to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserByUsername(username: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserDetailsResponseDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserByUsername(username, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['UserApi.getUserByUsername']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Shows the login page or a logout success message based on the logout parameter
         * @summary Display login page or logout message
         * @param {string} [logout] Logout query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loginPage(logout?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginPage200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.loginPage(logout, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['UserApi.loginPage']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Authenticates the user and returns a login status message.
         * @summary Authenticate a user
         * @param {LoginRequestDTO} loginRequestDTO User credentials for authentication
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loginUser(loginRequestDTO: LoginRequestDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginResponseDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.loginUser(loginRequestDTO, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['UserApi.loginUser']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Returns the Result of Register Attempt
         * @summary register a user
         * @param {RegisterRequestDTO} registerRequestDTO User registration details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registerRoleUser(registerRequestDTO: RegisterRequestDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RegisterResponseDTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.registerRoleUser(registerRequestDTO, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['UserApi.registerRoleUser']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * Returns user details for a given username
         * @summary Get user information by username
         * @param {string} username The username of the user to retrieve.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserByUsername(username: string, options?: any): AxiosPromise<UserDetailsResponseDTO> {
            return localVarFp.getUserByUsername(username, options).then((request) => request(axios, basePath));
        },
        /**
         * Shows the login page or a logout success message based on the logout parameter
         * @summary Display login page or logout message
         * @param {string} [logout] Logout query parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginPage(logout?: string, options?: any): AxiosPromise<LoginPage200Response> {
            return localVarFp.loginPage(logout, options).then((request) => request(axios, basePath));
        },
        /**
         * Authenticates the user and returns a login status message.
         * @summary Authenticate a user
         * @param {LoginRequestDTO} loginRequestDTO User credentials for authentication
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginUser(loginRequestDTO: LoginRequestDTO, options?: any): AxiosPromise<LoginResponseDTO> {
            return localVarFp.loginUser(loginRequestDTO, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the Result of Register Attempt
         * @summary register a user
         * @param {RegisterRequestDTO} registerRequestDTO User registration details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerRoleUser(registerRequestDTO: RegisterRequestDTO, options?: any): AxiosPromise<RegisterResponseDTO> {
            return localVarFp.registerRoleUser(registerRequestDTO, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - interface
 * @export
 * @interface UserApi
 */
export interface UserApiInterface {
    /**
     * Returns user details for a given username
     * @summary Get user information by username
     * @param {string} username The username of the user to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    getUserByUsername(username: string, options?: AxiosRequestConfig): AxiosPromise<UserDetailsResponseDTO>;

    /**
     * Shows the login page or a logout success message based on the logout parameter
     * @summary Display login page or logout message
     * @param {string} [logout] Logout query parameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    loginPage(logout?: string, options?: AxiosRequestConfig): AxiosPromise<LoginPage200Response>;

    /**
     * Authenticates the user and returns a login status message.
     * @summary Authenticate a user
     * @param {LoginRequestDTO} loginRequestDTO User credentials for authentication
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    loginUser(loginRequestDTO: LoginRequestDTO, options?: AxiosRequestConfig): AxiosPromise<LoginResponseDTO>;

    /**
     * Returns the Result of Register Attempt
     * @summary register a user
     * @param {RegisterRequestDTO} registerRequestDTO User registration details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    registerRoleUser(registerRequestDTO: RegisterRequestDTO, options?: AxiosRequestConfig): AxiosPromise<RegisterResponseDTO>;

}

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI implements UserApiInterface {
    /**
     * Returns user details for a given username
     * @summary Get user information by username
     * @param {string} username The username of the user to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public getUserByUsername(username: string, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).getUserByUsername(username, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Shows the login page or a logout success message based on the logout parameter
     * @summary Display login page or logout message
     * @param {string} [logout] Logout query parameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public loginPage(logout?: string, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).loginPage(logout, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Authenticates the user and returns a login status message.
     * @summary Authenticate a user
     * @param {LoginRequestDTO} loginRequestDTO User credentials for authentication
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public loginUser(loginRequestDTO: LoginRequestDTO, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).loginUser(loginRequestDTO, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the Result of Register Attempt
     * @summary register a user
     * @param {RegisterRequestDTO} registerRequestDTO User registration details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public registerRoleUser(registerRequestDTO: RegisterRequestDTO, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).registerRoleUser(registerRequestDTO, options).then((request) => request(this.axios, this.basePath));
    }
}

