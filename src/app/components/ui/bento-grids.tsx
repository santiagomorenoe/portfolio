'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layers, Palette, Smartphone, Ruler, Bot, Hammer } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const BentoGridItem = ({
  title,
  description,
  icon,
  className,
  size = 'small',
}: BentoGridItemProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, damping: 25 },
    },
  };

  return (
    <motion.div
      variants={variants}
      className={cn(
        'group border-primary/10 bg-background hover:border-primary/30 relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border px-6 pt-6 pb-10 shadow-md transition-all duration-500',
        className,
      )}
      whileInView="whileInView"
      initial="hidden"
    >
      <div className="absolute top-0 -right-1/2 z-0 size-full cursor-pointer bg-[linear-gradient(to_right,#3d16165e_1px,transparent_1px),linear-gradient(to_bottom,#3d16165e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]"></div>

      <div className="text-primary/5 group-hover:text-primary/10 absolute right-1 bottom-3 scale-[6] transition-all duration-700 group-hover:scale-[6.2]">
        {icon}
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="bg-primary/10 text-primary shadow-primary/10 group-hover:bg-primary/20 group-hover:shadow-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-full shadow transition-all duration-500">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
      <div className="from-primary to-primary/30 absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r blur-2xl transition-all duration-500 group-hover:blur-lg" />
    </motion.div>
  );
};

type ServiceItem = { title: string; description: string; link: string };
type GridItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  size: 'small' | 'medium' | 'large';
};

export default function BentoGrid1() {
  const t = useTranslations('bento');
  const services = (t.raw('services') as ServiceItem[]) || [];

  const icons = [
    <Code key="i0" className="size-6" />,
    <Smartphone key="i1" className="size-6" />,
    <Ruler key="i2" className="size-6" />,
    <Bot key="i3" className="size-6" />,
    <Palette key="i4" className="size-6" />,
    <Hammer key="i5" className="size-6" />,
  ];
  const sizes: Array<'small' | 'medium' | 'large'> = [
    'large',
    'small',
    'medium',
    'medium',
    'small',
    'large',
  ];

  const items: GridItem[] = services.slice(0, icons.length).map((svc, i): GridItem => ({
    title: svc.title,
    description: svc.description,
    icon: icons[i] ?? <Layers className="size-6" />,
    size: (sizes[i] ?? 'small') as 'small' | 'medium' | 'large',
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6"
      >
        {items.map((item: GridItem, i: number) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
            size={item.size}
            className={cn(
              item.size === 'large'
                ? 'col-span-4'
                : item.size === 'medium'
                  ? 'col-span-3'
                  : 'col-span-2',
              'h-full',
            )}
          />
        ))}
      </motion.div>
    </div>
  );
}
