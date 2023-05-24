// import { OrderSetting } from './order/types';
// import { PatientSetting, PatientVariantSetting } from './patient/types';
// import { InvoiceSetting } from './invoice/types';

export enum SettingType {
    User = 1,
    Patient = 2,
    Order = 3,
    Invoice = 4,
    PatientVariant = 5,
}

export interface AppSetting {
    type: SettingType;
}

export interface AppSettings {
    // patient: PatientSetting;
    // patientVariant: PatientVariantSetting;
    // order: OrderSetting;
    // invoice: InvoiceSetting;
}

// export type { PatientSetting, PatientVariantSetting, OrderSetting, InvoiceSetting };
