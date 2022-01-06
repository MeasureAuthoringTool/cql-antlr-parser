const testCql = `library TJCOverall_FHIR4 version '4.0.000'

using FHIR version '4.0.0'
// NOTE: BTR 2019-07-30: Updated version dependencies
include FHIRHelpers version '4.0.0' called FHIRHelpers
include MATGlobalCommonFunctions_FHIR4 version '4.0.000' called Global
include SupplementalDataElements_FHIR4 version '1.0.0' called SDE

codesystem "LOINC": 'urn:oid:2.16.840.1.113883.6.1'
codesystem "CPT:2018": 'urn:oid:2.16.840.1.113883.6.12'
codesystem "SNOMEDCT:2017-09": 'http://snomed.info/sct/731000124108'  version 'http://snomed.info/sct/731000124108/version/201709'

valueset "Acute Pharyngitis (1)": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.102.12.1011.1'
valueset "Acute Pharyngitis (2)": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.102.12.1011.2'
valueset "Encounter Inpatient SNOMEDCT Value Set": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.666.7.307|20160929'
valueset "Face-to-Face Interaction": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1004.101.12.1048|MU2%20Update@202016-04-01'

code "Venous foot pump, device (physical object)": '442023007' from "SNOMED-CT"
parameter "Measurement Period" Interval<DateTime>
  default Interval[@2019-01-01T00:00:00.0, @2020-01-01T00:00:00.0)
  
context Patient

define "SDE Ethnicity":
  SDE."SDE Ethnicity"

define "SDE Payer":
  SDE."SDE Payer"

define "SDE Race":
  SDE."SDE Race"

define "SDE Sex":
  SDE."SDE Sex"

   
define "Denominator Exclusion":
    TJC."Ischemic Stroke Encounters with Discharge Disposition"
        union TJC."Comfort Measures during Hospitalization"
      
    
define "Antithrombotic Not Given at Discharge":
    ["MedicationRequest": medication in "Antithrombotic Therapy"] NoAntithromboticDischarge
    where NoAntithromboticDischarge.doNotPerform is true
            and (NoAntithromboticDischarge.reasonCode in "Medical Reason"
                or NoAntithromboticDischarge.reasonCode in "Patient Refusal")
      //Note: expressed as an or with equivalence semantics pending resolution of potential CQL issue.
      and exists (NoAntithromboticDischarge.category C where FHIRHelpers.ToConcept(C) ~ Global."Community" or FHIRHelpers.ToConcept(C) ~ Global."Discharge")
      and NoAntithromboticDischarge.status = 'completed'
      and NoAntithromboticDischarge.intent = 'order'     
`;

const cqlWithSyntaxErrors = `library TJCOverall_FHIR4 version '4.0.000'

using FHIR version '4.0.0'
// NOTE: BTR 2019-07-30: Updated version dependencies
include FHIRHelpers version '4.0.0' called FHIRHelpers
includess MATGlobalCommonFunctions_FHIR4 version '4.0.000' called Global
include SupplementalDataElements_FHIR4 version '1.0.0' called SDE

codesystem "LOINC": 'urn:oid:2.16.840.1.113883.6.1'
codesystem "CPT:2018": 'urn:oid:2.16.840.1.113883.6.12'
codesystem "SNOMEDCT:2017-09": 'http://snomed.info/sct/731000124108'  version 'http://snomed.info/sct/731000124108/version/201709'

valueset "Acute Pharyngitis (1)": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.102.12.1011.1'
valuesetss "Acute Pharyngitis (2)": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.102.12.1011.2'
valueset "Encounter Inpatient SNOMEDCT Value Set": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.666.7.307|20160929'
valueset "Face-to-Face Interaction": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1004.101.12.1048|MU2%20Update@202016-04-01'

code "Venous foot pump, device (physical object)": '442023007' from "SNOMED-CT"
parameter  Interval<DateTime>
  default Interval[@2019-01-01T00:00:00.0, @2020-01-01T00:00:00.0)
 
context Patient

define "SDE Ethnicity":
  SDE."SDE Ethnicity"

define "SDE Payer":
  SDE."SDE Payer"

define "SDE Race":
  SDE."SDE Race"

define "SDE Sex":
  SDE."SDE Sex"       
`;

const cqlWithUsedParam = `
valueset "Statin Allergen": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1110.42' 
parameter "Measurement Period" Interval<DateTime>
define "Has Allergy to Statin":
  exists ([AllergyIntolerance: "Statin Allergen"] StatinAllergy
                where StatinAllergy.onset during "Measurement Period")
`;

const cqlWithUsedDefines = `
valueset "Dementia Medications": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.196.11.1517'
define "Initial Population":
  exists("Dementia Medications Dispensed")
define "Dementia Medications Dispensed":
  [MedicationDispense: "Dementia Medications"] MedicationDispense
              where MedicationDispense.status in { 'active', 'completed', 'on-hold' }
`;

const cqlWithUsedCodeAndCodeSystem = `
codesystem "ICD10CM": 'http://hl7.org/fhir/sid/icd-10-cm'
code "Encounter for palliative care": 'Z51.5' from "ICD10CM" display 'Encounter for palliative care'
define "Dementia Medications Dispensed":
  [MedicationDispense: "Encounter for palliative care"] MedicationDispense
              where MedicationDispense.status in { 'active', 'completed', 'on-hold' }

define "Initial Population":
  exists("Dementia Medications Dispensed")
`;

const cqlWithUsedContext = `
valueset "Dementia Medications": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.196.11.1517'
context Patient
define "Dementia Medications Dispensed":
  [MedicationDispense: "Dementia Medications"] MedicationDispense
                where MedicationDispense.status in { 'active', 'completed', 'on-hold' } 
                and Patient.gender in { 'male', 'female', 'unknown' }
`;

export {
  testCql,
  cqlWithSyntaxErrors,
  cqlWithUsedParam,
  cqlWithUsedDefines,
  cqlWithUsedCodeAndCodeSystem,
  cqlWithUsedContext
} ;
