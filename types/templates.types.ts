export interface HeaderContactItem {
  id: string;
  icon: string;
  label: string;
  value: string;
}

export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  navLinks: { id: string; label: string; url: string; hasDropdown?: boolean }[];
  contactButton: { text: string; url: string };
}



export interface HeroData {
  subtitle: string;
  title1: string;
  title2: string;
  title3?: string;
  description: string;
  image1: string;
  image2?: string;
  image3?: string;
  button1: { text: string; url: string };
  button2: { text: string; url: string };
}

export interface AboutUsData {
  subtitle: string;
  title1: string;
  title2: string;
  description1: string;
  description2: string;
  imageMain: string;
  yearsOfExperience: string;
  experienceLabel?: string;
  features: {
    id: string;
    title: string;
    description: string;
    icon: string;
  }[];
  button: { text: string; url: string };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  url: string;
}

export interface WhatWeDoItem {
  id: string;
  icon: string;
  number?: string;
  title: string;
  description: string;
  url?: string;
}

export interface WhatWeDoData {
  subtitle: string;
  title1: string;
  title2: string;
  title3?: string;
  subheading?: string;
  description?: string;
  image?: string;
  bgImage?: string;
  features?: WhatWeDoItem[];
  steps?: WhatWeDoItem[];
}

export interface ServicesData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  services: ServiceItem[];
  button?: { text: string; url: string };
}

export interface ServiceDetailFeature {
  id: string;
  icon: string;
  title: string;
}

export interface ServiceDetailProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ServiceDetailData {
  id: string;
  subtitle?: string;
  title1: string;
  title2: string;
  description: string;
  imageMain: string;
  imageSmall1?: string;
  imageSmall2?: string;
  features: ServiceDetailFeature[];
  overviewTitle?: string;
  overviewText?: string[];
  overviewImage?: string;
  processTitle?: string;
  processDescription?: string;
  processSteps: ServiceDetailProcessStep[];
  faqTitle?: string;
  faqs?: { id: string; question: string; answer: string }[];
  sidebar: {
    quoteForm?: {
      title: string;
      description: string;
      buttonText: string;
      servicesList: string[];
    };
    servicesList: {
      title: string;
      services: { id: string; label: string; url: string }[];
    };
    contactCard?: {
      title: string;
      description: string;
      phone: string;
      email: string;
      address: string;
      buttonText: string;
      bgImage: string;
    };
    whyChooseUsCard?: {
      title: string;
      description: string;
      buttonText: string;
      bgImage: string;
    };
  };
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface TestimonialsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  testimonials: TestimonialItem[];
}

export interface FooterData {
  logo: string;
  col2Title: string;
  col3Title: string;
  col4Title: string;
  supportText: string;
  logoAlt: string;
  brandTitle: string;
  copyrightText: string;
  description: string;
  followUsText?: string;
  hoursTitle: string;
  hours: string;
  hoursDays: string;
  socialLinks: { id: string; icon: string; url: string }[];
  quickLinks: { id: string; label: string; url: string }[];
  servicesLinks: { id: string; label: string; url: string }[];
  contactInfo: { address: string; phone: string; email: string; phoneTitle?: string; emailTitle?: string; addressTitle?: string };
  instagram: string[];
  faqLinks?: { id: string; label: string; url: string }[];
}


export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  image: string;
  faqs: FaqItem[];
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
}

export interface GalleryData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  images: GalleryItem[];
  button?: { text: string; url: string };
}

export interface VideoItem {
  id: string;
  thumbnail: string;
  youtubeId: string;
  duration: string;
  title: string;
}

export interface VideoGalleryData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  videos: VideoItem[];
}

export interface ContactUsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  contactInfo: {
    phoneTitle: string;
    phone: string;
    emailTitle: string;
    email: string;
    addressTitle: string;
    address: string;
    hoursTitle: string;
    hoursLine1: string;
    hoursLine2: string;
  };
  form: {
    title: string;
    description: string;
    buttonText: string;
    namePlaceholder?: string;
    emailPlaceholder?: string;
    phonePlaceholder?: string;
    subjectPlaceholder?: string;
    messagePlaceholder?: string;
    servicesList?: string[];
  };
  image?: string;
  mapUrl: string;
  infoBoxes?: {
    icon: string;
    title: string;
    desc1: string;
    desc2: string;
  }[];
}

