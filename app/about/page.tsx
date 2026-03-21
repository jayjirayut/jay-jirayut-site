import type { Metadata } from 'next';

import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { absoluteUrl } from '@/lib/site';

const principles = [
  'Useful beats impressive.',
  'Good decisions matter most when the data is incomplete.',
  'AI should make people more human, not less.',
  'Clarity is a competitive advantage.',
  "Most claims in my industry are inflated. I won't make them."
];

const stillFiguringOut = [
  'What the right pace looks like when building under constraint.',
  'How to balance technical ambition with commercial reality.',
  'What autonomy actually costs.'
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
          I build AI systems, write about real-world technology, and try to stay honest about
          what the work actually requires.
        </p>
      </header>

      <div className="space-y-10">
        <section className="grid gap-5 border-t border-rule pt-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-8">
          <SectionHeading>Short bio</SectionHeading>
          <p className="max-w-reading text-[16.5px] leading-8 text-body">
            I build AI systems inside a real operating business in Southeast Asia. Most of the
            work sits where technical ambition meets budgets, operations, and the cost of being
            wrong. I write about what that kind of environment teaches you.
          </p>
        </section>

        <section className="grid gap-5 border-t border-rule pt-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-8">
          <SectionHeading>Story</SectionHeading>
          <div className="max-w-reading space-y-4 text-[16.5px] leading-8 text-body">
            <p>
              I spent more than six years building AI and data capability from zero inside a startup
              environment. That meant framing problems, hiring people, building systems, and learning
              which ideas survive contact with operations. I stayed in environments where the feedback
              was real and the consequences were visible, even when safer paths were available.
            </p>
          </div>
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

        <section className="grid gap-5 border-t border-rule pt-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-8">
          <SectionHeading>Still figuring out</SectionHeading>
          <ul className="space-y-4">
            {stillFiguringOut.map((item) => (
              <li key={item} className="text-[16px] leading-7 text-body">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-5 border-y border-rule py-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-8">
          <SectionHeading>Personal</SectionHeading>
          <div className="max-w-reading space-y-4 text-[16.5px] leading-8 text-body">
            <p>
              Bangkok is home by choice. I care about technology, health, design, music, and systems
              that make life better in ordinary ways. I want a life with more autonomy, not just a
              career with more momentum.
            </p>
          </div>
        </section>
      </div>
    </Container>
  );
}
