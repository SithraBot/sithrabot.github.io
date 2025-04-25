import { DocsLayout, DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { BookMarked, Boxes, Hammer } from 'lucide-react';

const iconMap = {
  'Boxes': <Boxes />,
  'Hammer': <Hammer />,
}

function Icon({ icon }: { icon: string | undefined }) {
  if (!icon) return <BookMarked />;
  return iconMap[icon as keyof typeof iconMap];
}

const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  links: [],
  sidebar: {
    tabs: {
      transform(option, node) {
        const meta = source.getNodeMeta(node);
        if (!meta) return option;
        return {
          ...option,
          icon: <Icon icon={meta.data.icon} />,
        };
      },
    },
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...docsOptions}>
      {children}
    </DocsLayout>
  );
}
