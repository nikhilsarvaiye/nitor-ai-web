import { BaseService } from '@components/base/services/base.service';
import { IService } from '@components/base/services/iservice';
import { ClinicalModel } from './clinical.models';
import { IPageResponse } from '@components/base/models';
import { QueryOptions } from 'odata-query';

const data = [
    {
        patientId: '27c02083-54f6-c520-c68a-9ef2387e128b',
        dob: '22-07-1949',
        age: '74',
        firstName: 'Edwina',
        lastName: 'Witting',
        marital: 'D',
        race: 'white',
        ethnicity: 'hispanic',
        gender: 'F',
        city: 'Boston',
        state: 'Massachusetts',
        county: 'Suffolk County',
        healthExpenses: '71670.81',
        healthcareCoverage: '1835037.84',
        income: '13375',
        allergiesCode: '- -',
        alleregiesDesc: '- -',
        allergiesReaction: '- -',
        iCondCode:
            '73595000, 424393004, 370247008, 361055000, 307731004, 422650009, 423315002, 706893006, 80583007, 10509002',
        aCondCode:
            '162864005, 237602007, 428251008, 157141000119108, 431856006, 431855005, 431857002, 15777000, 698306007, 433144002, 422650009, 423315002, 90781000119102, 80583007, 59621000, 74400008, 127013003, 271737000, 46177005, 19169002',
        iCondDesc:
            'Acute bronchitis(disorder), Severe anxiety(panic) (finding), Victim of intimate partner abuse(finding), Misuses drugs(finding), Limited social contact(finding), Social isolation(finding), Reports of violence in the environment(finding), Injury of tendon of the rotator cuff of shoulder, Facial laceration, Stress(finding)',
        aCondDesc:
            'Diabetes mellitus type 2 (disorder),Miscarriage in first trimester, Disorder of kidney due to diabetes mellitus(disorder), Severe anxiety(panic)(finding), Chronic kidney disease stage 4(disorder), Metabolic syndrome X(disorder), Proteinuria due to type 2 diabetes mellitus(disorder), History of appendectomy, End - stage renal disease(disorder), Body mass index 30 + - obesity(finding), Appendicitis, Chronic kidney disease stage 1(disorder), Chronic kidney disease stage 2(disorder), Anemia(disorder), Social isolation(finding), Chronic kidney disease stage 3(disorder), Prediabetes, Essential hypertension(disorder), Microalbuminuria due to type 2 diabetes mellitus(disorder), Limited social contact(finding), Awaiting transplantation of kidney(situation)',
        iMedCode: '314076, 310965, 106892, 313782, 205923, 308136',
        aMedCode: '310325, 308136, 106892, 314076',
        iMedDesc:
            'Acetaminophen 325 MG Oral Tablet, Ibuprofen 200 MG Oral Tablet, 1 ML Epoetin Alfa 4000 UNT/ML Injection [Epogen], insulin isophane human 70 UNT/ML / insulin regular human 30 UNT/ML Injectable Suspension [Humulin], lisinopril 10 MG Oral Tablet, amLODIPine 2.5 MG Oral Tablet',
        aMedDesc:
            'lisinopril 10 MG Oral Tablet, ferrous sulfate 325 MG Oral Tablet, insulin isophane human 70 UNT/ML / insulin regular human 30 UNT/ML Injectable Suspension [Humulin], amLODIPine 2.5 MG Oral Tablet',
        iMedReasonDesc:
            'Anemia (disorder), Acute bronchitis (disorder), Prediabetes, Essential hypertension (disorder)',
        aMedReasonDesc: 'Diabetes, Essential hypertension (disorder)',
        totalCost: '64593.18',
        procedureCode:
            '310417005, 715252007, 23426006, 710841007, 385763009, 265764009, 866148006, 288086009, 306316000, 763302001, 710824005, 428211000124100, 713106006, 430193006, 370789001, 171207006, 185087000, 315639002, 454711000124102, 73761001',
        procedureDesc:
            'Depression screening using Patient Health Questionnaire Two- Item score(procedure), Renal dialysis(procedure), Screening for domestic abuse(procedure), Assessment using Alcohol Use Disorders Identification Test - Consumption(procedure), Assessment of anxiety(procedure), Referral to transplant surgeon(procedure), Measurement of respiratory function (procedure), Depression screening using Patient Health Questionnaire Nine Item score(procedure), Colonoscopy, Development of individualized plan of care(procedure), Assessment of health and social care needs(procedure), Notifications(procedure), Hospice care(regime / therapy), Suture open wound, Depression screening(procedure), Medication Reconciliation(procedure), Certification procedure(procedure), Assessment of substance use(procedure), Screening for drug abuse(procedure), Initial patient assessment(procedure)',
        procedureReasonDesc:
            'Acute bronchitis(disorder), Chronic kidney disease stage 4(disorder), Awaiting transplantation of kidney(situation), Facial laceration, End - stage renal disease(disorder)',
    },
    {
        patientId: 'baea9f26-8eab-58e0-8e2f-a91b5dbcb481',
        dob: '27-02-1960',
        age: '73',
        firstName: 'Marty',
        lastName: 'Heathcote',
        marital: 'M',
        race: 'white',
        ethnicity: 'nonhispanic',
        gender: 'M',
        city: 'Springfield',
        state: 'Massachusetts',
        county: 'Hampden County',
        healthExpenses: '980745.42',
        healthcCoverage: '331056.97',
        income: '5030',
        allergiesCode: '- -',
        alleregiesDesc: '- -',
        allergiesReaction: '- -',
        iCondCode:
            '431857002, 73595000, 424393004, 444814009, 46177005, 698306007, 433144002, 422650009, 423315002, 431856006, 431855005, 706893006',
        aCondCode:
            '449868002, 162864005, 431857002, 10939881000119105, 274531002, 73595000, 59621000, 127013003, 224355006, 271737000, 73430006, 161665007, 414545008, 15777000, 237602007, 157141000119108, 90781000119102, 39898005',
        iCondDesc:
            'Chronic kidney disease stage 1(disorder), Victim of intimate partner abuse(finding), Chronic kidney disease stage 2(disorder), Chronic kidney disease stage 4(disorder), Viral sinusitis(disorder), Limited social contact(finding), Reports of violence in the environment(finding), Chronic kidney disease stage 3(disorder), Awaiting transplantation of kidney(situation), Social isolation(finding), End- stage renal disease(disorder), Stress(finding)',
        aCondDesc:
            'Prediabetes,Ischemic heart disease(disorder), Sleep disorder(disorder), Sleep apnea(disorder), Disorder of kidney due to diabetes mellitus(disorder), Served in armed forces(finding), Abnormal findings diagnostic imaging heart + coronary circulat(finding), Chronic kidney disease stage 4(disorder), Microalbuminuria due to type 2 diabetes mellitus(disorder), Anemia(disorder), History of renal transplant(situation), Stress(finding), Prediabetes, Body mass index 30 + - obesity(finding), Metabolic syndrome X(disorder), Smokes tobacco daily, Proteinuria due to type 2 diabetes mellitus(disorder), Unhealthy alcohol drinking behavior(finding), Essential hypertension(disorder)',
        iMedCode: '314076, 1664463, 106892, 205923, 108515',
        aMedCode:
            '198031, 314076, 866412, 705129, 106892, 1664463, 312961, 310325, 309362',
        iMedDesc:
            '1 ML tacrolimus 5 MG / ML Injection, insulin isophane  human 70 UNT / ML / insulin regular human 30 UNT / ML Injectable Suspension[Humulin], 1 ML Epoetin Alfa 4000 UNT / ML Injection[Epogen], lisinopril 10 MG Oral Tablet, 24 HR tacrolimus 1 MG Extended Release Oral Tablet',
        aMedDesc:
            'Clopidogrel 75 MG Oral Tablet, 24 HR metoprolol succinate 100 MG Extended Release Oral Tablet, Simvastatin 20 MG Oral Tablet, insulin isophane  human 70 UNT / ML / insulin  regular  human 30 UNT / ML Injectable Suspension[Humulin], Nitroglycerin 0.4 MG / ACTUAT Mucosal Spray, lisinopril 10 MG Oral Tablet, 24 HR tacrolimus 1 MG Extended Release Oral Tablet, ferrous sulfate 325 MG Oral Tablet, nicotine 7 MG / Day 24HR Transdermal System',
        iMedReasonDesc:
            'Anemia(disorder), History of renal transplant(situation), Awaiting transplantation of kidney(situation), Prediabetes, Essential hypertension(disorder)',
        aMedReasonDesc:
            'Prediabetes, Essential hypertension(disorder), History of renal transplant(situation)',
        totalCost: '448281.16',
        procedureCode:
            '428830000, 473231009, 410006001, 310417005, 103750000, 715252007, 710841007, 385763009, 265764009, 866148006, 306316000, 763302001, 710824005, 428211000124100, 713106006, 70536003, 430193006, 370789001, 171207006, 185087000, 315639002, 711446003, 454711000124102, 73761001',
        procedureDesc:
            'Digital examination of rectum, Pretransplant evaluation of kidney recipient(procedure), Transplantation of kidney regime(regime / therapy), Depression screening using Patient Health Questionnaire Two - Item score(procedure), Renal dialysis(procedure), Transplant of kidney(procedure), Screening for domestic abuse(procedure), Assessment using Alcohol Use Disorders Identification Test - Consumption(procedure), Assessment of anxiety(procedure), Referral to transplant surgeon(procedure), Depression screening using Patient Health Questionnaire Nine Item score(procedure), Colonoscopy, Development of individualized plan of care(procedure), Assessment of health and social care needs(procedure), Notifications(procedure), Hospice care(regime / therapy), Depression screening(procedure), Medication Reconciliation(procedure), Certification procedure(procedure), Assessment of substance use(procedure), Renal disorder medication review(procedure), Screening for drug abuse(procedure), Sleep apnea assessment(procedure), Initial patient assessment(procedure)',
        procedureReasonDesc:
            'Sleep disorder(disorder), Chronic kidney disease stage 4(disorder), History of renal transplant(situation), Awaiting transplantation of kidney(situation), End - stage renal disease(disorder)',
    },
    {
        patientId: '18461a0f-bef2-1a83-b336-6ba9fc8e5bed',
        dob: '30-05-1938',
        age: '85',
        firstName: 'Bill',
        lastName: 'McDermott',
        marital: 'M',
        race: 'white',
        ethnicity: 'nonhispanic',
        gender: 'M',
        city: 'Pittsfield',
        state: 'Massachusetts',
        county: 'Berkshire County',
        healthExpenses: '10230.92',
        healthcareCoverage: '340177',
        income: '9355',
        allergiesCode: '- -',
        alleregiesDesc: '- -',
        allergiesReaction: '- -',
        iCondCode:
            '195662009, 73595000, 424393004, 444814009, 423315002, 706893006',
        aCondCode:
            '162864005, 10939881000119105, 92691004, 274531002, 399261000, 271737000, 414545008, 224355006, 59621000, 7200002, 15777000, 126906006, 237602007, 449868002, 706893006',
        iCondDesc:
            'Acute viral pharyngitis(disorder), Victim of intimate partner abuse(finding), Viral sinusitis(disorder), Limited social contact(finding), Reports of violence in the environment(finding), Stress(finding)',
        aCondDesc:
            'Ischemic heart disease(disorder), Served in armed forces(finding), Carcinoma in situ of prostate(disorder), Abnormal findings diagnostic imaging heart+ coronary circulat(finding), Victim of intimate partner abuse(finding), Anemia(disorder), History of coronary artery bypass grafting(situation), Body mass index 30 + - obesity(finding), Smokes tobacco daily, Prediabetes, Metabolic syndrome X(disorder), Unhealthy alcohol drinking behavior(finding), Neoplasm of prostate, Essential hypertension(disorder), Alcoholism',
        iMedCode: '314076, 562251',
        aMedCode: '198031, 314076, 866412, 705129, 312961, 309362',
        iMedDesc:
            'Amoxicillin 250 MG / Clavulanate 125 MG Oral Tablet, lisinopril 10 MG Oral Tablet',
        aMedDesc:
            'Clopidogrel 75 MG Oral Tablet, 24 HR metoprolol succinate 100 MG Extended Release Oral Tablet, Simvastatin 20 MG Oral Tablet, Nitroglycerin 0.4 MG / ACTUAT Mucosal Spray, lisinopril 10 MG Oral Tablet, nicotine 7 MG / Day 24HR Transdermal System',
        iMedReasonDesc:
            'Viral sinusitis(disorder), Essential hypertension(disorder)',
        aMedReasonDesc: 'Essential hypertension(disorder)',
        totalCost: '388684.28',
        procedureCode:
            '710841007, 58000006, 710824005, 310417005, 385763009, 430193006, 315639002, 185087000, 866148006, 454711000124102, 762993000, 117015009, 370789001, 171207006, 73761001',
        procedureDesc:
            'Assessment using Morse Fall Scale(procedure), Depression screening(procedure), Development of individualized plan of care(procedure), Assessment of health and social care needs(procedure), Screening for domestic abuse(procedure), Notifications(procedure), Hospice care(regime / therapy), Depression screening using Patient Health Questionnaire Two - Item score(procedure), Assessment of anxiety(procedure), Patient discharge(procedure), Medication Reconciliation(procedure), Throat culture(procedure), Certification procedure(procedure), Colonoscopy, Initial patient assessment(procedure)',
        procedureReasonDesc: 'Acute viral pharyngitis(disorder)',
    },
    {
        patientId: 'f4fb6b8e-c053-51e7-84cc-a90734291153',
        dob: '19-04-1945',
        age: '78',
        firstName: 'Claris',
        lastName: 'Parisian',
        marital: 'M',
        race: 'white',
        ethnicity: 'nonhispanic',
        gender: 'F',
        city: 'Hull',
        state: 'Massachusetts',
        county: 'Plymouth County',
        healthExpenses: '21344.83',
        healthcareCoverage: '689346.4',
        income: '9050',
        allergiesCode: '- -',
        alleregiesDesc: '- -',
        allergiesReaction: '- -',
        iCondCode:
            '424393004, 73595000, 444814009, 422650009, 80583007, 10509002',
        aCondCode:
            '124171000119105, 40055000, 162864005, 274531002, 73595000, 82423001, 414545008, 55822004, 196416002, 5251000175109, 55680006, 15777000, 267020005, 19169002, 6525002',
        iCondDesc:
            'Acute bronchitis(disorder), Severe anxiety(panic) (finding), Viral sinusitis(disorder), Social isolation(finding), Reports of violence in the environment(finding), Stress(finding)',
        aCondDesc:
            'Miscarriage in first trimester, Ischemic heart disease(disorder), History of tubal ligation(situation), Dependent drug abuse(disorder), Hyperlipidemia, Abnormal findings diagnostic imaging heart + coronary circulat(finding), Received certificate of high school equivalency(finding), Impacted molars, Chronic sinusitis(disorder), Chronic pain, Body mass index 30 + - obesity(finding), Prediabetes, Chronic intractable migraine without aura, Stress(finding), Drug overdose',
        iMedCode: '313782, 314231',
        aMedCode: '866412, 314231, 705129, 312961, 309362',
        iMedDesc:
            'Simvastatin 10 MG Oral Tablet, Acetaminophen 325 MG Oral Tablet',
        aMedDesc:
            'Clopidogrel 75 MG Oral Tablet, 24 HR metoprolol succinate 100 MG Extended Release Oral Tablet, Simvastatin 20 MG Oral Tablet, Simvastatin 10 MG Oral Tablet, Nitroglycerin 0.4 MG / ACTUAT Mucosal Spray',
        iMedReasonDesc: 'Hyperlipidemia, Acute bronchitis(disorder)',
        aMedReasonDesc: 'Hyperlipidemia',
        totalCost: '145753.31',
        procedureCode:
            '713106006, 710841007, 23426006, 763302001, 171207006, 698314001, 736169004, 866148006, 415070008, 430193006, 33367005, 710824005, 715252007, 183519002, 454711000124102, 52052004, 428211000124100',
        procedureDesc:
            'Consultation for treatment(procedure), Depression screening(procedure), Assessment of substance use(procedure), Referral to cardiology service(procedure), Assessment of health and social care needs(procedure), Screening for drug abuse(procedure), Screening for domestic abuse(procedure), Assessment using Alcohol Use Disorders Identification Test - Consumption(procedure), Angiography of coronary artery(procedure), Percutaneous coronary intervention(procedure), Assessment of anxiety(procedure), Post anesthesia care management(procedure), Depression screening using Patient Health Questionnaire Two - Item score(procedure), Medication Reconciliation(procedure), Measurement of respiratory function (procedure), Depression screening using Patient Health Questionnaire Nine Item score(procedure), Rehabilitation therapy(regime / therapy)',
        procedureReasonDesc:
            'Ischemic heart disease(disorder), Abnormal findings diagnostic imaging heart + coronary circulat(finding), Dependent drug abuse(disorder), Acute bronchitis(disorder)',
    },
    {
        patientId: '3056737b-11a7-5aed-3acb-5638ce7ab407',
        dob: '19-10-2000',
        age: '23',
        firstName: 'Mark',
        lastName: 'Hill',
        marital: 'M',
        race: 'white',
        ethnicity: 'nonhispanic',
        gender: 'M',
        city: 'Forestdale',
        state: 'Massachusetts',
        county: 'Barnstable County',
        healthExpenses: '29373.29',
        healthcareCoverage: '48105.64',
        income: '38883',
        iCondCode:
            '73595000, 444814009, 62106007, 444448004, 422650009, 39848009, 10509002',
        aCondCode: '15777000, 162864005, 423315002',
        iCondDesc:
            'Whiplash injury to neck, Acute bronchitis(disorder), Viral sinusitis(disorder), Social isolation(finding), Concussion with no loss of consciousness, Injury of medial collateral ligament of knee, Stress(finding)',
        aCondDesc:
            'Limited social contact(finding), Prediabetes, Body mass index 30+ - obesity(finding)',
        iMedCode: '849574, 313782',
        aMedCode: '861467',
        iMedDesc:
            'Acetaminophen 325 MG Oral Tablet, Naproxen sodium 220 MG Oral Tablet',
        aMedDesc: 'Meperidine Hydrochloride 50 MG Oral Tablet',
        iMedReasonDesc: 'Acute bronchitis(disorder)',
        aMedReasonDesc: 'Acute bronchitis(disorder)',
        totalCost: '5518.74',
        procedureCode:
            '410401003, 74016001, 449381000124108, 868187001, 84478008, 699253003, 715252007, 386516004, 133899007, 710841007, 269911007, 311555007, 866148006, 225386006, 409023009, 710824005, 370995009, 428211000124100, 713106006, 430193006, 370789001, 171207006, 91251008, 315639002, 63332003, 454711000124102',
        procedureDesc:
            'Surgical manipulation of joint of knee, Nursing care/ supplementary surveillance(regime / therapy), Postoperative care(regime / therapy), Anticipatory guidance(procedure), Speech and language therapy regime(regime / therapy), Depression screening using Patient Health Questionnaire Two - Item score(procedure), Physical therapy procedure(regime / therapy), Health risks education(procedure), Screening for domestic abuse(procedure), Assessment of anxiety(procedure), Occupational therapy(regime / therapy), Depression screening using Patient Health Questionnaire Nine Item score(procedure), History AND physical examination(procedure), Professional / ancillary services care(regime / therapy), Development of individualized plan of care(procedure), Assessment of health and social care needs(procedure), Discharge from skilled nursing facility(procedure), Depression screening(procedure), Medication Reconciliation(procedure), Sputum examination(procedure), Knee X - ray, Assessment of substance use(procedure), Screening for drug abuse(procedure), Pre - discharge assessment(procedure), Initial patient assessment(procedure)',
        procedureReasonDesc:
            'Acute bronchitis(disorder), Risk activity involvement(finding), Injury of medial collateral ligament of knee',
    },
    {
        patientId: '40b8f37e-385d-857f-2db0-07c142a8e4a2',
        dob: '10/7/1990',
        age: '33',
        firstName: 'Jesse',
        lastName: 'Nikolaus',
        marital: 'M',
        race: 'asian',
        ethnicity: 'nonhispanic',
        gender: 'M',
        city: 'Dunstable',
        state: 'Massachusetts',
        county: 'Middlesex County',
        healthExpenses: '786062.72',
        healthcareCoverage: '5900.71',
        income: '5300',
        allergiesCode: '4.43E+14',
        alleregiesDesc: 'Tree nut(substance)',
        allergiesReaction: 'Anaphylaxis(disorder), Dyspnea(finding)',
        iCondCode:
            '10939881000119105, 73595000, 424393004, 62106007, 361055000, 444814009, 422650009, 423315002, 706893006, 10509002',
        aCondCode:
            '73595000, 431855005, 59621000, 127013003, 15777000, 431856006, 90781000119102, 706893006',
        iCondDesc:
            'Acute bronchitis(disorder), Victim of intimate partner abuse(finding), Misuses drugs(finding), Viral sinusitis(disorder), Social isolation(finding), Limited social contact(finding), Reports of violence in the environment(finding), Unhealthy alcohol drinking behavior(finding), Concussion with no loss of consciousness, Stress(finding)',
        aCondDesc:
            'Chronic kidney disease stage 1(disorder), Disorder of kidney due to diabetes mellitus(disorder), Victim of intimate partner abuse(finding), Chronic kidney disease stage 2(disorder), Microalbuminuria due to type 2 diabetes mellitus(disorder), Stress(finding), Prediabetes, Essential hypertension(disorder)',
        iMedCode: '314076, 1043400, 106892, 308136, 310798',
        aMedCode: '314076, 141918, 106892, 1870230, 308136, 310798',
        iMedDesc:
            'insulin isophane human 70 UNT / ML / insulin regular human 30 UNT / ML Injectable Suspension [Humulin], Hydrochlorothiazide 25 MG Oral Tablet, lisinopril 10 MG Oral Tablet, amLODIPine 2.5 MG Oral Tablet, Acetaminophen 21.7 MG / ML / Dextromethorphan Hydrobromide 1 MG / ML / doxylamine succinate 0.417 MG / ML Oral Solution',
        aMedDesc:
            'Terfenadine 60 MG Oral Tablet, insulin isophane human 70 UNT / ML / insulin regular human 30 UNT / ML Injectable Suspension [Humulin], Hydrochlorothiazide 25 MG Oral Tablet, lisinopril 10 MG Oral Tablet, amLODIPine 2.5 MG Oral Tablet, NDA020800 0.3 ML Epinephrine 1 MG / ML Auto- Injector',
        iMedReasonDesc:
            'Acute bronchitis(disorder), Prediabetes, Essential hypertension(disorder)',
        aMedReasonDesc: 'Prediabetes, Essential hypertension(disorder)',
        totalCost: '159401.65',
        procedureCode:
            '713106006, 710841007, 269911007, 763302001, 430193006, 866148006, 454711000124102, 710824005, 715252007, 171207006, 428211000124100',
        procedureDesc:
            'Assessment of substance use(procedure), Assessment of health and social care needs(procedure), Screening for drug abuse(procedure), Screening for domestic abuse(procedure), Assessment using Alcohol Use Disorders Identification Test - Consumption(procedure), Depression screening using Patient Health Questionnaire Two - Item score(procedure), Assessment of anxiety(procedure), Depression screening(procedure), Medication Reconciliation(procedure), Depression screening using Patient Health Questionnaire Nine Item score(procedure), Sputum examination(procedure)',
        procedureReasonDesc: 'Acute bronchitis(disorder)',
    },
];

export class ClinicalService extends BaseService<ClinicalModel> implements IService<ClinicalModel> {
    constructor() {
        super('Clinical', 'Clinical');
    }

    paginate = async (
        queryOptions?: Partial<QueryOptions<ClinicalModel>>,
    ): Promise<IPageResponse<ClinicalModel>> => {
        const pageData = {
            count: data.length,
            items: data as any,
        };

        return new Promise((res) => setTimeout(() => res(pageData), 500))
    };
}
