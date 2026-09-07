import { Link } from "react-router-dom";
import { newsItems } from "../data/news";
import { eventItems } from "../data/events";

const sections = [
  { to: "/khobor", icon: "📰", title: "খবর", desc: "মুক্তাগাছার সর্বশেষ খবর ও আপডেট" },
  { to: "/hotline", icon: "☎️", title: "জরুরি হটলাইন", desc: "পুলিশ, ফায়ার সার্ভিস, স্বাস্থ্যসেবা নাম্বার" },
  { to: "/seba", icon: "🏥", title: "সেবা ডিরেক্টরি", desc: "স্থানীয় ডাক্তার, হাসপাতাল, ব্যবসা প্রতিষ্ঠান" },
  { to: "/itihash", icon: "🏛️", title: "ইতিহাস", desc: "জমিদারবাড়ি, মন্দির, মন্ডার গল্প" },
  { to: "/event", icon: "📅", title: "ইভেন্ট", desc: "এলাকার অনুষ্ঠান ও ঘোষণা" },
  { to: "/joma-din", icon: "✍️", title: "তথ্য জমা দিন", desc: "খবর, ইভেন্ট বা সেবার তথ্য পাঠাও" },
];

export function Home() {
  const recentNews = newsItems.slice(0, 2);
  const upcomingEvents = eventItems.slice(0, 2);

  return (
    <div className="space-y-6">
      {/* Heritage plaque hero */}
      <div className="bg-paper rounded-xl p-5 border-2 border-brass/70 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brass rounded-tl-xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brass rounded-br-xl" />
        <p className="text-brick text-xs font-semibold">নামের গল্প</p>
        <p className="font-display text-lg text-ink leading-snug mt-1.5">
          মুক্তারাম কর্মকারের দেওয়া একটি সোনার প্রদীপ-দানি থেকেই এসেছে "মুক্তাগাছা" নামটি — আগে যার নাম ছিল বিনোদবাড়ি।
        </p>
        <Link to="/itihash" className="text-brick text-sm font-medium mt-2 inline-block">
          পুরো ইতিহাস পড়ো →
        </Link>
      </div>

      {recentNews.length > 0 && (
        <div className="space-y-2">
          <p className="font-display text-lg text-ink">সাম্প্রতিক খবর</p>
          {recentNews.map((n) => (
            <Link key={n.id} to="/khobor" className="block bg-paper border border-ink/10 rounded-lg px-4 py-3">
              <p className="text-ink font-semibold text-sm">{n.title}</p>
              <p className="text-ink-soft text-xs mt-1">{n.summary}</p>
            </Link>
          ))}
        </div>
      )}

      {upcomingEvents.length > 0 && (
        <div className="space-y-2">
          <p className="font-display text-lg text-ink">আসন্ন ইভেন্ট</p>
          {upcomingEvents.map((e) => (
            <Link key={e.id} to="/event" className="block bg-paper border border-ink/10 rounded-lg px-4 py-3">
              <p className="text-ink font-semibold text-sm">{e.title}</p>
              <p className="text-ink-soft text-xs mt-1">{e.date}{e.location ? ` · ${e.location}` : ""}</p>
            </Link>
          ))}
        </div>
      )}

      <div className="space-y-2.5">
        {sections.map((s) => (
          <Link
            key={s.to}
            to={s.to}
            className="bg-paper border border-ink/10 rounded-xl px-4 py-3 flex items-center gap-3"
          >
            <span className="text-2xl">{s.icon}</span>
            <span className="flex-1 min-w-0">
              <span className="block font-display text-base text-ink">{s.title}</span>
              <span className="block text-ink-soft text-xs mt-0.5">{s.desc}</span>
            </span>
            <span className="text-ink/30 text-lg">›</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
