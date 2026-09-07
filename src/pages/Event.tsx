import { eventItems } from "../data/events";
import { EmptyState } from "../components/Shared";
import { submitMailto } from "../utils/submit";

export function Event() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="font-display text-2xl text-ink">ইভেন্ট ও ঘোষণা</h1>
        <p className="text-ink-soft text-sm mt-0.5">এলাকার অনুষ্ঠান, মেলা ও গুরুত্বপূর্ণ ঘোষণা</p>
      </div>

      {eventItems.length === 0 ? (
        <EmptyState
          icon="📅"
          title="এখনো কোনো ইভেন্ট যোগ করা হয়নি"
          message="কোনো অনুষ্ঠান বা ঘোষণার কথা জানলে আমাদের পাঠাও।"
          actionLabel="ইভেন্ট পাঠাও"
          actionHref={submitMailto("event")}
        />
      ) : (
        <div className="space-y-3">
          {eventItems
            .slice()
            .sort((a, b) => (a.date < b.date ? -1 : 1))
            .map((e) => (
              <div key={e.id} className="bg-paper border border-ink/10 rounded-xl p-4">
                <p className="text-brick text-xs font-medium">
                  {e.date}
                  {e.location ? ` · ${e.location}` : ""}
                </p>
                <p className="font-display text-lg text-ink mt-1">{e.title}</p>
                <p className="text-ink-soft text-sm mt-1.5 leading-relaxed">{e.description}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
