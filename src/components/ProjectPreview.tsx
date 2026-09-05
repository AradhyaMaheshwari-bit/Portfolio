import type { ProjectKind } from '../data/projects';

type Props = {
  kind: ProjectKind;
  title: string;
};

/**
 * Honest, clearly-labeled visual placeholder for a project preview.
 * No fabricated screenshots. Replace with a real <img> once assets exist.
 */
export function ProjectPreview({ kind, title }: Props) {
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-[10px] border border-[color:var(--color-border)] bg-[color:var(--color-bg-soft)]"
      role="img"
      aria-label={`Preview placeholder for ${title}. Add a real screenshot later.`}
    >
      {/* Soft accent wash at the top — restrained */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-20"
        style={{
          background:
            'radial-gradient(ellipse at 30% 0%, color-mix(in oklab, var(--color-accent) 14%, transparent), transparent 70%)',
        }}
      />

      <div className="relative flex h-full min-h-[180px] flex-col">
        {/* Faux window chrome — recognizable as a placeholder, not a fake screenshot */}
        <div className="flex items-center gap-1.5 border-b border-[color:var(--color-border)] px-3 py-2">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-border-strong)]" />
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-border-strong)]" />
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-border-strong)]" />
          <span className="ml-2 text-[10px] uppercase tracking-wider text-[color:var(--color-text-muted)]">
            {kindLabel(kind)}
          </span>
        </div>

        <div className="flex-1 px-4 py-4">
          {kind === 'bot' && <BotChrome />}
          {kind === 'data' && <DataChrome />}
          {kind === 'app' && <AppChrome />}
          {kind === 'web' && <WebChrome />}
        </div>

        <div className="flex items-center justify-center gap-1.5 border-t border-[color:var(--color-border)] px-3 py-1.5 text-[10px] uppercase tracking-wider text-[color:var(--color-text-muted)]">
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[color:var(--color-text-muted)]" />
          Preview placeholder · add screenshot later
        </div>
      </div>
    </div>
  );
}

function kindLabel(kind: ProjectKind): string {
  switch (kind) {
    case 'bot':
      return 'Discord bot';
    case 'data':
      return 'Data pipeline';
    case 'app':
      return 'Desktop app';
    case 'web':
      return 'Web app';
  }
}

/** Discord-style mock: a chat message with tag + body. Clearly schematic. */
function BotChrome() {
  return (
    <div className="space-y-2.5 font-mono text-[11px] leading-relaxed">
      <div className="flex items-start gap-2.5">
        <span aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-[color:var(--color-surface-2)]" />
        <div className="min-w-0 flex-1">
          <p className="text-[color:var(--color-accent)]">
            DCRP-Bot <span className="text-[color:var(--color-text-muted)]">— registration</span>
          </p>
          <p className="text-[color:var(--color-text-dim)]">
            tag#<span className="text-[color:var(--color-text)]">0423</span> assigned. Welcome.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-2.5">
        <span aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-[color:var(--color-surface-2)]" />
        <div className="min-w-0 flex-1">
          <p className="text-[color:var(--color-text)]">
            <span className="text-[color:var(--color-text-muted)]">[0423] → [0917]</span>
          </p>
          <p className="text-[color:var(--color-text-dim)]">
            Running the cleaning pass on the latest export…
          </p>
        </div>
      </div>
    </div>
  );
}

/** Data-pipeline mock: stacked rows + a small bar chart, schematic. */
function DataChrome() {
  const rows = [0.4, 0.7, 0.55, 0.85, 0.6, 0.78, 0.5, 0.92];
  return (
    <div className="space-y-2.5 font-mono text-[10px]">
      <div className="flex items-center justify-between text-[color:var(--color-text-muted)]">
        <span>raw → clean</span>
        <span>n=8 fields</span>
      </div>
      <div className="space-y-1">
        {rows.map((h, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-6 text-[color:var(--color-text-muted)]">f{i + 1}</span>
            <span
              className="h-1.5 rounded-sm bg-[color:var(--color-accent)]/70"
              style={{ width: `${h * 90}%` }}
              aria-hidden="true"
            />
            <span className="text-[color:var(--color-text-muted)]">{(h * 100).toFixed(0)}%</span>
          </div>
        ))}
      </div>
      <div className="text-[color:var(--color-text-muted)]">output: /clean/users_v3.json</div>
    </div>
  );
}

/** App-window mock: a calculator grid schematic. */
function AppChrome() {
  return (
    <div className="flex h-full flex-col gap-2 font-mono text-[10px]">
      <div className="rounded border border-[color:var(--color-border)] bg-[color:var(--color-bg)] px-3 py-1.5 text-right text-sm text-[color:var(--color-text)]">
        42
      </div>
      <div className="grid flex-1 grid-cols-4 gap-1.5">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="rounded border border-[color:var(--color-border)] bg-[color:var(--color-surface-2)]"
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}

/** Web chrome: navigation + content blocks. */
function WebChrome() {
  return (
    <div className="flex h-full flex-col gap-2.5 font-mono text-[10px]">
      <div className="flex items-center justify-between border-b border-[color:var(--color-border)] pb-1.5">
        <span className="text-[color:var(--color-text)]">aradhya.dev</span>
        <span className="text-[color:var(--color-text-muted)]">nav · about · work</span>
      </div>
      <div className="space-y-1.5">
        <div className="h-1.5 w-3/4 rounded bg-[color:var(--color-surface-2)]" aria-hidden="true" />
        <div className="h-1.5 w-2/3 rounded bg-[color:var(--color-surface-2)]" aria-hidden="true" />
      </div>
      <div className="mt-auto grid grid-cols-2 gap-1.5">
        <div className="h-10 rounded border border-[color:var(--color-border)] bg-[color:var(--color-surface-2)]" aria-hidden="true" />
        <div className="h-10 rounded border border-[color:var(--color-border)] bg-[color:var(--color-surface-2)]" aria-hidden="true" />
      </div>
    </div>
  );
}
