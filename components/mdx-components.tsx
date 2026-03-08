import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';
import type { ComponentPropsWithoutRef } from 'react';

type AnchorProps = ComponentPropsWithoutRef<'a'>;

export const mdxComponents: MDXComponents = {
  a: ({ href = '', children, ...props }: AnchorProps) => {
    const isInternal = href.startsWith('/');

    if (isInternal) {
      return (
        <Link
          href={href}
          className="text-accent underline decoration-accent underline-offset-4 transition-colors duration-200 hover:text-ink"
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className="text-accent underline decoration-accent underline-offset-4 transition-colors duration-200 hover:text-ink"
        {...props}
      >
        {children}
      </a>
    );
  },
  h2: ({ children }) => (
    <h2 className="mt-16 text-[24px] font-semibold tracking-[-0.06em] text-ink sm:text-[28px]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-12 text-[19px] font-semibold tracking-[-0.03em] text-ink sm:text-[21px]">
      {children}
    </h3>
  ),
  p: ({ children }) => <p className="mt-6 text-[16.5px] leading-8 text-body">{children}</p>,
  ul: ({ children }) => (
    <ul className="mt-6 list-disc space-y-3 pl-6 text-[16.5px] leading-8 text-body">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-6 list-decimal space-y-3 pl-6 text-[16.5px] leading-8 text-body">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="mt-8 border-l border-rule pl-5 text-[16.5px] italic leading-8 text-body">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="mt-12 border-rule" />,
  code: ({ children }) => (
    <code className="rounded-sm bg-surface px-1.5 py-0.5 font-mono text-[13px] text-ink">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mt-8 overflow-x-auto rounded-sm border border-rule bg-surface p-4 font-mono text-[13px] leading-6 text-ink">
      {children}
    </pre>
  )
};
