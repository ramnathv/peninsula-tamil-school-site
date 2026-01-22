// All preserved content from the original HTML site
// CRITICAL: This content must remain exactly as written

// Translation helper function
export function t(content, language = 'en') {
  if (typeof content === 'string') return content;
  return content[language] || content.en || '';
}

// Navigation translations
export const navigationTranslations = {
  home: { en: "Home", ta: "முகப்பு" },
  about: { en: "About Us", ta: "எங்களைப் பற்றி" },
  classes: { en: "Classes", ta: "வகுப்புகள்" },
  events: { en: "Events", ta: "நிகழ்வுகள்" },
  gallery: { en: "Gallery", ta: "படத்தொகுப்பு" },
  contact: { en: "Contact", ta: "தொடர்பு" },
  enrollNow: { en: "Enroll Now", ta: "இப்போதே பதிவு செய்யுங்கள்" }
};

export const schoolInfo = {
  name: "Peninsula Tamil School",
  tagline: "Preserving Tamil language and culture for future generations in the Bay Area.",
  phone: "",
  email: "principal@peninsulatamilschool.org",
  address: {
    venue: "Peninsula Tamil School",
    street: "3115 Del Monte St",
    city: "San Mateo",
    state: "CA",
    zip: "94403",
    full: "Classes are taught every Sunday at Hillsdale High School in San Mateo"
  },
  mailingAddress: "3115 Del Monte St, San Mateo, CA 94403",
  schedule: {
    day: "Every Sunday",
    time: "10:20 AM - 12:20 PM",
    duration: "34 weeks (August through May)",
    students: "Students Pre-K to Grade 7",
    welcome: "All levels welcome",
    mode: "In-person and hybrid instruction available"
  },
  social: {
    facebook: "https://www.facebook.com/PeninsulaTamilSchool",
    instagram: "https://www.instagram.com/peninsulatamilschool"
  },
  enrollmentLink: "https://tinyurl.com/PTSregistration2025-26",
  nonprofit: {
    status: "501(c)(3) Nonprofit Organization",
    ein: "45-5506063"
  },
  organization: {
    name: "Peninsula Indian Cultural Association (PICA)",
    description: "Peninsula Tamil School is part of the Peninsula Indian Cultural Association (PICA), a volunteer-driven organization that promotes Indian culture and languages."
  }
};

export const heroContent = {
  title: {
    en: "Welcome to Peninsula Tamil School",
    ta: "தீபகற்ப தமிழ் பள்ளிக்கு வரவேற்கிறோம்"
  },
  subtitle: {
    en: "Preserving Tamil Language and Culture for Future Generations",
    ta: "எதிர்கால சந்ததியினருக்கான தமிழ் மொழி மற்றும் பண்பாட்டைப் பாதுகாத்தல்"
  },
  primaryCTA: {
    en: "Enroll Now",
    ta: "இப்போதே பதிவு செய்யுங்கள்"
  },
  secondaryCTA: {
    en: "Learn More",
    ta: "மேலும் அறிக"
  }
};

export const missionContent = {
  title: {
    en: "Our Mission",
    ta: "எங்கள் நோக்கம்"
  },
  text: {
    en: "Peninsula Tamil School is a volunteer-driven, nonprofit organization dedicated to helping children and adults learn Tamil language and explore Indian culture. Part of the Peninsula Indian Cultural Association (PICA), we have been serving the San Francisco Bay Area community for over 17 years, providing quality Tamil education every Sunday with both in-person and hybrid instruction options.",
    ta: "தீபகற்ப தமிழ் பள்ளி, தன்னார்வலர்களால் இயக்கப்படும் இலாப நோக்கற்ற அமைப்பாகும். குழந்தைகள் மற்றும் பெரியவர்கள் தமிழ் மொழியை கற்றுக்கொள்ளவும் இந்திய பண்பாட்டை ஆராயவும் அர்ப்பணிக்கப்பட்டுள்ளது. தீபகற்ப இந்திய கலாசார சங்கத்தின் (PICA) ஒரு பகுதியாக, நாங்கள் 17 ஆண்டுகளுக்கும் மேலாக சான் பிரான்சிஸ்கோ வளைகுடா பகுதி சமூகத்திற்கு சேவை செய்து வருகிறோம். ஒவ்வொரு ஞாயிற்றுக்கிழமையும் நேரடி மற்றும் கலப்பின வகுப்புகளுடன் தரமான தமிழ் கல்வியை வழங்குகிறோம்."
  }
};

