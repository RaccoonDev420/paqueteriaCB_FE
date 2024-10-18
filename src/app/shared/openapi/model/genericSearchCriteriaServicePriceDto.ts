/**
 * PaqueteriaCB API
 * REST Api documentation
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Pagination } from './pagination';
import { SearchCondition } from './searchCondition';


export interface GenericSearchCriteriaServicePriceDto { 
    conditions?: Array<SearchCondition>;
    pagination?: Pagination;
}

