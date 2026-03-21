import { Container } from '@/components/container';
import { siteConfig } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-rule py-8">
      <Container size="shell" className="px-6 sm:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          {siteConfig.name} / {new Date().getUTCFullYear()}
        </p>
      </Container>
    </footer>
  );
}
