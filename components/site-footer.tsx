import { Container } from '@/components/container';
import { siteConfig } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-rule py-8">
      <Container
        size="shell"
        className="flex flex-col gap-3 px-6 sm:flex-row sm:items-end sm:justify-between sm:px-8"
      >
        <div className="space-y-1">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            {siteConfig.shortName} / {new Date().getUTCFullYear()}
          </p>
          <p className="text-[14px] leading-6 text-body">
            Writing and building AI that people can actually use.
          </p>
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          Bangkok / jay.jirayut@gmail.com
        </p>
      </Container>
    </footer>
  );
}
