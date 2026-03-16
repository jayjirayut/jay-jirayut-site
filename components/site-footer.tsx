import { Container } from '@/components/container';
import { ThemeToggle } from '@/components/theme-toggle';
import { siteConfig } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-rule py-8">
      <Container size="shell" className="px-6 sm:px-8">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            {siteConfig.name} / {new Date().getUTCFullYear()}
          </p>
          <ThemeToggle />
        </div>
      </Container>
    </footer>
  );
}