export interface EnquiryData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  features: {
    id: string;
    icon: string;
    title: string;
    description: string;
  }[];
  form: {
    title1: string;
    title2: string;
    description: string;
    buttonText: string;
    servicesList: string[];
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface TeamData {
  subtitle: string;
  title1: string;
  title2: string;
  description?: string;
  members: TeamMember[];
}

export interface CounterItem {
  id: string;
  icon: string;
  number: number;
  suffix?: string;
  label: string;
  title?: string;
}

export interface CounterData {
  bgImage?: string;
  items: CounterItem[];
}

export interface ServicesGridItem {
  id: string;
  title: string;
  image: string;
  icon: string;
  url: string;
}

export interface ServicesGridData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  services: ServicesGridItem[];
}

export interface SponsorItem {
  id: string;
  image: string;
  alt: string;
  url?: string;
}

export interface SponsorsData {
  subtitle: string;
  title1: string;
  title2: string;
  sponsors: SponsorItem[];
}

export interface BlogItem {
  id: string;
  image: string;
  tag: string;
  date: string;
  title: string;
  summary: string;
  url?: string;
  author?: string; // Add author here as well
}

export interface BlogsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  blogs: BlogItem[];
}

export interface BlogDetailData {
  id: string;
  title: string;
  imageMain: string;
  author: string;
  date: string;
  summary: string;
  section1Title: string;
  section1Text: string;
  section1Image: string;
  quoteText: string;
  quoteAuthor: string;
  section2Title: string;
  section2Text: string;
  section2List: string[];
  section2Image: string;
  section3Title: string;
  section3Text: string;
  section3List: string[];
  section3Image: string;
}

export interface AboutPageFeature {
  id: string;
  icon: string;
  title: string;
}

export interface AboutPageData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  imageFront: string;
  imageBack: string;
  experienceText1: string;
  experienceText2: string;
  features: AboutPageFeature[];
  buttonText: string;
  buttonUrl: string;
}

export interface CustomServiceDetailData {
  id: string;
  subtitle: string;
  title1: string;
  title2: string;
  mainDescription: string;
  whatYouCanExpectTitle: string;
  whatYouCanExpectDescription: string;
  keyBenefitsTitle: string;
  keyBenefits: string[];
  whoCanBenefitTitle: string;
  whoCanBenefitDescription: string;
  buttonText: string;
  buttonUrl: string;
  sidebar: {
    doctorImage: string;
    doctorName: string;
    doctorRole: string;
    doctorDescription: string;
    socialLinks: { id: string; icon: string; url: string }[];
    quoteText: string;
    quoteAuthor: string;
  };
}

export interface HealthCounselorTemplateData {
  common: {
    aboutBreadcrumb?: any;
    servicesBreadcrumb?: any;
    contactBreadcrumb?: any;
    enquiryBreadcrumb?: any;
    Footer?: FooterData;
  };
  categories: {
    HealthCounselor: {
      templateComponents?: any;
      sections: {

        AboutPage?: { variants?: { HealthCounselorAboutPage1?: AboutPageData } };
        Header?: { variants?: { HealthCounselorHeader1?: HeaderData } };
        Hero?: { variants?: { HealthCounselorHero1?: HeroData } };
        AboutUs?: { variants?: { HealthCounselorAboutUs1?: AboutUsData } };
        Services?: { variants?: { HealthCounselorServices1?: ServicesData } };
        ServiceDetail?: { variants?: { [key: string]: ServiceDetailData } };
        CustomServiceDetail?: { variants?: { [key: string]: CustomServiceDetailData } };
        
        WhatWeDo?: { variants?: { HealthCounselorWhatWeDo1?: WhatWeDoData } };
        Faq?: { variants?: { HealthCounselorFaq1?: FaqData } };
        Gallery?: { variants?: { HealthCounselorGallery1?: GalleryData, HealthCounselorGalleryGrid1?: GalleryData } };
        VideoGallery?: { variants?: { HealthCounselorVideoGallery1?: VideoGalleryData } };
        Testimonials?: { variants?: { HealthCounselorTestimonials1?: TestimonialsData } };
        ContactUs?: { variants?: { HealthCounselorContactUs1?: ContactUsData } };
        enquiry?: { variants?: { HealthCounselorEnquiry1?: EnquiryData } };
        Counter?: { variants?: { HealthCounselorCounter1?: CounterData } };
        Team?: { variants?: { HealthCounselorTeam1?: TeamData } };
        ServicesGrid?: { variants?: { HealthCounselorServicesGrid1?: ServicesGridData } };
        Blogs?: { variants?: { HealthCounselorBlogs1?: BlogsData, HealthCounselorBlogGrid1?: BlogsData } };
        BlogDetail?: { variants?: { [key: string]: BlogDetailData } };
      };
    };
  };
}
