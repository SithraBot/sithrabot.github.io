import Image from 'next/image';
import { Card } from 'fumadocs-ui/components/card';
import { Zap, Code, Package, Puzzle } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center px-4">
      <Image src="/icon.png" alt="sithra-rs icon" width={140} height={140} className='rounded-full my-4 mt-8 md:mt-4' />
      <h1 className="mb-4 text-2xl font-bold">sithra-rs</h1>
      <p className="text-fd-muted-foreground mb-12 max-w-2xl text-center">
        基于 Rust 打造的高性能通用聊天机器人框架
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mb-7">
        <Card title="高性能" icon={<Zap className="text-yellow-400" />} className="text-left">
          <p className="text-fd-muted-foreground">
            采用类似 axum 的高性能 web 服务器架构设计，为您的机器人提供闪电般的响应速度。
          </p>
        </Card>
        <Card title="简单开发" icon={<Code className="text-blue-400" />} className="text-left">
          <p className="text-fd-muted-foreground">
            开发一个简单的 sithra-rs 插件仅需 32 行代码。得益于 Rust 的内存安全和类型安全特性，让您专注于业务逻辑，无需担心内存泄漏和类型错误。
          </p>
        </Card>
        <Card title="零运行时" icon={<Package className="text-green-400" />} className="text-left">
          <p className="text-fd-muted-foreground">
            采用静态编译方式，部署简单，无需安装任何运行时环境，保持系统环境的纯净。
          </p>
        </Card>
        <Card title="动态插件系统" icon={<Puzzle className="text-purple-400" />} className="text-left">
          <p className="text-fd-muted-foreground">
            动态插件系统，即插即用，无需重新编译主程序，让功能模块化、分发和获取变得简单高效。
          </p>
        </Card>
      </div>
    </main>
  );
}
