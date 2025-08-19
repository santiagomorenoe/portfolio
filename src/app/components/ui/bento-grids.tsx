'use client';
import { cn } from '@/lib/utils';
import { motion, Variants } from 'framer-motion';
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
  whileInView: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, damping: 25, delay: i * 0.2 },
  }),
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  whileInView: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { type: 'spring' as const, damping: 25, delay: i * 0.4 },
  }),
};

  return (
    <div
      className={cn(
        'group border-primary/10 bg-background hover:border-primary/30 relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border px-6 pt-6 pb-10 shadow-md transition-all duration-500',
        className,
      )}
    >
      <div className="absolute top-0 -right-1/2 z-0 size-full cursor-pointer bg-[linear-gradient(to_right,#3d16165e_1px,transparent_1px),linear-gradient(to_bottom,#3d16165e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]"></div>

      <div className="text-primary/5 group-hover:text-primary/10 absolute right-1 bottom-3 scale-[6] transition-all duration-700 group-hover:scale-[6.2]">
        <motion.span
          variants={variants}
          initial="hidden"
          whileInView="whileInView"
          custom={0.2}
        >
        {icon}
        </motion.span>
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="bg-primary/10 text-primary shadow-primary/10 group-hover:bg-primary/20 group-hover:shadow-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-full shadow transition-all duration-500">
            <motion.span
              variants={variants}
              initial="hidden"
              whileInView="whileInView"
              custom={0.4}
            >
              {icon}
            </motion.span>
          </div>
          <motion.h3
            variants={textVariants}
            initial="hidden"
            whileInView="whileInView"
            custom={0.6}
          >
            {title}
          </motion.h3>
          <motion.p
            variants={textVariants}
            initial="hidden"
            whileInView="whileInView"
            custom={0.8}
            className="text-muted-foreground text-sm"
          >
            {description}
          </motion.p>
        </div>
      </div>
      <div className="from-primary to-primary/30 absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r blur-2xl transition-all duration-500 group-hover:blur-lg" />
    </div>
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
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div
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
      </div>
    </div>
  );
}
