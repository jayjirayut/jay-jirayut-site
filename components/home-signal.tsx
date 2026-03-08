export function HomeSignal() {
  const accent = 'var(--accent)';
  const accentSoft = 'var(--accent-soft)';

  return (
    <figure className="hero-signal surface-panel mx-auto w-full max-w-[470px] overflow-hidden p-4 sm:p-5 lg:max-w-none">
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        <span>System map</span>
        <span>March 2026</span>
      </div>

      <svg
        viewBox="0 0 860 720"
        role="img"
        aria-label="Abstract animated editorial artwork suggesting systems, clarity, and calm intelligence."
        className="mt-4 w-full overflow-visible"
      >
        <defs>
          <pattern id="artifactGrid" width="34" height="34" patternUnits="userSpaceOnUse">
            <path d="M34 0H0V34" fill="none" stroke="#e2e1dd" strokeWidth="1" />
          </pattern>
        </defs>

        <rect width="860" height="720" fill="#fafaf8" />
        <rect x="20" y="20" width="820" height="680" fill="url(#artifactGrid)" opacity="0.66" />
        <circle cx="610" cy="228" r="132" fill={accent} opacity="0.06" />

        <g opacity="0.88">
          <path d="M70 128H790" stroke="#e2e1dd" strokeWidth="1" />
          <path d="M70 594H790" stroke="#e2e1dd" strokeWidth="1" />
          <path d="M112 84V636" stroke="#e2e1dd" strokeWidth="1" />
          <path d="M748 84V636" stroke="#e2e1dd" strokeWidth="1" />
        </g>

        <g className="signal-orbit signal-orbit--one">
          <ellipse
            cx="594"
            cy="240"
            rx="206"
            ry="144"
            fill="none"
            stroke={accent}
            strokeWidth="1.4"
            strokeDasharray="12 16"
            opacity="0.72"
          />
        </g>

        <g className="signal-orbit signal-orbit--two">
          <ellipse
            cx="594"
            cy="240"
            rx="164"
            ry="114"
            fill="none"
            stroke="#111111"
            strokeWidth="1.2"
            strokeDasharray="5 12"
            opacity="0.36"
          />
        </g>

        <g className="signal-drift">
          <path
            d="M128 500C220 502 296 478 368 426C426 384 466 334 548 318C624 302 694 318 770 366"
            fill="none"
            stroke={accent}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeDasharray="18 14"
            opacity="0.84"
          />
          <path
            d="M122 548C214 548 296 532 370 490C444 448 486 392 576 380C642 370 702 380 760 412"
            fill="none"
            stroke="#111111"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeDasharray="14 15"
            opacity="0.54"
          />
        </g>

        <g className="signal-sweep">
          <path
            d="M254 284H732"
            fill="none"
            stroke={accent}
            strokeOpacity="0.12"
            strokeWidth="18"
            strokeLinecap="round"
          />
        </g>

        <g className="artifact-core">
          <polygon
            points="382,184 552,134 686,214 516,264"
            fill={accentSoft}
            stroke={accent}
            strokeWidth="1.4"
          />
          <polygon
            points="382,184 382,414 516,494 516,264"
            fill="#fafaf8"
            stroke="#111111"
            strokeWidth="1.5"
          />
          <polygon
            points="516,264 686,214 686,444 516,494"
            fill="#f1f0ed"
            stroke="#111111"
            strokeWidth="1.5"
          />

          <path d="M406 250L516 214L646 276" stroke="#e2e1dd" strokeWidth="1.2" />
          <path d="M406 294L516 258L646 320" stroke="#e2e1dd" strokeWidth="1.2" />
          <path d="M406 338L516 302L646 364" stroke="#e2e1dd" strokeWidth="1.2" />
          <path d="M406 382L516 346L646 408" stroke="#e2e1dd" strokeWidth="1.2" />

          <path d="M472 170V402" stroke="#e2e1dd" strokeWidth="1.2" />
          <path d="M560 148V534" stroke="#e2e1dd" strokeWidth="1.2" />
          <path d="M640 188V468" stroke="#e2e1dd" strokeWidth="1.2" />

          <path
            d="M422 348L476 312L546 340L612 302L652 320"
            fill="none"
            stroke={accent}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M422 388L472 364L542 388L612 352L652 366"
            fill="none"
            stroke="#111111"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.58"
          />
        </g>

        <g opacity="0.92">
          <rect x="164" y="228" width="146" height="214" fill="#fafaf8" stroke="#111111" strokeWidth="1.4" />
          <path d="M164 268H310" stroke="#e2e1dd" strokeWidth="1.2" />
          <path d="M164 308H310" stroke="#e2e1dd" strokeWidth="1.2" />
          <path d="M164 348H310" stroke="#e2e1dd" strokeWidth="1.2" />
          <path d="M164 388H310" stroke="#e2e1dd" strokeWidth="1.2" />
          <path d="M198 255L270 255" stroke={accent} strokeWidth="2.4" strokeLinecap="round" />
          <path d="M198 295L286 295" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" opacity="0.76" />
          <path d="M198 335L250 335" stroke={accent} strokeWidth="1.8" strokeLinecap="round" opacity="0.82" />
          <path d="M198 375L284 375" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" opacity="0.58" />
          <path d="M198 415L246 415" stroke={accent} strokeWidth="1.8" strokeLinecap="round" opacity="0.74" />
          <circle cx="236" cy="455" r="7" fill={accent} />
        </g>

        <g className="signal-pulse" style={{ animationDelay: '0s' }}>
          <circle cx="236" cy="455" r="22" fill="none" stroke={accent} strokeWidth="1.4" opacity="0.42" />
        </g>
        <g className="signal-pulse" style={{ animationDelay: '0.9s' }}>
          <circle cx="546" cy="340" r="18" fill="none" stroke={accent} strokeWidth="1.4" opacity="0.34" />
        </g>
        <g className="signal-pulse" style={{ animationDelay: '1.6s' }}>
          <circle cx="612" cy="352" r="14" fill="none" stroke="#111111" strokeWidth="1.2" opacity="0.24" />
        </g>

        {[
          [546, 340, accent],
          [612, 352, '#111111'],
          [652, 320, accent],
          [612, 302, '#111111'],
          [552, 134, accent],
          [636, 184, '#111111']
        ].map(([cx, cy, fill]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5.5" fill={fill as string} />
        ))}

        <text
          x="128"
          y="114"
          fill="#111111"
          fontSize="16"
          fontFamily="monospace"
          letterSpacing="5"
        >
          REAL-WORLD AI / FIELD NOTES
        </text>
        <text
          x="128"
          y="142"
          fill="#7a7a7a"
          fontSize="13"
          fontFamily="monospace"
          letterSpacing="3"
        >
          DECISIONS / EXECUTION
        </text>
        <text
          x="730"
          y="560"
          fill="#111111"
          fontSize="14"
          fontFamily="monospace"
          letterSpacing="4"
          textAnchor="end"
        >
          BUILT FOR REAL USE
        </text>
        <text
          x="730"
          y="588"
          fill="#7a7a7a"
          fontSize="12"
          fontFamily="monospace"
          letterSpacing="3"
          textAnchor="end"
        >
          HAND-BUILT VISUAL
        </text>
      </svg>

      <div className="mt-4 flex items-center justify-between border-t border-rule pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        <span>AI systems and writing</span>
        <span>Hand-built visual</span>
      </div>
    </figure>
  );
}
