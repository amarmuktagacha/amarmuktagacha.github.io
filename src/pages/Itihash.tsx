import { historySections } from "../data/history";

export function Itihash() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-display text-2xl text-ink">ইতিহাস ও ঐতিহ্য</h1>
        <p className="text-ink-soft text-sm mt-0.5">মুক্তাগাছার নাম, জমিদারবাড়ি ও ঐতিহ্যের গল্প</p>
      </div>

      <div className="space-y-4">
        {historySections.map((sec) => (
          <div key={sec.id} className="bg-paper rounded-xl p-4 border border-ink/10">
            <p className="font-display text-lg text-brick">{sec.title}</p>
            <div className="mt-2 space-y-2">
              {sec.body.map((para, i) => (
                <p key={i} className="text-ink text-sm leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
