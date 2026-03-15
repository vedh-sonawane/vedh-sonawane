import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiPython,
  SiJavascript,
  SiTensorflow,
  SiOpencv
} from "react-icons/si";
import { HiHeart } from "react-icons/hi2";

type Language = "en" | "fr" | "hi";

const roles = [
  "Lead Sensei @ Code Ninjas",
  "AI Researcher",
  "Full-Stack Developer"
];

interface LocaleStrings {
  heroSubtitle: string;
  heroBadge: string;
  heroCodeLine: string;
  navSkills: string;
  navProjects: string;
  navSensei: string;
  ctaViewWork: string;
  ctaAiSkillset: string;
  skillsHeading: string;
  skillsSubheading: string;
  skillPythonDesc: string;
  skillPythonUsage: string;
  skillJsDesc: string;
  skillJsUsage: string;
  skillTfDesc: string;
  skillTfUsage: string;
  skillCvDesc: string;
  skillCvUsage: string;
  projectsHeading: string;
  projectsSubheading: string;
  proj1Tag: string;
  proj1Title: string;
  proj1Desc: string;
  proj1Tech: string;
  proj2Tag: string;
  proj2Title: string;
  proj2Desc: string;
  proj2Tech: string;
  proj3Tag: string;
  proj3Title: string;
  proj3Desc: string;
  proj3Tech: string;
  experienceHeading: string;
  experienceSubheading: string;
  exp1Label: string;
  exp1Role: string;
  exp1Title: string;
  exp1Desc: string;
  exp2Label: string;
  exp2Role: string;
  exp2Title: string;
  exp2Desc: string;
  exp3Label: string;
  exp3Role: string;
  exp3Title: string;
  exp3Desc: string;
  exp4Label: string;
  exp4Role: string;
  exp4Title: string;
  exp4Desc: string;
  expPowerStat: string;
  expPowerLabel: string;
  expStudents: string;
  terminalTitle: string;
  neuralProfile: string;
  neuralProfileOnline: string;
    whoisLine1: string;
  whoisLine2: string;
  whoisLine3: string;
  whoisNeural: string;
  whoisPlayful: string;
  whoisMagic: string;
  whoisNotMath: string;
  footerDeployedFrom: string;
  footerGitHub: string;
  musicHeading: string;
  musicSubheading: string;
  streamWhileScroll: string;
  musicNote: string;
  altPlaylist: string;
}

