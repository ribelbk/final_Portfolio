/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bakhouche Ribel",
  title: "Salut, moi c'est Ribel",
  subTitle: emoji(
    "Je suis un passionné de Data Science et d’Intelligence Artificielle, maîtrisant des outils comme Python, Jupyter Notebook, Pandas, NumPy, ainsi que des frameworks de machine learning tels que Scikit-learn, TensorFlow et PyTorch. J’ai également de bonnes connaissances en gestion de bases de données SQL, en conteneurisation avec Docker, et en développement avec React et Node.js.."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: false // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ribelbk/MyProjects",
  linkedin: "https://www.linkedin.com/in/ribel-bakhouche-bbba7a28b/",
  gmail: "bakhoucheribel@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Ce que je fais",
  subTitle: "Passionné par la Data, l'Intelligence Artificielle et le Développement",
  skills: [
    emoji("⚡ Développement et implémentation de modèles IA & Machine Learning (LLM, GPT, Transformers, LangChain)"),
    emoji("⚡ Analyse de données avancée avec Pandas, NumPy, PySpark, pipelines ETL et visualisation"),
    emoji("⚡ Programmation multi-langages : Python, C#, C++, Java, JavaScript, Bash, PHP"),
    emoji("⚡ Maîtrise des environnements systèmes et DevOps : Linux, Docker, Git, VMware"),
    emoji("⚡ Compétences en web, bureautique et montage vidéo : HTML, CSS, Bootstrap, Microsoft 365, VBA, Adobe Premiere")
  ],
  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    }
  ],
  display: true
};


const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Université du Mans",
      logo: require("./assets/images/univLeMansLogo.png"), // remplace par ton logo ou supprime la ligne si pas d’image
      subHeader: "Master 1 Intelligence Artificielle et Data Science",
      duration: "2025 - 2027",
      desc: "Études spécialisées en Intelligence Artificielle, Machine Learning et Data Science.",
      descBullets: [
        "Analyse avancée de données",
        "Modèles de Machine Learning et Deep Learning",
        "Projets en IA appliquée"
      ]
    },
    {
      schoolName: "Université d'Avignon",
      logo: require("./assets/images/univAvignonLogo.png"),
      subHeader: "Licence Informatique",
      duration: "2023 - 2025",
      desc: "Formation solide en informatique générale, algorithmique et programmation.",
      descBullets: [
        "Bases de données et programmation",
        "Développement logiciel",
        "Architecture des systèmes"
      ]
    },
    {
      schoolName: "USTHB (Université des Sciences et Technologies Houari Boumediene)",
      logo: require("./assets/images/usthbLogo.png"),
      subHeader: "Premières années universitaires en informatique",
      duration: "2021 - 2023",
      desc: "Études fondamentales en informatique et mathématiques appliquées.",
      descBullets: [
        "Mathématiques pour l’informatique",
        "Programmation en C, C++",
        "Introduction aux systèmes"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Data Science & IA",
      progressPercentage: "85%"
    },
    {
      Stack: "Développement Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programmation & Algorithmes",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};


const workExperiences = {
  display: true,
  experience: [
    {
      role: "Stagiaire en IA & Réseaux",
      company: "Labo LIA",
      companylogo: require("./assets/images/laboLiaLogo.png"), // remplace par le logo si tu en as un
      date: "2024 – 2025",
      desc: "Développement d’un système d’analyse réseau intelligent pour la détection d’anomalies.",
      descBullets: [
        "Collecte, compression et analyse automatisées de logs avec Bash, Syslog, Wireshark et Cisco IOS.",
        "Utilisation de Python, Ollama (LLM) et Jupyter Notebook pour l’analyse intelligente.",
        "Génération de scripts de configuration réseau et visualisation des topologies avec Graphviz."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/roboticsLogo.png"), // remplace par un logo ou image pertinente
      projectName: "Développement de Fonctionnalités pour un Robot - Coupe de France de Robotique",
      projectDesc: `
        • Conception d'un robot autonome en Python avec détection d'objets utilisant OpenCV et caméra OAK-D Lite.
        • Développement d'une interface de simulation 2D intelligente sous Tkinter.
        • Déploiement du système sur carte Orange Pi avec pilotage via Arduino.
      `,
      footerLink: []
    },
    {
      image: require("./assets/images/avignonLogo.png"), // image à remplacer
      projectName: "Détection de fake news par machine learning - Avignon Université",
      projectDesc: `
        • Modèle ML en Python pour classifier articles vrais/faux via NLP.
        • Collecte, nettoyage, vectorisation des données (TF-IDF, Word2Vec).
        • Entraînement de régression logistique, Naïve Bayes, LSTM (TensorFlow).
        • Visualisation avec Matplotlib et Seaborn dans Jupyter Notebook.
      `,
      footerLink: []
    },
    {
      image: require("./assets/images/personalProjectLogo.png"), // image perso
      projectName: "Système de surveillance intelligente pour la détection pré-accident - Projet Personnel",
      projectDesc: `
        • Système d'analyse vidéo en Python pour prédire comportements à risque avant accident.
        • Détection d'objets sur vidéo avec modèles deep learning TensorFlow & PyTorch.
        • Analyse comportementale par ML avec Scikit-learn pour prédire actions dangereuses.
      `,
      footerLink: []
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Licence Informatique - Université d'Avignon",
      subtitle: "Formation en informatique, acquisition de solides compétences en programmation et algorithmie.",
      image: require("./assets/images/avignonLogo.png"), // Ajoute une image ou logo de l'Université d'Avignon
      imageAlt: "Université d'Avignon Logo",
      footerLink: []
    },
    {
      title: "Certification CCNA 1",
      subtitle: "Certification Cisco Certified Network Associate, niveau 1, validant mes compétences réseaux.",
      image: require("./assets/images/ccnaLogo.png"), // Ajouter logo CCNA si disponible
      imageAlt: "CCNA Logo",
      footerLink: []
    },
    {
      title: "Coupe de France de Robotique - Classement 18ème",
      subtitle: "Classé 18ème au concours national de robotique, démontrant mes compétences en robotique et programmation embarquée.",
      image: require("./assets/images/roboticsLogo.png"), // Ajouter logo ou image robotique
      imageAlt: "Coupe de France de Robotique",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  displayMediumBlogs: false,
  // autres champs...
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Ouvert aux opportunités d’alternance ou de collaboration sur des projets Data/IA. N'hésitez pas à me contacter !",
  number: "0664670943",
  email_address: "bakhoucheribel@gmail.com" // Change si tu veux un autre email
};


// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
