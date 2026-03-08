export function HomeSignal() {
  return (
    <figure className="hero-signal rounded-sm border border-rule bg-surface p-4 sm:p-6">
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        <span>BKK / UTC+7</span>
        <span>Signal / 01</span>
      </div>

      <svg
        viewBox="0 0 720 860"
        role="img"
        aria-label="Abstract animated signal field representing systems, rhythm, and clarity."
        className="mt-4 w-full overflow-visible"
      >
        <defs>
          <pattern id="signal-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e1dd" strokeWidth="1" />
          </pattern>
        </defs>

        <rect width="720" height="860" fill="#f1f0ed" />
        <rect width="720" height="860" fill="url(#signal-grid)" opacity="0.85" />

        <g className="signal-orbit signal-orbit--one">
          <ellipse
            cx="360"
            cy="430"
            rx="260"
            ry="348"
            fill="none"
            stroke="#4338ca"
            strokeWidth="1.6"
            opacity="0.8"
            strokeDasharray="12 16"
          />
        </g>

        <g className="signal-orbit signal-orbit--two">
          <ellipse
            cx="360"
            cy="430"
            rx="208"
            ry="296"
            fill="none"
            stroke="#111111"
            strokeWidth="1.3"
            opacity="0.55"
            strokeDasharray="4 14"
          />
        </g>

        <path
          className="signal-trace"
          d="M88 586C158 532 205 468 252 392C302 312 352 238 438 198C494 172 546 166 632 180"
          fill="none"
          stroke="#4338ca"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeDasharray="18 18"
        />

        <path
          className="signal-trace signal-trace--slow"
          d="M92 674C164 642 214 602 266 540C332 464 392 376 482 330C540 300 592 292 644 302"
          fill="none"
          stroke="#111111"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="14 18"
          opacity="0.68"
        />

        <g className="signal-sweep">
          <path
            d="M150 214L574 214"
            fill="none"
            stroke="#4338ca"
            strokeOpacity="0.18"
            strokeWidth="18"
            strokeLinecap="round"
          />
        </g>

        <path
          d="M132 510L232 462L336 520L404 428L514 468L612 380"
          fill="none"
          stroke="#111111"
          strokeWidth="1.8"
          opacity="0.72"
        />

        <path
          d="M146 322L250 274L330 338L432 286L530 340L620 280"
          fill="none"
          stroke="#4338ca"
          strokeWidth="1.8"
          opacity="0.82"
        />

        {[
          [232, 462, '0s'],
          [336, 520, '0.8s'],
          [404, 428, '1.2s'],
          [514, 468, '1.8s'],
          [250, 274, '0.5s'],
          [432, 286, '1.6s'],
          [530, 340, '2.2s']
        ].map(([cx, cy, delay]) => (
          <circle
            key={`${cx}-${cy}`}
            className="signal-pulse"
            cx={cx}
            cy={cy}
            r="6.5"
            fill="#4338ca"
            style={{ animationDelay: delay as string }}
          />
        ))}

        <circle cx="360" cy="430" r="96" fill="#eef2ff" opacity="0.8" />
        <circle cx="360" cy="430" r="62" fill="none" stroke="#111111" strokeWidth="1.4" opacity="0.6" />
        <circle cx="360" cy="430" r="14" fill="#111111" />

        <g className="signal-pulse" style={{ animationDelay: '1.1s' }}>
          <circle cx="360" cy="430" r="132" fill="none" stroke="#4338ca" strokeWidth="1.8" opacity="0.3" />
        </g>

        <text
          x="120"
          y="124"
          fill="#111111"
          fontSize="18"
          fontFamily="monospace"
          letterSpacing="5"
          textAnchor="start"
        >
          BANGKOK / SEA
        </text>
        <text
          x="120"
          y="152"
          fill="#7a7a7a"
          fontSize="14"
          fontFamily="monospace"
          letterSpacing="3"
          textAnchor="start"
        >
          13.7563 N / 100.5018 E
        </text>
        <text
          x="600"
          y="744"
          fill="#111111"
          fontSize="15"
          fontFamily="monospace"
          letterSpacing="4"
          textAnchor="end"
        >
          SYSTEMS THAT HOLD
        </text>
        <text
          x="600"
          y="776"
          fill="#7a7a7a"
          fontSize="13"
          fontFamily="monospace"
          letterSpacing="3"
          textAnchor="end"
        >
          USEFUL &gt; THEATRICAL
        </text>
      </svg>

      <div className="mt-4 flex items-center justify-between border-t border-rule pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        <span>AI / systems / judgment</span>
        <span>Signal study</span>
      </div>
    </figure>
  );
}
