import Link from 'next/link';

import { ContactCard } from '@/components/contact-card';
import { Container } from '@/components/container';
import { HomeSignal } from '@/components/home-signal';
import { MetadataLine } from '@/components/metadata-line';
import { SectionHeading } from '@/components/section-heading';
import { getWorkEntries, getWritingEntries } from '@/lib/content';
import { formatDate, siteConfig } from '@/lib/site';

const pathways = [
  {
    eyebrow: 'Read first',
    title: 'Writing',
    description: 'Essays on useful AI, real-world systems, and how decisions get made.',
    href: '/writing',
    cta: 'Start reading'
  },
  {
    eyebrow: 'Selected notes',
    title: 'Work',
    description: 'A few examples of how I think when the work is ambiguous and commercially real.',
    href: '/work',
    cta: 'View selected work'
  },
  {
    eyebrow: 'Direct contact',
    title: 'Get in touch',
    description: 'For advisory, speaking, or collaboration. Email is the cleanest way to start.',
    href: '#contact',
    cta: 'Open contact'
  }
];

const talks = [
  {
    type: 'Podcast',
    title: 'Executive Espresso EP.591 / Claude Code & Cowork',
    note: 'YouTube appearance',
    href: 'https://youtu.be/y1-FyGD237M?si=Fg6mTFWiGpGat3Mp'
  },
  {
    type: 'Panel',
    title: 'MFA Panel / Slush 2025 debrief / January 2026',
    note: 'Public discussion',
    href: 'https://slush.org/'
  },
  {
    type: 'Speaking',
    title: 'Available for / AI that makes us more human',
    note: 'Advisory and talks',
    href: '#contact'
  }
];

