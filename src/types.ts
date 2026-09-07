export interface NewsItem {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  summary: string;
  body?: string;
}

export interface HotlineEntry {
  id: string;
  name: string;
  number: string;
  category: "জাতীয় জরুরি সেবা" | "স্থানীয় (মুক্তাগাছা)";
  note?: string;
}

export type ServiceCategory = "ডাক্তার" | "হাসপাতাল/ক্লিনিক" | "ব্যবসা প্রতিষ্ঠান" | "শিক্ষা প্রতিষ্ঠান" | "অন্যান্য";

export interface ServiceEntry {
  id: string;
  name: string;
  category: ServiceCategory;
  phone?: string;
  address?: string;
  note?: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  location?: string;
  description: string;
}

export interface HistorySection {
  id: string;
  title: string;
  body: string[];
}
