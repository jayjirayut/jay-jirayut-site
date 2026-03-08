import Link from 'next/link';

import { Container } from '@/components/container';
import { siteConfig } from '@/lib/site';

const navItems = [
  { href: '/writing', label: 'Writing' },
  { href: '/work', label: 'Work' },
  { href: '/now', label: 'Now' },
  { href: '/about', label: 'About' }
];

export function SiteHeader() {
  return (
    <header className="site-header-surface fixed inset-x-0 top-0 z-50 border-b border-rule">
      <Container
        as="div"
        size="shell"
        className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4 gap-y-3 px-5 py-4 sm:flex sm:items-center sm:justify-between sm:px-8"
      >
        <Link
          href="/"
          className="pr-4 text-[15px] font-medium tracking-[-0.03em] text-ink transition-colors duration-200 hover:text-accent"
        >
          {siteConfig.shortName}
        </Link>

        <nav aria-label="Primary">
          <ul className="flex flex-col items-end gap-y-1 text-right text-[13px] text-body sm:flex-row sm:flex-wrap sm:justify-end sm:gap-x-5 sm:gap-y-2 sm:text-[14px]">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-accent hover:underline hover:underline-offset-4"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