export default function HomePage() {
  const writing = getWritingEntries().slice(0, 3);
  const work = getWorkEntries().slice(0, 2);
  const [leadWriting, ...supportingWriting] = writing;

  return (
    <Container size="shell" className="space-y-20 sm:space-y-24">
      <section className="border-b border-rule pb-16 sm:pb-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.06fr)_minmax(360px,0.94fr)] lg:items-start lg:gap-12">
          <div className="max-w-3xl space-y-7">
            <h1 className="max-w-4xl text-[40px] font-bold leading-[0.98] tracking-[-0.085em] text-ink sm:text-[52px]">
              I build AI systems that work in the real world.
            </h1>
            <p className="max-w-2xl text-[18px] leading-8 text-body">
              Based in Bangkok. I write about building AI, making better decisions, and
              technology people can actually use.
            </p>
            <p className="max-w-2xl text-[16px] leading-8 text-body">
              I care about work that is useful, honest, and still makes sense after launch.
            </p>

            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {pathways.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="surface-panel flex h-full flex-col justify-between p-4 sm:p-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                      <span>0{index + 1}</span>
                      <span>{item.eyebrow}</span>
                    </div>
                    <h2 className="text-[20px] font-semibold tracking-[-0.05em] text-ink">
                      {item.title}
                    </h2>
                    <p className="text-[15px] leading-7 text-body">{item.description}</p>
                  </div>
                  <span className="mt-6 text-[14px] text-accent transition-colors duration-200 hover:underline hover:underline-offset-4">
                    {item.cta}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <HomeSignal />
            <div className="surface-panel p-4 sm:p-5" data-static="true">
              <p className="section-kicker">What the site should do</p>
              <p className="mt-3 max-w-md text-[15px] leading-7 text-body">
                Help someone understand how I think, what kind of work I do, and whether they
                should keep reading or send an email.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 border-b border-rule pb-14 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-8">
        <p className="section-kicker pt-1">Introduction</p>
        <p className="max-w-reading text-[17px] leading-8 text-body">
          I&apos;ve spent the last several years building AI and data systems inside a real
          operating business, where the work has to survive ambiguity, constraints, and
          reality. I care about clear thinking, useful AI, and decisions that still make sense
          after the demo ends.
        </p>
      </section>

      <section className="space-y-8">
        <div className="flex items-end justify-between gap-4 border-b border-rule pb-4">
          <SectionHeading>Selected writing</SectionHeading>
          <Link
            href="/writing"
            className="text-[14px] text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
          >
            All writing
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.12fr)_minmax(280px,0.88fr)]">
          {leadWriting ? (
            <article className="surface-panel flex h-full flex-col justify-between p-6 sm:p-8">
              <div className="space-y-4">
                <MetadataLine items={[formatDate(leadWriting.date), 'Featured essay']} />
                <Link href={`/writing/${leadWriting.slug}`} className="block">
                  <h3 className="max-w-2xl text-[31px] font-semibold leading-[1.05] tracking-[-0.07em] text-ink transition-colors duration-200 hover:text-accent sm:text-[36px]">
                    {leadWriting.title}
                  </h3>
                </Link>
                <p className="max-w-2xl text-[16.5px] leading-8 text-body">
                  {leadWriting.description}
                </p>
              </div>

              <Link
                href={`/writing/${leadWriting.slug}`}
                className="mt-8 text-[14px] text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
              >
                Read essay
              </Link>
            </article>
          ) : null}

          <div className="grid gap-4">
            {supportingWriting.map((entry) => (
              <article key={entry.slug} className="surface-panel flex h-full flex-col justify-between p-5 sm:p-6">
                <div className="space-y-3">
                  <MetadataLine items={[formatDate(entry.date)]} />
                  <Link href={`/writing/${entry.slug}`} className="block">
                    <h3 className="text-[24px] font-semibold tracking-[-0.05em] text-ink transition-colors duration-200 hover:text-accent">
                      {entry.title}
                    </h3>
                  </Link>
                  <p className="text-[15.5px] leading-7 text-body">{entry.description}</p>
                </div>

                <Link
                  href={`/writing/${entry.slug}`}
                  className="mt-6 text-[14px] text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
                >
                  Read essay
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-end justify-between gap-4 border-b border-rule pb-4">
          <SectionHeading>Selected work</SectionHeading>
          <Link
            href="/work"
            className="text-[14px] text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
          >
            All work
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {work.map((entry, index) => (
            <article key={entry.slug} className="surface-panel flex h-full flex-col justify-between p-6 sm:p-7">
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <MetadataLine items={[formatDate(entry.date), ...entry.tags.slice(0, 1)]} />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    0{index + 1}
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-[24px] font-semibold tracking-[-0.05em] text-ink">
                    {entry.title}
                  </h3>
                  <p className="text-[16px] leading-7 text-body">{entry.description}</p>
                </div>
              </div>

              <Link
                href={`/work/${entry.slug}`}
                className="mt-8 text-[14px] text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
              >
                Read note
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-10">
        <div className="space-y-2">
          <SectionHeading>Talks / appearances</SectionHeading>
          <p className="text-[15px] leading-7 text-body">
            A small public trail. Enough to show the work is out in the world.
          </p>
        </div>

        <div className="border-y border-rule">
          {talks.map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="group grid gap-3 px-1 py-5 transition-colors duration-200 md:grid-cols-[112px_minmax(0,1fr)_160px]"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                0{index + 1} / {item.type}
              </p>
              <p className="text-[17px] leading-8 text-ink transition-colors duration-200 group-hover:text-accent">
                {item.title}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:text-right">
                {item.note}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-32">
        <div className="grid gap-8 border-t border-rule pt-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(320px,1fr)] lg:gap-12">
          <div className="space-y-4">
            <p className="section-kicker">Contact</p>
            <h2 className="max-w-md text-[32px] font-semibold leading-[1.04] tracking-[-0.07em] text-ink sm:text-[38px]">
              Advisory, speaking, or collaboration.
            </h2>
            <p className="max-w-md text-[16px] leading-8 text-body">
              If there&apos;s a fit, email is still the simplest way to reach me. No form. No
              inbox maze.
            </p>
          </div>

          <ContactCard email={siteConfig.email} />
        </div>
      </section>
    </Container>
  );
}
