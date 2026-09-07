const SUBMIT_EMAIL = "elephant.cos@gmail.com";

export type SubmitType = "news" | "event" | "service" | "hotline";

const templates: Record<SubmitType, { subject: string; body: string }> = {
  news: {
    subject: "আমার মুক্তাগাছা — খবর জমা",
    body: "খবরের শিরোনাম:\n\nবিস্তারিত:\n\nতারিখ:\n\nআপনার নাম (ঐচ্ছিক):",
  },
  event: {
    subject: "আমার মুক্তাগাছা — ইভেন্ট জমা",
    body: "ইভেন্টের নাম:\n\nতারিখ:\n\nস্থান:\n\nবিস্তারিত:\n\nআপনার নাম (ঐচ্ছিক):",
  },
  service: {
    subject: "আমার মুক্তাগাছা — সেবা/প্রতিষ্ঠান যোগ",
    body: "প্রতিষ্ঠানের নাম:\n\nধরন (ডাক্তার/হাসপাতাল/ব্যবসা/শিক্ষা/অন্যান্য):\n\nফোন নাম্বার:\n\nঠিকানা:\n\nঅতিরিক্ত তথ্য:",
  },
  hotline: {
    subject: "আমার মুক্তাগাছা — হটলাইন নাম্বার সংশোধন/সংযোজন",
    body: "প্রতিষ্ঠানের নাম:\n\nসঠিক নাম্বার:\n\nমন্তব্য:",
  },
};

export function submitMailto(type: SubmitType): string {
  const t = templates[type];
  return `mailto:${SUBMIT_EMAIL}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(t.body)}`;
}