const translations: Record<Language, LocaleStrings> = {
  en: {
    heroSubtitle:
      "Building neural-native experiences at the edge of code and cognition.",
    heroBadge: "Software Developer • AI Enthusiast",
    heroCodeLine: "CODE / NEURAL SYSTEMS / SENSEI ENERGY",
    navSkills: "Skills",
    navProjects: "Projects",
    navSensei: "Sensei",
    ctaViewWork: "View Neural Work",
    ctaAiSkillset: "AI Skillset",
    skillsHeading: "AI SKILLS GRID",
    skillsSubheading:
      "A floating stack of neural-native tools, tuned for building intelligent systems that feel effortless.",
    skillPythonDesc: "Deep learning, scripting, data pipelines.",
    skillPythonUsage:
      "Powering Bio‑Sync posture detection, automation scripts, and mini‑projects that teach concepts to 100+ students.",
    skillJsDesc: "Interactive web, Node.js backends, tooling.",
    skillJsUsage:
      "Used across hackathon projects and Code Ninjas lessons — from browser games to full React apps like Eco‑Ledger.",
    skillTfDesc: "Neural architectures from prototype to production.",
    skillTfUsage:
      "Drives the AI stress simulation in Neural‑Flux, experimenting with model load, burnout, and optimization strategies.",
    skillCvDesc: "Real‑time computer vision and perception.",
    skillCvUsage:
      "Backbone of Bio‑Sync — tracking skeletal landmarks with MediaPipe to understand posture and ergonomic health.",
    projectsHeading: "NEURAL PROJECT GALLERY",
    projectsSubheading:
      "Selected builds from hackathons where neural systems met real-world constraints.",
    proj1Tag: "Neural‑Flux • DeltaHacks",
    proj1Title: "Neural‑Flux — adaptive signal intelligence for noisy environments",
    proj1Desc:
      'Immersive 3D simulation in Unity that visualizes AI "stress" — neural nodes and particle systems react to fluctuating data loads, resource bottlenecks, and model burnout in real time.',
    proj1Tech: "PARTICLE BACKPLANE / LIVE NODE REACTIONS",
    proj2Tag: "Bio‑Sync • Hack the North",
    proj2Title: "Bio‑Sync — skeletal landmark intelligence for human‑in‑the‑loop systems",
    proj2Desc:
      "Health‑tech application that uses Python, OpenCV, and MediaPipe to track 33 skeletal landmarks from a webcam feed, monitor spinal alignment, and trigger subtle alerts when poor posture persists.",
    proj2Tech: "SKELETON LANDMARK VISUAL / OPENCV + NEURAL COORDINATES",
    proj3Tag: "Eco‑Ledger • DeerHacks",
    proj3Title: "Eco‑Ledger — blockchain‑verified carbon credit tracker",
    proj3Desc:
      "A React and Solidity‑powered web app that helps community gardens track and visualize carbon reduction efforts, backed by Firebase and simple verification flows for transparent, credible impact logs.",
    proj3Tech: "JAVASCRIPT • SOLIDITY • REACT • FIREBASE",
    experienceHeading: "SENSEI EXPERIENCE TIMELINE",
    experienceSubheading:
      "Code dojo sessions, shipped projects, and the student stories that shaped Vedh as a mentor.",
    exp1Label: "2018 — 2019",
    exp1Role: "Python Club • Early Builder",
    exp1Title: "Started teaching classmates the basics of Python, Scratch, and game logic as the founder of a school Python Club.",
    exp1Desc:
      "Led sessions on variables, loops, and problem‑solving — laying the foundation for the sensei energy that now powers Code Ninjas classes.",
    exp2Label: "2020 — 2022",
    exp2Role: "Community Builder • School & Local Clubs",
    exp2Title: "Volunteered across leadership, learning buddies, and local events — mentoring younger students and organizing activities.",
    exp2Desc:
      "Ran coding help sessions, organized events, and kept spaces running smoothly — learning how to explain complex topics with patience and clarity.",
    exp3Label: "2023 — 2024",
    exp3Role: "Hackathons • Neural‑Flux, Bio‑Sync, Eco‑Ledger",
    exp3Title: "Built Neural‑Flux, Bio‑Sync, and Eco‑Ledger — projects that blend AI, computer vision, and web tech into playful, impactful tools.",
    exp3Desc:
      "From AI stress simulations to posture‑aware ergonomics and blockchain‑verified carbon tracking, each build pushed deeper into real‑world problem spaces.",
    exp4Label: "2025 — 2026 • Present",
    exp4Role: "Application Developer / Lead Sensei • Code Ninjas",
    exp4Title: "Developing Python mini‑projects, game dev experiences, and AI‑flavored lessons that keep young builders genuinely engaged.",
    exp4Desc:
      "Mentored 100+ students on Python (Pygame, Pandas) and game dev tools like JavaScript, MakeCode Arcade, C#, and Unity — contributing to measurable growth in enrollments while making debugging and root‑cause analysis feel like part of the game.",
    expPowerStat: "POWER STAT",
    expPowerLabel: "Impact as Lead Sensei",
    expStudents: "STUDENTS MENTORED",
    terminalTitle: "Terminal Mode",
    neuralProfile: "Neural Profile",
    neuralProfileOnline: "Online",
    whoisLine1: "→ builder at the intersection of",
    whoisLine2: "and",
    whoisLine3: "→ shipping systems that feel like",
    whoisNeural: "neural networks",
    whoisPlayful: "playful UX",
    whoisMagic: "magic",
    whoisNotMath: ", not math.",
    footerDeployedFrom: "Last deployed from Vedh's neural workspace",
    footerGitHub: "GitHub",
    musicHeading: "Neural Soundscape",
    musicSubheading:
      "Tap into the same playlists Vedh codes to — a curated stream of focused, high-energy tracks.",
    streamWhileScroll: "STREAM WHILE YOU SCROLL",
    musicNote:
      "Music is streamed via Spotify embeds. You'll need to be logged into Spotify in this browser for full playback.",
    altPlaylist: "ALT PLAYLIST"
  },
  fr: {
    heroSubtitle:
      "Création d’expériences neurales à la frontière du code et de la cognition.",
    heroBadge: "Développeur logiciel • Passionné IA",
    heroCodeLine: "CODE / SYSTÈMES NEURAUX / ÉNERGIE SENSEI",
    navSkills: "Compétences",
    navProjects: "Projets",
    navSensei: "Sensei",
    ctaViewWork: "Voir les projets neuraux",
    ctaAiSkillset: "Compétences IA",
    skillsHeading: "GRILLE DE COMPÉTENCES IA",
    skillsSubheading:
      "Une pile flottante d’outils neuraux, pensée pour créer des systèmes intelligents et fluides.",
    skillPythonDesc: "Deep learning, scripts, pipelines de données.",
    skillPythonUsage:
      "Au cœur de la détection de posture Bio‑Sync, de scripts d’automatisation et de mini‑projets pour plus de 100 élèves.",
    skillJsDesc: "Web interactif, backends Node.js, outillage.",
    skillJsUsage:
      "Projets hackathon et cours Code Ninjas — jeux navigateur et apps React comme Eco‑Ledger.",
    skillTfDesc: "Architectures neuronales du prototype à la production.",
    skillTfUsage:
      "Pilote la simulation de stress IA dans Neural‑Flux — charge, burnout et stratégies d’optimisation.",
    skillCvDesc: "Vision par ordinateur et perception en temps réel.",
    skillCvUsage:
      "Squelette de Bio‑Sync — suivi des points squelettiques avec MediaPipe pour la posture et l’ergonomie.",
    projectsHeading: "GALERIE DE PROJETS NEURAUX",
    projectsSubheading:
      "Une sélection de projets de hackathons où les systèmes neuraux rencontrent le monde réel.",
    proj1Tag: "Neural‑Flux • DeltaHacks",
    proj1Title: "Neural‑Flux — intelligence du signal adaptative en environnements bruyants",
    proj1Desc:
      "Simulation 3D immersive dans Unity qui visualise le « stress » IA — nœuds et particules réagissant en temps réel aux charges, goulots d’étranglement et burnout du modèle.",
    proj1Tech: "PARTICULES / RÉACTIONS DE NŒUDS EN DIRECT",
    proj2Tag: "Bio‑Sync • Hack the North",
    proj2Title: "Bio‑Sync — intelligence des points squelettiques pour systèmes human‑in‑the‑loop",
    proj2Desc:
      "Application santé qui utilise Python, OpenCV et MediaPipe pour suivre 33 points squelettiques via webcam, surveiller l’alignement spinal et déclencher des alertes en cas de mauvaise posture.",
    proj2Tech: "VISUAL SQUELETTE / OPENCV + COORDONNÉES NEURALES",
    proj3Tag: "Eco‑Ledger • DeerHacks",
    proj3Title: "Eco‑Ledger — suivi de crédits carbone vérifiés par blockchain",
    proj3Desc:
      "Application web React et Solidity pour que les jardins communautaires suivent et visualisent la réduction carbone, avec Firebase et flux de vérification pour des bilans transparents.",
    proj3Tech: "JAVASCRIPT • SOLIDITY • REACT • FIREBASE",
    experienceHeading: "PARCOURS D’EXPÉRIENCE SENSEI",
    experienceSubheading:
      "Sessions dojo de code, projets livrés et histoires d’élèves qui ont façonné Vedh comme mentor.",
    exp1Label: "2018 — 2019",
    exp1Role: "Python Club • Premier animateur",
    exp1Title:
      "Enseignement des bases de Python, Scratch et de la logique de jeu en fondant un club Python à l’école.",
    exp1Desc:
      "Sessions sur variables, boucles et résolution de problèmes — base de l’énergie sensei aux Code Ninjas.",
    exp2Label: "2020 — 2022",
    exp2Role: "Animateur communautaire • École et clubs locaux",
    exp2Title:
      "Bénévolat en leadership, soutien aux élèves et événements locaux — mentorat et organisation d’activités.",
    exp2Desc:
      "Aide au code, organisation d’événements et gestion d’espaces — expliquer des sujets complexes avec patience et clarté.",
    exp3Label: "2023 — 2024",
    exp3Role: "Hackathons • Neural‑Flux, Bio‑Sync, Eco‑Ledger",
    exp3Title:
      "Réalisation de Neural‑Flux, Bio‑Sync et Eco‑Ledger — projets mêlant IA, vision et web de façon ludique et impactante.",
    exp3Desc:
      "Des simulations de stress IA à l’ergonomie posture et au suivi carbone blockchain — chaque projet a creusé des problèmes concrets.",
    exp4Label: "2025 — 2026 • Présent",
    exp4Role: "Développeur d’applications / Lead Sensei • Code Ninjas",
    exp4Title:
      "Développement de mini‑projets Python, jeux et leçons à saveur IA pour garder les jeunes builders engagés.",
    exp4Desc:
      "Mentorat de plus de 100 élèves en Python (Pygame, Pandas), JavaScript, MakeCode Arcade, C# et Unity — croissance des inscriptions et du débogage comme partie du jeu.",
    expPowerStat: "STAT IMPACT",
    expPowerLabel: "Impact en tant que Lead Sensei",
    expStudents: "ÉLÈVES MENTORÉS",
    terminalTitle: "Mode Terminal",
    neuralProfile: "Profil Neural",
    neuralProfileOnline: "En ligne",
    whoisLine1: "→ builder à l’intersection de",
    whoisLine2: "et",
    whoisLine3: "→ des systèmes qui font",
    whoisNeural: "réseaux de neurones",
    whoisPlayful: "UX ludique",
    whoisMagic: "magie",
    whoisNotMath: ", pas des maths.",
    footerDeployedFrom:
      "Dernier déploiement depuis l’espace de travail neural de Vedh",
    footerGitHub: "GitHub",
    musicHeading: "Paysage Sonore Neural",
    musicSubheading:
      "Les mêmes playlists que Vedh utilise pour coder — un flux de morceaux énergiques et concentrés.",
    streamWhileScroll: "STREAM PENDANT QUE VOUS SCROLLEZ",
    musicNote:
      "La musique est diffusée via Spotify. Connectez-vous à Spotify dans ce navigateur pour une lecture complète.",
    altPlaylist: "PLAYLIST ALT"
  },
  hi: {
    heroSubtitle:
      "कोड और सोच की सीमा पर न्यूरल‑नेटिव अनुभव बनाते हुए।",
    heroBadge: "सॉफ्टवेयर डेवलपर • एआई उत्साही",
    heroCodeLine: "कोड / न्यूरल सिस्टम्स / सेंसई एनर्जी",
    navSkills: "कौशल",
    navProjects: "प्रोजेक्ट",
    navSensei: "सेंसई",
    ctaViewWork: "न्यूरल प्रोजेक्ट देखें",
    ctaAiSkillset: "एआई स्किलसेट",
    skillsHeading: "एआई स्किल्स ग्रिड",
    skillsSubheading:
      "न्यूरल‑नेटिव टूल्स का फ़्लोटिंग स्टैक, जिनसे बुद्धिमान सिस्टम सहज महसूस होते हैं।",
    skillPythonDesc: "डीप लर्निंग, स्क्रिप्टिंग, डेटा पाइपलाइन।",
    skillPythonUsage:
      "बायो‑सिंक पोस्चर डिटेक्शन, ऑटोमेशन स्क्रिप्ट्स और 100+ छात्रों के लिए मिनी‑प्रोजेक्ट्स।",
    skillJsDesc: "इंटरैक्टिव वेब, Node.js बैकएंड, टूलिंग।",
    skillJsUsage:
      "हैकाथॉन प्रोजेक्ट्स और कोड निंजा लेसन्स — ब्राउज़र गेम्स से लेकर इको‑लेजर जैसे React ऐप्स।",
    skillTfDesc: "प्रोटोटाइप से प्रोडक्शन तक न्यूरल आर्किटेक्चर।",
    skillTfUsage:
      "न्यूरल‑फ्लक्स में एआई स्ट्रेस सिमुलेशन — मॉडल लोड, बर्नआउट और ऑप्टिमाइज़ेशन।",
    skillCvDesc: "रियल‑टाइम कंप्यूटर विजन और पर्सेप्शन।",
    skillCvUsage:
      "बायो‑सिंक की रीढ़ — मीडियापाइप से स्केलेटल लैंडमार्क ट्रैकिंग, पोस्चर और एर्गोनॉमिक्स।",
    projectsHeading: "न्यूरल प्रोजेक्ट गैलरी",
    projectsSubheading:
      "हैकाथॉन प्रोजेक्ट्स जहाँ न्यूरल सिस्टम्स ने असली दुनिया की चुनौतियों से मुलाक़ात की।",
    proj1Tag: "न्यूरल‑फ्लक्स • डेल्टाहैक्स",
    proj1Title: "न्यूरल‑फ्लक्स — शोरग्रस्त माहौल के लिए एडाप्टिव सिग्नल इंटेलिजेंस",
    proj1Desc:
      "यूनिटी में इमर्सिव 3D सिमुलेशन जो एआई \"स्ट्रेस\" दिखाता है — न्यूरल नोड्स और पार्टिकल सिस्टम डेटा लोड, बॉटलनेक और मॉडल बर्नआउट पर रियल टाइम में रिएक्ट करते हैं।",
    proj1Tech: "पार्टिकल बैकप्लेन / लाइव नोड रिएक्शन्स",
    proj2Tag: "बायो‑सिंक • हैक द नॉर्थ",
    proj2Title: "बायो‑सिंक — ह्यूमन‑इन‑द‑लूप सिस्टम्स के लिए स्केलेटल लैंडमार्क इंटेलिजेंस",
    proj2Desc:
      "हेल्थ‑टेक ऐप जो पायथन, ओपनसीवी और मीडियापाइप से वेबकैम फीड से 33 स्केलेटल लैंडमार्क ट्रैक करता है, स्पाइनल अलाइनमेंट मॉनिटर करता है और खराब पोस्चर पर अलर्ट देता है।",
    proj2Tech: "स्केलेटन लैंडमार्क विजुअल / ओपनसीवी + न्यूरल कोऑर्डिनेट्स",
    proj3Tag: "इको‑लेजर • डियरहैक्स",
    proj3Title: "इको‑लेजर — ब्लॉकचेन‑वेरिफाइड कार्बन क्रेडिट ट्रैकर",
    proj3Desc:
      "रिएक्ट और सॉलिडिटी वाला वेब ऐप जो कम्युनिटी गार्डन्स को कार्बन कटौती ट्रैक और विज़ुअलाइज़ करने में मदद करता है, फायरबेस और वेरिफिकेशन फ्लो के साथ।",
    proj3Tech: "जावास्क्रिप्ट • सॉलिडिटी • रिएक्ट • फायरबेस",
    experienceHeading: "सेंसई अनुभव टाइमलाइन",
    experienceSubheading:
      "कोड डोजो सत्र, पूरे किए गए प्रोजेक्ट्स और वे छात्र जिनकी कहानियों ने वेध के मेंटर रूप को गढ़ा।",
    exp1Label: "2018 — 2019",
    exp1Role: "पायथन क्लब • शुरुआती बिल्डर",
    exp1Title:
      "स्कूल पायथन क्लब के संस्थापक के रूप में सहपाठियों को पायथन, स्क्रैच और गेम लॉजिक की बुनियाद सिखाई।",
    exp1Desc:
      "वेरिएबल्स, लूप्स और प्रॉब्लम‑सॉल्विंग पर सत्र — कोड निंजा क्लासेस की सेंसई एनर्जी की नींव।",
    exp2Label: "2020 — 2022",
    exp2Role: "कम्युनिटी बिल्डर • स्कूल और लोकल क्लब्स",
    exp2Title:
      "लीडरशिप, लर्निंग बडीज़ और लोकल इवेंट्स में स्वेच्छा — छोटे छात्रों को मेंटर करना और एक्टिविटीज़ आयोजित करना।",
    exp2Desc:
      "कोडिंग हेल्प सत्र, इवेंट्स आयोजित किए और स्पेस चलाए — जटिल टॉपिक्स धैर्य और क्लैरिटी से समझाना सीखा।",
    exp3Label: "2023 — 2024",
    exp3Role: "हैकाथॉन • न्यूरल‑फ्लक्स, बायो‑सिंक, इको‑लेजर",
    exp3Title:
      "न्यूरल‑फ्लक्स, बायो‑सिंक और इको‑लेजर बनाए — प्रोजेक्ट्स जो एआई, कंप्यूटर विजन और वेब टेक को प्लेफुल, इम्पैक्टफुल टूल्स में मिलाते हैं।",
    exp3Desc:
      "एआई स्ट्रेस सिमुलेशन से पोस्चर‑अवेयर एर्गोनॉमिक्स और ब्लॉकचेन‑वेरिफाइड कार्बन ट्रैकिंग तक — हर बिल्ड ने रियल‑वर्ल्ड प्रॉब्लम स्पेस में गहराई बढ़ाई।",
    exp4Label: "2025 — 2026 • वर्तमान",
    exp4Role: "ऐप्लिकेशन डेवलपर / लीड सेंसई • कोड निंजा",
    exp4Title:
      "पायथन मिनी‑प्रोजेक्ट्स, गेम डेव एक्सपीरियंस और एआई‑फ्लेवर्ड लेसन्स जो यंग बिल्डर्स को सच में एंगेज रखते हैं।",
    exp4Desc:
      "100+ छात्रों को पायथन (पायगेम, पांडास), जावास्क्रिप्ट, मेककोड आर्केड, C# और यूनिटी पर मेंटर किया — एनरोलमेंट ग्रोथ और डिबगिंग को गेम का हिस्सा बनाया।",
    expPowerStat: "पावर स्टैट",
    expPowerLabel: "लीड सेंसई के रूप में इम्पैक्ट",
    expStudents: "छात्र मेंटर किए",
    terminalTitle: "टर्मिनल मोड",
    neuralProfile: "न्यूरल प्रोफाइल",
    neuralProfileOnline: "ऑनलाइन",
    whoisLine1: "→ बिल्डर जहाँ मिलते हैं",
    whoisLine2: "और",
    whoisLine3: "→ ऐसे सिस्टम जो लगते हैं",
    whoisNeural: "न्यूरल नेटवर्क",
    whoisPlayful: "प्लेफुल UX",
    whoisMagic: "जादू",
    whoisNotMath: ", गणित नहीं।",
    footerDeployedFrom:
      "आखिरी डिप्लॉय वेध के न्यूरल वर्कस्पेस से",
    footerGitHub: "गिटहब",
    musicHeading: "न्यूरल साउंडस्केप",
    musicSubheading:
      "वही प्लेलिस्ट जिन पर वेध कोड लिखते हैं — फोकस्ड और हाई‑एनर्जी ट्रैक्स की क्यूरेटेड स्ट्रीम।",
    streamWhileScroll: "स्क्रॉल करते हुए स्ट्रीम करें",
    musicNote:
      "म्यूज़िक स्पॉटिफाई एम्बेड से स्ट्रीम होता है। पूरी प्लेबैक के लिए इस ब्राउज़र में स्पॉटिफाई में लॉग इन करें।",
    altPlaylist: "अल्ट प्लेलिस्ट"
  }
};

