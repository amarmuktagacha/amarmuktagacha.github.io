import { submitMailto } from "../utils/submit";

const options = [
  { type: "news" as const, icon: "📰", title: "খবর জানাও", desc: "এলাকার কোনো খবর জানা থাকলে পাঠাও" },
  { type: "event" as const, icon: "📅", title: "ইভেন্ট জানাও", desc: "অনুষ্ঠান বা ঘোষণার তথ্য পাঠাও" },
  { type: "service" as const, icon: "🏥", title: "প্রতিষ্ঠান যোগ করো", desc: "ডাক্তার, হাসপাতাল বা ব্যবসার তথ্য পাঠাও" },
  { type: "hotline" as const, icon: "☎️", title: "হটলাইন সংশোধন", desc: "ভুল বা নতুন নাম্বার জানাও" },
];

export function JomaDin() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="font-display text-2xl text-ink">তথ্য জমা দাও</h1>
        <p className="text-ink-soft text-sm mt-0.5">
          যেকোনো তথ্য পাঠালে সেটা যাচাই করে সাইটে যোগ করা হবে। নিচের অপশনে ট্যাপ করলে তোমার ইমেইল অ্যাপে একটা মেইল খুলবে, শুধু পূরণ করে পাঠিয়ে দাও।
        </p>
      </div>

      <div className="space-y-2.5">
        {options.map((o) => (
          <a
            key={o.type}
            href={submitMailto(o.type)}
            className="bg-paper border border-ink/10 rounded-xl px-4 py-3 flex items-center gap-3"
          >
            <span className="text-2xl">{o.icon}</span>
            <span className="flex-1 min-w-0">
              <span className="block font-display text-base text-ink">{o.title}</span>
              <span className="block text-ink-soft text-xs mt-0.5">{o.desc}</span>
            </span>
            <span className="text-ink/30 text-lg">›</span>
          </a>
        ))}
      </div>
    </div>
  );
}
