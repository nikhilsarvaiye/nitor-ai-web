import { BaseService } from '@components/base/services/base.service';
import { IService } from '@components/base/services/iservice';
import { PatientModel } from '@components/patient/patient.models';
import { IPageResponse } from '@components/base/models';
import { QueryOptions } from 'odata-query';

const data = [
    {
        id: '81a701f2-ce1b-1119-171c-d939509ba8e5',
        dob: '11/2/1953',
        age: '70',
        prefix: 'Mrs',
        firstName: 'Edwina',
        lastName: 'Witting',
        maiden: '--',
        marital: 'D',
        race: 'white',
        ethnicity: 'nonhispanic',
        gender: 'F',
        address: '233 Flatley Gateway Apt 11',
        city: 'Randolph',
        state: 'Massachusetts',
        county: 'Norfolk County',
        fips: '21021',
        zip: '2368',
        healthcareExpenses: '1258.61',
        healthCareCoverage: '44781.24',
        income: '47691',
        allergiesCode: '',
        allergiesDesc: '',
        allergiesReaction: '',
        iCondCode: '73591000, 444814009,422610009, 423311002, 39848009, 10109002',
        aCondCode: '162864005, 239872002, 48724000, 267020005, 706893006, 254837009',
        iCondDesc: 'Diabetes',
        aCondDesc:
            'Diabetes(disorder), Osteoarthritis of hip, History of tubal ligation(situation), Mitral valve regurgitation(disorder), Victim of intimate partner abuse(finding), Body mass index 30+ - obesity(finding)',
        iMedCode: '\t745752, 313782, 849574, 896001',
        aMedCode: '745752, 896001',
        iMedDesc:
            'Acetaminophen 325 MG Oral Tablet, Naproxen sodium 220 MG Oral Tablet, 120 ACTUAT fluticasone propionate 0.11 MG / ACTUAT Metered Dose Inhaler [Flovent], NDA021457 200 ACTUAT albuterol 0.09 MG / ACTUAT Metered Dose Inhaler [ProAir]',
        aMedDesc:
            '120 ACTUAT fluticasone propionate 0.11 MG / ACTUAT Metered Dose Inhaler [Flovent], NDA021457 200 ACTUAT albuterol 0.09 MG / ACTUAT Metered Dose Inhaler [ProAir]',
        iMedReasonDesc: 'Childhood asthma, Acute bronchitis(disorder)',
        aMedReasonDesc: 'Childhood asthma',
        totalCost: '21814.23',
        procedureCode:
            '310417005,410401003, 46706006, 449381000124108, 84478008, 710841007, 385763009, 312681000, 866148006, 225386006, 71651007, 409023009, 763302001, 710824005, 433236007, 428211000124100, 713106006, 430193006, 370789001, 171207006, 25656009, 58000006, 91251008, 181087000, 315639002, 63332003, 762993000, 454711000124102, 73761001',
        procedureDesc:
            'Assessment using Morse Fall Scale(procedure), Nursing care/ supplementary surveillance(regime / therapy), Bone density scan(procedure), Physical examination  complete(procedure), Mammography(procedure), Replacement of contraceptive intrauterine device, Depression screening using Patient Health Questionnaire Two - Item score(procedure), Physical therapy procedure(regime / therapy), Screening for domestic abuse(procedure), Assessment using Alcohol Use Disorders Identification Test - Consumption(procedure), Assessment of anxiety(procedure), Patient discharge(procedure), Occupational therapy(regime / therapy), Colonoscopy, History AND physical examination(procedure), Professional / ancillary services care(regime / therapy), Development of individualized plan of care(procedure), Assessment of health and social care needs(procedure), Discharge from skilled nursing facility(procedure), Notifications(procedure), Hospice care(regime / therapy), Depression screening(procedure), Medication Reconciliation(procedure), Certification procedure(procedure), Transthoracic echocardiography(procedure), Assessment of substance use(procedure), Screening for drug abuse(procedure), Pre - discharge assessment(procedure), Initial patient assessment(procedure)',
        procedureReasonDesc: 'Diabetes(disorder)\t',
        risk: 'High',
    },
    {
        id: '0a2015ef-73f4-f8b0-1c7b-e65004d41e4a',
        dob: '11/2/1973',
        age: '50',
        prefix: 'Mr',
        firstName: 'Donny',
        lastName: 'Welsch',
        maiden: '--',
        marital: 'D',
        race: 'non white',
        ethnicity: 'hispanic',
        gender: 'M',
        address: '233 Flatley Gateway Apt 11',
        city: 'Randolph',
        state: 'Massachusetts',
        county: 'Norfolk County',
        fips: '21021',
        zip: '2368',
        healthcareExpenses: '3458.61',
        healthCareCoverage: '6429.24',
        income: '47691',
        allergiesCode: '',
        allergiesDesc: '',
        allergiesReaction: '',
        iCondCode: '73591000, 444814009,422610009, 423311002, 39848009, 10109002',
        aCondCode: '162864005, 239872002, 48724000, 267020005, 706893006, 254837009',
        iCondDesc: 'Diabetes',
        aCondDesc:
            'Diabetes(disorder), Osteoarthritis of hip, History of tubal ligation(situation), Mitral valve regurgitation(disorder), Victim of intimate partner abuse(finding), Body mass index 30+ - obesity(finding)',
        iMedCode: '\t745752, 313782, 849574, 896001',
        aMedCode: '745752, 896001',
        iMedDesc:
            'Acetaminophen 325 MG Oral Tablet, Naproxen sodium 220 MG Oral Tablet, 120 ACTUAT fluticasone propionate 0.11 MG / ACTUAT Metered Dose Inhaler [Flovent], NDA021457 200 ACTUAT albuterol 0.09 MG / ACTUAT Metered Dose Inhaler [ProAir]',
        aMedDesc:
            '120 ACTUAT fluticasone propionate 0.11 MG / ACTUAT Metered Dose Inhaler [Flovent], NDA021457 200 ACTUAT albuterol 0.09 MG / ACTUAT Metered Dose Inhaler [ProAir]',
        iMedReasonDesc: 'Childhood asthma, Acute bronchitis(disorder)',
        aMedReasonDesc: 'Childhood asthma',
        totalCost: '21814.23',
        procedureCode:
            '310417005,410401003, 46706006, 449381000124108, 84478008, 710841007, 385763009, 312681000, 866148006, 225386006, 71651007, 409023009, 763302001, 710824005, 433236007, 428211000124100, 713106006, 430193006, 370789001, 171207006, 25656009, 58000006, 91251008, 181087000, 315639002, 63332003, 762993000, 454711000124102, 73761001',
        procedureDesc:
            'Assessment using Morse Fall Scale(procedure), Nursing care/ supplementary surveillance(regime / therapy), Bone density scan(procedure), Physical examination  complete(procedure), Mammography(procedure), Replacement of contraceptive intrauterine device, Depression screening using Patient Health Questionnaire Two - Item score(procedure), Physical therapy procedure(regime / therapy), Screening for domestic abuse(procedure), Assessment using Alcohol Use Disorders Identification Test - Consumption(procedure), Assessment of anxiety(procedure), Patient discharge(procedure), Occupational therapy(regime / therapy), Colonoscopy, History AND physical examination(procedure), Professional / ancillary services care(regime / therapy), Development of individualized plan of care(procedure), Assessment of health and social care needs(procedure), Discharge from skilled nursing facility(procedure), Notifications(procedure), Hospice care(regime / therapy), Depression screening(procedure), Medication Reconciliation(procedure), Certification procedure(procedure), Transthoracic echocardiography(procedure), Assessment of substance use(procedure), Screening for drug abuse(procedure), Pre - discharge assessment(procedure), Initial patient assessment(procedure)',
        procedureReasonDesc: 'Diabetes(disorder)\t',
        risk: 'Low',
    },
    {
        id: '8f1f14d4-3df2-110a-d30e-92bf2a22c6b2',
        dob: '11/2/1953',
        age: '70',
        prefix: 'Ms',
        firstName: 'Iola',
        lastName: 'Muller',
        maiden: '--',
        marital: 'D',
        race: 'white',
        ethnicity: 'nonhispanic',
        gender: 'F',
        address: '233 Flatley Gateway Apt 11',
        city: 'Randolph',
        state: 'Massachusetts',
        county: 'Norfolk County',
        fips: '21021',
        zip: '2368',
        healthcareExpenses: '5232.61',
        healthCareCoverage: '14478.24',
        income: '47691',
        allergiesCode: '',
        allergiesDesc: '',
        allergiesReaction: '',
        iCondCode: '73591000, 444814009,422610009, 423311002, 39848009, 10109002',
        aCondCode: '162864005, 239872002, 48724000, 267020005, 706893006, 254837009',
        iCondDesc: 'Diabetes',
        aCondDesc:
            'Diabetes(disorder), Osteoarthritis of hip, History of tubal ligation(situation), Mitral valve regurgitation(disorder), Victim of intimate partner abuse(finding), Body mass index 30+ - obesity(finding)',
        iMedCode: '\t745752, 313782, 849574, 896001',
        aMedCode: '745752, 896001',
        iMedDesc:
            'Acetaminophen 325 MG Oral Tablet, Naproxen sodium 220 MG Oral Tablet, 120 ACTUAT fluticasone propionate 0.11 MG / ACTUAT Metered Dose Inhaler [Flovent], NDA021457 200 ACTUAT albuterol 0.09 MG / ACTUAT Metered Dose Inhaler [ProAir]',
        aMedDesc:
            '120 ACTUAT fluticasone propionate 0.11 MG / ACTUAT Metered Dose Inhaler [Flovent], NDA021457 200 ACTUAT albuterol 0.09 MG / ACTUAT Metered Dose Inhaler [ProAir]',
        iMedReasonDesc: 'Childhood asthma, Acute bronchitis(disorder)',
        aMedReasonDesc: 'Childhood asthma',
        totalCost: '21814.23',
        procedureCode:
            '310417005,410401003, 46706006, 449381000124108, 84478008, 710841007, 385763009, 312681000, 866148006, 225386006, 71651007, 409023009, 763302001, 710824005, 433236007, 428211000124100, 713106006, 430193006, 370789001, 171207006, 25656009, 58000006, 91251008, 181087000, 315639002, 63332003, 762993000, 454711000124102, 73761001',
        procedureDesc:
            'Assessment using Morse Fall Scale(procedure), Nursing care/ supplementary surveillance(regime / therapy), Bone density scan(procedure), Physical examination  complete(procedure), Mammography(procedure), Replacement of contraceptive intrauterine device, Depression screening using Patient Health Questionnaire Two - Item score(procedure), Physical therapy procedure(regime / therapy), Screening for domestic abuse(procedure), Assessment using Alcohol Use Disorders Identification Test - Consumption(procedure), Assessment of anxiety(procedure), Patient discharge(procedure), Occupational therapy(regime / therapy), Colonoscopy, History AND physical examination(procedure), Professional / ancillary services care(regime / therapy), Development of individualized plan of care(procedure), Assessment of health and social care needs(procedure), Discharge from skilled nursing facility(procedure), Notifications(procedure), Hospice care(regime / therapy), Depression screening(procedure), Medication Reconciliation(procedure), Certification procedure(procedure), Transthoracic echocardiography(procedure), Assessment of substance use(procedure), Screening for drug abuse(procedure), Pre - discharge assessment(procedure), Initial patient assessment(procedure)',
        procedureReasonDesc: 'Diabetes(disorder)\t',
        risk: 'High',
    },
    {
        id: '7f1f14d4-3df2-110a-d30e-92bf2a22c6b2',
        dob: '11/2/1963',
        age: '60',
        prefix: 'Ms',
        firstName: 'Marty',
        lastName: 'Heathcote',
        marital: 'M',
        maiden: '--',
        race: 'white',
        ethnicity: 'nonhispanic',
        gender: 'F',
        address: '233 Flatley Gateway Apt 11',
        city: 'Springfield',
        state: 'California',
        county: 'US',
        fips: '21021',
        zip: '2368',
        healthcareExpenses: '4212.61',
        healthCareCoverage: '64781.24',
        income: '47691',
        allergiesCode: '',
        allergiesDesc: '',
        allergiesReaction: '',
        iCondCode: '73591000, 444814009,422610009, 423311002, 39848009, 10109002',
        aCondCode: '162864005, 239872002, 48724000, 267020005, 706893006, 254837009',
        iCondDesc: 'Diabetes',
        aCondDesc:
            'Diabetes(disorder), Osteoarthritis of hip, History of tubal ligation(situation), Mitral valve regurgitation(disorder), Victim of intimate partner abuse(finding), Body mass index 30+ - obesity(finding)',
        iMedCode: '\t745752, 313782, 849574, 896001',
        aMedCode: '745752, 896001',
        iMedDesc:
            'Acetaminophen 325 MG Oral Tablet, Naproxen sodium 220 MG Oral Tablet, 120 ACTUAT fluticasone propionate 0.11 MG / ACTUAT Metered Dose Inhaler [Flovent], NDA021457 200 ACTUAT albuterol 0.09 MG / ACTUAT Metered Dose Inhaler [ProAir]',
        aMedDesc:
            '120 ACTUAT fluticasone propionate 0.11 MG / ACTUAT Metered Dose Inhaler [Flovent], NDA021457 200 ACTUAT albuterol 0.09 MG / ACTUAT Metered Dose Inhaler [ProAir]',
        iMedReasonDesc: 'Childhood asthma, Acute bronchitis(disorder)',
        aMedReasonDesc: 'Childhood asthma',
        totalCost: '21814.23',
        procedureCode:
            '310417005,410401003, 46706006, 449381000124108, 84478008, 710841007, 385763009, 312681000, 866148006, 225386006, 71651007, 409023009, 763302001, 710824005, 433236007, 428211000124100, 713106006, 430193006, 370789001, 171207006, 25656009, 58000006, 91251008, 181087000, 315639002, 63332003, 762993000, 454711000124102, 73761001',
        procedureDesc:
            'Assessment using Morse Fall Scale(procedure), Nursing care/ supplementary surveillance(regime / therapy), Bone density scan(procedure), Physical examination  complete(procedure), Mammography(procedure), Replacement of contraceptive intrauterine device, Depression screening using Patient Health Questionnaire Two - Item score(procedure), Physical therapy procedure(regime / therapy), Screening for domestic abuse(procedure), Assessment using Alcohol Use Disorders Identification Test - Consumption(procedure), Assessment of anxiety(procedure), Patient discharge(procedure), Occupational therapy(regime / therapy), Colonoscopy, History AND physical examination(procedure), Professional / ancillary services care(regime / therapy), Development of individualized plan of care(procedure), Assessment of health and social care needs(procedure), Discharge from skilled nursing facility(procedure), Notifications(procedure), Hospice care(regime / therapy), Depression screening(procedure), Medication Reconciliation(procedure), Certification procedure(procedure), Transthoracic echocardiography(procedure), Assessment of substance use(procedure), Screening for drug abuse(procedure), Pre - discharge assessment(procedure), Initial patient assessment(procedure)',
        procedureReasonDesc: 'Diabetes(disorder)\t',
        risk: 'High',
    },
    {
        id: '6f1f14d4-3df2-110a-d30e-92bf2a22c6b2',
        dob: '11/2/1983',
        age: '40',
        prefix: 'Mr',
        firstName: 'John',
        lastName: 'Scott',
        marital: 'M',
        maiden: '--',
        race: 'white',
        ethnicity: 'nonhispanic',
        gender: 'M',
        address: '233 Flatley Gateway Apt 11',
        city: 'Boston',
        state: 'Alaska',
        county: 'US',
        fips: '21021',
        zip: '2368',
        healthcareExpenses: '3221.61',
        healthCareCoverage: '24781.24',
        income: '47691',
        allergiesCode: '',
        allergiesDesc: '',
        allergiesReaction: '',
        iCondCode: '73591000, 444814009,422610009, 423311002, 39848009, 10109002',
        aCondCode: '162864005, 239872002, 48724000, 267020005, 706893006, 254837009',
        iCondDesc:
            'Whiplash injury to neck, Acute bronchitis(disorder), Viral sinusitis(disorder), Limited social contact(finding), Social isolation(finding), Stress(finding)',
        aCondDesc:
            'Diabetes(disorder), Osteoarthritis of hip, History of tubal ligation(situation), Mitral valve regurgitation(disorder), Victim of intimate partner abuse(finding), Body mass index 30+ - obesity(finding)',
        iMedCode: '\t745752, 313782, 849574, 896001',
        aMedCode: '745752, 896001',
        iMedDesc:
            'Acetaminophen 325 MG Oral Tablet, Naproxen sodium 220 MG Oral Tablet, 120 ACTUAT fluticasone propionate 0.11 MG / ACTUAT Metered Dose Inhaler [Flovent], NDA021457 200 ACTUAT albuterol 0.09 MG / ACTUAT Metered Dose Inhaler [ProAir]',
        aMedDesc:
            '120 ACTUAT fluticasone propionate 0.11 MG / ACTUAT Metered Dose Inhaler [Flovent], NDA021457 200 ACTUAT albuterol 0.09 MG / ACTUAT Metered Dose Inhaler [ProAir]',
        iMedReasonDesc: 'Childhood asthma, Acute bronchitis(disorder)',
        aMedReasonDesc: 'Childhood asthma',
        totalCost: '21814.23',
        procedureCode:
            '310417005,410401003, 46706006, 449381000124108, 84478008, 710841007, 385763009, 312681000, 866148006, 225386006, 71651007, 409023009, 763302001, 710824005, 433236007, 428211000124100, 713106006, 430193006, 370789001, 171207006, 25656009, 58000006, 91251008, 181087000, 315639002, 63332003, 762993000, 454711000124102, 73761001',
        procedureDesc:
            'Assessment using Morse Fall Scale(procedure), Nursing care/ supplementary surveillance(regime / therapy), Bone density scan(procedure), Physical examination  complete(procedure), Mammography(procedure), Replacement of contraceptive intrauterine device, Depression screening using Patient Health Questionnaire Two - Item score(procedure), Physical therapy procedure(regime / therapy), Screening for domestic abuse(procedure), Assessment using Alcohol Use Disorders Identification Test - Consumption(procedure), Assessment of anxiety(procedure), Patient discharge(procedure), Occupational therapy(regime / therapy), Colonoscopy, History AND physical examination(procedure), Professional / ancillary services care(regime / therapy), Development of individualized plan of care(procedure), Assessment of health and social care needs(procedure), Discharge from skilled nursing facility(procedure), Notifications(procedure), Hospice care(regime / therapy), Depression screening(procedure), Medication Reconciliation(procedure), Certification procedure(procedure), Transthoracic echocardiography(procedure), Assessment of substance use(procedure), Screening for drug abuse(procedure), Pre - discharge assessment(procedure), Initial patient assessment(procedure)',
        procedureReasonDesc: 'Diabetes(disorder)\t',
        risk: 'Medium',
    },
];

export class RiskPatientService
    extends BaseService<PatientModel>
    implements IService<PatientModel>
{
    constructor() {
        super('Patient', 'patient');
    }

    paginate = async (
        queryOptions?: Partial<QueryOptions<PatientModel>>,
    ): Promise<IPageResponse<PatientModel>> => {
        const pageData = {
            count: data.length,
            items: data as any,
        };

        return new Promise((res) => setTimeout(() => res(pageData), 4000));
    };
}

export const PatientRiskData = data;