function useTypewriter(items: string[], typingSpeed = 80, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let mounted = true;
    let timeout: number;

    const type = (text: string, charIndex: number, deleting: boolean) => {
      if (!mounted) return;

      if (!deleting && charIndex <= text.length) {
        setDisplayed(text.slice(0, charIndex));
        timeout = window.setTimeout(
          () => type(text, charIndex + 1, false),
          typingSpeed
        );
      } else if (!deleting && charIndex > text.length) {
        timeout = window.setTimeout(
          () => type(text, text.length - 1, true),
          pause
        );
      } else if (deleting && charIndex >= 0) {
        setDisplayed(text.slice(0, charIndex));
        timeout = window.setTimeout(
          () => type(text, charIndex - 1, true),
          typingSpeed / 2
        );
      } else {
        timeout = window.setTimeout(() => {
          setIndex((prev) => (prev + 1) % items.length);
        }, typingSpeed);
      }
    };

    type(items[index], 0, false);

    return () => {
      mounted = false;
      window.clearTimeout(timeout);
    };
  }, [index, items, typingSpeed, pause]);

  return displayed;
}

type ScrollTarget = "projects" | "skills" | "experience" | null;
type ScrollEffect = "neural" | "grid" | "particle" | "zen";

function TransitionOverlay({
  target,
  effect,
  onComplete
}: {
  target: ScrollTarget;
  effect: ScrollEffect;
  onComplete: () => void;
}) {
  const didScroll = useCallback(() => {
    const el = document.getElementById(target!);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    onComplete();
  }, [target, onComplete]);

  useEffect(() => {
    if (!target) return;
    const t = setTimeout(didScroll, 950);
    return () => clearTimeout(t);
  }, [target, didScroll]);

  if (!target) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* View Neural Work: neural burst */}
      {effect === "neural" && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0.9 }}
          animate={{
            scale: [0, 2.5, 5],
            opacity: [0.9, 0.4, 0]
          }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.95),rgba(129,140,248,0.5),transparent_70%)] blur-sm" />
        </motion.div>
      )}
      {/* Skills: grid lines reveal */}
      {effect === "grid" && (
        <motion.div
          className="absolute inset-0 bg-slate-950/98"
          initial={{ clipPath: "inset(50% 50% 50% 50%)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-px">
            {Array.from({ length: 64 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-cyan-500/40"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (i % 8) * 0.02 + Math.floor(i / 8) * 0.02, duration: 0.25 }}
              />
            ))}
          </div>
        </motion.div>
      )}
      {/* Projects nav: particle scatter */}
      {effect === "particle" && (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-cyan-400"
              initial={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              animate={{
                scale: 0,
                opacity: 0,
                x: (Math.cos((i / 30) * Math.PI * 2) * 300) + (Math.random() - 0.5) * 100,
                y: (Math.sin((i / 30) * Math.PI * 2) * 300) + (Math.random() - 0.5) * 100
              }}
              transition={{ duration: 0.75, delay: i * 0.015 }}
            />
          ))}
        </div>
      )}
      {/* Sensei: zen circle */}
      {effect === "zen" && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-slate-950/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="h-64 w-64 rounded-full border-2 border-cyan-400/60 border-dashed"
            initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
            animate={{ scale: 1.2, opacity: 0.6, rotate: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          <motion.div
            className="absolute h-32 w-32 rounded-full border border-emerald-400/50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const next = { x: e.clientX, y: e.clientY };
      setPosition(next);
      setTrail((prev) => ({
        x: prev.x + (next.x - prev.x) * 0.12,
        y: prev.y + (next.y - prev.y) * 0.12
      }));
    };
    const handleDown = () => {
      setClicked(true);
    };
    const handleUp = () => {
      setClicked(false);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[60] mix-blend-screen"
      aria-hidden
    >
      {/* Glitchy glow trail */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 blur-3xl transition-transform duration-150"
        style={{
          left: trail.x,
          top: trail.y
        }}
      >
        <div className="h-24 w-24 rounded-full bg-[conic-gradient(from_180deg,rgba(56,189,248,0.3),rgba(129,140,248,0.45),rgba(34,197,94,0.35),rgba(56,189,248,0.3))] opacity-80 mix-blend-screen animate-pulse" />
      </div>

      {/* Targeting cursor */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          left: position.x,
          top: position.y
        }}
      >
        <div
          className={`relative flex items-center justify-center rounded-full border border-cyan-300/70 bg-cyan-300/10 shadow-neon-blue ${
            clicked ? "h-8 w-8" : "h-10 w-10"
          } transition-all duration-75`}
        >
          <div className="h-1/2 w-px bg-cyan-300/80" />
          <div className="absolute h-px w-1/2 bg-cyan-300/80" />
          <div className="absolute h-2 w-2 rounded-full bg-cyan-300" />
        </div>
      </div>
    </div>
  );
}

function LofiCharacter() {
  return (
    <div
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/80 bg-slate-900/90 text-[20px] shadow-[0_0_18px_rgba(56,189,248,0.5)]"
      title="Vedh's workspace"
      aria-hidden
    >
      <svg
        viewBox="0 0 64 64"
        className="h-7 w-7 text-cyan-200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Lofi-style character: head with headphones */}
        <circle cx="32" cy="22" r="10" />
        <path d="M22 22c0-5 4-9 10-9s10 4 10 9" />
        <path d="M18 22a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v14H18V22z" />
        <path d="M14 26a2 2 0 0 1 2-2h2v10h-2a2 2 0 0 1-2-2V26z" />
        <path d="M46 26h2a2 2 0 0 1 2 2v6h-4V26z" />
        <path d="M20 24h24v2H20z" />
        <circle cx="26" cy="20" r="1.5" fill="currentColor" />
        <circle cx="38" cy="20" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
}

const HEART_STORAGE_KEY = "vedh-site-heart-given";
const HEART_COUNT_KEY = "vedh-site-heart-count";

function HeartButton() {
  const [hasGiven, setHasGiven] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const given = localStorage.getItem(HEART_STORAGE_KEY) === "true";
    const stored = localStorage.getItem(HEART_COUNT_KEY);
    setHasGiven(given);
    setCount(stored ? parseInt(stored, 10) : 0);
  }, []);

  const handleClick = () => {
    if (hasGiven) return;
    const newCount = count + 1;
    localStorage.setItem(HEART_STORAGE_KEY, "true");
    localStorage.setItem(HEART_COUNT_KEY, String(newCount));
    setHasGiven(true);
    setCount(newCount);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={hasGiven}
      className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
        hasGiven
          ? "border-rose-500/50 bg-rose-500/10 text-rose-300 cursor-default"
          : "border-rose-400/60 bg-rose-500/10 text-rose-200 hover:bg-rose-500/20 hover:text-rose-100"
      }`}
      title={hasGiven ? "You've already sent a heart!" : "Send a heart"}
    >
      <HiHeart className={`h-4 w-4 ${hasGiven ? "fill-rose-400" : ""}`} />
      <span>{hasGiven ? `${count} heart` : "Heart"}</span>
    </button>
  );
}

interface TerminalEntry {
  type: "input" | "output";
  text: string;
}

function TerminalMode({ language }: { language: Language }) {
  const [open, setOpen] = useState(false);
  const [command, setCommand] = useState("");
  const [entries, setEntries] = useState<TerminalEntry[]>([
    {
      type: "output",
      text: "booting vedh.neural-shell v1.0. type `help` to begin."
    }
  ]);

  const handleCommand = (value: string) => {
    const trimmed = value.trim().toLowerCase();
    const newEntries: TerminalEntry[] = [
      ...entries,
      { type: "input", text: `> ${value}` }
    ];

    if (trimmed === "help") {
      newEntries.push({
        type: "output",
        text:
          "available commands: help, contact, cv, music, clear\n" +
          " - contact: show email + links\n" +
          " - cv: download resume\n" +
          " - music: jump to music section\n" +
          " - clear: clear terminal"
      });
    } else if (trimmed === "contact") {
      newEntries.push({
        type: "output",
        text:
          "contact: sonawane.vedh14@gmail.com\n" +
          "github: https://github.com/vedh-sonawane\n" +
          "languages: English, Français, हिन्दी"
      });
    } else if (trimmed === "cv") {
      newEntries.push({
        type: "output",
        text: "triggering resume download -> Vedh_Sonawane_Resume.pdf"
      });
    } else if (trimmed === "music") {
      newEntries.push({
        type: "output",
        text: "opening neural soundscape section…"
      });
      const el = document.getElementById("music");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else if (trimmed === "clear") {
      setEntries([]);
      setCommand("");
      return;
    } else if (trimmed.length > 0) {
      newEntries.push({
        type: "output",
        text: `unknown command: ${trimmed}. type 'help' for options.`
      });
    }

    setEntries(newEntries);
    setCommand("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;
    handleCommand(command);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded-full border border-emerald-400/70 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition hover:bg-emerald-500/20 hover:text-emerald-50"
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
        {open ? "Exit Terminal Mode" : "Enter Terminal Mode"}
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-xl border border-slate-700/80 bg-slate-950/90 p-4 shadow-[0_0_40px_rgba(56,189,248,0.4)] backdrop-blur-xl"
        >
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="terminal-font text-xs text-slate-300">
                vedh@neural-shell:~/{translations.en.terminalTitle.toLowerCase()}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-xs text-slate-400 hover:text-slate-100"
            >
              close
            </button>
          </div>
          <div className="terminal-font mb-2 h-40 overflow-y-auto rounded-md bg-slate-950/60 p-3 text-xs text-slate-200">
            {entries.map((entry, idx) => (
              <div
                key={`${entry.type}-${idx}-${entry.text.slice(0, 8)}`}
                className={
                  entry.type === "input"
                    ? "text-emerald-300"
                    : "whitespace-pre-line text-slate-200"
                }
              >
                {entry.text}
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSubmit}
            className="terminal-font flex items-center gap-2 text-xs"
          >
            <span className="text-emerald-400">&gt;</span>
            <input
              autoFocus
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              className="flex-1 bg-transparent text-slate-100 outline-none placeholder:text-slate-500"
              placeholder="type a command (help, contact, cv, music, clear)"
            />
          </form>
        </motion.div>
      )}
    </>
  );
}

function SkillsGrid({ t }: { t: LocaleStrings }) {
  const skills = [
    { name: "Python", icon: SiPython, description: t.skillPythonDesc, usage: t.skillPythonUsage },
    { name: "JavaScript", icon: SiJavascript, description: t.skillJsDesc, usage: t.skillJsUsage },
    { name: "TensorFlow", icon: SiTensorflow, description: t.skillTfDesc, usage: t.skillTfUsage },
    { name: "OpenCV", icon: SiOpencv, description: t.skillCvDesc, usage: t.skillCvUsage }
  ];

  return (
    <section
      id="skills"
      className="relative mx-auto mt-24 max-w-6xl px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.18),transparent_55%)]" />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-400"
      >
        {t.skillsHeading}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65, delay: 0.1 }}
        className="mx-auto mb-10 max-w-2xl text-center text-sm text-slate-400"
      >
        {t.skillsSubheading}
      </motion.p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{
                y: -6,
                scale: 1.03,
                boxShadow: "0 0 40px rgba(56, 189, 248, 0.55)"
              }}
              className="group relative overflow-hidden rounded-2xl glass-panel scanline-overlay"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.20),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex flex-col gap-3 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-slate-900/80 p-2 shadow-[0_0_15px_rgba(56,189,248,0.35)]">
                      <Icon className="h-6 w-6 text-electric-cyan" />
                    </span>
                    <span className="text-sm font-medium tracking-wide text-slate-50">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
                    AI CORE
                  </span>
                </div>
                <p className="text-xs text-slate-400 transition-opacity duration-200 group-hover:opacity-0">
                  {skill.description}
                </p>
                <p className="text-xs text-slate-300 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {skill.usage}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function ParticleBackground() {
  const particles = Array.from({ length: 18 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, idx) => {
        const size = 3 + (idx % 4);
        const delay = (idx % 6) * 0.8;
        return (
          <div
            key={idx}
            className="absolute rounded-full bg-cyan-300/60 blur-[1px]"
            style={{
              width: size,
              height: size,
              top: `${(idx * 13) % 100}%`,
              left: `${(idx * 29) % 100}%`,
              animation: `particle-drift 9s ease-in-out ${delay}s infinite alternate`
            }}
          />
        );
      })}
    </div>
  );
}

function SkeletonGraphic() {
  return (
    <svg
      viewBox="0 0 120 160"
      className="h-28 w-20 text-violet-300/90 drop-shadow-[0_0_12px_rgba(167,139,250,0.7)]"
    >
      <g
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <circle cx="60" cy="28" r="14" />
        <line x1="60" y1="42" x2="60" y2="80" />
        <line x1="60" y1="52" x2="35" y2="70" />
        <line x1="60" y1="52" x2="85" y2="70" />
        <line x1="60" y1="80" x2="40" y2="112" />
        <line x1="60" y1="80" x2="80" y2="112" />
        <circle cx="35" cy="70" r="4" />
        <circle cx="85" cy="70" r="4" />
        <circle cx="40" cy="112" r="4" />
        <circle cx="80" cy="112" r="4" />
        <circle cx="60" cy="80" r="4" />
      </g>
    </svg>
  );
}

function ProjectsSection({ t }: { t: LocaleStrings }) {
  return (
    <section
      id="projects"
      className="relative mx-auto mt-28 max-w-6xl px-4 sm:px-6 lg:px-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-400"
      >
        {t.projectsHeading}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65, delay: 0.1 }}
        className="mx-auto mb-10 max-w-2xl text-center text-sm text-slate-400"
      >
        {t.projectsSubheading}
      </motion.p>
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          whileHover={{
            y: -6,
            boxShadow: "0 0 45px rgba(56, 189, 248, 0.6)"
          }}
          className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-slate-950/70 p-6 shadow-[0_0_45px_rgba(15,118,110,0.6)]"
        >
          <ParticleBackground />
          <div className="relative flex flex-col gap-3">
            <span className="inline-flex w-fit items-center rounded-full bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
              {t.proj1Tag}
            </span>
            <h3 className="text-lg font-semibold text-slate-50">
              {t.proj1Title}
            </h3>
            <p className="text-sm text-slate-300">
              {t.proj1Desc}“stress” —
            </p>
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/80">
              {t.proj1Tech}
            </p>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          whileHover={{
            y: -6,
            boxShadow: "0 0 45px rgba(167, 139, 250, 0.7)"
          }}
          className="relative overflow-hidden rounded-3xl border border-violet-400/35 bg-slate-950/80 p-6 shadow-[0_0_40px_rgba(129,140,248,0.7)]"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-violet-400 via-fuchsia-400 to-cyan-300" />
          <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1 space-y-3">
              <span className="inline-flex w-fit items-center rounded-full bg-violet-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-violet-200">
                {t.proj2Tag}
              </span>
              <h3 className="text-lg font-semibold text-slate-50">
                {t.proj2Title}
              </h3>
              <p className="text-sm text-slate-300">
                {t.proj2Desc}
              </p>
              <p className="text-xs uppercase tracking-[0.22em] text-violet-200/80">
                {t.proj2Tech}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-center lg:mt-0 lg:ml-4">
              <SkeletonGraphic />
            </div>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          whileHover={{
            y: -6,
            boxShadow: "0 0 45px rgba(52, 211, 153, 0.7)"
          }}
          className="relative overflow-hidden rounded-3xl border border-emerald-400/40 bg-slate-950/80 p-6 shadow-[0_0_40px_rgba(16,185,129,0.7)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.25),transparent_55%),radial-gradient(circle_at_bottom,_rgba(34,197,94,0.35),transparent_60%)]" />
          <div className="relative space-y-3">
            <span className="inline-flex w-fit items-center rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-200">
              {t.proj3Tag}
            </span>
            <h3 className="text-lg font-semibold text-slate-50">
              {t.proj3Title}
            </h3>
            <p className="text-sm text-slate-300">
              {t.proj3Desc}
            </p>
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-200/80">
              {t.proj3Tech}
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

function SenseiTimeline({ t }: { t: LocaleStrings }) {
  return (
    <section
      id="experience"
      className="relative mx-auto mt-28 max-w-5xl px-4 sm:px-6 lg:px-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-400"
      >
        {t.experienceHeading}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65, delay: 0.1 }}
        className="mx-auto mb-10 max-w-2xl text-center text-sm text-slate-400"
      >
        {t.experienceSubheading}
      </motion.p>

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-slate-700 to-transparent sm:left-1/2" />

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="grid gap-10 sm:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] sm:items-start"
        >
          <div className="space-y-8 sm:col-start-1">
            <div className="relative pl-8 sm:pl-0 sm:text-right">
              <div className="absolute left-[7px] top-2 h-3 w-3 rounded-full border border-cyan-300/80 bg-midnight-onyx shadow-[0_0_14px_rgba(56,189,248,0.9)] sm:left-auto sm:right-[-7px]" />
              <div className="inline-block rounded-2xl border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-slate-300">
                {t.exp1Label}
              </div>
              <div className="mt-3 inline-block max-w-md rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 shadow-[0_0_26px_rgba(15,23,42,1)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  {t.exp1Role}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-50">
                  {t.exp1Title}
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  {t.exp1Desc}
                </p>
              </div>
            </div>

            <div className="relative pl-8 sm:pl-0 sm:text-right">
              <div className="absolute left-[7px] top-2 h-3 w-3 rounded-full border border-cyan-300/80 bg-midnight-onyx shadow-[0_0_14px_rgba(56,189,248,0.9)] sm:left-auto sm:right-[-7px]" />
              <div className="inline-block rounded-2xl border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-slate-300">
                {t.exp2Label}
              </div>
              <div className="mt-3 inline-block max-w-md rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 shadow-[0_0_26px_rgba(15,23,42,1)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  {t.exp2Role}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-50">
                  {t.exp2Title}
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  {t.exp2Desc}
                </p>
              </div>
            </div>

            <div className="relative pl-8 sm:pl-0 sm:text-right">
              <div className="absolute left-[7px] top-2 h-3 w-3 rounded-full border border-cyan-300/80 bg-midnight-onyx shadow-[0_0_14px_rgba(56,189,248,0.9)] sm:left-auto sm:right-[-7px]" />
              <div className="inline-block rounded-2xl border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-slate-300">
                {t.exp3Label}
              </div>
              <div className="mt-3 inline-block max-w-md rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 shadow-[0_0_26px_rgba(15,23,42,1)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  {t.exp3Role}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-50">
                  {t.exp3Title}
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  {t.exp3Desc}
                </p>
              </div>
            </div>

            <div className="relative pl-8 sm:pl-0 sm:text-right">
              <div className="absolute left-[7px] top-2 h-3 w-3 rounded-full border border-emerald-300/80 bg-midnight-onyx shadow-[0_0_18px_rgba(45,212,191,0.9)] sm:left-auto sm:right-[-7px]" />
              <div className="inline-block rounded-2xl border border-emerald-400/70 bg-emerald-500/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-emerald-200">
                {t.exp4Label}
              </div>
              <div className="mt-3 inline-block max-w-md rounded-2xl border border-slate-700/80 bg-slate-950/80 p-4 shadow-[0_0_32px_rgba(15,23,42,1)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  {t.exp4Role}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-50">
                  {t.exp4Title}
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  {t.exp4Desc}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-0 sm:col-start-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="glass-panel relative overflow-hidden rounded-3xl p-5 shadow-[0_0_50px_rgba(56,189,248,0.45)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_bottom,_rgba(34,197,94,0.25),transparent_55%)] opacity-80" />
              <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-300">
                    {t.expPowerStat}
                  </p>
                  <p className="mt-1 text-xs text-emerald-200/90">
                    {t.expPowerLabel}
                  </p>
                </div>
                <div className="text-right">
                  <p className="terminal-font text-3xl font-semibold tracking-[0.12em] text-emerald-300 drop-shadow-[0_0_25px_rgba(45,212,191,1)] sm:text-4xl">
                    100+
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-100/95">
                    {t.expStudents}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MusicSection({ t }: { t: LocaleStrings }) {
  return (
    <section
      id="music"
      className="relative mx-auto mt-28 max-w-6xl px-4 sm:px-6 lg:px-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-400"
      >
        {t.musicHeading.toUpperCase()}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65, delay: 0.1 }}
        className="mx-auto mb-10 max-w-2xl text-center text-sm text-slate-400"
      >
        {t.musicSubheading}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="glass-panel relative overflow-hidden rounded-3xl p-4 shadow-[0_0_40px_rgba(56,189,248,0.45)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.3),transparent_55%)] opacity-80" />
        <div className="relative grid gap-4 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)]">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
              {t.streamWhileScroll}
            </p>
            <p className="text-xs text-slate-400">
              {t.musicNote}
            </p>
            <div className="overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/70">
              <iframe
                title="Coding Mode playlist"
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX5trt9i14X7j?utm_source=generator"
                width="100%"
                height="200"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
              {t.altPlaylist}
            </p>
            <div className="overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/70">
              <iframe
                title="Programming coffee playlist"
                src="https://open.spotify.com/embed/playlist/2mtlhuFVOFMn6Ho3JmrLc2?utm_source=generator"
                width="100%"
                height="200"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [scrollTransition, setScrollTransition] = useState<{
    target: ScrollTarget;
    effect: ScrollEffect;
  } | null>(null);
  const typedText = useTypewriter(roles);

  const t = translations[language];

  const scrollWithEffect = (target: ScrollTarget, effect: ScrollEffect) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (target) setScrollTransition({ target, effect });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-950 via-midnight-onyx to-slate-950">
      <CustomCursor />
      <AnimatePresence mode="wait">
        {scrollTransition && (
          <TransitionOverlay
            key={scrollTransition.target + scrollTransition.effect}
            target={scrollTransition.target}
            effect={scrollTransition.effect}
            onComplete={() => setScrollTransition(null)}
          />
        )}
      </AnimatePresence>

      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.32),transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.32),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0,transparent_65%,rgba(15,23,42,0.95)_100%)]" />
      </div>
      <div className="spiral-orbit" />
      <div className="pixel-noise" />

      <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <LofiCharacter />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                Vedh Sonawane
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
                Neuro‑Minimal Portfolio
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:flex">
            <a
              href="#skills"
              onClick={scrollWithEffect("skills", "grid")}
              className="hover:text-cyan-300"
            >
              {t.navSkills}
            </a>
            <a
              href="#projects"
              onClick={scrollWithEffect("projects", "particle")}
              className="hover:text-cyan-300"
            >
              {t.navProjects}
            </a>
            <a
              href="#experience"
              onClick={scrollWithEffect("experience", "zen")}
              className="hover:text-cyan-300"
            >
              {t.navSensei}
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <HeartButton />
            <div className="hidden items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 sm:flex">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-1 ${
                  language === "en"
                    ? "text-cyan-300"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                EN
              </button>
              <span className="text-slate-700">/</span>
              <button
                type="button"
                onClick={() => setLanguage("fr")}
                className={`px-1 ${
                  language === "fr"
                    ? "text-cyan-300"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                FR
              </button>
              <span className="text-slate-700">/</span>
              <button
                type="button"
                onClick={() => setLanguage("hi")}
                className={`px-1 ${
                  language === "hi"
                    ? "text-cyan-300"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                HI
              </button>
            </div>
            <TerminalMode language={language} />
          </div>
        </div>
      </header>

      <main className="relative pb-24">
        <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pt-14 sm:px-6 sm:pt-20 lg:flex-row lg:items-center lg:px-8 lg:pt-24">
          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-200"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
              <span>{t.heroBadge}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <div className="relative inline-block">
                <h1 className="relative text-4xl font-semibold tracking-[0.22em] text-slate-100 sm:text-5xl lg:text-6xl">
                  <span className="block overflow-hidden text-[0.9em] uppercase">
                    <span className="relative z-20 block">
                      VEDH SONAWANE
                    </span>
                    <span className="pointer-events-none absolute inset-0 z-10 select-none text-cyan-400/70 mix-blend-screen blur-[0.5px] animate-glitch-1">
                      VEDH SONAWANE
                    </span>
                    <span className="pointer-events-none absolute inset-0 z-0 select-none text-violet-400/70 mix-blend-screen blur-[0.5px] animate-glitch-2">
                      VEDH SONAWANE
                    </span>
                  </span>
                </h1>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                {t.heroCodeLine}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="space-y-4"
            >
              <p className="max-w-2xl text-sm text-slate-300">{t.heroSubtitle}</p>
              <div className="flex flex-wrap items-center gap-3">
                <div className="terminal-font flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-950/70 px-4 py-2 text-xs text-slate-100 shadow-[0_0_20px_rgba(15,23,42,1)]">
                  <span className="text-cyan-300">$</span>
                  <span className="text-slate-400">roles</span>
                  <span className="text-cyan-400">=</span>
                  <span className="text-emerald-300">
                    “{typedText}
                    <span className="animate-pulse">▌</span>”
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                onClick={scrollWithEffect("projects", "neural")}
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-slate-950 shadow-[0_0_35px_rgba(56,189,248,0.9)] transition hover:bg-cyan-400"
              >
                {t.ctaViewWork}
                <span className="text-slate-950">↗</span>
              </a>
              <a
                href="#skills"
                onClick={scrollWithEffect("skills", "grid")}
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-200 hover:border-cyan-400/70 hover:text-cyan-200"
              >
                {t.ctaAiSkillset}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="flex-1"
          >
            <div className="relative mx-auto max-w-md space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: "0 0 40px rgba(56, 189, 248, 0.6)"
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-cyan-400/50 bg-slate-900/70 shadow-[0_0_40px_rgba(15,23,42,1)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.45),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(129,140,248,0.5),transparent_55%)] opacity-70" />
                <div className="relative">
                  <div className="overflow-hidden rounded-[2rem] border-b border-cyan-400/40">
                    <img
                      src="/vedh-hero.jpg"
                      alt="Vedh"
                      className="h-64 w-full object-cover object-center md:h-72"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-[2rem] bg-slate-950/90 p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-base font-semibold text-cyan-100">
                      This is me, Vedh! :)
                    </p>
                    <p className="text-xs text-slate-300">
                      Tech: coding, AI, hackathons, game dev, computer vision.
                    </p>
                    <p className="text-xs text-slate-300">
                      Non-tech: music, reading, gaming, coffee.
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">
                      Neural systems · Teaching · Building things that feel like magic
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="glass-panel relative overflow-hidden rounded-[1.75rem] border border-slate-700/80 p-5 shadow-[0_0_36px_rgba(15,23,42,1)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.4),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(129,140,248,0.45),transparent_55%)] opacity-70" />
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
                      {t.neuralProfile}
                    </p>
                    <span className="rounded-full bg-slate-900/80 px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-cyan-300">
                      {t.neuralProfileOnline}
                    </span>
                  </div>
                  <div className="terminal-font rounded-xl bg-slate-950/85 p-3 text-[11px] text-slate-200">
                    <p className="text-slate-400">
                      $ whois vedh.sonawane
                    </p>
                    <p className="mt-1 text-cyan-200">
                      {t.whoisLine1}{" "}
                      <span className="text-emerald-300">{t.whoisNeural}</span>{" "}
                      {t.whoisLine2} <span className="text-sky-300">{t.whoisPlayful}</span>.
                    </p>
                    <p className="mt-1 text-slate-400">
                      {t.whoisLine3}{" "}
                      <span className="text-violet-300">{t.whoisMagic}</span>
                      {t.whoisNotMath}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <SkillsGrid t={t} />
        <ProjectsSection t={t} />
        <SenseiTimeline t={t} />
        <MusicSection t={t} />
      </main>

      <footer className="border-t border-slate-800/70 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="uppercase tracking-[0.2em]">{t.footerDeployedFrom}</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/vedh-sonawane"
              target="_blank"
              rel="noreferrer"
              className="uppercase tracking-[0.22em] text-slate-400 hover:text-cyan-300"
            >
              {t.footerGitHub}
            </a>
            <div className="flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/70 px-2 py-1">
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Lang
              </span>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-1 text-[9px] ${
                  language === "en"
                    ? "text-cyan-300"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                EN
              </button>
              <span className="text-slate-700">/</span>
              <button
                type="button"
                onClick={() => setLanguage("fr")}
                className={`px-1 text-[9px] ${
                  language === "fr"
                    ? "text-cyan-300"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                FR
              </button>
              <span className="text-slate-700">/</span>
              <button
                type="button"
                onClick={() => setLanguage("hi")}
                className={`px-1 text-[9px] ${
                  language === "hi"
                    ? "text-cyan-300"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                HI
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

