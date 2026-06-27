export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavigationLink {
  name: string;
  href: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface Program {
  title: string;
  description: string;
  icon: string;
  items: string[];
}

export interface ImpactStat {
  value: number;
  suffix: string;
  label: string;
  emoji: string;
}

export interface SuccessStory {
  quote: string;
  author: string;
}

export interface KeyResult {
  title: string;
  description: string;
  icon: string;
}

export interface DonationMethod {
  name: string;
  description: string;
  details: string;
  icon: string;
}

export interface SiteData {
  orgName: string;
  fullName: string;
  tagline: string;
  missionStatement: string;
  visionStatement: string;
  aboutDescription: string;
  whoWeAre: string;
  heroSubheading: string;
  ctaCopy: string;
  contact: ContactInfo;
  socialLinks: SocialLink[];
  navigation: NavigationLink[];
  barriers: string[];
  partners: string[];
  coreValues: CoreValue[];
  programs: Program[];
  aims: string[];
  objectives: string[];
  stemFields: string[];
  impactStats: ImpactStat[];
  impactAchievements: string;
  successStory: SuccessStory;
  keyResults: KeyResult[];
  donationMethods: DonationMethod[];
  galleryCategories: string[];
}
