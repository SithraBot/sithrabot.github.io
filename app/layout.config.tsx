import { Image } from 'fumadocs-core/framework';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Boxes, Hammer } from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image src="/icon.png" alt="Logo" width={24} height={24} />
        <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">
          SithraRS
        </span>
      </>
    ),
    transparentMode: 'top'
  },
  links: [
    {
      type: 'menu',
      text: '文档',
      url: '/docs/usage',
      items: [{
        icon: <Boxes />,
        text: '使用文档',
        url: '/docs/usage',
        description: '在您的设备上部署 sithra-rs',
      },
      {
        icon: <Hammer />,
        text: '开发文档',
        url: '/docs/development',
        description: '开始开发 sithra-rs 插件',
      }]
    }
  ],
  githubUrl: 'https://github.com/SithraBot/sithra-rs'
};