// Gallery content - preserved from original HTML
export const galleryContent = {
  title: {
    en: "Photo Gallery",
    ta: "படத்தொகுப்பு"
  },
  subtitle: {
    en: "Moments from our Tamil community",
    ta: "எங்கள் தமிழ் சமூகத்தின் தருணங்கள்"
  },
  callToAction: {
    text: {
      en: "Want to see your photos here? Share your event photos with us at",
      ta: "உங்கள் புகைப்படங்களை இங்கே காண விரும்புகிறீர்களா? எங்களுடன் பகிர்ந்து கொள்ளுங்கள்"
    },
    email: "info@peninsulatamilschool.org"
  },
  images: [
    {
      id: 1,
      src: "/images/tamil_1.webp",
      alt: "Tamil cultural performance",
      title: "Annual Day Performance",
      description: "Traditional Tamil dance by our students",
      category: "annual_day"
    },
    {
      id: 2,
      src: "/images/tamil_3.webp",
      alt: "Tamil classroom",
      title: "Stage performances",
      description: "Students present a wide range of performances on stage, from everyday family stories to dramatic historical tales.",
      category: "classroom"
    },
    {
      id: 3,
      src: "/images/tamil_4.webp",
      alt: "Tamil cultural event",
      title: "Cultural Celebration",
      description: "Community gathering for Tamil festival",
      category: "festivals"
    },
    {
      id: 4,
      src: "/images/banner_1.webp",
      alt: "Tamil school event",
      title: "Pongal Celebration",
      description: "Traditional Tamil harvest festival",
      category: "festivals"
    },
    {
      id: 5,
      src: "/images/children_play_performance.webp",
      alt: "Children performing in a play",
      title: "Children's Play Performance",
      description: "Students performing in a theatrical play",
      category: "annual_day"
    },
    {
      id: 6,
      src: "/images/group_picture_community.webp",
      alt: "Community group picture",
      title: "Community Gathering",
      description: "Group picture from community event",
      category: "assembly"
    },
    {
      id: 7,
      src: "/images/children_outdoor_group.webp",
      alt: "Children in outdoor group activity",
      title: "Outdoor Learning",
      description: "Students participating in outdoor group activities",
      category: "assembly"
    },
    {
      id: 8,
      src: "/images/pongal_celebration_bull.webp",
      alt: "Pongal celebration with bull decoration",
      title: "Pongal Festival",
      description: "Community celebrating Pongal with traditional bull decoration",
      category: "festivals"
    },
    {
      id: 9,
      src: "/images/adults_community_gathering.webp",
      alt: "Adults at community gathering",
      title: "Community Event",
      description: "Adults gathering for community event",
      category: "assembly"
    },
    {
      id: 10,
      src: "/images/adults_men_women_event.webp",
      alt: "Men and women at community event",
      title: "Community Celebration",
      description: "Families celebrating at community event",
      category: "events"
    }
  ],
  categories: [
    {
      id: 'all',
      label: { en: 'All Photos', ta: 'அனைத்து புகைப்படங்கள்' }
    },
    {
      id: 'festivals',
      label: { en: 'Festivals (Pongal & Deepavali)', ta: 'பண்டிகைகள்' }
    },
    {
      id: 'annual_day',
      label: { en: 'Annual Day Celebrations', ta: 'ஆண்டு விழா கொண்டாட்டங்கள்' }
    },
    {
      id: 'graduation',
      label: { en: 'Graduation', ta: 'பட்டமளிப்பு விழா' }
    },
    {
      id: 'assembly',
      label: { en: 'Assembly Events', ta: 'சபை நிகழ்வுகள்' }
    },
    {
      id: 'milestones',
      label: { en: 'Milestones (10th Year)', ta: 'மைல்கற்கள்' }
    }
  ],
  emptyState: {
    title: {
      en: "No photos in this category yet",
      ta: "இந்தப் பிரிவில் இன்னும் புகைப்படங்கள் இல்லை"
    },
    message: {
      en: "Check back soon for more memories!",
      ta: "மேலும் நினைவுகளுக்கு விரைவில் திரும்பி வாருங்கள்!"
    }
  }
};

