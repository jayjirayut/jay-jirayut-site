import Link from 'next/link';

import { ContactCard } from '@/components/contact-card';
import { Container } from '@/components/container';
import { HomeSignal } from '@/components/home-signal';
import { MetadataLine } from '@/components/metadata-line';
import { SectionHeading } from '@/components/section-heading';
import { getWorkEntries, getWritingEntries } from '@/lib/content';
import { formatDate, siteConfig } from '@/lib/site';

const talks = [
  {
    label: 'Executive Espresso EP.591 / Claude Code & Cowork',
    href: 'https://youtu.be/y1-FyGD237M?si=Fg6mTFWiGpGat3Mp'
  },
  {
    label: 'MFA Panel / Slush 2025 debrief / January 2026',
    href: 'https://slush.org/'
  },
  {
    label: 'Available for / AI that makes us more human',
    href: '#contact'
  }
];

export default function HomePage() {
  const writing = getWritingEntries().slice(0, 3);
  const work = getWorkEntries().slice(0, 2);

  return (
    <Container size="shell" className="space-y-20 sm:space-y-24">
      <section className="border-b border-rule pb-16 sm:pb-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-end lg:gap-12">
          <div className="max-w-3xl space-y-6">
            <h1 className="max-w-4xl text-[40px] font-bold leading-[0.99] tracking-[-0.085em] text-ink sm:text-[52px]">
              I build AI systems that work in the real world.
            </h1>
            <p className="max-w-2xl text-[18px] leading-8 text-body">
              Based in Bangkok. I write about building AI, making better decisions, and
              technology people can actually use.
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
                href="#contact"
                className="text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
              >
                Get in touch
              </a>
            </div>
            <p className="max-w-2xl text-[15px] leading-7 text-body">
              I care about work that is useful, honest, and still makes sense after launch.
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
        <div className="flex items-end justify-between gap-4">
          <SectionHeading>Selected writing</SectionHeading>
          <Link
            href="/writing"
            className="text-[14px] text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
          >
            All writing
          </Link>
        </div>

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
        <div className="flex items-end justify-between gap-4">
          <SectionHeading>Selected work</SectionHeading>
          <Link
            href="/work"
            className="text-[14px] text-accent transition-colors duration-200 hover:underline hover:underline-offset-4"
          >
            All work
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {work.map((entry) => (
            <article key={entry.slug} className="surface-panel flex h-full flex-col justify-between p-6" data-static="true">
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
            <li key={item.label} className="text-[16px] leading-7 text-body">
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="transition-colors duration-200 hover:text-accent hover:underline hover:underline-offset-4"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="scroll-mt-32 border-t border-rule pt-10">
        <div className="max-w-reading space-y-5">
          <SectionHeading>Get in touch</SectionHeading>
          <p className="text-[16px] leading-7 text-body">
            If there&apos;s a fit, email is the simplest way to reach me.
          </p>
          <ContactCard email={siteConfig.email} />
        </div>
      </section>
    </Container>
  );
}
