import { BaseModel } from '@components/base/models/base.model';

export class PatientMetadata extends BaseModel {
    variants: PatientVariantModel[] = [];
}

export class PatientModel extends BaseModel {
    name: string = '';
    description: string = '';
    department?: string;
    category: string = '';
    type?: string;
    manufacturer?: string;
    metadata?: PatientMetadata;
    price: number = 0;
    comparePrice?: number;
    cost: number = 0;
    chargeTax?: boolean;
    sku: string = '';
    barcode?: string;
    trackQuantity?: boolean;
    sellWhenOutOfStock?: boolean;
    quantity?: number;
    isPhysicalPatient?: boolean;
    weight?: number;
    weightUnit?: string;
    status?: string;
    vendor?: string;
    collections?: string;
    tags: string[] = [];
    hasOptions: boolean = false;
    options: PatientOptionModel[] = [];
    variants: PatientVariantModel[] = [];
}

export interface PatientOptionModel {
    name: string;
    values: string[];
}

export interface PatientOptionValueModel {
    value: string;
    price: number;
    quantity?: number;
    sku: string;
}

export interface PatientVariantModel {
    option: string;
    variant: string;
    price: number;
    quantity?: number;
    sku: string;
}