export const quickInfoCards = [
  {
    title: { en: "About Us", ta: "எங்களைப் பற்றி" },
    description: {
      en: "Learn about our history, mission, and the dedicated volunteers who make Tamil education accessible to our community.",
      ta: "எங்கள் வரலாறு, நோக்கம் மற்றும் தமிழ் கல்வியை எங்கள் சமூகத்திற்கு அணுகக்கூடியதாக மாற்றும் அர்ப்பணிப்புள்ள தன்னார்வலர்களைப் பற்றி அறியுங்கள்."
    },
    linkText: { en: "Learn More", ta: "மேலும் அறிக" },
    linkUrl: "/about"
  },
  {
    title: { en: "Classes", ta: "வகுப்புகள்" },
    description: {
      en: "Explore our grade-level curriculum from Pre-K through Grade 10, with classes every Sunday morning.",
      ta: "ஒவ்வொரு ஞாயிற்றுக்கிழமை காலையில் வகுப்புகளுடன், Pre-K முதல் 10 ஆம் வகுப்பு வரை எங்கள் பாட திட்டத்தை ஆராயுங்கள்."
    },
    linkText: { en: "View Classes", ta: "வகுப்புகளைக் காண்க" },
    linkUrl: "/classes"
  },
  {
    title: { en: "Enrollment", ta: "பதிவு" },
    description: {
      en: "Ready to join? Register your child for Tamil classes and become part of our vibrant learning community.",
      ta: "சேர தயாரா? உங்கள் குழந்தையை தமிழ் வகுப்புகளில் பதிவு செய்து எங்கள் துடிப்பான கற்றல் சமூகத்தின் ஒரு பகுதியாக மாறுங்கள்."
    },
    linkText: { en: "Register Now", ta: "இப்போதே பதிவு செய்யுங்கள்" },
    linkUrl: schoolInfo.enrollmentLink,
    external: true
  }
];

export const upcomingEvents = [
  {
    month: "JAN",
    day: "21",
    title: "PTS Pongal & Teacher Appreciation",
    description: "Celebrate Pongal with traditional cooking, performances, and honor our dedicated teachers!"
  },
  {
    month: "APR",
    day: "14",
    title: "Annual Day",
    description: "Our biggest celebration with student performances, cultural programs, and awards ceremony!"
  }
];

