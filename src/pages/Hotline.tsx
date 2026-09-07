import { hotlines } from "../data/hotlines";
import { submitMailto } from "../utils/submit";

const categories = ["জাতীয় জরুরি সেবা", "স্থানীয় (মুক্তাগাছা)"] as const;

export function Hotline() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-display text-2xl text-ink">জরুরি হটলাইন</h1>
        <p className="text-ink-soft text-sm mt-0.5">নাম্বারে ট্যাপ করলে সরাসরি কল হবে</p>
      </div>

      {categories.map((cat) => {
        const items = hotlines.filter((h) => h.category === cat);
        if (items.length === 0) return null;
        return (
          <div key={cat} className="space-y-2">
            <p className="font-display text-base text-brick">{cat}</p>
            {items.map((h) => (
              <div key={h.id} className="bg-paper border border-ink/10 rounded-lg px-4 py-3 flex items-center gap-3">
                <span className="flex-1 min-w-0">
                  <span className="block text-ink font-semibold text-sm">{h.name}</span>
                  {h.note && <span className="block text-ink-soft text-xs mt-0.5">{h.note}</span>}
                </span>
                {h.number ? (
                  <a
                    href={`tel:${h.number}`}
                    className="shrink-0 bg-patina text-paper rounded-lg px-3 py-2 text-sm font-semibold"
                  >
                    📞 {h.number}
                  </a>
                ) : (
                  <span className="shrink-0 text-ink-soft text-xs italic">যোগ করা হয়নি</span>
                )}
              </div>
            ))}
          </div>
        );
      })}

      <a
        href={submitMailto("hotline")}
        className="block text-center bg-brass text-ink rounded-lg px-4 py-2.5 text-sm font-semibold"
      >
        নাম্বার ভুল আছে বা নতুন নাম্বার জানাও
      </a>
    </div>
  );
}
