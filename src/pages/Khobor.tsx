import { newsItems } from "../data/news";
import { EmptyState } from "../components/Shared";
import { submitMailto } from "../utils/submit";

export function Khobor() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="font-display text-2xl text-ink">খবর</h1>
        <p className="text-ink-soft text-sm mt-0.5">মুক্তাগাছার সর্বশেষ খবর ও আপডেট</p>
      </div>

      {newsItems.length === 0 ? (
        <EmptyState
          icon="📰"
          title="এখনো কোনো খবর যোগ করা হয়নি"
          message="এলাকার কোনো খবর জানা থাকলে আমাদের পাঠাও, আমরা এখানে যোগ করে দেব।"
          actionLabel="খবর পাঠাও"
          actionHref={submitMailto("news")}
        />
      ) : (
        <div className="space-y-3">
          {newsItems
            .slice()
            .sort((a, b) => (a.date < b.date ? 1 : -1))
            .map((n) => (
              <article key={n.id} className="bg-paper border border-ink/10 rounded-xl p-4">
                <p className="text-brick text-xs font-medium">{n.date}</p>
                <p className="font-display text-lg text-ink mt-1">{n.title}</p>
                <p className="text-ink-soft text-sm mt-1.5 leading-relaxed">{n.summary}</p>
                {n.body && <p className="text-ink text-sm mt-2 leading-relaxed">{n.body}</p>}
              </article>
            ))}
        </div>
      )}
    </div>
  );
}
