import { Link } from "react-router-dom";

export function EmptyState({
  icon,
  title,
  message,
  actionLabel,
  actionHref,
}: {
  icon: string;
  title: string;
  message: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <div className="text-center py-10 px-4">
      <span className="text-4xl">{icon}</span>
      <p className="font-display text-lg text-ink mt-3">{title}</p>
      <p className="text-ink-soft text-sm mt-1.5 max-w-xs mx-auto">{message}</p>
      {actionLabel && actionHref && (
        <a
          href={actionHref}
          className="inline-block mt-4 bg-brass text-ink rounded-lg px-4 py-2 text-sm font-semibold"
        >
          {actionLabel}
        </a>
      )}
    </div>
  );
}

export function SectionCard({ children }: { children: React.ReactNode }) {
  return <div className="bg-paper border border-ink/10 rounded-xl p-4">{children}</div>;
}

export function BackLink({ to, label }: { to: string; label: string }) {
  return (
    <Link to={to} className="text-ink-soft text-sm inline-block mb-2">
      ← {label}
    </Link>
  );
}
