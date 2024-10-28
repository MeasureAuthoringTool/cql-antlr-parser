export const commentTestCql = `cql test is library T1 version '0.0.000'
// ignore
using QDM version '5.6'

// ignore
codesystem "SNOMEDCT": 'urn:oid:2.16.840.1.113883.6.96'
valueset "Active Bleeding": 'urn:oid:2.16.840.1.113762.1.4.1206.28' 

// ignore
parameter "Measurement Period" Interval<DateTime>

context Patient
// outside 
define "SDE Ethnicity": 
  //inside
  ["Patient Characteristic Ethnicity": "Ethnicity"]

 
define "SDE Payer": 
//inside
  ["Patient Characteristic Payer": "Payer Type"]
  
  
// define "SDE Payer1":
// //inside
//   ["Patient Characteristic Payer": "Payer Type"]

// SDE Race
define "SDE Race":
/* ignore   */
  ["Patient Characteristic Race": "Race"]

/* SDE Sex */

define "SDE Sex":
  ["Patient Characteristic Sex": "ONC Administrative Sex"]

/*
asdfasdf
*/
define "Initial Population":
  "Qualifying Encounters"

define "Qualifying Encounters":
  ( ["Encounter, Performed": "Encounter Inpatient"]
    union ["Encounter, Performed": "Emergency Department Visit"]
    union ["Encounter, Performed": "Acute Inpatient"]
    union ["Encounter, Performed": "Active Bleeding"]
    union ["Encounter, Performed": "Observation Services"] ) Encounter
    where Encounter.relevantPeriod ends during "Measurement Period"

define "Denominator":
  ["Encounter, Performed": "Acute Inpatient"] AcuteInpatient
    where AcuteInpatient.lengthOfStay > 10 days

define "Numerator":
  ["Encounter, Performed": "Active Bleeding"] ActiveBleeding
    where ActiveBleeding.relevantPeriod overlaps day of "Measurement Period"
    
    /*
        outside of define
    */
define "Denominator 2":
  ["Encounter, Performed": "Encounter Inpatient"] EncounterInpatient
    where EncounterInpatient.lengthOfStay > 15 days

// outside of define
define "Numerator 2":
  ["Encounter, Performed": "Emergency Department Visit"]
  // inside of definition to ignore
  EmergencyDepartmentVisit
    where EmergencyDepartmentVisit.lengthOfStay > 15 days
    
/*
multiline comment outside of a funciton with multiple
rows
*/

define function "Denominator Observation"(Encounter "Encounter, Performed" ):
  // inside of definition to ignore
  duration in hours of Encounter.relevantPeriod

// comment outside of function
define function "Numerator Observation"(Encounter "Encounter, Performed" ):
  duration in hours of Encounter.relevantPeriod
`