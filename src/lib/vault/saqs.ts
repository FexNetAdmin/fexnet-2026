import type { SAQ } from "@/types";

export const saqBank: Record<string, SAQ[]> = {
  cardiology: [
    {
      id: "card-saq-001",
      scenario:
        "A 68-year-old unknown male is brought in by ambulance following a witnessed cardiac arrest. CPR was commenced immediately and paramedics have placed a supraglottic airway. The patient remains in cardiac arrest with a shockable rhythm despite six shocks, 3 mg IV adrenaline, and 300 mg IV amiodarone. Total downtime is now 25 minutes.",
      totalMarks: 12,
      tags: ["Cardiac arrest", "Refractory VF", "ECMO"],
      reference: "ARC Advanced Life Support Guidelines 2021; ACEM 2026 Curriculum 2.2",
      parts: [
        {
          label: "a",
          question: "List six (6) features of your immediate management of this patient following ambulance handover.",
          marks: 6,
          modelAnswer: [
            "Ensure ongoing high-quality CPR — consider mechanical CPR device (e.g. LUCAS) and confirm effective ventilation via SGA with ETCO₂; proceed to ETT if ventilation is inadequate",
            "Confirm or gain 2× wide-bore IV access; send VBG to identify and treat reversible causes (hypoglycaemia, hyperkalaemia, hypovolaemia)",
            "Attempt to terminate electrical storm: high-dose 360 J defibrillation, double sequential defibrillation, IV esmolol, or ultrasound-guided stellate ganglion block",
            "Limit further adrenaline — further doses likely to perpetuate electrical storm",
            "Further antiarrhythmic: IV amiodarone 150 mg bolus; consider IV magnesium sulfate 2 g or IV lignocaine",
            "Consider ECMO-CPR (eCPR) if resources available and patient meets inclusion criteria (age, reversible cause, witnessed arrest, short low-flow time)",
            "Delegate senior nurse to communicate with family/NOK — determine goals of care and offer presence in resuscitation bay",
          ],
        },
        {
          label: "b",
          question:
            "ROSC is achieved. Other than ST elevation on 12-lead ECG, list two (2) other indications to refer this patient for consideration of coronary angiography.",
          marks: 2,
          modelAnswer: [
            "Electrical instability (recurrent VT/VF post-ROSC)",
            "Regional wall motion abnormalities on bedside echocardiography",
            "Cardiogenic shock despite adequate resuscitation",
          ],
        },
        {
          label: "c",
          question: "Outline your post-resuscitation care for this patient while awaiting ICU transfer.",
          marks: 4,
          modelAnswer: [
            "Airway: secure with ETT if not already done; confirm position with CXR and ETCO₂; target normocarbia (PaCO₂ 35–45 mmHg) and normoxia (SpO₂ 94–98%)",
            "Neuroprotection: head of bed 30°, avoid tight ETT tie, maintain MAP ≥ 65 mmHg, BSL 6–10 mmol/L, avoid hyperthermia (target normothermia 36–37.5°C)",
            "Investigate underlying cause: 12-lead ECG, CXR, bedside echo, CT head if no obvious cardiac cause",
            "Haemodynamic support: IV vasopressor (noradrenaline) to target MAP ≥ 65 mmHg; early cardiology referral for consideration of PCI",
          ],
        },
      ],
    },
    {
      id: "card-saq-002",
      scenario:
        "A 65 kg, 54-year-old female is brought in by ambulance after a witnessed cardiac arrest at home. Her husband commenced CPR immediately. She has been recovering from a fractured tibia/fibula following an MCA three weeks previously. The initial ECG showed PEA without acute OMI changes. In the ED, POCUS shows a dilated RV with positive McConnell's sign and a dilated IVC.",
      totalMarks: 12,
      tags: ["PE", "Cardiac arrest", "Thrombolysis", "RUSH"],
      reference: "ARC ALS Guidelines 2021; ACEM Curriculum 2.2; Monash Health SAQ 2026.1",
      parts: [
        {
          label: "a",
          question:
            "Prescribe the definitive medical treatment for the most likely cause of her cardiac arrest. Include the minimum CPR duration required after administration to ensure efficacy.",
          marks: 2,
          modelAnswer: [
            "Alteplase 50 mg IV push, then continue CPR for minimum 15 minutes (second dose 50 mg at 15 minutes if no ROSC)",
            "OR Tenecteplase 35 mg IV push (weight-based: 65 kg), then continue CPR for minimum 30 minutes",
          ],
        },
        {
          label: "b",
          question:
            "Following ROSC and intubation, the patient deteriorates 45 minutes later (HR 130, BP 85/45 mmHg, SpO₂ 95%). You perform a RUSH protocol POCUS. List four (4) areas you would assess and one (1) key finding in each.",
          marks: 4,
          modelAnswer: [
            "Heart — pericardial effusion/tamponade; recurrent RV dilation suggesting PE; hyperdynamic LV (distributive/hypovolaemic shock); new wall motion abnormalities",
            "IVC — collapsibility index for volume status (dilated, non-collapsing IVC = obstructive shock; flat, collapsing IVC = hypovolaemia)",
            "Abdomen/pelvis — free intraperitoneal fluid suggesting CPR-related haemorrhage (splenic/hepatic laceration, mesenteric injury)",
            "Lungs — bilateral B-lines suggesting pulmonary oedema (post-resuscitation LV dysfunction); pneumothorax (absent lung sliding from CPR rib fractures)",
          ],
        },
        {
          label: "c",
          question:
            "CT confirms bleeding secondary to CPR-related trauma. List six (6) ED steps to reverse the thrombolytic agent before definitive interventional radiology.",
          marks: 6,
          modelAnswer: [
            "Cease alteplase/any anticoagulants immediately",
            "Cryoprecipitate 10 units IV — aim fibrinogen > 1.5 g/L",
            "Tranexamic acid (TXA) 1–2 g IV over 10 minutes",
            "Platelets — transfuse to maintain count > 50–100 × 10⁹/L",
            "Fresh frozen plasma (FFP) 2 units IV — repeat guided by TEG/ROTEM or coagulation profile",
            "Prothrombin complex concentrate (PCC) 50 units/kg if concurrent anticoagulant use (e.g. heparin/LMWH given during arrest)",
          ],
          examinerNotes: "Must include dose or target for each agent to score full marks. Blood transfusion alone does not score as it is not reversal.",
        },
      ],
    },
  ],

  toxicology: [
    {
      id: "tox-saq-001",
      scenario:
        "A 45-year-old man self-presents to your regional ED 1 hour after being bitten by a snake on his right ankle while bushwalking near Christchurch. The snake was approximately 1.5 m long and brown-coloured. He has moderate bite-site pain but is otherwise currently asymptomatic.",
      totalMarks: 15,
      tags: ["Snakebite", "Envenomation", "VICC", "Antivenom"],
      reference: "NZ Poisons Centre 0800 764 766; NZ Formulary 2026; ACEM Toxicology Curriculum 3.1",
      parts: [
        {
          label: "a",
          question:
            "List six (6) clinical features that would suggest systemic envenomation, including symptoms from at least three (3) different systems.",
          marks: 3,
          modelAnswer: [
            "Non-specific systemic: headache, nausea/vomiting, abdominal pain, diaphoresis, diarrhoea",
            "Neurological: diplopia or blurred vision (extraocular muscle weakness), bulbar weakness/dysphagia, respiratory muscle paralysis, peripheral weakness or ptosis",
            "Haematological: spontaneous bleeding from any site (gums, IV sites, haematuria)",
            "Cardiovascular: collapse or cardiac arrest",
          ],
          examinerNotes: "Signs of myotoxicity are not acceptable — these take ≥12 hours to appear.",
        },
        {
          label: "b",
          question: "Describe your initial management plan including investigations for this currently asymptomatic patient.",
          marks: 4,
          modelAnswer: [
            "Apply pressure immobilisation bandage (PIB) from bite site proximally — do NOT wash or excise the wound",
            "Urgent snakebite bloods: FBE, UEC, LFT, coagulation studies including fibrinogen and D-dimer, CK, LDH",
            "Analgesia (paracetamol; avoid NSAIDs in case of coagulopathy)",
            "Keep in high-visibility monitored area for minimum 12 hours; observe closely for any developing systemic features",
            "Confirm tetanus prophylaxis status",
            "Contact NZ Poisons Centre (0800 764 766) for real-time expert advice on antivenom and monitoring",
          ],
          examinerNotes: "Lose a mark if snake venom detection kit (SVDK) listed — not available or validated in NZ. Do not list specific NZ antivenom product incorrectly.",
        },
        {
          label: "c",
          question:
            "Coagulation studies return: INR > 10, PT > 180 s, APTT > 150 s, fibrinogen < 0.4 g/L, D-dimer > 128. Name this condition.",
          marks: 1,
          modelAnswer: [
            "Venom-induced consumptive coagulopathy (VICC)",
          ],
        },
        {
          label: "d",
          question: "You administer antivenom. List two (2) complications of antivenom administration and the treatment for each.",
          marks: 4,
          modelAnswer: [
            "Acute allergic reaction (not anaphylaxis): stop antivenom; give antihistamine (promethazine 25 mg IV) ± adrenaline",
            "Anaphylaxis: stop antivenom; adrenaline 0.5 mg IM anterolateral thigh; IV fluid bolus for hypotension; salbutamol nebuliser for bronchospasm; consider re-challenge at slower rate once stabilised",
            "Serum sickness (days 7–14): prednisone 25–50 mg daily for 5–7 days",
          ],
        },
        {
          label: "e",
          question: "Describe your ongoing management and disposition for this patient post-antivenom.",
          marks: 3,
          modelAnswer: [
            "Admit under toxicology/general medicine for minimum 24 hours post-antivenom",
            "Monitor for bleeding given VICC — serial neuro exam for neurotoxicity development",
            "Serial snakebite blood tests at 6 h and 12 h post-antivenom, then every 24 h until coagulopathy resolves",
            "Blood film, UEC, and platelet count at 24 h to screen for thrombotic microangiopathy (TMA)",
          ],
        },
      ],
    },
    {
      id: "tox-saq-002",
      scenario:
        "A 23-year-old female presents 1 hour after ingesting 75 × 500 mcg colchicine tablets (her father's gout medication). She weighs 52 kg. She has vomiting, profuse diarrhoea, and abdominal pain. Observations: HR 115 bpm, BP 90/52 mmHg, RR 22/min, SpO₂ 98% on room air, Temp 36.9°C. ECG: sinus rhythm, normal QT and QRS intervals. VBG: pH 7.45, PCO₂ 35, HCO₃ 18, K⁺ 3.0, Na⁺ 145, lactate 3.2.",
      totalMarks: 12,
      tags: ["Colchicine", "Overdose", "Multidose activated charcoal"],
      reference: "NZ Poisons Centre 0800 764 766; NZ Formulary 2026; Clinical Toxicology ACEM 3.2",
      parts: [
        {
          label: "a",
          question: "What is your risk assessment?",
          marks: 2,
          modelAnswer: [
            "Total ingestion: 75 × 0.5 mg = 37.5 mg colchicine = 721 mcg/kg (0.72 mg/kg)",
            "LIFE-THREATENING ingestion — doses > 0.5 mg/kg are associated with severe systemic toxicity and high fatality rate",
          ],
        },
        {
          label: "b",
          question: "Describe the four (4) stages of colchicine toxicity.",
          marks: 4,
          modelAnswer: [
            "Phase 1 (0–24 h): GI toxidrome — vomiting, profuse diarrhoea, dehydration, hypovolaemia, abdominal pain",
            "Phase 2 (24 h–7 days): multi-organ failure — myocardial depression, arrhythmias, cardiovascular collapse, respiratory failure, metabolic acidosis, AKI, rhabdomyolysis, hypocalcaemia, coagulopathy, hepatic failure, death",
            "Phase 3 (5–10 days): bone marrow suppression — severe neutropenia (↑ infection risk), thrombocytopenia",
            "Phase 4 (≥ 10 days): recovery, possible alopecia and rebound leukocytosis",
          ],
        },
        {
          label: "c",
          question: "Outline your immediate management priorities.",
          marks: 3,
          modelAnswer: [
            "Resuscitation: large-bore IV access, aggressive IV fluid resuscitation targeting MAP ≥ 65 mmHg; early vasopressor if fluid-refractory (noradrenaline)",
            "Decontamination: multidose activated charcoal (MDAC) 50 g PO/NGT q4h if airway is protected — colchicine undergoes enterohepatic circulation",
            "Monitoring: ICU admission; continuous cardiac monitoring; serial bloods (FBE, UEC, LFT, coags, CK) 4–6 hourly; contact NZ Poisons Centre 0800 764 766",
            "No antidote exists — management is supportive",
          ],
        },
        {
          label: "d",
          question: "List three (3) other medications amenable to multidose activated charcoal (MDAC).",
          marks: 3,
          modelAnswer: [
            "Carbamazepine",
            "Phenobarbitone",
            "Theophylline",
            "Warfarin",
            "Phenytoin",
            "Dapsone",
            "Sodium valproate",
            "Quinine",
          ],
          examinerNotes: "Any 3 from the above list.",
        },
      ],
    },
    {
      id: "tox-saq-003",
      scenario:
        "A 31-year-old female presents to your urban ED with signs of gamma-hydroxybutyrate (GHB) withdrawal. Her partner reports she has been using GHB multiple times daily for the past year.",
      totalMarks: 12,
      tags: ["GHB", "Withdrawal", "Benzodiazepines", "Baclofen"],
      reference: "ACEM S43 AOD Policy; NZ Alcohol Drug Helpline; Austin Health GHB Withdrawal Protocol 2023",
      parts: [
        {
          label: "a",
          question: "List three (3) clinical features of severe GHB withdrawal.",
          marks: 3,
          modelAnswer: [
            "Hallucinations (visual or auditory)",
            "Generalised seizures",
            "Confusion/delirium",
            "Paranoia or agitation",
            "Muscle rigidity",
            "Hyperthermia",
            "Rhabdomyolysis",
            "Acute kidney injury",
          ],
          examinerNotes: "Do not accept mild withdrawal signs (tremor, nausea, insomnia) for severe category.",
        },
        {
          label: "b",
          question: "List four (4) risk factors for severe GHB withdrawal.",
          marks: 4,
          modelAnswer: [
            "High frequency use: < 4 hours between doses, or ≥ 6 doses per day",
            "Nocturnal dosing required to prevent withdrawal during sleep",
            "High daily doses (> 15–30 mL/day of street GHB)",
            "Prior history of severe GHB withdrawal",
            "Concurrent benzodiazepine or alcohol dependence",
          ],
        },
        {
          label: "c",
          question: "Prescribe two (2) drugs from different categories for initial management of GHB withdrawal. Include doses.",
          marks: 2,
          modelAnswer: [
            "Diazepam 20 mg PO stat, titrated up to 60 mg/dose; then 10–20 mg hourly as needed (high doses up to 120 mg total often required — GHB withdrawal is highly benzodiazepine-resistant)",
            "Baclofen 25 mg PO TDS (GABA-B agonist — targets GHB receptor, adjunct to benzodiazepines)",
            "Olanzapine 10 mg (oral/IM) may be used as adjunct for agitation/psychosis",
          ],
          examinerNotes: "Must include diazepam for full marks. Half mark for correct drug without dose.",
        },
        {
          label: "d",
          question: "First-line therapy fails to control symptoms. What is your second-line agent?",
          marks: 1,
          modelAnswer: [
            "Phenobarbitone (phenobarbital) IV — loading dose typically 10–15 mg/kg",
          ],
          examinerNotes: "Antipsychotics are adjuncts, not second-line agents.",
        },
        {
          label: "e",
          question: "State two (2) ACEM recommendations regarding models of care for patients with co-occurring alcohol/other drug (AOD) and mental health conditions in ED.",
          marks: 2,
          modelAnswer: [
            "Embedding AOD specialists (addiction medicine physicians, social workers) within the ED",
            "Following the SBIRT model (Screening, Brief Intervention, Referral to Treatment)",
            "Comprehensive referral pathways to outpatient AOD management services",
            "Purpose-built behavioural assessment rooms for safe assessment and de-escalation",
          ],
        },
      ],
    },
  ],

  "trauma-cap": [
    {
      id: "trauma-saq-001",
      scenario:
        "A 42-year-old man presents to your tertiary trauma centre after falling 2 metres from a ladder onto concrete. He had a brief loss of consciousness. Observations: BP 130/80, HR 82, SpO₂ 98% on air, GCS 13 (E3V4M6). He is confused but obeys commands. No focal limb weakness. Isolated head injury. CT brain shows cerebral contusions with sulcal effacement.",
      totalMarks: 12,
      tags: ["TBI", "Cerebral contusions", "Neurosurgery", "ICP"],
      reference: "NSW Health Adult Trauma CPG 2024; Dunn Online TBI module; ACEM Curriculum 4.1",
      parts: [
        {
          label: "a",
          question: "Describe the key CT findings and their clinical significance.",
          marks: 4,
          modelAnswer: [
            "Cerebral contusions (intracerebral haemorrhages) — may expand over 24–48 h, requires serial imaging",
            "Sulcal effacement — indicates cerebral oedema/mass effect; monitor for raised ICP",
            "Effacement of anterior horn of lateral ventricle — suggests midline shift; may need ICP monitoring",
            "Contrecoup subgaleal haematoma — indicates significant impact force",
            "Clinical significance: no immediate surgical indication at GCS 13 with current findings, but risk of secondary deterioration from oedema or haematoma expansion; indicates need for anticoagulation reversal if applicable",
          ],
          examinerNotes: "Any 4 findings/significance points.",
        },
        {
          label: "b",
          question: "List four (4) clinical findings that would indicate neurological deterioration in this patient.",
          marks: 4,
          modelAnswer: [
            "Drop in GCS ≥ 2 points (sustained)",
            "New focal neurological deficit (e.g. limb weakness, dysphasia)",
            "Worsening or severe headache",
            "Persistent or projectile vomiting",
            "New generalised seizure",
            "Pupillary asymmetry or fixed dilated pupil (Cushing reflex)",
          ],
        },
        {
          label: "c",
          question:
            "The patient has a 45-second generalised seizure while in ED observation, followed by a brief post-ictal period. How would you manage this event?",
          marks: 3,
          modelAnswer: [
            "Ensure airway patency — positioning, suction, supplemental oxygen",
            "Check blood glucose — exclude hypoglycaemia as precipitant",
            "Reassess GCS and full neurological examination — note any new focal deficit",
            "Do NOT administer benzodiazepine for a seizure that has already terminated",
            "Commence anticonvulsant prophylaxis: levetiracetam 1500 mg IV over 15 min (preferred; no hepatic induction) or phenytoin 15–18 mg/kg IV at ≤ 50 mg/min",
            "Urgent neurosurgical review; consider repeat CT brain if neurological exam changes",
          ],
          examinerNotes: "Better candidates will not give midazolam since seizure is already finished. Mark for not giving benzodiazepine unnecessarily.",
        },
        {
          label: "d",
          question: "GCS returns to 13, no new neuro signs, repeat CT unchanged. Most appropriate disposition?",
          marks: 1,
          modelAnswer: [
            "Admit to monitored/neurosurgical observation ward (or HDU with ICU liaison) — patient does not require ICU immediately but is at high risk for secondary deterioration and requires close neurological monitoring",
          ],
        },
      ],
    },
  ],

  neuro: [
    {
      id: "neuro-saq-001",
      scenario:
        "An 18-year-old male is brought to your regional ED after falling from an e-scooter, striking his head on concrete without a helmet. Witnessed 30-second loss of consciousness. GCS now 14 (E3V4M6—wait, let me reconsider: E3 = to voice = 3, V4 = confused = 4, M6 = obeys = 6, so GCS 13). He reports severe headache and nausea. HR 97, BP 155/78, SpO₂ 97% on air. CT brain shows an acute left parietotemporal extradural haematoma with associated skull fracture, overlying scalp haematoma, small pneumocephalus, two contrecoup contusions, effacement of frontal horn of left lateral ventricle, and midline shift.",
      totalMarks: 12,
      tags: ["EDH", "Extradural haematoma", "Neurosurgery", "Transfer"],
      reference: "NSW Health Adult Trauma CPG 2024; Dunn Online Neurosurgery; ACEM Curriculum 5.1",
      parts: [
        {
          label: "a",
          question: "Provide four (4) abnormal CT findings and interpret the overall image.",
          marks: 4,
          modelAnswer: [
            "Acute left parietotemporal extradural haematoma (EDH) — biconvex hyperdense collection",
            "Associated parietotemporal skull fracture",
            "Overlying scalp haematoma",
            "Small locule of pneumocephalus",
            "Two contrecoup cerebral contusions",
            "Effacement of frontal horn of left lateral ventricle",
            "Midline shift",
            "Interpretation: Acute EDH with signs of raised ICP — neurosurgical emergency requiring urgent transfer for decompressive craniotomy",
          ],
          examinerNotes: "Must identify EDH for full marks. Must state this is a neurosurgical emergency.",
        },
        {
          label: "b",
          question:
            "The patient is accepted for transfer to a neurosurgical centre 350 km away. Vital signs are unchanged and vomiting has stopped after antiemetic. Provide the reasons for and against intubating this patient prior to transfer.",
          marks: 4,
          modelAnswer: [
            "FOR intubation: mitigates risk of in-transit neurological deterioration and aspiration; allows ICP management (sedation, normocarbia); anticipated surgical course will require intubation in theatre anyway",
            "AGAINST intubation: patient currently maintaining own airway and ventilation; allows continued neurological assessment at receiving centre; reduced preparation time; risk of drug-related complications; preferred if theatre immediately available at destination",
          ],
        },
        {
          label: "c",
          question: "You intubate uneventfully. Describe how you will prepare this patient for transport.",
          marks: 4,
          modelAnswer: [
            "Position: supine with 30° head-up, avoid tight ETT ties (jugular venous drainage)",
            "Ventilation: target PaCO₂ 35–40 mmHg (normocapnia); brief hyperventilation (PaCO₂ 30–35) only if transtentorial herniation suspected",
            "Sedation/analgesia: deep sedation and neuromuscular blockade with adequate drug supply for journey duration",
            "Blood pressure: MAP target ≥ 80 mmHg for isolated TBI (via arterial line if available)",
            "Herniation preparation: prepare hypertonic saline 6–8 mL/kg of 3% NaCl OR mannitol 0.5–1 g/kg 20% — administer only if pupil asymmetry or Cushing reflex develops",
            "Disposition logistics: NGT/OGT, IDC, copy of notes, imaging on disc, receiving centre and family notified",
          ],
        },
      ],
    },
    {
      id: "neuro-saq-002",
      scenario:
        "A 65-year-old female presents with a 15-minute episode of confusion 2 hours ago, witnessed by her husband as repeatedly asking the same questions and walking aimlessly. She can now vaguely recall being driven to the ED. You suspect transient global amnesia (TGA).",
      totalMarks: 12,
      tags: ["TGA", "Transient global amnesia", "Stroke", "Amnesia"],
      reference: "Dunn Online Neurology; ACEM Curriculum 5.3; Monash Health SAQ 2026.1",
      parts: [
        {
          label: "a",
          question: "List six (6) clinical criteria required to diagnose transient global amnesia.",
          marks: 6,
          modelAnswer: [
            "Episode was witnessed and clearly reported by an observer",
            "Dysfunction was limited to repetitive queries and anterograde amnesia (no other neurological deficit)",
            "Obvious anterograde amnesia during the episode",
            "Episode resolved within 24 hours (typically 1–8 h)",
            "No clouding of consciousness or loss of personal identity",
            "No prior history of epilepsy or significant head trauma",
            "No focal neurological signs or symptoms",
            "No features of seizure activity",
          ],
          examinerNotes: "Any 6 from the above clinical criteria.",
        },
        {
          label: "b",
          question: "List four (4) important investigations with rationale.",
          marks: 4,
          modelAnswer: [
            "CT brain ± CTA/CT perfusion: exclude stroke, intracranial haemorrhage, or vascular lesion",
            "Bloods: FBE (infection), UEC (hyponatraemia), VBG/glucose (hypoglycaemia), LFTs (hepatic encephalopathy)",
            "ECG: exclude paroxysmal AF as embolic source",
            "MRI DWI brain: may show punctate hippocampal lesions on DWI sequences (transient, non-specific but characteristic of TGA); best performed > 24 h after event",
            "EEG: typically normal; useful to exclude epileptic amnesia if TGA criteria not fully met",
          ],
        },
        {
          label: "c",
          question: "What do you advise the patient and family regarding recurrence and prognosis?",
          marks: 2,
          modelAnswer: [
            "Small recurrence risk — approximately 15% lifetime risk of a further episode",
            "Excellent prognosis — no increased mortality and no increased stroke risk compared to age-matched population",
            "Full memory recovery is expected; no cognitive sequelae",
            "No restriction on driving is typically required (jurisdiction-dependent — advise patient to check with NZTA)",
          ],
        },
      ],
    },
  ],

  paediatrics: [
    {
      id: "paeds-saq-001",
      scenario:
        "The microbiology registrar calls to inform you of a positive blood culture (Streptococcus pyogenes / invasive Group A Streptococcus) for a 2-year-old girl discharged overnight from your department after assessment for a febrile illness. The child has been recalled.",
      totalMarks: 12,
      tags: ["iGAS", "Invasive GAS", "Paediatric sepsis", "Notifiable disease"],
      reference: "RCH iGAS Clinical Guidelines; ETG Streptococcus pyogenes; ACEM Curriculum 6.2",
      parts: [
        {
          label: "a",
          question: "List six (6) clinical manifestations of invasive Group A Streptococcal infection.",
          marks: 6,
          modelAnswer: [
            "Streptococcal toxic shock syndrome (fever, shock, desquamation)",
            "Necrotising fasciitis",
            "Pneumonia and empyema",
            "Retropharyngeal or peritonsillar abscess",
            "Osteomyelitis",
            "Septic arthritis",
            "Meningitis",
            "Septicaemia/septic shock",
          ],
          examinerNotes: "Non-invasive disease (cellulitis, scarlet fever, pharyngitis) does NOT score.",
        },
        {
          label: "b",
          question: "List six (6) patient factors that increase risk for invasive GAS infection.",
          marks: 6,
          modelAnswer: [
            "Age < 5 years or > 65 years",
            "Household contact of confirmed iGAS case in past 30 days",
            "Pregnant or postpartum women",
            "First Nations / Māori or Pacific peoples (higher incidence in NZ/AU)",
            "Immunocompromise (haemodialysis, chronic illness, immunosuppressants)",
            "Intravenous drug use (IVDU)",
            "Overcrowding, homelessness, incarceration",
            "Varicella (chickenpox) infection — skin barrier breach",
          ],
        },
        {
          label: "c",
          question: "The child weighs 15 kg and has no allergies. What antibiotic (with dose) is indicated for uncomplicated invasive GAS without septic shock?",
          marks: 2,
          modelAnswer: [
            "Benzylpenicillin (penicillin G) 60 mg/kg IV every 6 hours = 900 mg IV q6h for this child",
            "Add clindamycin 10 mg/kg IV every 8 hours if toxin-mediated disease (toxic shock, necrotising fasciitis) — inhibits bacterial protein/toxin synthesis",
          ],
        },
        {
          label: "d",
          question: "List four (4) features of the public health management of this case.",
          marks: 4,
          modelAnswer: [
            "iGAS is a notifiable disease in NZ — notify the Medical Officer of Health within 24 hours",
            "Identify and follow up household, institutional, and airway-exposed healthcare worker contacts",
            "Provide education to contacts on clinical features of iGAS and when to seek medical attention",
            "Chemoprophylaxis for contacts: limited evidence, but consider for high-risk contacts (especially mother–neonate pairs); oral phenoxymethylpenicillin or azithromycin if penicillin-allergic",
          ],
        },
      ],
    },
    {
      id: "paeds-saq-002",
      scenario:
        "A 1-year-old is brought to the ED with a 2-day history of fever and lethargy, and delayed capillary refill. He has received two × 20 mL/kg boluses of IV normal saline with little improvement. HR 180 bpm, GCS 15, SpO₂ 95%, RR 45/min. VBG: pH 7.22, PCO₂ 32 mmHg, HCO₃ 12 mmol/L, lactate 3.5 mmol/L, glucose 1.8 mmol/L.",
      totalMarks: 12,
      tags: ["Paediatric septic shock", "Hypoglycaemia", "Vasopressors", "IO access"],
      reference: "PREDICT Network Paediatric Sepsis Guidelines; ACEM Curriculum 6.1; ARC Paediatric ALS",
      parts: [
        {
          label: "a",
          question: "List the most important differential diagnoses in this patient.",
          marks: 4,
          modelAnswer: [
            "Distributive shock: septic shock (most likely), anaphylaxis, neurogenic shock",
            "Hypovolaemic shock: dehydration, GI fluid loss, haemorrhage",
            "Cardiogenic shock: myocarditis, congenital heart disease (undiagnosed), arrhythmia, cardiomyopathy",
            "Obstructive shock: tension pneumothorax, cardiac tamponade (less likely in this age group)",
          ],
        },
        {
          label: "b",
          question: "Interpret the VBG and state the key immediate management implication.",
          marks: 2,
          modelAnswer: [
            "Severe metabolic acidosis with raised lactate (pH 7.22, HCO₃ 12, lactate 3.5) — indicates poor perfusion and tissue hypoxia",
            "CRITICAL: blood glucose 1.8 mmol/L = severe hypoglycaemia — immediate management: 2 mL/kg of 10% dextrose IV/IO bolus, then glucose infusion (glucose-containing fluid at maintenance rate + bolus as required)",
          ],
        },
        {
          label: "c",
          question: "Outline your immediate management priorities.",
          marks: 4,
          modelAnswer: [
            "Airway/Breathing: high-flow O₂ via non-rebreather mask; prepare for intubation if GCS falls or work of breathing is excessive",
            "Circulation: obtain IO access immediately if peripheral IV fails (tibial IO in this age group)",
            "Hypoglycaemia: 2 mL/kg 10% dextrose IV/IO bolus then glucose infusion; recheck BSL in 15 minutes",
            "Fluids: further cautious 10 mL/kg boluses (fluid-refractory — limit total fluid at this stage given two prior boluses)",
            "Antibiotics: broad-spectrum IV/IO within 60 minutes (ceftriaxone 50 mg/kg + consider metronidazole)",
            "Vasopressor: early peripheral/IO adrenaline infusion if not responding to fluids",
            "Disposition: PICU admission; early discussion with retrieval team",
          ],
        },
        {
          label: "d",
          question: "What is your first-line vasopressor for septic shock in this child, and how would you administer it without central access?",
          marks: 2,
          modelAnswer: [
            "Adrenaline (epinephrine) infusion 0.05–0.3 mcg/kg/min — first-line for paediatric septic shock",
            "Can be administered safely via IO line or peripheral IV (large proximal vein); observe for extravasation; transition to central line as soon as safely achievable",
          ],
        },
      ],
    },
    {
      id: "paeds-saq-003",
      scenario:
        "A 4-year-old boy is brought to ED with a limp since this morning and now refuses to bear weight on his right leg. No clear history of trauma. Temperature 37.9°C, HR 120, RR 24. He is irritable and cries when his right hip is moved. No obvious swelling or deformity.",
      totalMarks: 16,
      tags: ["Septic arthritis", "Transient synovitis", "Paediatric hip", "Orthopaedics"],
      reference: "RCH Septic Arthritis Guidelines; ACEM Curriculum 6.3; PREDICT Network",
      parts: [
        {
          label: "a",
          question: "What history and examination features differentiate septic arthritis of the hip from transient synovitis?",
          marks: 4,
          modelAnswer: [
            "Septic arthritis: high fever (> 38.5°C), systemically toxic/lethargic, refuses to weight-bear completely, severe pain with any hip movement including at rest, preceding bacteraemia/skin infection",
            "Transient synovitis: afebrile or low-grade fever, generally well appearing, may partially weight-bear with limp, some preserved hip movement, recent viral URTI preceding by days",
            "Kocher criteria for septic arthritis: fever > 38.5°C, non-weight-bearing, ESR > 40 mm/hr, WCC > 12 × 10⁹/L — 3+ criteria = high probability",
          ],
        },
        {
          label: "b",
          question: "List four (4) other important differential diagnoses.",
          marks: 4,
          modelAnswer: [
            "Non-accidental injury (NAI) — must be considered and documented",
            "Osteomyelitis of proximal femur",
            "Perthes disease (avascular necrosis of femoral head) — age 4–10 y",
            "Occult fracture",
            "Acute rheumatic fever (Māori/Pacific children in NZ — higher incidence)",
            "Reactive arthritis / juvenile idiopathic arthritis",
            "Malignancy (leukaemia — bone pain, hepatosplenomegaly)",
            "Discitis",
          ],
        },
        {
          label: "c",
          question: "Outline your initial ED investigations with rationale for each.",
          marks: 4,
          modelAnswer: [
            "FBE: leukocytosis supports infection",
            "CRP/ESR: raised inflammatory markers support septic arthritis vs synovitis",
            "Blood cultures × 2: identify causative organism before antibiotics",
            "Plain X-ray hip (AP and frog-leg lateral): exclude fracture, assess joint space, look for Perthes changes",
            "Ultrasound hip: detect joint effusion; guide aspiration",
            "MRI hip: assess for osteomyelitis, deep tissue infection, extent of joint involvement if USS inconclusive",
          ],
        },
        {
          label: "d",
          question: "Septic arthritis is suspected. Outline your immediate ED management.",
          marks: 4,
          modelAnswer: [
            "Urgent orthopaedic referral — surgical washout is definitive treatment",
            "IV antibiotics: cefazolin 50 mg/kg IV q8h (first-line for presumed S. aureus); add vancomycin 15 mg/kg if MRSA suspected or in high-prevalence area; acceptable to withhold briefly if joint aspiration is imminent and patient is not septic",
            "Analgesia: oral paracetamol 15 mg/kg + ibuprofen 5–10 mg/kg; IV morphine 0.1 mg/kg if severe",
            "Keep fasted for potential theatre; immobilise limb in position of comfort",
          ],
        },
      ],
    },
  ],

  og: [
    {
      id: "og-saq-001",
      scenario:
        "You are working an evening shift in an urban district hospital ED without on-site obstetric services. A 30-year-old woman, G3P2 at 39 weeks gestation, presents with contractions. This is a singleton pregnancy.",
      totalMarks: 12,
      tags: ["Labour", "Emergency delivery", "O&G", "PPH"],
      reference: "RANZCOG Emergency Delivery Guidelines; NZ College of Midwives; ACEM Curriculum 12.1",
      parts: [
        {
          label: "a",
          question: "List five (5) features in her past obstetric history important to your initial assessment.",
          marks: 5,
          modelAnswer: [
            "Previous caesarean sections (number and type) ± successful VBACs — risk of scar rupture",
            "History of postpartum haemorrhage (PPH) — risk of recurrence",
            "History of shoulder dystocia — obstetric emergency requiring specific manoeuvres",
            "History of instrumental deliveries (forceps/vacuum) — may indicate cephalopelvic disproportion",
            "Prolonged delivery of placenta or retained placenta — risk of repeat PPH",
            "History of neonatal death or stillbirth — perinatal risk",
            "Previous large baby or gestational diabetes — risk of macrosomia and shoulder dystocia",
          ],
          examinerNotes: "Any 5 — must be focused on issues relevant to emergency delivery in your facility.",
        },
        {
          label: "b",
          question: "Complete the table comparing true labour vs false labour across five (5) features.",
          marks: 5,
          modelAnswer: [
            "Contraction frequency: True — regular, progressively more frequent; False — irregular, unpredictable pattern",
            "Contraction intensity: True — progressively increasing with each contraction; False — does not increase, may vary",
            "Contraction duration: True — progressively longer; False — variable duration",
            "Pain location: True — starts in fundus/upper abdomen, radiates down to back; False — usually lower abdomen or groin",
            "Response to movement: True — unchanged by position change; False — may slow or stop with position change or walking",
          ],
        },
        {
          label: "c",
          question: "The baby has delivered. List two (2) signs of placental separation before attempting placental delivery.",
          marks: 2,
          modelAnswer: [
            "Lengthening of the umbilical cord at the introitus",
            "Fresh gush of blood from the vagina",
            "Uterus becomes firmer, rounder, and rises in the abdomen (globular shape)",
          ],
          examinerNotes: "Any 2 of the 3 signs.",
        },
      ],
    },
  ],

  "clinical-chem": [
    {
      id: "chem-saq-001",
      scenario:
        "A 68-year-old female with type 2 diabetes is brought by ambulance confused and vomiting. HR 135 bpm, BP 145/67 mmHg, RR 18/min, SpO₂ 95%, Temp 37.8°C. VBG: pH 7.30, PCO₂ 38 mmHg, HCO₃⁻ 20 mmol/L, Na⁺ 145, K⁺ 3.9, Cl⁻ 95, Urea 22, Glucose 47 mmol/L, Lactate 4.8 mmol/L.",
      totalMarks: 18,
      tags: ["HHS", "DKA", "Metabolic acidosis", "Anion gap", "Delta ratio"],
      reference: "NZ Formulary HHS/DKA Protocol 2026; ACEM Curriculum 13.1; JBDS Guidelines",
      parts: [
        {
          label: "a",
          question: "List five (5) abnormalities on the blood gas — include your calculations.",
          marks: 5,
          modelAnswer: [
            "Metabolic acidosis: pH 7.30, HCO₃ 20 — expected PCO₂ = (20 × 1.5) + 8 = 38 mmHg → adequate respiratory compensation",
            "Elevated anion gap: AG = Na⁺ − (Cl⁻ + HCO₃⁻) = 145 − (95 + 20) = 30 mmol/L (normal 8–16) → high AG metabolic acidosis",
            "Delta ratio: (AG − 12) / (24 − HCO₃⁻) = (30 − 12) / (24 − 20) = 18/4 = 4.5 → delta ratio > 2 suggests concurrent metabolic alkalosis (here: from vomiting with chloride loss)",
            "Corrected sodium: Na⁺ + (Glucose − 5) / 3 = 145 + (47 − 5)/3 = 145 + 14 = 159 mmol/L → hypernatraemia, indicating severe hyperosmolality",
            "Calculated serum osmolality: 2 × Na⁺ + Glucose + Urea = 2 × 145 + 47 + 22 = 359 mOsm/kg (normal < 290) → markedly elevated → hyperosmolar state",
            "Elevated lactate: 4.8 mmol/L → indicating tissue hypoperfusion or concurrent sepsis",
          ],
          examinerNotes: "Half marks for correct formula with arithmetic error.",
        },
        {
          label: "b",
          question: "What is the most likely diagnosis?",
          marks: 1,
          modelAnswer: [
            "Hyperosmolar hyperglycaemic state (HHS) with concurrent high-AG metabolic acidosis likely from sepsis (lactate 4.8) and concurrent metabolic alkalosis from vomiting",
          ],
        },
        {
          label: "c",
          question: "List two (2) precipitants per category below (excluding sepsis): (i) cardiovascular, (ii) gastrointestinal, (iii) medications.",
          marks: 6,
          modelAnswer: [
            "Cardiovascular: myocardial infarction, pulmonary embolism, stroke",
            "Gastrointestinal: GI haemorrhage, acute pancreatitis",
            "Medications: corticosteroid initiation, thiazide diuretics, phenytoin, inadequate or discontinued insulin, beta-blockers (impair insulin release), antipsychotics (metabolic effects)",
          ],
        },
        {
          label: "d",
          question: "List six (6) management priorities including doses and targets where applicable.",
          marks: 6,
          modelAnswer: [
            "IV fluid resuscitation: 0.9% NaCl 1 L/hr initially; target SBP > 100 mmHg, HR < 120, UO 0.5 mL/kg/hr; adjust rate as glucose falls",
            "Potassium replacement: 10 mmol/hr IV in fluids; maintain K⁺ 3.5–5.5 mmol/L; withhold insulin if K⁺ < 3.5",
            "Insulin infusion: 0.05 units/kg/hr (HHS — use low-dose to avoid precipitous osmolality drop); do NOT start insulin until fluid resuscitation underway",
            "Dextrose co-infusion: start 5–10% dextrose when BGL < 15 mmol/L to maintain glucose 10–15 mmol/L",
            "Empirical antibiotics (if sepsis): ceftriaxone 2 g IV + metronidazole 500 mg IV (cover source based on focus)",
            "Anticoagulation: prophylactic LMWH — HHS patients have very high DVT/PE risk",
            "Disposition: ICU/HDU admission; endocrinology review",
          ],
        },
      ],
    },
  ],

  orthopaedics: [
    {
      id: "ortho-saq-001",
      scenario:
        "A 26-year-old female presents to your rural referral hospital ED after a head-on MVC. She is conscious with severe left groin and thigh pain. The left lower limb is internally rotated and adducted. X-ray pelvis confirms posterior dislocation of the native left hip.",
      totalMarks: 12,
      tags: ["Hip dislocation", "Procedural sedation", "Sciatic nerve", "AVN"],
      reference: "ACEM Orthopaedics Curriculum 8.1; NSW Health Trauma CPG 2024",
      parts: [
        {
          label: "a",
          question: "What are your immediate priorities for this patient?",
          marks: 3,
          modelAnswer: [
            "Primary trauma survey — exclude other life-threatening injuries (haemorrhage, pneumothorax, abdominal injury) and haemodynamic assessment",
            "Define the injury: hip X-ray to confirm dislocation and identify associated fractures",
            "Analgesia: IV morphine 0.1 mg/kg ± intranasal fentanyl (rapid onset) to enable assessment and facilitate reduction",
            "Permissive hypotension if haemodynamically compromised from associated injuries",
          ],
        },
        {
          label: "b",
          question: "What additional bony injuries are associated with posterior hip dislocation?",
          marks: 3,
          modelAnswer: [
            "Posterior acetabular wall fracture (most common associated fracture)",
            "Acetabular column fracture",
            "Fracture of the femoral head (pipkin fracture)",
            "Fracture of the femoral neck or proximal shaft",
          ],
        },
        {
          label: "c",
          question: "What acute neurovascular complication must be excluded?",
          marks: 1,
          modelAnswer: [
            "Sciatic nerve injury — assess sensation in sciatic distribution (posterior thigh, calf, foot) and foot dorsiflexion/plantarflexion before and after reduction",
          ],
        },
        {
          label: "d",
          question:
            "This is her only injury. She is haemodynamically stable with severe pain despite aggressive analgesia. How would you proceed?",
          marks: 2,
          modelAnswer: [
            "Emergency closed reduction under procedural sedation (propofol or ketamine + midazolam) with orthopaedics as proceduralist; anaesthetics standby",
            "If reduction fails in ED: proceed to operating theatre under general anaesthesia; be prepared to manage the airway if deep sedation required for reduction attempts",
          ],
        },
        {
          label: "e",
          question: "What long-term complication is specific to posterior hip dislocation?",
          marks: 1,
          modelAnswer: [
            "Avascular necrosis (AVN) of the femoral head — risk increases significantly with delay to reduction > 6 hours",
          ],
        },
        {
          label: "f",
          question: "What post-reduction imaging is required and why?",
          marks: 2,
          modelAnswer: [
            "Post-reduction AP pelvis X-ray: confirm concentric reduction, exclude iatrogenic fracture",
            "CT pelvis: mandatory post-reduction — identifies intra-articular fragments, occult acetabular fracture pattern, and Pipkin femoral head fractures not visible on plain film; guides operative planning",
          ],
        },
      ],
    },
  ],

  environmental: [
    {
      id: "env-saq-001",
      scenario:
        "A 56-year-old female patient presents to triage with generalised abdominal pain, tongue swelling, and intermittent stridor. She has a history of similar episodes. She takes ramipril for hypertension and has no known allergies.",
      totalMarks: 12,
      tags: ["Angioedema", "Hereditary angioedema", "ACE inhibitor", "Airway"],
      reference: "NZ Formulary 2026; ACEM Environmental Emergencies; Australasian Society of Clinical Immunology",
      parts: [
        {
          label: "a",
          question: "List three (3) causes of angioedema and give one (1) example of each.",
          marks: 6,
          modelAnswer: [
            "Hereditary angioedema (HAE): C1-inhibitor deficiency (type I or II) — autosomal dominant; triggers include trauma, stress, oestrogen",
            "Medication-induced: ACE inhibitors (bradykinin accumulation — NOT IgE-mediated; onset can be years after starting; first-line is stopping the drug) — also thrombolytics, NSAIDs, oestrogen-containing contraceptives",
            "Allergic/IgE-mediated: food (nuts, shellfish, eggs), insect venom (bee, wasp), idiopathic",
          ],
        },
        {
          label: "b",
          question: "List four (4) specific treatments with doses you would consider for hereditary angioedema.",
          marks: 4,
          modelAnswer: [
            "C1-inhibitor concentrate (Berinert) 20 units/kg IV — most effective specific treatment; replaces deficient C1-inhibitor",
            "Icatibant 30 mg SC — bradykinin B2 receptor antagonist; self-injectable; effective for HAE attacks",
            "Fresh frozen plasma (FFP) 2 units IV — contains C1-inhibitor; second-line if specific agents unavailable",
            "Tranexamic acid 1 g IV — antifibrinolytic; reduces bradykinin generation; useful adjunct",
            "Hydrocortisone 100 mg IV + promethazine 25 mg IV — limited evidence in HAE but reasonable adjuncts",
          ],
          examinerNotes: "Note: adrenaline and antihistamines have minimal effect in HAE (not IgE-mediated) but are reasonable to give if diagnosis uncertain.",
        },
        {
          label: "c",
          question: "List two (2) investigations that may assist in identifying the underlying cause.",
          marks: 2,
          modelAnswer: [
            "C1-inhibitor level and function (C1-INH antigen and functional assay) — reduced in HAE type I and II",
            "Serum tryptase (taken within 1 hour of event) — elevated in mast-cell-mediated (allergic/IgE) angioedema, normal in HAE",
            "C4 level: chronically low in HAE (consumed); normal in drug-induced or allergic causes",
          ],
        },
      ],
    },
  ],

  anaesthesia: [
    {
      id: "anaes-saq-001",
      scenario:
        "A 67-year-old male presents with 18 hours of worsening central abdominal pain now generalised. He has AF (on apixaban), hypertension, and prior open appendicectomy. HR 118 irregular, BP 94/60, RR 24, SpO₂ 97%, Temp 37.9°C. Abdomen is distended with guarding and rebound. Bowel sounds absent. VBG: pH 7.28, lactate 6.5, HCO₃ 17. CT confirms acute mesenteric ischaemia with bowel infarction.",
      totalMarks: 12,
      tags: ["Mesenteric ischaemia", "Anticoagulant reversal", "Surgical emergency", "Apixaban"],
      reference: "NZ Formulary 2026; ACEM Abdominal Emergencies Curriculum; Dunn Online Vascular",
      parts: [
        {
          label: "a",
          question: "Other than mesenteric ischaemia, list four (4) urgent surgical differential diagnoses.",
          marks: 4,
          modelAnswer: [
            "Perforated viscus (peptic ulcer, diverticular disease)",
            "Strangulated small bowel obstruction (adhesions from prior laparotomy)",
            "Ruptured abdominal aortic aneurysm (AAA)",
            "Acute pancreatitis with necrosis",
            "Closed-loop small bowel obstruction",
            "Fulminant colitis with toxic megacolon",
          ],
        },
        {
          label: "b",
          question: "Outline immediate resuscitation and stabilisation priorities for the first 15 minutes.",
          marks: 6,
          modelAnswer: [
            "Haemodynamic support: two large-bore IV cannulae; 1 L crystalloid bolus with reassessment; peripheral vasopressor (noradrenaline) to target MAP ≥ 65 mmHg",
            "Antibiotic therapy: piperacillin–tazobactam 4.5 g IV OR ceftriaxone 2 g IV + metronidazole 500 mg IV within 1 hour",
            "Apixaban reversal: andexanet alfa (ANNEXA-4) OR PCC 50 units/kg — discuss with haematology; essential before surgery",
            "Surgical referral: immediate — this patient requires emergency laparotomy",
            "NG tube decompression; IDC for hourly urine output monitoring",
            "Analgesia: IV morphine 2.5–5 mg titrated; avoid delaying surgery for pain control",
            "EFAST to assess for free fluid/AAA and guide immediate OT vs CT",
          ],
        },
        {
          label: "c",
          question: "What is the definitive management of confirmed bowel infarction from mesenteric ischaemia?",
          marks: 2,
          modelAnswer: [
            "Emergency laparotomy with resection of all non-viable bowel (extent guided by intraoperative assessment)",
            "Revascularisation if technically feasible (embolectomy or bypass for arterial occlusion) ± planned second-look laparotomy at 24–48 h",
            "Postoperative ICU admission for haemodynamic support, nutrition, and monitoring for short-bowel syndrome if extensive resection required",
          ],
        },
      ],
    },
  ],

  "renal-resp": [
    {
      id: "renal-saq-001",
      scenario:
        "An adult patient presents with severe left flank pain radiating to the groin. You perform a bedside POCUS to evaluate for obstructive renal colic.",
      totalMarks: 12,
      tags: ["Renal colic", "POCUS", "Hydronephrosis", "Ultrasound"],
      reference: "ACEM POCUS Curriculum; Monash Health SAQ 2026.1; Emergency Ultrasound Guidelines",
      parts: [
        {
          label: "a",
          question: "List four (4) sonographic features of obstructive renal colic.",
          marks: 4,
          modelAnswer: [
            "Hydronephrosis (calyceal dilatation, graded I–IV by severity)",
            "Hydroureter (ureteric dilatation > 3 mm)",
            "Absent ureteric jet on colour Doppler (normal jet from ureter into bladder absent on the affected side)",
            "Large ureteric calculus (> 5 mm, usually > 7 mm to cause significant obstruction)",
            "Perinephric fluid ('renal sweating' — high-grade obstruction)",
            "Probe tenderness directly over the kidney",
          ],
          examinerNotes: "Hydronephrosis and renal pelvis dilatation are the same finding — award only one mark.",
        },
        {
          label: "b",
          question: "List three (3) sonographic terms used to identify and confirm a renal calculus.",
          marks: 3,
          modelAnswer: [
            "Echogenic structure (bright/hyperechoic focus within the collecting system)",
            "Posterior acoustic shadowing (shadow distal to the calculus from sound attenuation)",
            "Twinkling artefact on colour Doppler (rapid colour change artefact at the calculus surface — highly specific)",
            "Comet-tail artefact (reverberation artefact — less specific than twinkling)",
          ],
          examinerNotes: "Do not accept: 'radiopaque', 'bright', 'hyperdensity' (CT terminology). Must use ultrasound-specific terminology.",
        },
        {
          label: "c",
          question: "List three (3) renal conditions that may be mistaken for hydronephrosis.",
          marks: 3,
          modelAnswer: [
            "Para-pelvic renal cysts (anechoic cysts in the renal hilum — may mimic dilated calyces)",
            "Extra-renal pelvis (normal variant — large pelvis outside renal capsule)",
            "Prominent renal vessels (on colour Doppler — distinguished by flow signal)",
            "Full bladder causing physiological collecting system dilatation",
            "Congenital megacalyces or renal duplication",
          ],
        },
        {
          label: "d",
          question: "What is the correct ultrasound probe for this assessment and why?",
          marks: 2,
          modelAnswer: [
            "Curvilinear (convex) low-frequency probe (2–5 MHz): provides adequate depth penetration to visualise deep retroperitoneal structures (kidney, ureter); larger footprint suitable for scanning large organs through intercostal or flank windows",
          ],
        },
      ],
    },
  ],

  radiology: [
    {
      id: "radio-saq-001",
      scenario:
        "A 65-year-old female presents with sudden left-sided hearing loss described as a 'seashell sound' with associated tinnitus for 24 hours. No trauma, no recent surgery. She takes ramipril for hypertension.",
      totalMarks: 12,
      tags: ["SSNHL", "Sensorineural hearing loss", "ENT emergency", "Steroids"],
      reference: "ACEM ENT Emergencies; NZ Formulary 2026; Royal Australasian College of Surgeons",
      parts: [
        {
          label: "a",
          question: "List three (3) conductive and three (3) sensorineural causes of hearing loss in this patient.",
          marks: 6,
          modelAnswer: [
            "Conductive causes: acute otitis media; chronic suppurative otitis media; cerumen/wax impaction; obstructing cholesteatoma; foreign body in canal",
            "Sensorineural causes: idiopathic sudden sensorineural hearing loss (SSNHL — most likely here); viral (EBV, HSV, mumps); Ménière's disease; acoustic neuroma (vestibular schwannoma); drug toxicity (aminoglycosides, furosemide, cisplatin); autoimmune (Cogan syndrome, SLE)",
          ],
          examinerNotes: "Trauma and acoustic trauma are incorrect for this patient (stem states no trauma). Autoimmune alone without an example does not score.",
        },
        {
          label: "b",
          question: "Otoscopy shows a normal tympanic membrane bilaterally. Complete the tuning fork findings for the right ear (affected) vs left ear (normal).",
          marks: 2,
          modelAnswer: [
            "Weber test: lateralises to LEFT (unaffected) ear — sound conducted to cochlea with better sensorineural function",
            "Rinne test (right/affected ear): AC > BC (positive Rinne) — but both reduced compared to left; left ear: AC > BC normally",
          ],
        },
        {
          label: "c",
          question: "What treatment would you commence with dose and duration?",
          marks: 1,
          modelAnswer: [
            "High-dose prednisolone 1 mg/kg/day (50–75 mg daily) orally for 7–14 days, then taper over following 7 days",
          ],
        },
        {
          label: "d",
          question: "Outline further management and disposition including rationale.",
          marks: 3,
          modelAnswer: [
            "Recognise SSNHL as an ENT emergency — window for treatment is narrow and recovery rates decline significantly after 2 weeks",
            "Urgent audiology referral for formal audiogram within 24–48 hours to confirm diagnosis and baseline",
            "Urgent ENT referral within 48 hours — no longer than 2 weeks for intratympanic steroid injection consideration as primary or salvage therapy",
            "MRI IAM (internal auditory meatus) with gadolinium: exclude acoustic neuroma or central cause",
          ],
        },
      ],
    },
  ],
};

export function getSAQsForTopic(slug: string): SAQ[] {
  return saqBank[slug] ?? [];
}
