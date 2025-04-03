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
    saturday: "Saturday: 10:00 - 16:00",
    sunday: "Sunday: 10:00 - 14:00",
  },
  foundedYear: 2005,
  socialMedia: {
    facebook: "https://facebook.com/petcarevet",
    instagram: "https://instagram.com/petcarevet",
    twitter: "https://twitter.com/petcarevet",
  },
}

export const navigation = [
  { name: "Acasa", href: "/" },
  { name: "Despre noi", href: "/about" },
  { name: "Servicii", href: "/services" },
  { name: "Echipa", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export const homePage = {
  hero: {
    title: "Îngrijire veterinară cu pasiune și dedicare. 🐾",
    description:
      "La BB Veterinary, fiecare animal primește atenția și grija pe care o merită. Ne dedicăm sănătății și bunăstării companionului tău prin servicii veterinare atente, profesionale și pline de empatie. Pentru noi, fiecare pacient este unic, iar îngrijirea lor este mai mult decât o misiune – este pasiunea noastră.",
  },
  services: {
    title: "Our Veterinary Services",
    description: "Comprehensive care for all your pet's health needs",
    items: [
      {
        icon: "Stethoscope",
        title: "Wellness Exams",
        description: "Regular check-ups to keep your pet healthy",
        content:
          "Comprehensive physical examinations, vaccinations, and preventative care to ensure your pet's long-term health.",
      },
      {
        icon: "Syringe",
        title: "Vaccinations",
        description: "Protection against common diseases",
        content: "Age-appropriate vaccines to protect your pet from preventable diseases and maintain their health.",
      },
      {
        icon: "Microscope",
        title: "Diagnostic Services",
        description: "Advanced testing and imaging",
        content:
          "State-of-the-art laboratory testing, digital X-rays, and ultrasound to diagnose your pet's condition accurately.",
      },
    ],
  },
  whyChooseUs: {
    title: "Why Choose PetCare",
    description: "We're committed to providing exceptional care for your beloved pets",
    items: [
      {
        icon: "Heart",
        title: "Compassionate Care",
        description: "We treat every pet with the love and attention they deserve, just like they're our own.",
      },
      {
        icon: "Award",
        title: "Experienced Team",
        description:
          "Our veterinarians and staff have years of experience and ongoing education in the latest techniques.",
      },
      {
        icon: "Clock",
        title: "Convenient Hours",
        description: "We offer flexible appointment times to accommodate your busy schedule.",
      },
    ],
  },
  testimonials: {
    title: "What Our Clients Say",
    description: "Hear from pet owners who trust us with their beloved companions",
    items: [
      {
        text: "Dr. Smith and the entire team at PetCare have been taking care of our dog Max for years. They're always thorough, kind, and make both of us feel comfortable. I wouldn't trust anyone else with Max's health!",
        name: "Sarah Johnson",
        role: "Dog owner",
      },
      {
        text: "When our cat Whiskers needed emergency surgery, the team at PetCare was amazing. They explained everything clearly, performed the procedure quickly, and followed up to make sure she was recovering well. We're forever grateful!",
        name: "Michael Thompson",
        role: "Cat owner",
      },
    ],
  },
  cta: {
    title: "Ready to schedule a visit?",
    description: "Book an appointment today and give your pet the care they deserve.",
  },
}

export const contactPage = {
  hero: {
    title: "Contact Us",
    description: "We're here to help with all your pet care needs",
  },
  getInTouch: {
    title: "Get in Touch",
    description:
      "Have questions about our services or need to schedule an appointment? Contact us using the information below or fill out the form, and we'll get back to you as soon as possible.",
  },
  contactForm: {
    title: "Send Us a Message",
    description: "Fill out the form below and we'll get back to you as soon as possible",
  },
  map: {
    title: "Find Us",
    description: "We're conveniently located in the heart of Animalville",
  },
  faq: {
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about our services",
    items: [
      {
        question: "Do you offer emergency services?",
        answer:
          "We provide emergency care during our regular business hours. For after-hours emergencies, we recommend contacting our emergency line at (555) 987-6543 or visiting the 24-hour Animal Emergency Hospital at 456 Emergency Lane.",
      },
      {
        question: "How do I schedule an appointment?",
        answer:
          "You can schedule an appointment by calling our office, using our online booking form, or sending us an email. We'll respond as quickly as possible to confirm your appointment time.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept cash, credit cards (Visa, MasterCard, American Express, Discover), debit cards, and pet insurance. We also offer CareCredit as a financing option for eligible clients.",
      },
      {
        question: "Do you offer house calls?",
        answer:
          "Yes, we offer limited house calls for special circumstances. Please contact our office to discuss your needs and to check availability for this service.",
      },
    ],
  },
}

export const servicesPage = {
  hero: {
    title: "Our Veterinary Services",
    description: "Comprehensive care for all your pet's health needs",
  },
  services: [
    {
      icon: "Stethoscope",
      title: "Wellness Exams",
      description: "Regular check-ups to keep your pet healthy",
      content:
        "Comprehensive physical examinations, vaccinations, and preventative care to ensure your pet's long-term health. We recommend annual wellness exams for adult pets and semi-annual exams for senior pets.",
    },
    {
      icon: "Syringe",
      title: "Vaccinations",
      description: "Protection against common diseases",
      content:
        "Age-appropriate vaccines to protect your pet from preventable diseases. We create customized vaccination schedules based on your pet's lifestyle, risk factors, and health status.",
    },
    {
      icon: "Microscope",
      title: "Diagnostic Services",
      description: "Advanced testing and imaging",
      content:
        "State-of-the-art laboratory testing, digital X-rays, and ultrasound to diagnose your pet's condition accurately. Our in-house lab provides quick results for many common tests.",
    },
    {
      icon: "Scissors",
      title: "Surgical Services",
      description: "From routine to advanced procedures",
      content:
        "Comprehensive surgical care including spay/neuter, soft tissue surgery, and orthopedic procedures. We use the latest techniques and monitoring equipment to ensure your pet's safety.",
    },
    {
      icon: "Tooth",
      title: "Dental Care",
      description: "Maintaining oral health",
      content:
        "Professional dental cleanings, digital dental X-rays, extractions, and oral surgery to keep your pet's teeth and gums healthy. We also provide guidance on home dental care.",
    },
    {
      icon: "HeartPulse",
      title: "Emergency Care",
      description: "Help when you need it most",
      content:
        "Urgent care services during regular business hours for sudden illnesses or injuries. We also coordinate with local emergency hospitals for after-hours care.",
    },
    {
      icon: "Pill",
      title: "Pharmacy",
      description: "Medications and supplements",
      content:
        "In-house pharmacy stocked with medications, prescription diets, and supplements to treat a variety of conditions. We also offer online prescription refills for your convenience.",
    },
    {
      icon: "X",
      title: "Radiology",
      description: "Digital imaging technology",
      content:
        "Digital X-rays provide clear images with less radiation exposure, allowing us to diagnose conditions affecting the bones, chest, and abdomen. Results are available within minutes.",
    },
  ],
  speciesSpecific: {
    title: "Species-Specific Care",
    description: "We provide specialized care for different types of pets",
    species: [
      {
        icon: "Dog",
        name: "Dogs",
        description: "Comprehensive care for dogs of all breeds and ages, from puppies to seniors.",
      },
      {
        icon: "Cat",
        name: "Cats",
        description: "Specialized feline medicine in a cat-friendly environment to reduce stress.",
      },
      {
        icon: "Rabbit",
        name: "Small Mammals",
        description: "Expert care for rabbits, guinea pigs, hamsters, ferrets, and other small pets.",
      },
      {
        icon: "Bird",
        name: "Birds & Exotics",
        description: "Specialized care for birds, reptiles, and other exotic pets.",
      },
    ],
  },
}

