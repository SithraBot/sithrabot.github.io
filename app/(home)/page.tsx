import Image from 'next/image';
import { Card } from 'fumadocs-ui/components/card';
import { Zap, Code, Package, Puzzle } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center px-4">
      <Image src="/icon.png" alt="SithraRS" width={100} height={100} className='rounded-full my-4 mt-8 md:mt-4' />
      <h1 className="mb-4 text-2xl font-bold">SithraRS</h1>
      <p className="text-fd-muted-foreground mb-12 max-w-2xl text-center">
        基于 Rust 打造的高性能 OneBot 机器人框架，为您的聊天机器人提供强大支持。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        <Card title="极速冷启动" icon={<Zap className="text-yellow-400" />} className="text-left">
          <p className="text-fd-muted-foreground">
            从启动到加载 5 个插件到就绪仅需 50ms，为您的机器人提供闪电般的响应速度。
          </p>
        </Card>
        <Card title="简单开发" icon={<Code className="text-blue-400" />} className="text-left">
          <p className="text-fd-muted-foreground">
            开发一个简单的 sithra-rs 插件仅需 17 行代码。得益于 Rust 的内存安全和类型安全特性，让您专注于业务逻辑，无需担心内存泄漏和类型错误。
          </p>
        </Card>
        <Card title="零运行时" icon={<Package className="text-green-400" />} className="text-left">
          <p className="text-fd-muted-foreground">
            采用静态编译方式，部署简单，无需安装任何运行时环境，保持系统环境的纯净。
          </p>
        </Card>
        <Card title="动态插件系统" icon={<Puzzle className="text-purple-400" />} className="text-left">
          <p className="text-fd-muted-foreground">
            基于 ioevent 的动态插件系统，即插即用，无需重新编译主程序，让功能模块化、分发和获取变得简单高效。
          </p>
        </Card>
      </div>
    </main>
  );
}
