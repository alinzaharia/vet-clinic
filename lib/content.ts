// This file contains all the text content for the website
// Organized by page and section for easy updates

export const siteInfo = {
  name: "BB Veterinary Clinic",
  shortName: "BB Veterinary",
  address: "BB Veterinary, Bucharest, Romania",
  phone: "+40 767 499 522",
  emergencyPhone: "+40 742 538 905",
  email: "bbveterinary@gmail.com",
  hours: {
    weekdays: "Luni - Vineri: 10:00 - 20:00",
    saturday: "Sambata: 10:00 - 16:00",
    sunday: "Duminica: 10:00 - 14:00",
  },
  foundedYear: 2005,
  socialMedia: {
    facebook: "https://facebook.com/petcarevet",
    instagram: "https://instagram.com/bb.veterinary",
    twitter: "https://twitter.com/petcarevet",
  },
}

export const navigation = [
  { name: "Acasa", href: "/" },
  //{ name: "Despre noi", href: "/about" },
  { name: "Servicii", href: "/services" },
  //{ name: "Echipa", href: "/team" },
  //{ name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export const homePage = {
  hero: {
    title: "Îngrijire veterinară cu pasiune și dedicare. 🐾",
    description:
      "La BB Veterinary, fiecare animal primește atenția și grija pe care o merită. Ne dedicăm sănătății și bunăstării companionului tău prin servicii veterinare atente, profesionale și pline de empatie. Pentru noi, fiecare pacient este unic, iar îngrijirea lor este mai mult decât o misiune – este pasiunea noastră.",
  },
  services: {
    title: "Serviciile noastre",
    description: "Îngrijire completă pentru toate nevoile de sănătate ale animalului tău.",
    items: [
      {
        icon: "Stethoscope",
        title: "Examinări de sănătate",
        description: "Control medical regulat pentru a menține sănătatea animalului tău",
        content:
          "Examinări fizice complete și îngrijire preventivă pentru a asigura sănătatea pe termen lung a companionului tău.",
      },
      {
        icon: "Syringe",
        title: "Vaccinare",
        description: "Protecție împotriva bolilor virale comune",
        content: "Vaccinuri adecvate vârstei pentru a proteja animalul tău de boli virale prevenibile și pentru a-i menține sănătatea.",
      },
      {
        icon: "Microscope",
        title: "Servicii de Diagnostic",
        description: "Teste de laborator precise pentru diagnostic rapid",
        content:
          "Teste de laborator precise, inclusiv biochimie, hemoleucogramă și analize la microscop, pentru a diagnostica rapid și corect starea de sănătate a animalului tău.",
      },
    ],
  },
  whyChooseUs: {
    title: "De ce să alegi BB Veterinary",
    description: "Suntem dedicați să oferim îngrijire excepțională pentru animalele tale dragi.",
    items: [
      {
        icon: "Heart",
        title: "Îngrijire cu compasiune",
        description: "Tratăm fiecare animal cu dragostea și atenția pe care o merită, exact ca și cum ar fi al nostru.",
      },
      {
        icon: "Award",
        title: "Echipa cu experiență",
        description:
          "Medicii noștri veterinari și personalul au ani de experiență și educație continuă în cele mai noi tehnici veterinare.",
      },
      {
        icon: "Clock",
        title: "Program Flexibil",
        description: "Oferim intervale orare flexibile pentru programări, pentru a se potrivi cu programul tău încărcat. În plus, suntem disponibili la orice oră pentru urgențe, asigurându-ne că animalul tău primește îngrijirea necesară chiar și în momentele critice.",
      },
    ],
  },
  testimonials: {
    title: "Ce spun clienții noștri",
    description: "Ascultă părerile proprietarilor de animale care au încredere în noi pentru îngrijirea companionilor lor dragi.",
    items: [
      {
        text: "Foarte misto omuleții ❤️foarte drăgălași și super profi. Mi-a plăcut faptul ca pentru orice curiozitate și nevoie au fost alături de mine și Costeluș(motanul nostru). Acum Costeluș are și el un medic de familie 🧡",
        name: "Irina",
        role: "Proprietar de pisica",
      },
      {
        text: "Cele mai bune servicii veterinare. Domnii doctori sunt foarte bine pregătiți, sunt mai mult decât meseria dumnealor, sunt cu adevărat îngerii necuvântătoarelor. Ii apreciez cu toată fiinta mea!",
        name: "Florentina",
        role: "Proprietar de catei si pisici",
      },
    ],
  },
  cta: {
    title: "Pregătești o vizită?",
    description: "Programează o consultație astăzi și oferă-i animalului tău îngrijirea pe care o merită.",
  },
}