export const aboutContent = {
  pageTitle: {
    en: "About Peninsula Tamil School",
    ta: "தீபகற்ப தமிழ் பள்ளியைப் பற்றி"
  },
  pageSubtitle: {
    en: "Preserving Tamil Heritage Through Education",
    ta: "கல்வி மூலம் தமிழ் பாரம்பரியத்தைப் பாதுகாத்தல்"
  },
  story: {
    title: { en: "Our Story", ta: "எங்கள் கதை" },
    paragraphs: [
      {
        en: "Peninsula Tamil School was established over 17 years ago to serve the Tamil-speaking community in the San Francisco Bay Area. What began as a small group of families committed to passing on their linguistic and cultural heritage has grown into a thriving educational institution serving students each year.",
        ta: "தீபகற்ப தமிழ் பள்ளி 17 ஆண்டுகளுக்கு முன்பு சான் பிரான்சிஸ்கோ வளைகுடா பகுதியில் உள்ள தமிழ் பேசும் சமூகத்திற்கு சேவை செய்வதற்காக நிறுவப்பட்டது. தங்கள் மொழி மற்றும் கலாச்சார பாரம்பரியத்தை அடுத்த தலைமுறைக்கு வழங்க உறுதிபூண்ட குடும்பங்களின் சிறிய குழுவாக தொடங்கியது ஒவ்வொரு ஆண்டும் மாணவர்களுக்கு சேவை செய்யும் வளர்ந்து வரும் கல்வி நிறுவனமாக வளர்ந்துள்ளது."
      },
      {
        en: "Our school operates on a volunteer-driven model as part of the Peninsula Indian Cultural Association (PICA), an organization promoting Indian culture and languages. Dedicated parents, educators, and community members contribute their time and expertise to ensure that future generations maintain a strong connection to Tamil language, literature, and culture.",
        ta: "எங்கள் பள்ளி தீபகற்ப இந்திய கலாசார சங்கத்தின் (PICA) ஒரு பகுதியாக தன்னார்வலர் மாதிரியில் செயல்படுகிறது. அர்ப்பணிப்புள்ள பெற்றோர், கல்வியாளர்கள் மற்றும் சமூக உறுப்பினர்கள் எதிர்கால தலைமுறைகள் தமிழ் மொழி, இலக்கியம் மற்றும் பண்பாட்டுடன் வலுவான தொடர்பை பராமரிக்க தங்கள் நேரத்தையும் நிபுணத்துவத்தையும் வழங்குகிறார்கள்."
      },
      {
        en: "We conduct classes every Sunday at a high school in San Mateo, providing a consistent and structured learning environment for students from Pre-Kindergarten through Grade 7, with both in-person and hybrid instruction options available.",
        ta: "நாங்கள் ஒவ்வொரு ஞாயிற்றுக்கிழமையும் சான் மாத்தேயோவில் உள்ள உயர்நிலைப் பள்ளியில் வகுப்புகளை நடத்துகிறோம், Pre-Kindergarten முதல் 7 ஆம் வகுப்பு வரை மாணவர்களுக்கு நேரடி மற்றும் கலப்பின பயிற்சி விருப்பங்களுடன் ஒரு நிலையான மற்றும் கட்டமைக்கப்பட்ட கற்றல் சூழலை வழங்குகிறோம்."
      },
      {
        en: "Our Mission: To provide quality Tamil language education and foster appreciation for Indian cultural heritage among children and adults in the Peninsula area through dedicated volunteer instruction and community engagement.",
        ta: "எங்கள் நோக்கம்: அர்ப்பணிப்புள்ள தன்னார்வ பயிற்சி மற்றும் சமூக ஈடுபாட்டின் மூலம் தீபகற்ப பகுதியில் உள்ள குழந்தைகள் மற்றும் பெரியவர்களிடையே தரமான தமிழ் மொழி கல்வியை வழங்குவதும் இந்திய கலாச்சார பாரம்பரியத்திற்கான மதிப்பை வளர்ப்பதும்."
      }
    ]
  },

  offerings: {
    title: { en: "What We Offer", ta: "நாங்கள் வழங்குவது" },
    items: [
      { en: "Structured curriculum from Pre-K through Grade 7", ta: "Pre-K முதல் 7 ஆம் வகுப்பு வரை கட்டமைக்கப்பட்ட பாடத்திட்டம்" },
      { en: "Tamil conversation class for speaking practice", ta: "பேச்சு பயிற்சிக்கான தமிழ் உரையாடல் வகுப்பு" },
      { en: "In-person and virtual class options", ta: "நேரடி மற்றும் இணையவழி வகுப்பு விருப்பங்கள்" },
      { en: "Experienced and dedicated teachers with Tamil language expertise", ta: "தமிழ் மொழி நிபுணத்துவம் கொண்ட அனுபவமிக்க மற்றும் அர்ப்பணிப்புள்ள ஆசிரியர்கள்" },
      { en: "Language learning combined with cultural education", ta: "கலாச்சார கல்வியுடன் இணைந்த மொழி கற்றல்" },
      { en: "Regular community events and celebrations", ta: "வழக்கமான சமூக நிகழ்வுகள் மற்றும் கொண்டாட்டங்கள்" },
      { en: "Convenient Sunday classes", ta: "வசதியான ஞாயிறு வகுப்புகள்" },
      { en: "Annual showcase of student learning", ta: "மாணவர் கற்றலின் வருடாந்திர காட்சி" },
      { en: "Family involvement opportunities", ta: "குடும்ப ஈடுபாடு வாய்ப்புகள்" },
      { en: "Affordable fees", ta: "மலிவு கட்டணங்கள்" }
    ]
  },
  joinCommunity: {
    title: { en: "Join Our Community", ta: "எங்கள் சமூகத்தில் சேருங்கள்" },
    text: {
      en: "Whether you're seeking Tamil language education for your children or interested in volunteering, we welcome you to join the Peninsula Tamil School community.",
      ta: "நீங்கள் உங்கள் குழந்தைகளுக்கு தமிழ் மொழி கல்வியை தேடுகிறீர்களா அல்லது தன்னார்வத் தொண்டில் ஆர்வமாக உள்ளீர்களா, தீபகற்ப தமிழ் பள்ளி சமூகத்தில் சேர உங்களை வரவேற்கிறோம்."
    }
  }
};

