import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="パンくずリスト" className="py-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-base-ink/70">
        <li>
          <Link href="/" className="hover:text-accent-vermillion transition-colors">
            ホーム
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-base-ink/40">/</span>
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-accent-vermillion transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-base-ink font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