export const contactPage = {
  hero: {
    title: "Contactează-ne",
    description: "Suntem aici pentru a te ajuta cu toate nevoile de îngrijire ale animalului tău.",
  },
  getInTouch: {
    title: "Ia legătura cu noi",
    description:
      "Ai întrebări despre serviciile noastre sau vrei să programezi o consultație? Contactează-ne folosind informațiile de mai jos sau completează formularul, iar noi îți vom răspunde cât mai curând posibil.",
  },
  contactForm: {
    title: "Trimite-ne un mesaj",
    description: "Completează formularul de mai jos și îți vom răspunde cât mai curând posibil.",
  },
  map: {
    title: "Locatia",
    description: "Ne găsești pe Șoseaua Fundeni, nr. 168, sector 2, București.",
  },
  faq: {
    title: "Întrebări frecvente",
    description: "Găsește răspunsuri la întrebările comune despre serviciile noastre.",
    items: [
      {
        question: "Oferiți servicii de urgență?",
        answer:
          "Oferim îngrijire de urgență în timpul programului nostru de lucru. Pentru urgențe în afara orelor de program, recomandăm să contactați numerele afișate.",
      },
      {
        question: "Cum pot programa o consultație?",
        answer:
          "Poți programa o consultație sunând la biroul nostru, folosind formularul nostru de programare online sau trimițându-ne un email. Vom răspunde cât mai repede posibil pentru a confirma ora programării tale.",
      },
      {
        question: "Ce metode de plată acceptați?",
        answer:
          "Acceptăm numerar, carduri de credit (Visa, MasterCard, American Express, Discover).",
      },
      {
        question: "Oferiți consultații la domiciliu?",
        answer:
          "Da, oferim consultații la domiciliu în circumstanțe speciale. Te rugăm să contactezi biroul nostru pentru a discuta nevoile tale și pentru a verifica disponibilitatea acestui serviciu.",
      },
    ],
  },
}

export const servicesPage = {
  hero: {
    title: "Serviciile noastre veterinare",
    description: "Îngrijire completă pentru toate nevoile de sănătate ale animalului tău.",
  },
  services: [
    {
      icon: "Stethoscope",
      title: "Examinări de sănătate",
      description: "Control medical regulat pentru a menține sănătatea animalului tău",
      content:
        "Examinări fizice complete, imunizări și îngrijire preventivă pentru a asigura sănătatea pe termen lung a companionului tău. Recomandăm examene anuale pentru animalele adulte și examene semestriale pentru animalele senior.",
    },
    {
      icon: "Syringe",
      title: "Vaccinare",
      description: "Protecție împotriva bolilor virale comune",
      content:
        "Vaccinuri adecvate vârstei pentru a proteja animalul tău de boli virale prevenibile. Creăm programe de vaccinare personalizate în funcție de stilul de viață, factorii de risc și starea de sănătate a companionului tău.",
    },
    {
      icon: "Microscope",
      title: "Servicii de Diagnostic",
      description: "Teste de laborator precise pentru diagnostic rapid",
      content:
        "Teste de laborator precise, inclusiv biochimie, hemoleucogramă și analize la microscop, pentru a diagnostica rapid și corect starea de sănătate a animalului tău.",
    },
    {
      icon: "Scissors",
      title: "Servicii Chirurgicale",
      description: "De la proceduri de rutină la intervenții avansate",
      content:
        "Îngrijire chirurgicală completă, inclusiv sterilizare/castrare, chirurgie a țesuturilor moi și proceduri ortopedice. Folosim cele mai noi tehnici și echipamente de monitorizare pentru a asigura siguranța animalului tău.",
    },
    {
      icon: "Tooth",
      title: "Îngrijire Dentară",
      description: "Menținerea sănătății orale",
      content:
        "Curățări dentare profesionale, extracții și chirurgie orală pentru a menține dinții și gingiile animalului tău sănătoase. Oferim și recomandări pentru îngrijirea dentară la domiciliu.",
    },
    {
      icon: "HeartPulse",
      title: "Îngrijire de Urgență",
      description: "Ajutor atunci când ai nevoie cel mai mult",
      content:
        "Servicii de îngrijire urgentă în timpul programului de lucru pentru patologii sau leziuni neașteptate. De asemenea, colaborăm cu spitale de urgență locale pentru îngrijire după orele de program.",
    },
    {
      icon: "Pill",
      title: "Farmacie veterinara",
      description: "Medicamente și suplimente",
      content:
        "Farmacie internă bine aprovizionată cu medicamente, diete pe bază de prescripție medicală și suplimente pentru tratarea diverselor afecțiuni. Oferim și reînnoirea prescripțiilor online pentru confortul tău.",
    },
    
  ],
  speciesSpecific: {
    title: "Îngrijire specifică fiecărui tip de animal",
    description: "Oferim îngrijire specializată pentru diferite tipuri de animale de companie.",
    species: [
      {
        icon: "Dog",
        name: "Câini",
        description: "Îngrijire completă pentru câini de toate rasele și vârstele, de la căței tineri la seniori.",
      },
      {
        icon: "Cat",
        name: "Pisici",
        description: "Medicină veterinară specializată pentru pisici, într-un mediu prietenos cu ele, pentru a reduce stresul.",
      },     
    ],
  },
}