export const classesContent = {
  pageTitle: { en: "Our Classes", ta: "எங்கள் வகுப்புகள்" },
  pageSubtitle: {
    en: "Tamil language education for all ages and levels",
    ta: "அனைத்து வயது மற்றும் நிலைகளுக்கும் தமிழ் மொழி கல்வி"
  },
  intro: {
    en: "Our curriculum is designed to provide comprehensive Tamil language education from Pre-Kindergarten through Grade 7. Each level focuses on age-appropriate learning objectives that build upon previous knowledge.",
    ta: "எங்கள் பாடத்திட்டம் Pre-Kindergarten முதல் 7 ஆம் வகுப்பு வரை விரிவான தமிழ் மொழி கல்வியை வழங்க வடிவமைக்கப்பட்டுள்ளது. ஒவ்வொரு நிலையும் முந்தைய அறிவின் அடிப்படையில் வயதுக்கு ஏற்ற கற்றல் நோக்கங்களில் கவனம் செலுத்துகிறது."
  },
  levels: [
    {
      name: { en: "Pre-K & Kindergarten", ta: "Pre-K & மழலையர்" },
      description: {
        en: "Introduction to Tamil letters, basic vocabulary, and cultural stories through fun activities and games.",
        ta: "வேடிக்கையான செயல்பாடுகள் மற்றும் விளையாட்டுகள் மூலம் தமிழ் எழுத்துக்கள், அடிப்படை சொற்களஞ்சியம் மற்றும் கலாச்சார கதைகளுக்கு அறிமுகம்."
      }
    },
    {
      name: { en: "Grades 1-3", ta: "வகுப்புகள் 1-3" },
      description: {
        en: "Building reading and writing skills, expanding vocabulary, and learning simple grammar structures.",
        ta: "வாசிப்பு மற்றும் எழுதும் திறன்களை வளர்த்தல், சொற்களஞ்சியத்தை விரிவுபடுத்துதல் மற்றும் எளிய இலக்கண அமைப்புகளைக் கற்றல்."
      }
    },
    {
      name: { en: "Grades 4-6", ta: "வகுப்புகள் 4-6" },
      description: {
        en: "Developing fluency in reading and writing, understanding grammar rules, and exploring Tamil literature.",
        ta: "வாசிப்பு மற்றும் எழுத்தில் சரளத்தன்மையை வளர்த்தல், இலக்கண விதிகளைப் புரிந்துகொள்ளுதல் மற்றும் தமிழ் இலக்கியத்தை ஆராய்தல்."
      }
    },
    {
      name: { en: "Grade 7", ta: "வகுப்பு 7" },
      description: {
        en: "Advanced Tamil literature, poetry, essay writing, and deeper exploration of Tamil culture and history.",
        ta: "மேம்பட்ட தமிழ் இலக்கியம், கவிதை, கட்டுரை எழுதுதல் மற்றும் தமிழ் பண்பாடு மற்றும் வரலாற்றின் ஆழமான ஆய்வு."
      }
    },
    {
      name: { en: "Tamil Conversation Class", ta: "தமிழ் உரையாடல் வகுப்பு" },
      description: {
        en: "A conversation class for those interested in practicing speaking Tamil and improving their conversational skills.",
        ta: "தமிழ் பேசுவதை பயிற்சி செய்வதிலும் உரையாடல் திறன்களை மேம்படுத்துவதிலும் ஆர்வமுள்ளவர்களுக்கான உரையாடல் வகுப்பு."
      }
    }
  ],
  schedule: {
    title: { en: "Class Schedule", ta: "வகுப்பு அட்டவணை" },
    when: { en: "Every Sunday, 10:20 AM - 12:20 PM", ta: "ஒவ்வொரு ஞாயிறும், காலை 10:20 - மதியம் 12:20" },
    where: { en: "High School in San Mateo, 3115 Del Monte St, San Mateo, CA 94403", ta: "சான் மாத்தேயோ உயர்நிலைப் பள்ளி, 3115 Del Monte St, San Mateo, CA 94403" },
    duration: { en: "34 weeks (August through May)", ta: "34 வாரங்கள் (ஆகஸ்ட் முதல் மே வரை)" },
    mode: { en: "In-person and hybrid instruction available", ta: "நேரடி மற்றும் கலப்பின பயிற்சி கிடைக்கும்" }
  },
  expectations: {
    title: { en: "What to Expect", ta: "எதிர்பார்க்க வேண்டியவை" },
    items: [
      { en: "Interactive lessons with experienced teachers", ta: "அனுபவமிக்க ஆசிரியர்களுடன் ஊடாடும் பாடங்கள்" },
      { en: "Age-appropriate learning materials", ta: "வயதுக்கு ஏற்ற கற்றல் பொருட்கள்" },
      { en: "Regular assessments and progress reports", ta: "வழக்கமான மதிப்பீடுகள் மற்றும் முன்னேற்ற அறிக்கைகள்" },
      { en: "Cultural activities and events", ta: "கலாச்சார நடவடிக்கைகள் மற்றும் நிகழ்வுகள்" },
      { en: "Opportunities for student performances", ta: "மாணவர் நிகழ்ச்சிகளுக்கான வாய்ப்புகள்" }
    ]
  }
};

