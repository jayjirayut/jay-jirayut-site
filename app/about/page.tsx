import type { Metadata } from 'next';

import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { absoluteUrl } from '@/lib/site';

const principles = [
  'Useful beats impressive.',
  'How you decide matters when the data is incomplete.',
  'AI should make people more human, not less.',
  'Clarity is a competitive advantage.',
  "Most claims in my industry are inflated. I won't make them."
];

export const metadata: Metadata = {
  title: 'About',
  description: 'Background, principles, and context for Jay Jirayut Chatphet.',
  alternates: {
    canonical: absoluteUrl('/about')
  }
};

export default function AboutPage() {
  return (
    <Container size="shell" className="space-y-14">
      <header className="max-w-reading space-y-5 border-b border-rule pb-10">
        <p className="section-kicker">About</p>
        <h1 className="text-[40px] font-bold tracking-[-0.08em] text-ink sm:text-[48px]">About</h1>
        <p className="max-w-2xl text-[16.5px] leading-8 text-body">
          The short version: I build AI systems where product decisions, technical depth, and
          execution all have to line up.
        </p>
      </header>

      <div className="space-y-10">
        <section className="grid gap-5 border-t border-rule pt-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-8">
          <SectionHeading>Short bio</SectionHeading>
          <p className="max-w-reading text-[16.5px] leading-8 text-body">
            I&apos;ve spent the last several years building AI and data systems inside a real
            operating business, with work that had to survive constraints instead of
            presentations.
          </p>
        </section>

        <section className="grid gap-5 border-t border-rule pt-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-8">
          <SectionHeading>Story</SectionHeading>
          <p className="max-w-reading text-[16.5px] leading-8 text-body">
            I built AI and data capability from zero inside a startup environment and stayed long
            enough to see what real deployment does to theory. The work touched complex operating
            environments across Southeast Asia. I chose environments where the stakes were real and
            the feedback loop was unforgiving, even when safer paths were available.
          </p>
        </section>

        <section className="grid gap-5 border-t border-rule pt-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-8">
          <SectionHeading>Principles</SectionHeading>
          <ul className="space-y-4">
            {principles.map((principle) => (
              <li key={principle} className="text-[16px] leading-7 text-body">
                {principle}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-5 border-y border-rule py-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-8">
          <SectionHeading>Personal</SectionHeading>
          <p className="max-w-reading text-[16.5px] leading-8 text-body">
            Bangkok is home by choice. I care about technology, health, design, music, and systems
            that actually improve life. I&apos;m trying to build a life with autonomy, not just a
            career with momentum.
          </p>
        </section>
      </div>
    </Container>
  );
}
