import { useMemo, useState } from "react";
import { serviceEntries } from "../data/services";
import { EmptyState } from "../components/Shared";
import { submitMailto } from "../utils/submit";
import type { ServiceCategory } from "../types";

const categories: ServiceCategory[] = ["ডাক্তার", "হাসপাতাল/ক্লিনিক", "ব্যবসা প্রতিষ্ঠান", "শিক্ষা প্রতিষ্ঠান", "অন্যান্য"];

export function Seba() {
  const [filter, setFilter] = useState<"all" | ServiceCategory>("all");

  const items = useMemo(
    () => (filter === "all" ? serviceEntries : serviceEntries.filter((s) => s.category === filter)),
    [filter]
  );

  return (
    <div className="space-y-4">
      <div>
        <h1 className="font-display text-2xl text-ink">সেবা ডিরেক্টরি</h1>
        <p className="text-ink-soft text-sm mt-0.5">স্থানীয় ডাক্তার, হাসপাতাল ও ব্যবসা প্রতিষ্ঠান</p>
      </div>

      {serviceEntries.length > 0 && (
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
          <button
            onClick={() => setFilter("all")}
            className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-semibold ${
              filter === "all" ? "bg-brass text-ink" : "bg-paper text-ink-soft border border-ink/10"
            }`}
          >
            সব
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-semibold ${
                filter === c ? "bg-brass text-ink" : "bg-paper text-ink-soft border border-ink/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      {serviceEntries.length === 0 ? (
        <EmptyState
          icon="🏥"
          title="ডিরেক্টরি এখনো খালি"
          message="তোমার পরিচিত কোনো ডাক্তার, হাসপাতাল বা ব্যবসা প্রতিষ্ঠান যোগ করতে চাইলে পাঠাও।"
          actionLabel="প্রতিষ্ঠান যোগ করো"
          actionHref={submitMailto("service")}
        />
      ) : (
        <div className="space-y-2.5">
          {items.map((s) => (
            <div key={s.id} className="bg-paper border border-ink/10 rounded-lg px-4 py-3">
              <p className="text-ink font-semibold text-sm">{s.name}</p>
              <p className="text-brick text-xs mt-0.5">{s.category}{s.note ? ` · ${s.note}` : ""}</p>
              {s.address && <p className="text-ink-soft text-xs mt-1">{s.address}</p>}
              {s.phone && (
                <a href={`tel:${s.phone}`} className="inline-block mt-2 bg-patina text-paper rounded-md px-3 py-1.5 text-xs font-semibold">
                  📞 {s.phone}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
