import type { QuestionImage } from "@/types";

export interface Question {
  id: string;
  stem: string;
  options: string[];
  correct: number; // 0-indexed
  explanation: string;
  tags?: string[];
  reference?: string; // e.g. "NZ Formulary 2026", "ANZICS 2024"
  image?: QuestionImage;
}

export const questionBank: Record<string, Question[]> = {
  cardiology: [
    {
      id: "cardio-001",
      stem: "A 58-year-old presents with crushing chest pain, diaphoresis, and ST elevation in leads II, III and aVF. BP 88/60 mmHg. Which vessel is most likely occluded?",
      image: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Inferior_STEMI.png/1200px-Inferior_STEMI.png",
        alt: "12-lead ECG showing inferior STEMI with ST elevation in leads II, III and aVF",
        caption: "12-lead ECG — identify the culprit vessel. (CC BY-SA, Wikimedia Commons)",
      },
      options: ["Left anterior descending (LAD)", "Right coronary artery (RCA)", "Left circumflex (LCx)", "Left main coronary artery (LMCA)"],
      correct: 1,
      explanation: "Inferior STEMI (ST elevation II, III, aVF) with haemodynamic instability is most consistent with RCA occlusion. The RCA supplies the SA and AV nodes in ~60% and ~85% of patients respectively, explaining bradycardia and hypotension. Always obtain right-sided leads (V3R, V4R) to detect RV infarction before administering nitrates — RV infarction is a contraindication to nitrates and diuretics.",
      tags: ["STEMI", "RCA", "ECG"],
      reference: "ACC/AHA STEMI Guidelines 2024; ANZSCTS",
    },
    {
      id: "cardio-002",
      stem: "A 72-year-old on warfarin presents with AF and fast ventricular rate (142 bpm), BP 105/70, no chest pain. INR 1.8. What is the most appropriate initial rate control agent in this NZ ED context?",
      options: ["IV diltiazem 0.25 mg/kg over 2 min", "IV digoxin 500 mcg over 30 min", "IV metoprolol 2.5 mg boluses", "Oral bisoprolol 5 mg stat"],
      correct: 0,
      explanation: "IV diltiazem is the preferred rate control agent for haemodynamically stable AF with fast ventricular rate in the NZ ED — it acts rapidly, is well tolerated, and is stocked in NZ formulary. Beta-blockers (metoprolol IV) are an alternative but cause more negative inotropy. Digoxin has a slow onset (4-6 hours to peak effect) making it unsuitable for acute rate control. Oral bisoprolol is appropriate for non-urgent outpatient rate control. Note: if LV function is unknown, echocardiography prior to calcium channel blocker use is prudent.",
      tags: ["AF", "Rate control", "NZ Formulary"],
      reference: "NZ Formulary 2026; CSANZ AF Guidelines",
    },
    {
      id: "cardio-003",
      stem: "A 45-year-old woman presents with palpitations. ECG shows a regular narrow complex tachycardia at 180 bpm with no visible P waves. Vagal manoeuvres fail. What is the drug of first choice?",
      options: ["IV adenosine 6 mg rapid push", "IV verapamil 5 mg over 2 min", "IV metoprolol 2.5 mg", "Synchronised DC cardioversion"],
      correct: 0,
      explanation: "SVT (most likely AVNRT or AVRT) unresponsive to vagal manoeuvres: IV adenosine 6 mg rapid IV push followed by 20 mL saline flush is first-line. If unsuccessful, repeat at 12 mg. Adenosine has a half-life of <10 seconds — the rapid push technique is essential. Verapamil is an alternative but should be avoided if the patient is on beta-blockers (risk of profound bradycardia/asystole). DC cardioversion is reserved for haemodynamic instability or failed pharmacotherapy.",
      tags: ["SVT", "AVNRT", "Adenosine"],
      reference: "NZ Formulary 2026; AHA 2015 SVT Guidelines",
    },
    {
      id: "cardio-004",
      stem: "Which of the following ECG findings is most specific for hyperkalaemia causing conduction abnormality rather than STEMI?",
      options: ["Peaked T waves in V1-V4", "Prolonged PR interval with widened QRS and sine wave morphology", "New LBBB with chest pain", "ST elevation in aVR with diffuse ST depression"],
      correct: 1,
      explanation: "Progressive hyperkalaemia produces a characteristic sequence: peaked T waves → prolonged PR → widened QRS → sine wave pattern → VF/asystole. The sine wave (fusion of QRS and T wave into smooth undulating pattern) with widened QRS is highly specific for severe hyperkalaemia and mandates immediate treatment (IV calcium gluconate, then salbutamol/insulin-dextrose/resonium). Peaked T waves alone are non-specific. The other options suggest STEMI or pericarditis patterns.",
      tags: ["Hyperkalaemia", "ECG", "Clinical Chemistry"],
      reference: "ACEM 2026 Curriculum 2.3, 13.1",
    },
    {
      id: "cardio-005",
      stem: "A 55-year-old presents 3 hours after onset of typical ischaemic chest pain. ECG shows posterior STEMI changes. Which ECG leads should you perform next?",
      options: ["Right-sided leads V3R–V6R", "Posterior leads V7–V9", "Repeat 12-lead in 30 minutes", "Immediate echocardiography"],
      correct: 1,
      explanation: "Posterior STEMI is identified by reciprocal changes in V1-V3 (horizontal ST depression, tall broad R waves, upright T waves). Definitive diagnosis requires posterior leads V7, V8, V9 — placed at the left posterior chest. ST elevation ≥0.5 mm in V7-V9 confirms posterior STEMI and mandates PPCI activation. Right-sided leads are indicated when inferior STEMI is present (to assess RV involvement), not for isolated posterior changes.",
      tags: ["STEMI", "Posterior MI", "ECG Leads"],
      reference: "ESC STEMI Guidelines 2023; ANZSCTS",
    },
  ],

  toxicology: [
    {
      id: "tox-001",
      stem: "A 28-year-old presents 2 hours after ingesting 80 paracetamol tablets (400 mg/kg). They are well. Paracetamol level at 4 hours is above the treatment line. What is the correct initial treatment in NZ?",
      options: ["Activated charcoal 1 g/kg PO, then observe", "IV N-acetylcysteine (NAC) via Prescott regimen", "Oral methionine 2.5 g", "IV N-acetylcysteine (NAC) via shortened 2-bag regimen"],
      correct: 3,
      explanation: "NZ and Australia now use the 2-bag shortened NAC regimen (replacing the original Prescott 3-bag 21-hour regimen): Bag 1: NAC 200 mg/kg in 200 mL glucose 5% over 4 hours; Bag 2: NAC 100 mg/kg in 1000 mL glucose 5% over 16 hours. This 20-hour protocol is equally effective with fewer anaphylactoid reactions than the original regimen. Activated charcoal may be given within 1-2 hours if presentation is early and airway is safe, but NAC is the primary treatment. Oral methionine is not available or used in NZ.",
      tags: ["Paracetamol overdose", "NAC", "NZ Protocol"],
      reference: "NZ Poisons Centre Protocol 2025; NZ Formulary",
    },
    {
      id: "tox-002",
      stem: "A 35-year-old presents after TCA overdose. QRS is 126 ms, BP 85/50 mmHg. pH is 7.28. What is the immediate treatment priority?",
      options: ["IV sodium bicarbonate 1-2 mmol/kg bolus", "IV lipid emulsion 20% 1.5 mL/kg", "Activated charcoal 1 g/kg via NGT", "IV magnesium sulfate 2 g over 15 min"],
      correct: 0,
      explanation: "TCA toxicity causes sodium channel blockade leading to QRS widening, hypotension, and ventricular arrhythmias. IV sodium bicarbonate 1-2 mmol/kg (50-100 mL of 8.4% NaHCO3) is the immediate treatment — it works via two mechanisms: (1) alkalinisation reverses sodium channel blockade and (2) sodium loading overcomes the blockade. Target serum pH 7.45-7.55. QRS >100 ms or haemodynamic compromise are the key indications. Repeat boluses every 5 minutes until QRS narrows. Lipid emulsion is used for lipophilic drug toxicity (local anaesthetics, other lipophilic TCAs unresponsive to bicarbonate).",
      tags: ["TCA", "Sodium bicarbonate", "QRS widening"],
      reference: "NZ Poisons Centre; Clinical Toxicology ACEM 2026",
    },
    {
      id: "tox-003",
      stem: "In NZ, which spider envenomation can cause a clinical syndrome requiring antivenom, and what is the antivenom source?",
      options: ["White-tail spider — NZ-produced antivenom available", "Katipo spider — Australian redback antivenom is used", "Tunnelweb spider — specific NZ antivenom is stocked", "None — no clinically significant spider envenomations occur in NZ"],
      correct: 1,
      explanation: "The katipo (Latrodectus katipo) is NZ's only venomous spider of clinical significance. It causes latrodectism: local pain, diaphoresis, autonomic instability, and 'redback syndrome.' Because katipo is a Latrodectus species (related to Australian redback), Australian Redback Spider Antivenom (CSL) is effective and is the antivenom used in NZ — sourced through NZ Poisons Centre coordination (0800 764 766). White-tail spider bites cause local reactions but do not cause necrosis or systemic toxicity despite historical claims. Tunnelweb spiders are not found in NZ.",
      tags: ["Envenomation", "Katipo", "NZ-specific"],
      reference: "NZ Poisons Centre; Environmental Emergencies ACEM 2026",
    },
    {
      id: "tox-004",
      stem: "A 22-year-old presents obtunded after recreational GHB use at a party. GCS 9. What is the most dangerous aspect of management?",
      options: ["Administering flumazenil empirically", "RSI without adequate preoxygenation", "Delayed awakening causing unnecessary intubation", "Administering high-flow oxygen causing respiratory depression"],
      correct: 2,
      explanation: "GHB causes rapid, profound CNS and respiratory depression with an equally rapid and unpredictable recovery — often within 1-6 hours. The key management risk is premature intubation: patients who appear to need RSI may recover spontaneously before intubation is complete, and post-intubation they may wake agitated with an ETT in situ. Recommended approach: continuous 1:1 nursing, positioning, BVM readiness, reassess every 15-30 minutes. Flumazenil is not indicated (GHB is not a benzodiazepine), and high-flow O2 does not cause respiratory depression in this context.",
      tags: ["GHB", "Sedation", "Recreational drugs"],
      reference: "Toxicology ACEM 2026; NZDF Drug Trends",
    },
  ],

  paediatrics: [
    {
      id: "paeds-001",
      stem: "A 9-month-old presents with 3 days of wheeze and respiratory distress. SpO2 91% on air, RR 62, mild subcostal recession. This is the first episode. Most likely diagnosis and first-line treatment?",
      options: ["Asthma — salbutamol nebuliser", "Bronchiolitis — supportive care and high-flow nasal cannula if needed", "Croup — nebulised adrenaline", "Pneumonia — oral amoxicillin"],
      correct: 1,
      explanation: "First episode of wheeze in a child <12 months with upper respiratory tract infection prodrome is bronchiolitis (most commonly RSV) until proven otherwise. Salbutamol has no proven benefit in bronchiolitis — routine use is not recommended (PREDICT network evidence, NZ Paediatric Society Guidelines). Management is supportive: positioning, nasal suctioning, adequate hydration. High-flow nasal cannula (HFNC) oxygen is indicated for SpO2 <92% or significant work of breathing. Admission criteria include SpO2 <92%, poor feeding, or significant respiratory distress.",
      tags: ["Bronchiolitis", "RSV", "Paediatric respiratory"],
      reference: "NZ Paediatric Society Bronchiolitis Guidelines 2024; PREDICT",
    },
    {
      id: "paeds-002",
      stem: "A 3-year-old has a 5-minute generalised tonic-clonic seizure that self-terminates. Temperature is 39.2°C. This is the first febrile seizure. Parents ask if a lumbar puncture is needed. What is the correct answer?",
      options: ["Yes, all children with first febrile seizure need LP", "No, simple febrile seizures do not routinely require LP — clinical assessment guides decision", "Yes, children under 18 months always need LP", "No, LP is only needed if the EEG is abnormal"],
      correct: 1,
      explanation: "Simple febrile seizures (generalised, lasting <15 minutes, single episode in 24 hours, age 6 months–5 years) do not routinely require LP. LP should be considered if: meningism signs present, child is <12-18 months (signs of meningitis may be subtle), prolonged or focal seizure, failure to return to baseline, or clinician's suspicion. The 2011 AAP guideline no longer recommends routine LP for simple febrile seizures in vaccinated children. In NZ, consider immunisation status (Hib, pneumococcal, meningococcal) when assessing risk.",
      tags: ["Febrile seizure", "Lumbar puncture", "Paediatric neurology"],
      reference: "AAP Febrile Seizure Guidelines 2011; NZ Immunisation Schedule 2026",
    },
    {
      id: "paeds-003",
      stem: "A 4-year-old presents with sudden onset stridor, drooling, and sitting in a tripod position. Temperature 39.8°C. The child looks toxic. What should you NOT do?",
      options: ["Call for senior help including anaesthetics immediately", "Allow the child to remain in the position of comfort with the parent", "Lay the child supine to examine the oropharynx", "Prepare for emergency airway management"],
      correct: 2,
      explanation: "This clinical picture is epiglottitis until proven otherwise (even in vaccinated children — cases still occur with non-typeable H. influenzae and other organisms). Do NOT disturb the child: no oropharyngeal examination, no blood draws, no IV access attempts until the airway is secured. The child should remain upright in the position of comfort, with a parent present. Senior airway expertise (anaesthetics, ENT, paediatrics) must be assembled immediately. Examination and any intervention should occur in theatre with equipment for emergency surgical airway available.",
      tags: ["Epiglottitis", "Airway", "Paediatric emergency"],
      reference: "ACEM Airway Guidelines; Paediatrics ACEM 2026",
    },
  ],

  neuro: [
    {
      id: "neuro-001",
      stem: "A 68-year-old presents with sudden onset severe headache ('worst of my life'), now resolved. CT head is normal. What is the next investigation?",
      options: ["MRI brain with contrast", "Lumbar puncture for xanthochromia (after 12 hours from onset)", "EEG", "CT angiography immediately without LP"],
      correct: 1,
      explanation: "A sentinel headache (thunderclap headache) with a normal CT requires lumbar puncture to exclude subarachnoid haemorrhage. LP should be performed at least 12 hours after headache onset — this allows time for RBC lysis and xanthochromia formation (the yellow discolouration of CSF due to oxyhaemoglobin/bilirubin). Xanthochromia detected by spectrophotometry is more sensitive than visual inspection. CT-A without LP risks missing aneurysmal SAH if CT was normal. A negative LP at 12 hours with no xanthochromia has very high NPV for SAH.",
      tags: ["SAH", "Thunderclap headache", "LP"],
      reference: "ACEM SAH Guidelines; Perry 2011 Ottawa SAH Rule",
    },
    {
      id: "neuro-002",
      stem: "A 74-year-old with AF (on warfarin, INR 2.4) presents with acute anterior circulation stroke. Symptom onset 90 minutes ago. NIHSS 14. What is the most appropriate management?",
      options: ["IV alteplase 0.9 mg/kg immediately", "Urgent CT angiography then endovascular thrombectomy if eligible", "Reverse anticoagulation with vitamin K and FFP, then reassess", "Withhold thrombolysis; monitor for 24 hours"],
      correct: 1,
      explanation: "In a patient with a therapeutic INR ≥1.7 (anticoagulated), IV thrombolysis (alteplase) is contraindicated. However, endovascular thrombectomy (EVT) is NOT contraindicated by anticoagulation if there is a large vessel occlusion. CT angiography to identify LVO should be performed immediately. If LVO is confirmed, EVT is the treatment of choice — it has been shown to be effective up to 24 hours from onset in selected patients (DAWN and DEFUSE-3 trials). NIHSS 14 reflects a significant deficit warranting aggressive intervention.",
      tags: ["Stroke", "EVT", "Anticoagulation", "Thrombolysis"],
      reference: "AHA/ASA Stroke Guidelines 2024; NZ Stroke Foundation",
    },
    {
      id: "neuro-003",
      stem: "A 32-year-old presents in status epilepticus (continuous seizure for 10 minutes). IV access established. First-line treatment?",
      options: ["IV lorazepam 0.1 mg/kg", "IV diazepam 0.15 mg/kg", "IV levetiracetam 60 mg/kg over 10 min", "IV phenytoin 20 mg/kg over 20 min"],
      correct: 0,
      explanation: "IV lorazepam (0.1 mg/kg, max 4 mg) is first-line for established status epilepticus when IV access is available — it has a longer duration of action than diazepam and superior efficacy in head-to-head trials (RAMPART, ESETT). If IV access is not available: midazolam IM (0.2 mg/kg) or intranasal midazolam (0.2 mg/kg). Diazepam IV is an alternative but has shorter CNS duration. Levetiracetam and phenytoin are second-line agents if benzodiazepines fail. Note: in NZ, lorazepam must be stored refrigerated and may not always be immediately available — know your department's stock.",
      tags: ["Status epilepticus", "Lorazepam", "Benzodiazepines"],
      reference: "Epilepsy Society; NZ Formulary; ESETT Trial 2019",
    },
  ],

  "trauma-cap": [
    {
      id: "trauma-001",
      stem: "A 25-year-old motorcyclist with major trauma arrives with BP 80/50, HR 135. Two large bore IVs established. FAST exam shows free fluid in the abdomen. What is the correct resuscitation strategy?",
      options: ["2L crystalloid bolus then reassess", "Permissive hypotension with 1:1:1 blood product ratio targeting SBP 80-90 mmHg", "Immediate vasopressors to maintain MAP >65 mmHg", "Colloid bolus 500 mL then type and screen"],
      correct: 1,
      explanation: "Haemorrhagic shock with intraperitoneal haemorrhage requires damage control resuscitation (DCR): (1) Permissive hypotension: target SBP 80-90 mmHg (or MAP 50-65 mmHg) until haemorrhage control — higher pressures disrupt clot formation. (2) Balanced haemostatic resuscitation: 1:1:1 ratio (RBC:FFP:platelets) or whole blood where available. (3) Minimise crystalloid — large volume crystalloid worsens coagulopathy, acidosis, and hypothermia. (4) Activate MTP early. NZ trauma centres (Christchurch, Auckland City) have established MTP protocols. Vasopressors do not address the underlying haemorrhage and should be avoided as primary resuscitation.",
      tags: ["Haemorrhagic shock", "DCR", "MTP", "Trauma"],
      reference: "ATLS 11th Edition; ACEM Trauma Guidelines; CDHB MTP Protocol",
    },
    {
      id: "trauma-002",
      stem: "Tension pneumothorax is suspected in a trauma patient. What is the immediate treatment in a pre-hospital or ED setting without ultrasound?",
      options: ["Chest X-ray to confirm before intervention", "Needle decompression at 2nd intercostal space, mid-clavicular line", "Intercostal catheter insertion at 5th ICS, anterior axillary line", "Bilateral finger thoracostomies"],
      correct: 1,
      explanation: "Tension pneumothorax is a clinical diagnosis — do not delay for imaging. Immediate needle decompression at the 2nd ICS, mid-clavicular line (MCL) using a 14G cannula (≥3.25 cm length to account for chest wall depth in trauma patients). If MCL fails, the 4th/5th ICS anterior axillary line (AAL) is an alternative with higher success rates in recent evidence. Definitive treatment is an intercostal drain at the 5th ICS, AAL. In peri-arrest or arrested trauma, bilateral finger thoracostomies are performed as part of the traumatic arrest protocol.",
      tags: ["Tension pneumothorax", "Needle decompression", "Trauma"],
      reference: "ATLS 11th Edition; TCCC; ACEM Trauma 2026",
    },
  ],

  anaesthesia: [
    {
      id: "airway-001",
      stem: "During RSI for a 90 kg patient, succinylcholine 1.5 mg/kg is given. The patient has a family history of malignant hyperthermia. What is the most appropriate action?",
      options: ["Proceed — family history alone does not contraindicate succinylcholine", "Abandon RSI — give oxygen by BVM until spontaneous breathing resumes", "Immediate administration of dantrolene 2.5 mg/kg IV", "Switch to rocuronium 1.2 mg/kg and use TIVA"],
      correct: 2,
      explanation: "Family history of malignant hyperthermia (MH) is an absolute contraindication to succinylcholine (and all volatile anaesthetic agents). If succinylcholine has already been given and MH is triggered: immediate dantrolene 2.5 mg/kg IV (repeat to total 10 mg/kg if needed), cease triggering agents, active cooling, bicarbonate for acidosis, treat hyperkalaemia. If the drug has been given but no MH signs yet, dantrolene should still be considered prophylactically. In an elective RSI, rocuronium 1.2 mg/kg with sugammadex reversal available is the MH-safe alternative.",
      tags: ["Malignant hyperthermia", "RSI", "Succinylcholine", "Dantrolene"],
      reference: "ANZCA Guidelines MH; NZ Formulary; Airway ACEM 2026",
    },
    {
      id: "airway-002",
      stem: "A 55-year-old presents in respiratory failure (SpO2 82%, GCS 13). Anticipated difficult airway (Mallampati III, short neck). Which RSI strategy is most appropriate?",
      options: ["Standard RSI with video laryngoscopy as primary device", "Awake fibre-optic intubation", "Ketamine dissociative dose then direct laryngoscopy", "High-flow nasal oxygen (HFNO) for apnoeic oxygenation, video laryngoscope as primary, surgical airway kit open on table"],
      correct: 3,
      explanation: "A 'can't intubate, can't oxygenate' (CICO) scenario is the feared outcome in an anticipated difficult airway. Best practice: (1) HFNO at 60 L/min for apnoeic oxygenation during intubation attempt — extends safe apnoea time from ~3 to ~8+ minutes. (2) Video laryngoscopy as the primary device (not as rescue) in known/anticipated difficult airway. (3) Surgical airway kit open and skilled operator scrubbed and ready before induction. (4) Team briefing including 'can't intubate' drill. Awake fibre-optic is preferred if time allows in an anticipated difficult airway with a cooperative patient, but this patient has low SpO2 and reduced GCS, limiting that option.",
      tags: ["Difficult airway", "RSI", "HFNO", "CICO"],
      reference: "DAS 2015 Guidelines; ANZCA Difficult Airway Guidelines; ACEM Airway 2026",
    },
  ],
  "renal-resp": [
    {
      id: "renalresp-001",
      stem: "A 70-year-old COPD patient presents with acute exacerbation, RR 32, SpO2 84% on air. ABG on room air: pH 7.22, pCO2 78 mmHg, pO2 48 mmHg, HCO3 31. What is the appropriate oxygen target and ventilatory strategy?",
      options: [
        "High-flow O2 15L via non-rebreather mask, titrate SpO2 to 98-100%",
        "Controlled O2 titrated to SpO2 88-92%, initiate NIV (BiPAP) promptly",
        "Nasal cannula 2L/min, prepare for immediate RSI",
        "Venturi mask 28%, obtain CXR before starting NIV",
      ],
      correct: 1,
      explanation: "Hypercapnic respiratory failure in COPD: target SpO2 88-92% (not higher — hyperoxia suppresses hypoxic drive and causes Haldane effect worsening hypercapnia). This ABG shows acute-on-chronic type 2 respiratory failure (pH 7.22 is acidotic despite elevated HCO3 compensation). NIV (BiPAP) is the first-line intervention — it reduces intubation rates, ICU admission, and mortality in COPD exacerbations. Typical starting settings: IPAP 12-16 cmH2O, EPAP 4-6 cmH2O. Do not delay NIV for CXR in this severity. RSI is a rescue strategy if NIV fails.",
      tags: ["COPD", "NIV", "BiPAP", "Hypercapnia", "Oxygen targets"],
      reference: "BTS NIV Guidelines 2023; GOLD COPD Report 2024; ACEM Renal/Resp 2026",
    },
    {
      id: "renalresp-002",
      stem: "A 55-year-old dialysis-dependent patient presents with weakness and palpitations. ECG shows peaked T waves and widened QRS (126 ms). Potassium returns at 7.8 mmol/L. What is the correct sequence of management?",
      options: [
        "Insulin 10 units IV + glucose 50% 50mL → salbutamol 10mg nebulised → resonium",
        "IV calcium gluconate 10% 10mL over 2 min → insulin/glucose → salbutamol neb → urgent dialysis",
        "Sodium bicarbonate 100mL 8.4% → calcium gluconate → resonium → dialysis",
        "Urgent dialysis immediately; no medical therapy until access obtained",
      ],
      correct: 1,
      explanation: "Severe hyperkalaemia with ECG changes (widened QRS, peaked T waves) is a cardiac emergency. Priority sequence: (1) IV calcium gluconate 10% 10 mL over 2 min — membrane stabilisation, effect in 1-3 min, lasts 30-60 min. Repeat if QRS remains wide. (2) Insulin 10 units IV + 50% glucose 50 mL — shifts K into cells over 15-30 min. (3) Salbutamol 10-20 mg nebulised — additional cellular shift (additive with insulin). (4) Sodium bicarbonate if metabolic acidosis present. (5) Urgent dialysis in dialysis-dependent patients is definitive — do not wait for this to start membrane stabilisation.",
      tags: ["Hyperkalaemia", "Dialysis", "ECG", "Calcium gluconate"],
      reference: "NZ Formulary; ACEM Clinical Chem/Renal 2026; Renal Association UK 2020",
    },
    {
      id: "renalresp-003",
      stem: "Which of the following is the most appropriate initial assessment tool to diagnose and stage community-acquired pneumonia severity in adults presenting to an NZ ED?",
      options: ["CURB-65 score", "PSI/PORT score", "SMART-COP score", "CRB-65 score (GP version)"],
      correct: 0,
      explanation: "CURB-65 (Confusion, Urea >7 mmol/L, RR ≥30, BP systolic <90 or diastolic ≤60, Age ≥65) is the standard tool recommended in NZ and Australian EDs for CAP severity stratification. Score 0-1: low risk, consider home treatment. Score 2: moderate — consider short admission or close follow-up. Score 3-5: high risk, hospital admission, ICU if ≥4. PSI/PORT is more complex and better validated but less practical in an acute ED setting. SMART-COP is used in some Australasian centres and predicts need for intensive respiratory or vasopressor support.",
      tags: ["Pneumonia", "CURB-65", "Risk stratification"],
      reference: "Thoracic Society of Australia and NZ (TSANZ) CAP Guidelines; BTS 2009",
    },
  ],

  "clinical-chem": [
    {
      id: "clinichem-001",
      stem: "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, and deep sighing respirations. BSL 28 mmol/L, ketones 4.2 mmol/L (blood). ABG: pH 7.08, HCO3 8, pCO2 18 mmHg, Na 134, K 3.2. What is the initial priority?",
      options: [
        "IV insulin infusion 0.1 units/kg/hr immediately",
        "IV fluid resuscitation with 0.9% NaCl 1L over 1 hour, potassium replacement, then insulin",
        "Sodium bicarbonate 100 mL 8.4% to correct acidosis before insulin",
        "IV insulin bolus 0.1 units/kg then infusion",
      ],
      correct: 1,
      explanation: "DKA management priority: (1) FLUID FIRST — 0.9% NaCl 1L over 1 hour (or faster if haemodynamically compromised). Dehydration is the primary insult. (2) POTASSIUM — K 3.2 is already low; insulin will drop it further. Replace to ≥3.5 mmol/L before starting insulin, or add 40 mmol/L to concurrent fluids. (3) INSULIN — 0.1 units/kg/hr infusion (no bolus — increases risk of cerebral oedema, especially in children). Sodium bicarbonate is not recommended in DKA (pH >6.9) — it worsens intracellular acidosis and hypokalaemia. NZ uses the Joint British Diabetes Societies (JBDS) 2023 DKA protocol.",
      tags: ["DKA", "Insulin", "Potassium", "Fluid resuscitation"],
      reference: "JBDS DKA Guidelines 2023; NZ Formulary; ACEM Endocrine/Clinical Chem 2026",
    },
    {
      id: "clinichem-002",
      stem: "A 65-year-old on thiazide diuretics presents confused with Na 116 mmol/L. She is haemodynamically stable. Urine osmolality 450 mOsm/kg, plasma osmolality 245 mOsm/kg. What is the most likely diagnosis and target correction rate?",
      options: [
        "SIADH — correct rapidly by 12 mmol/L in the first hour",
        "SIADH — correct by no more than 10 mmol/L in 24 hours (8-10 mmol/L/day target)",
        "Hypertonic hyponatraemia — give 3% NaCl immediately",
        "Psychogenic polydipsia — fluid restrict to 1L/day",
      ],
      correct: 1,
      explanation: "Hypo-osmolar hyponatraemia with concentrated urine (SIADH pattern) + thiazide use: most likely thiazide-induced hyponatraemia (similar mechanism to SIADH — water retention). Target correction: 8-10 mmol/L per 24 hours, maximum 10 mmol/L in 24 hours. Overcorrection risks osmotic demyelination syndrome (ODS/central pontine myelinolysis) — an irreversible, catastrophic neurological injury. In chronic (>48 hour) hyponatraemia, the brain has adapted and rapid correction is dangerous. Fluid restriction is first-line for SIADH. 3% NaCl is reserved for symptomatic severe hyponatraemia (seizures, GCS <8).",
      tags: ["Hyponatraemia", "SIADH", "Osmotic demyelination", "Thiazide"],
      reference: "European Hyponatraemia Guidelines 2014; NZ Formulary; ACEM Clinical Chem 2026",
    },
    {
      id: "clinichem-003",
      stem: "Which acid-base disorder is most consistent with these results: pH 7.38, pCO2 52 mmHg, HCO3 30 mmol/L, Na 140, Cl 96, albumin 42?",
      options: [
        "Pure metabolic alkalosis",
        "Compensated respiratory acidosis (chronic hypoventilation)",
        "Mixed respiratory acidosis and metabolic alkalosis",
        "Normal acid-base status",
      ],
      correct: 1,
      explanation: "Step-by-step: (1) pH 7.38 — normal/low-normal. (2) pCO2 52 — elevated (primary respiratory acidosis). (3) HCO3 30 — elevated. Expected renal compensation for chronic respiratory acidosis: HCO3 rises 3.5 mmol/L per 10 mmHg rise in pCO2 = expected HCO3 ≈ 24 + 3.5×(52-40)/10 = 24 + 4.2 ≈ 28-30. HCO3 30 is within expected compensation — this is compensated chronic respiratory acidosis (e.g., COPD, obesity hypoventilation). Anion gap: 140 - 96 - 30 = 14 (normal). No hidden metabolic acidosis.",
      tags: ["Acid-base", "Respiratory acidosis", "ABG interpretation"],
      reference: "ACEM Clinical Chem 2026; Siggaard-Andersen; NZ Clinical Biochemistry",
    },
  ],

  environmental: [
    {
      id: "env-001",
      stem: "A tramper is rescued after overnight exposure in the Southern Alps. Temperature is 28°C (tympanic). HR 38, BP 80/50, GCS 10. No signs of trauma. What rewarming strategy is appropriate?",
      options: [
        "Passive rewarming only — warm blankets and removal from cold environment",
        "Active external rewarming — forced warm air, heating pads to core areas",
        "Active internal rewarming — warm IV fluids, warmed humidified O2, consider ECMO/CPB if in cardiac arrest",
        "Immediate DC cardioversion for likely VF",
      ],
      correct: 2,
      explanation: "This is severe hypothermia (28°C, Stage III/IV — haemodynamic instability). Management: (1) Gentle handling — hypothermic myocardium is susceptible to VF with movement. (2) Warmed IV fluids (42°C), warmed humidified O2 (42-46°C). (3) If cardiac arrest: CPR with reduced rate (10 compressions/min acceptable), avoid adrenaline until >30°C. (4) ECMO/cardiopulmonary bypass is the gold standard rewarming for hypothermic cardiac arrest — 'not dead until warm and dead.' Contact nearest ECMO centre early. NZ centres include Christchurch (CICU) and Auckland. Passive rewarming is appropriate only for mild hypothermia (32-35°C, Stage I).",
      tags: ["Hypothermia", "ECMO", "Southern Alps", "NZ-specific"],
      reference: "Wilderness Medical Society Guidelines 2019; CDHB Hypothermia Protocol",
    },
    {
      id: "env-002",
      stem: "A 19-year-old surfer at Piha is brought in unconscious after drowning. He had CPR initiated on the beach for 8 minutes. GCS now 6, SpO2 88% on 15L NRB. What is the most important immediate intervention?",
      options: [
        "CT brain to exclude intracranial injury",
        "Warm IV fluids for concurrent hypothermia",
        "Early intubation and lung-protective ventilation; consider surfactant loss",
        "Bronchoscopy to clear aspirated water",
      ],
      correct: 2,
      explanation: "Drowning causes hypoxic injury (the primary cause of death) and aspiration-induced surfactant disruption leading to ARDS-like picture. Immediate priorities: (1) Secure airway — GCS 6 mandates intubation. (2) Lung-protective ventilation (TV 6 mL/kg ideal body weight, PEEP to maintain oxygenation, plateau pressure <30 cmH2O) — aspiration causes decreased surfactant function similar to ARDS. (3) Assess and treat hypothermia concurrently. (4) Withhold early prognostication — outcomes after drowning (even with prolonged CPR in cold water) can be better than expected, especially in paediatric/young patients. Bronchoscopy is NOT needed — water is rapidly absorbed from the lungs.",
      tags: ["Drowning", "Aspiration", "ARDS", "NZ beaches"],
      reference: "ERC Drowning Guidelines 2021; Wilderness Medicine; ACEM Environmental 2026",
    },
  ],

  orthopaedics: [
    {
      id: "ortho-001",
      stem: "A 6-year-old falls on an outstretched hand. X-ray shows a fracture through the distal humeral physes with the distal fragment displaced posteriorly. What is this fracture and what is the most feared complication?",
      options: [
        "Colles fracture — malunion",
        "Supracondylar humeral fracture — anterior interosseous nerve injury and Volkmann ischaemic contracture",
        "Lateral condyle fracture — avascular necrosis of the capitellum",
        "Radial neck fracture — radial nerve palsy",
      ],
      correct: 1,
      explanation: "Supracondylar humeral fracture (Gartland type II/III) is the most common fracture requiring surgery in children. The anterior interosseous nerve (AIN) — a branch of the median nerve — is commonly injured, presenting as loss of the 'OK sign' (inability to form a circle with index finger and thumb). The most feared complication is Volkmann ischaemic contracture — compartment syndrome of the forearm from vascular compromise of the brachial artery, leading to muscle necrosis and permanent contracture. Assess radial pulse, capillary refill, and AIN function. Urgent orthopaedic review — Gartland III fractures require urgent operative fixation.",
      tags: ["Supracondylar fracture", "Paediatric fracture", "Volkmann", "AIN"],
      reference: "ACEM Orthopaedics 2026; Paediatric Orthopaedic Society; Green's Operative Hand Surgery",
    },
    {
      id: "ortho-002",
      stem: "A 28-year-old presents with anterior shoulder pain and inability to move the arm after a skiing fall. The shoulder appears 'squared off' and the arm is held in slight abduction and external rotation. Most likely diagnosis and initial management?",
      options: [
        "Acromioclavicular joint injury — sling and analgesia",
        "Anterior glenohumeral dislocation — procedural sedation and reduction, check axillary nerve pre- and post-reduction",
        "Posterior shoulder dislocation — direct pressure and X-ray confirmation",
        "Proximal humeral fracture — CT before any manipulation",
      ],
      correct: 1,
      explanation: "Classic anterior glenohumeral dislocation (>95% of shoulder dislocations): arm held in abduction and external rotation, squared-off appearance (loss of deltoid roundness), anterior fullness. Check axillary nerve function (sensation over regimental badge area, deltoid contraction) before and after reduction. Obtain AP and axillary (or Y-view) X-ray to confirm dislocation and exclude associated fracture (Hill-Sachs, Bankart). Reduction technique: Cunningham (muscle relaxation without sedation), Stimson, or Kocher — procedural sedation with ketamine or midazolam/fentanyl if needed. Post-reduction X-ray and neurovascular check mandatory.",
      tags: ["Shoulder dislocation", "Procedural sedation", "Axillary nerve"],
      reference: "ACEM Orthopaedics 2026; Roberts & Hedges Clinical Procedures in Emergency Medicine",
    },
  ],

  radiology: [
    {
      id: "radiology-001",
      stem: "A 45-year-old presents with acute onset severe pleuritic chest pain. CXR shows a small right-sided pleural effusion and a raised right hemidiaphragm. D-dimer is 3.4 µg/mL. Pre-test probability (Wells PE score) is 6. What is the next most appropriate investigation?",
      options: [
        "Repeat D-dimer in 6 hours",
        "V/Q scan — preferred in young patients to reduce radiation",
        "CTPA immediately",
        "Therapeutic anticoagulation empirically without imaging",
      ],
      correct: 2,
      explanation: "Wells PE score ≥5 = high probability. CTPA is the investigation of choice: rapid, widely available in NZ EDs, high sensitivity and specificity for PE. A raised D-dimer in high pre-test probability is not useful for exclusion — CTPA is indicated regardless. V/Q scan is appropriate in pregnancy or severe contrast allergy when CTPA is not feasible. The pleural effusion and raised hemidiaphragm are consistent with pulmonary infarction. Empirical anticoagulation without imaging is reasonable if CTPA will be significantly delayed and bleeding risk is low, but imaging should still be obtained.",
      tags: ["Pulmonary embolism", "CTPA", "Wells score", "D-dimer"],
      reference: "ACEM Radiology 2026; ESC PE Guidelines 2019; NZ Anticoagulation Guidelines",
    },
    {
      id: "radiology-002",
      stem: "On POCUS, which finding is most consistent with cardiac tamponade?",
      options: [
        "Hyperechoic pericardial effusion with left ventricular diastolic collapse",
        "Circumferential anechoic pericardial effusion with right ventricular diastolic collapse and plethoric IVC",
        "Large left pleural effusion with mediastinal shift",
        "Dilated left ventricle with global hypokinesis",
      ],
      correct: 1,
      explanation: "Cardiac tamponade on POCUS: (1) Pericardial effusion — typically anechoic (may be echogenic if haemopericardium/exudate). (2) Right ventricular diastolic collapse — the right ventricle (low pressure) is the first to be compressed; collapses during diastole when pericardial pressure exceeds RV diastolic pressure. This is the most specific POCUS sign. (3) Plethoric IVC (>2.1 cm, <50% respiratory variation) — elevated right atrial pressure. (4) Respiratory variation in mitral/tricuspid inflow on Doppler. Left ventricular collapse is a late/severe finding. Immediate pericardiocentesis is required in tamponade with haemodynamic compromise.",
      tags: ["POCUS", "Tamponade", "Pericardial effusion", "IVC"],
      reference: "ACEM Radiology/POCUS 2026; ACEP POCUS Guidelines; FAST protocol",
    },
  ],

  og: [
    {
      id: "og-001",
      stem: "A 26-year-old with 7 weeks of amenorrhoea presents with left iliac fossa pain and vaginal spotting. β-hCG is 2800 IU/L. Transvaginal ultrasound shows no intrauterine pregnancy and free fluid in the pouch of Douglas. What is the next step?",
      options: [
        "Repeat β-hCG in 48 hours to assess doubling",
        "IM methotrexate 50 mg/m² as outpatient",
        "Urgent gynaecology consultation for suspected ectopic pregnancy — likely surgical management",
        "Oral methotrexate and discharge with follow-up in 1 week",
      ],
      correct: 2,
      explanation: "This presentation is an ectopic pregnancy until proven otherwise. Free fluid in the pouch of Douglas (haemoperitoneum from tubal rupture or leak) + no IUP on TVUS + β-hCG 2800 IU/L (above the discriminatory zone of ~1500-2000 IU/L) = high clinical suspicion for ectopic. Urgent gynaecology referral is the correct immediate action. The presence of free fluid suggests active bleeding — this patient may need emergency surgery. Methotrexate is reserved for haemodynamically stable, unruptured ectopics meeting specific criteria (no free fluid, hCG <5000, no fetal cardiac activity) — this patient does not qualify.",
      tags: ["Ectopic pregnancy", "β-hCG", "TVUS", "Haemoperitoneum"],
      reference: "RANZCOG Ectopic Pregnancy Guidelines; ACEM O&G 2026",
    },
    {
      id: "og-002",
      stem: "A 32-year-old at 34 weeks gestation presents with BP 162/108 mmHg, headache, and 3+ proteinuria. What is the most appropriate antihypertensive agent for acute treatment in NZ?",
      options: [
        "IV labetalol 20 mg over 2 minutes",
        "Oral nifedipine SR 20 mg",
        "IV hydralazine 5-10 mg over 20 minutes",
        "Oral methyldopa 250 mg stat",
      ],
      correct: 0,
      explanation: "Severe pre-eclampsia (BP ≥160/110): immediate antihypertensive treatment is required to prevent maternal stroke and placental abruption. Target: SBP <160 mmHg, DBP <105-110 mmHg (avoid excessive lowering — uteroplacental perfusion depends on maternal BP). First-line in NZ ED: IV labetalol 20 mg over 2 min, repeat at 10-20 min intervals up to 300 mg total, or oral nifedipine 10 mg (immediate-release capsule, NOT SR). IV hydralazine is used but causes more maternal hypotension and reflex tachycardia than labetalol. Methyldopa is for chronic management. Concurrent IV magnesium sulfate for seizure prophylaxis (eclampsia prevention): 4g over 20 min then 1g/hr infusion.",
      tags: ["Pre-eclampsia", "Labetalol", "Hypertension in pregnancy", "Magnesium"],
      reference: "RANZCOG Hypertension in Pregnancy Guidelines 2022; NZ Formulary",
    },
  ],
};

export function getQuestionsForTopic(slug: string): Question[] {
  return questionBank[slug] ?? [];
}
