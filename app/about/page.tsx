import type { Metadata } from 'next';

import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { absoluteUrl } from '@/lib/site';

const principles = [
  'Useful beats impressive.',
  'Judgment matters when the data is incomplete.',
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
    <Container size="reading" className="space-y-14">
      <header className="space-y-5 border-b border-rule pb-10">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted">About</p>
        <h1 className="text-[40px] font-bold tracking-[-0.08em] text-ink sm:text-[46px]">About</h1>
      </header>

      <section className="space-y-5">
        <SectionHeading>Short bio</SectionHeading>
        <p className="text-[16.5px] leading-8 text-body">
          I build AI systems at the intersection of product judgment, technical depth, and
          execution. I&apos;ve spent the last several years building AI and data systems inside a
          real operating business, with work that had to survive constraints instead of
          presentations.
        </p>
      </section>

      <section className="space-y-5">
        <SectionHeading>Story</SectionHeading>
        <p className="text-[16.5px] leading-8 text-body">
          I built AI and data capability from zero inside a startup environment and stayed long
          enough to see what real deployment does to theory. The work touched complex operating
          environments across Southeast Asia. I chose environments where the stakes were real and
          the feedback loop was unforgiving, even when safer paths were available.
        </p>
      </section>

      <section className="space-y-5">
        <SectionHeading>Principles</SectionHeading>
        <ul className="space-y-4 border-y border-rule py-6">
          {principles.map((principle) => (
            <li key={principle} className="text-[16px] leading-7 text-body">
              {principle}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
        <SectionHeading>Personal</SectionHeading>
        <p className="text-[16.5px] leading-8 text-body">
          Bangkok is home by choice. I care about technology, health, design, music, and systems
          that actually improve life. I&apos;m trying to build a life with autonomy, not just a
          career with momentum.
        </p>
      </section>
    </Container>
  );
}
