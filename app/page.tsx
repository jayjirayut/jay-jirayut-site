import Link from 'next/link';

import { Container } from '@/components/container';
import { HomeSignal } from '@/components/home-signal';
import { MetadataLine } from '@/components/metadata-line';
import { SectionHeading } from '@/components/section-heading';
import { getWorkEntries, getWritingEntries } from '@/lib/content';
import { siteConfig, formatDate } from '@/lib/site';

const talks = [
  'Secret Sauce EP.591 / 1.41M subscriber channel',
  'MFA Panel / Slush 2025 debrief / January 2026',
  'Available for / AI that makes us more human'
];

export default function HomePage() {
  const writing = getWritingEntries().slice(0, 3);
  const work = getWorkEntries().slice(0, 2);

  return (
    <Container size="shell" className="space-y-20 sm:space-y-24">
      <section className="border-b border-rule pb-16 sm:pb-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-end lg:gap-12">
          <div className="max-w-3xl space-y-6">
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted">
              {siteConfig.name}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              <span>AI</span>
              <span>Systems</span>
              <span>Writing</span>
            </div>

            <h1 className="max-w-4xl text-[38px] font-bold leading-[1.02] tracking-[-0.08em] text-ink sm:text-[48px]">
              I build AI systems that work in the real world.
            </h1>
            <p className="max-w-2xl text-[17px] leading-8 text-body">
              Based in Bangkok. Writing about AI, judgment, systems, and useful technology.
            </p>
            <div className="lg:hidden">
              <HomeSignal />
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-3 pt-2 text-[15px] text-body">
              <Link
                href="/writing"
                className="text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
              >
                Read writing
              </Link>
              <Link
                href="/work"
                className="text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
              >
                View work
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
              >
                Get in touch
              </a>
            </div>
            <p className="max-w-2xl text-[15px] leading-7 text-body">
              Not borrowed from the Bay. I care about work with taste, restraint, and enough
              honesty to survive outside the launch cycle.
            </p>
          </div>

          <div className="hidden lg:block">
            <HomeSignal />
          </div>
        </div>
      </section>

      <section className="max-w-reading">
        <p className="text-[16.5px] leading-8 text-body">
          I&apos;ve spent the last several years building AI and data systems inside a real
          operating business, where the work has to survive ambiguity, constraints, and
          reality. I care about clear thinking, useful AI, and decisions that still make sense
          after the demo ends.
        </p>
      </section>

      <section className="space-y-8">
        <SectionHeading>Selected writing</SectionHeading>
        <div className="divide-y divide-rule border-y border-rule">
          {writing.map((entry) => (
            <article key={entry.slug} className="py-6">
              <MetadataLine items={[formatDate(entry.date)]} />
              <Link href={`/writing/${entry.slug}`} className="mt-3 block">
                <h3 className="text-[22px] font-semibold tracking-[-0.04em] text-ink transition-colors duration-200 hover:text-accent">
                  {entry.title}
                </h3>
              </Link>
              <p className="mt-2 max-w-2xl text-[16px] leading-7 text-body">{entry.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading>Selected work</SectionHeading>
        <div className="grid gap-4 md:grid-cols-2">
          {work.map((entry) => (
            <article
              key={entry.slug}
              className="flex h-full flex-col justify-between rounded-sm border border-rule bg-surface p-6"
            >
              <div className="space-y-3">
                <MetadataLine items={[formatDate(entry.date), ...entry.tags.slice(0, 1)]} />
                <h3 className="text-[21px] font-semibold tracking-[-0.04em] text-ink">
                  {entry.title}
                </h3>
                <p className="text-[16px] leading-7 text-body">{entry.description}</p>
              </div>
              <Link
                href={`/work/${entry.slug}`}
                className="mt-6 text-[14px] text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
              >
                Read note
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading>Talks / appearances</SectionHeading>
        <ul className="space-y-4 border-y border-rule py-6">
          {talks.map((item) => (
            <li key={item} className="text-[16px] leading-7 text-body">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-rule pt-10">
        <p className="text-[16px] leading-7 text-body">
          Advisory, speaking, or collaboration{' '}
          <span aria-hidden="true" className="text-muted">
            —
          </span>{' '}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
          >
            {siteConfig.email}
          </a>
        </p>
      </section>
    </Container>
  );
}