export const eventsData = [
  {
    date: { month: "AUG", day: "20" },
    title: "First Day of PTS",
    time: "Sunday, August 20, 2023",
    location: "Peninsula Tamil School",
    description: "Welcome back! The 2023-2024 academic year begins. Meet your teachers and classmates!",
    featured: true
  },
  {
    date: { month: "SEP", day: "03" },
    title: "Labor Day Holiday",
    time: "Sunday, September 3, 2023",
    description: "No classes - Labor Day Holiday",
    featured: false
  },
  {
    date: { month: "OCT", day: "01" },
    title: "Fall Break Holiday",
    time: "Sunday, October 1, 2023",
    description: "No classes - Fall Break",
    featured: false
  },
  {
    date: { month: "OCT", day: "29" },
    title: "First Test",
    time: "Sunday, October 29, 2023",
    location: "Peninsula Tamil School",
    description: "First semester assessment for all students",
    featured: false
  },
  {
    date: { month: "NOV", day: "12" },
    title: "Deepavali Holiday",
    time: "Sunday, November 12, 2023",
    description: "No classes - Deepavali (Festival of Lights)",
    featured: false
  },
  {
    date: { month: "NOV", day: "19" },
    title: "PTS Deepavali Game Day",
    time: "Sunday, November 19, 2023 | 10:00 AM - 2:00 PM",
    location: "Peninsula Tamil School",
    description: "Special celebration with traditional games, activities, and cultural performances for Deepavali!",
    featured: true
  },
  {
    date: { month: "NOV", day: "26" },
    title: "Thanksgiving Holiday",
    time: "Sunday, November 26, 2023",
    description: "No classes - Thanksgiving Holiday",
    featured: false
  },
  {
    date: { month: "DEC", day: "17" },
    title: "Winter Break Hold",
    time: "December 17, 24, 31, 2023",
    description: "No classes during winter break (3 weeks)",
    featured: false
  },
  {
    date: { month: "JAN", day: "14" },
    title: "Pongal Holiday",
    time: "Sunday, January 14, 2024",
    description: "No classes - Pongal (Tamil Harvest Festival)",
    featured: false
  },
  {
    date: { month: "JAN", day: "21" },
    title: "PTS Pongal & Teacher Appreciation",
    time: "Sunday, January 21, 2024 | 10:00 AM - 2:00 PM",
    location: "Peninsula Tamil School",
    description: "Celebrate Pongal with traditional cooking, performances, and honor our dedicated teachers!",
    featured: true
  },
  {
    date: { month: "FEB", day: "18" },
    title: "President Day Holiday",
    time: "Sunday, February 18, 2024",
    description: "No classes - President's Day",
    featured: false
  },
  {
    date: { month: "MAR", day: "03" },
    title: "Second Test",
    time: "Sunday, March 3, 2024",
    location: "Peninsula Tamil School",
    description: "Second semester assessment for all students",
    featured: false
  },
  {
    date: { month: "MAR", day: "31" },
    title: "Spring Break Holiday",
    time: "Sunday, March 31, 2024",
    description: "No classes - Spring Break",
    featured: false
  },
  {
    date: { month: "APR", day: "14" },
    title: "Annual Day",
    time: "Sunday, April 14, 2024 | 2:00 PM - 6:00 PM",
    location: "Foster City Community Theater",
    description: "Our biggest celebration! Student performances, cultural programs, awards ceremony, and community gathering. All families invited!",
    featured: true
  },
  {
    date: { month: "MAY", day: "19" },
    title: "Final Test",
    time: "Sunday, May 19, 2024",
    location: "Peninsula Tamil School",
    description: "Final assessment for all students - End of year evaluation",
    featured: false
  },
  {
    date: { month: "MAY", day: "26" },
    title: "Graduation Day",
    time: "Sunday, May 26, 2024 | 2:00 PM - 5:00 PM",
    location: "Foster City Community Theater",
    description: "Celebrating our graduating students! Certificate distribution, recognition ceremony, and farewell performances. Join us in honoring our students' achievements!",
    featured: true
  }
];

