// import { OrderSetting } from './order/types';
// import { ProductSetting, ProductVariantSetting } from './product/types';
// import { InvoiceSetting } from './invoice/types';

export enum SettingType {
    User = 1,
    Product = 2,
    Order = 3,
    Invoice = 4,
    ProductVariant = 5,
}

export interface AppSetting {
    type: SettingType;
}

export interface AppSettings {
    // product: ProductSetting;
    // productVariant: ProductVariantSetting;
    // order: OrderSetting;
    // invoice: InvoiceSetting;
}

// export type { ProductSetting, ProductVariantSetting, OrderSetting, InvoiceSetting };
