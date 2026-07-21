/** Small illustrative SVGs for use-case + blog layouts — brand blue, no purple glow. */

type VisualProps = {
  className?: string;
};

export function ScatterGraph({ className = "" }: VisualProps) {
  return (
    <svg className={className} viewBox="0 0 320 160" fill="none" aria-hidden>
      <title>Scattered context</title>
      {[
        [40, 40],
        [90, 110],
        [150, 35],
        [200, 95],
        [260, 50],
        [280, 120],
        [120, 70],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={6} fill="var(--accent)" opacity={0.35 + (i % 3) * 0.15} />
      ))}
      <path
        d="M46 46 L84 100 M156 42 L126 66 M206 90 L154 40 M266 56 L210 92"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeOpacity="0.2"
        strokeDasharray="3 4"
      />
    </svg>
  );
}

export function ConnectedMapGraph({ className = "" }: VisualProps) {
  return (
    <svg className={className} viewBox="0 0 320 160" fill="none" aria-hidden>
      <title>Living company map</title>
      <line x1="160" y1="80" x2="70" y2="40" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.45" />
      <line x1="160" y1="80" x2="250" y2="40" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.45" />
      <line x1="160" y1="80" x2="70" y2="130" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.45" />
      <line x1="160" y1="80" x2="250" y2="130" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.45" />
      <line x1="70" y1="40" x2="250" y2="40" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.25" />
      <line x1="70" y1="130" x2="250" y2="130" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.25" />
      <circle cx="160" cy="80" r="12" fill="var(--accent)" />
      <circle cx="160" cy="80" r="18" stroke="var(--accent-soft)" strokeWidth="2" fill="none" opacity="0.7" />
      {[
        [70, 40],
        [250, 40],
        [70, 130],
        [250, 130],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="14" fill="var(--card-solid)" stroke="var(--accent)" strokeWidth="1.5" />
          <circle cx={x} cy={y} r="5" fill="var(--accent)" />
        </g>
      ))}
    </svg>
  );
}

export function ReceiptFlowGraph({ className = "" }: VisualProps) {
  return (
    <svg className={className} viewBox="0 0 320 160" fill="none" aria-hidden>
      <title>Decision receipt trail</title>
      <rect x="24" y="36" width="72" height="88" rx="10" stroke="var(--accent)" strokeWidth="1.5" fill="color-mix(in srgb, var(--accent) 8%, transparent)" />
      <text x="60" y="70" textAnchor="middle" fill="var(--accent)" fontSize="11" fontFamily="Outfit, sans-serif" fontWeight="600">
        Who
      </text>
      <text x="60" y="90" textAnchor="middle" fill="var(--fg-muted)" fontSize="10" fontFamily="Outfit, sans-serif">
        Why
      </text>
      <text x="60" y="108" textAnchor="middle" fill="var(--fg-muted)" fontSize="10" fontFamily="Outfit, sans-serif">
        What for
      </text>
      <path d="M104 80 H140" stroke="var(--accent)" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <rect x="148" y="48" width="72" height="64" rx="10" stroke="var(--accent)" strokeWidth="1.5" fill="var(--card-solid)" />
      <text x="184" y="78" textAnchor="middle" fill="var(--fg)" fontSize="11" fontFamily="Outfit, sans-serif" fontWeight="600">
        Receipt
      </text>
      <text x="184" y="96" textAnchor="middle" fill="var(--fg-muted)" fontSize="10" fontFamily="Outfit, sans-serif">
        stamped
      </text>
      <path d="M228 80 H264" stroke="var(--accent)" strokeWidth="1.5" />
      <rect x="264" y="48" width="40" height="64" rx="10" stroke="var(--accent)" strokeWidth="1.5" fill="color-mix(in srgb, var(--accent) 12%, transparent)" />
      <circle cx="284" cy="80" r="8" fill="var(--accent)" />
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="var(--accent)" />
        </marker>
      </defs>
    </svg>
  );
}

export function FiveStepFlowGraph({ className = "" }: VisualProps) {
  const steps = ["Describe", "See", "Correct", "Ask why", "Invite"];
  return (
    <svg className={className} viewBox="0 0 360 120" fill="none" aria-hidden>
      <title>Five-step flow</title>
      {steps.map((label, i) => {
        const x = 28 + i * 68;
        return (
          <g key={label}>
            {i < steps.length - 1 && (
              <line
                x1={x + 28}
                y1="48"
                x2={x + 48}
                y2="48"
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeOpacity="0.4"
              />
            )}
            <circle cx={x + 12} cy="48" r="16" fill="var(--card-solid)" stroke="var(--accent)" strokeWidth="1.5" />
            <text
              x={x + 12}
              y="52"
              textAnchor="middle"
              fill="var(--accent)"
              fontSize="11"
              fontFamily="Outfit, sans-serif"
              fontWeight="700"
            >
              {i + 1}
            </text>
            <text
              x={x + 12}
              y="88"
              textAnchor="middle"
              fill="var(--fg-muted)"
              fontSize="9"
              fontFamily="Outfit, sans-serif"
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function BlogVisual({ type }: { type: "map" | "receipt" | "flow" | "scatter" }) {
  const common = "story-visual__svg";
  if (type === "map") return <ConnectedMapGraph className={common} />;
  if (type === "receipt") return <ReceiptFlowGraph className={common} />;
  if (type === "flow") return <FiveStepFlowGraph className={common} />;
  return <ScatterGraph className={common} />;
}
