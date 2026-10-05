export const helpQuestions = [
  {
    id: "zip-not-found",
    question: "📦 ZIP ఫైల్ కనిపించడం లేదు",
    answer: "మీకు WhatsApp లో డిజైన్ ఫైల్ వస్తే, WhatsApp చాట్ లో ఆ ఫైల్ పై నొక్కండి. లేదా ఫోన్ లో 'My Files' (ఫైల్ మేనేజర్) యాప్ ఓపెన్ చేసి 'Downloads' లేదా 'WhatsApp Documents' ఫోల్డర్ చూడండి.",
    icon: "FolderSearch",
    steps: [
      "1. WhatsApp ఓపెన్ చేసి ఫైల్ డౌన్లోడ్ చేయండి.",
      "2. ఫోన్ లో 'Files' లేదా 'My Files' యాప్ వెతకండి.",
      "3. 'Downloads' ఫోల్డర్ ఓపెన్ చేయండి. అక్కడ .zip ఫైల్ ఉంటుంది."
    ]
  },
  {
    id: "extract-not-found",
    question: "⬆️ Extract ఆప్షన్ కనిపించడం లేదు",
    answer: "ఫైల్ పై నొక్కినప్పుడు Extract లేదా Unzip రాకపోతే, ZIP ఫైల్ ను గట్టిగా నొక్కి పట్టుకోండి (Long Press). పైన లేదా కింద 'More' (మూడు చుక్కలు ⋮) నొక్కి 'Extract' ఎంచుకోండి.",
    icon: "ArchiveRestore",
    steps: [
      "1. ZIP ఫైల్ పై 2 సెకన్లు వేలు పెట్టి ఉంచండి.",
      "2. కింద 'Extract' లేదా 'Extract All' అని కనిపిస్తుంది.",
      "3. కనిపిస్తే దానిపై నొక్కండి."
    ]
  },
  {
    id: "pendrive-not-found",
    question: "💾 Pen Drive కనిపించడం లేదు",
    answer: "OTG అడాప్టర్ సరిగ్గా ఫోన్ కి కనెక్ట్ అయిందో లేదో చూడండి. ఫోన్ సెట్టింగ్స్ లో 'OTG' అని టైప్ చేసి, 'OTG Connection' ON లో ఉందో లేదో సరిచూసుకోండి.",
    icon: "Usb",
    steps: [
      "1. OTG ని తీసి మళ్లీ గట్టిగా పెట్టండి.",
      "2. ఫోన్ సెట్టింగ్స్ (Settings) ఓపెన్ చేయండి.",
      "3. 'OTG' వెతికి, స్విచ్ ON చేయండి."
    ]
  },
  {
    id: "otg-not-working",
    question: "🔌 OTG పని చేయడం లేదు",
    answer: "కొన్ని ఫోన్లలో OTG వాడటానికి సెట్టింగ్స్ లో OTG ఆన్ చేయాలి. Pen Drive లైట్ వెలుగుతుందో లేదో చూడండి.",
    icon: "PlugZap",
    steps: [
      "1. ఫోన్ రక్షణ కవర్ (Cover) తీసి OTG పెట్టండి.",
      "2. వేరే OTG అడాప్టర్ తో ప్రయత్నించండి."
    ]
  },
  {
    id: "copy-paste-help",
    question: "📋 Copy / Paste ఎలా చేయాలి?",
    answer: "డిజైన్ ఫైల్ పై నొక్కి పట్టుకుంటే 'Copy' ఆప్షన్ వస్తుంది. తర్వాత Pen Drive ఓపెన్ చేసి అక్కడ 'Paste' నొక్కాలి.",
    icon: "Copy",
    steps: [
      "1. ఫైల్ ని గట్టిగా నొక్కి పట్టుకోండి (Long Press).",
      "2. 'Copy' (కాపీ) నొక్కండి.",
      "3. Storage నుండి 'USB / Pen Drive' ఓపెన్ చేయండి.",
      "4. కింద లేదా పైన 'Paste' (పేస్ట్) నొక్కండి."
    ]
  }
];

export const embroideryFormats = [
  { ext: ".dst", name: "Tajima Format", desc: "ఎక్కువ మిషన్లకు పనిచేస్తుంది" },
  { ext: ".pes", name: "Brother / Baby Lock", desc: "బ్రదర్ మిషన్ల కోసం" },
  { ext: ".jef", name: "Janome Format", desc: "జనోమ్ మిషన్ల కోసం" },
  { ext: ".exp", name: "Melco / Bernina", desc: "బెర్నినా మిషన్ల కోసం" },
  { ext: ".vp3", name: "Husqvarna / Pfaff", desc: "పాఫ్ మిషన్ల కోసం" },
  { ext: ".design", name: "Standard Design File", desc: "సాధారణ డిజైన్ ఫైల్" }
];
