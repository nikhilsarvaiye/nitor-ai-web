import { BaseModel } from '@components/base/models/base.model';

export class ProductMetadata extends BaseModel {
    variants: ProductVariantModel[] = [];
}

export class ProductModel extends BaseModel {
    name: string = '';
    description: string = '';
    department?: string;
    category: string = '';
    type?: string;
    manufacturer?: string;
    metadata?: ProductMetadata;
    price: number = 0;
    comparePrice?: number;
    cost: number = 0;
    chargeTax?: boolean;
    sku: string = '';
    barcode?: string;
    trackQuantity?: boolean;
    sellWhenOutOfStock?: boolean;
    quantity?: number;
    isPhysicalProduct?: boolean;
    weight?: number;
    weightUnit?: string;
    status?: string;
    vendor?: string;
    collections?: string;
    tags: string[] = [];
    hasOptions: boolean = false;
    options: ProductOptionModel[] = [];
    variants: ProductVariantModel[] = [];
}

export interface ProductOptionModel {
    name: string;
    values: string[];
}

export interface ProductOptionValueModel {
    value: string;
    price: number;
    quantity?: number;
    sku: string;
}

export interface ProductVariantModel {
    option: string;
    variant: string;
    price: number;
    quantity?: number;
    sku: string;
}