export const galleryImages = [
  {
    src: "/images/tamil_1.webp",
    alt: "Tamil cultural performance",
    title: "Annual Day Performance",
    description: "Traditional Tamil dance by our students"
  },
  {
    src: "/images/tamil_3.webp",
    alt: "Tamil classroom",
    title: "Interactive Learning",
    description: "Students engaged in Tamil language activities"
  },
  {
    src: "/images/tamil_4.webp",
    alt: "Tamil cultural event",
    title: "Cultural Celebration",
    description: "Community gathering for Tamil festival"
  },
  {
    src: "/images/banner_1.webp",
    alt: "Tamil school event",
    title: "Pongal Celebration",
    description: "Traditional Tamil harvest festival"
  }
];

export const contactContent = {
  pageTitle: { en: "Contact Us", ta: "எங்களைத் தொடர்புகொள்ளுங்கள்" },
  pageSubtitle: {
    en: "Get in touch with Peninsula Tamil School",
    ta: "தீபகற்ப தமிழ் பள்ளியைத் தொடர்பு கொள்ளுங்கள்"
  },
  getInTouch: { en: "Get In Touch", ta: "தொடர்பு கொள்ளுங்கள்" },
  contactCards: [
    {
      icon: "email",
      title: { en: "Email", ta: "மின்னஞ்சல்" },
      lines: ["principal@peninsulatamilschool.org"]
    },
    {
      icon: "clock",
      title: { en: "Class Hours", ta: "வகுப்பு நேரம்" },
      lines: [
        { en: "Sundays: 10:20 AM - 12:20 PM", ta: "ஞாயிறுகள்: காலை 10:20 - மதியம் 12:20" },
        { en: "August through May", ta: "ஆகஸ்ட் முதல் மே வரை" }
      ]
    }
  ],
  enrollment: {
    title: { en: "Enrollment", ta: "பதிவு" },
    text: {
      en: "Ready to enroll your child in our Tamil language program? Click the button below to fill out our enrollment form.",
      ta: "உங்கள் குழந்தையை எங்கள் தமிழ் மொழித் திட்டத்தில் சேர்க்க தயாரா? எங்கள் பதிவு படிவத்தை பூர்த்தி செய்ய கீழே உள்ள பொத்தானை கிளிக் செய்யவும்."
    }
  },
  questions: {
    title: { en: "Questions?", ta: "கேள்விகள்?" },
    text: {
      en: "If you have any questions about our programs, registration, or anything else, please don't hesitate to reach out. We typically respond to emails within 24-48 hours.",
      ta: "எங்கள் திட்டங்கள், பதிவு அல்லது வேறு எதைப் பற்றியும் உங்களுக்கு ஏதேனும் கேள்விகள் இருந்தால், தயங்காமல் தொடர்பு கொள்ளவும். நாங்கள் பொதுவாக 24-48 மணிநேரத்திற்குள் மின்னஞ்சல்களுக்கு பதிலளிப்போம்."
    }
  }
};
