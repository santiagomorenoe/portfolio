"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BorderBeam } from "./border-beam";
import { projects } from "@/index";
import Image from "next/image";
import { useTranslations } from "next-intl";

import {
  Globe,
  Users,
  Heart,
  Lightbulb,
  Sparkles,
  Rocket,
  Target,
  ExternalLink,
} from "lucide-react";

interface AboutUsProps {
  title?: string;
  subtitle?: string;
  mission?: string;
  vision?: string;
  values?: Array<{
    title: string;
    description: string;
    icon: keyof typeof iconComponents;
  }>;
  className?: string;
}

const iconComponents = {
  Users: Users,
  Heart: Heart,
  Lightbulb: Lightbulb,
  Globe: Globe,
  Sparkles: Sparkles,
  Rocket: Rocket,
  Target: Target,
};

export default function AboutUs1() {
  const t = useTranslations("projects");

  const missionRef = useRef(null);
  const valuesRef = useRef(null);

  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    whileInView: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, damping: 25, delay: i * 0.2 },
    }),
  };

  return (
    <section id="products" className="relative w-full overflow-hidden pt-32">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring' as const, damping: 25 }}
            className="bg-gradient-to-r from-foreground/80 via-foreground to-foreground/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            {t("title")}
          </motion.h1>
        </motion.div>

        {/* Mission & Vision Section */}
        <div ref={missionRef} className="relative mx-auto mb-24 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              className="relative z-10 gap-12 rounded-2xl"
              key={index}
              style={{
                background: "radial-gradient(circle, #ffffff1a 0%, #1e00001a 60%, #000 100%)",
              }} 
            >
              <div
                className="group border-border/40 relative block overflow-hidden rounded-2xl border bg-gradient-to-br p-10 backdrop-blur-3xl"
              >
                <BorderBeam
                  duration={8}
                  size={300}
                  className="via-primary/40 from-transparent to-transparent"
                />
                <div className="relative w-full rounded-xl overflow-hidden">
                  <Image
                    src={project?.image || ""}
                    alt={project?.name || ""}
                    width={300}
                    height={400}
                    className="object-cover hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="space-y-4 pt-6">
                  <motion.h2
                    initial="hidden"
                    whileInView="whileInView"
                    variants={variants}
                    custom={index}
                    className="from-primary/90 to-primary/70 mb-4 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
                    {project?.name}
                  </motion.h2>
                  <motion.p
                    initial="hidden"
                    whileInView="whileInView"
                    variants={variants}
                    custom={index}
                    className="text-muted-foreground text-lg leading-relaxed">
                    {t("descriptions." + index)}
                  </motion.p>
                </div>
                <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project?.tags.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    >
                      <Image
                        src={project?.tags[index] || ""}
                        alt="icon5"
                        className="p-2 object-contain backdrop-grayscale"
                        width={32}
                        height={32}
                      />
                    </div>
                  ))}
                </div>

                {index == 1 ? (
                  <div className="flex flex-row justify-center items-center bg-muted rounded-lg p-2 hover:scale-105 transition-all duration-300">
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: 'spring' as const, damping: 25 }}
                      className="cursor-not-allowed text-xs md:text-sm text-muted-foreground">
                      {t("comingSoon")}
                    </motion.p>
                  </div>
                ) : (
                  <div className="flex flex-row justify-center items-center bg-primary rounded-lg p-2 hover:scale-105 transition-all duration-300">
                    <a
                      href={project?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring' as const, damping: 25 }}
                        className="text-xs md:text-sm text-foreground">
                        {t("checkLive")}
                      </motion.p>
                    </a>
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: 'spring' as const, damping: 25 }}
                    >
                      <ExternalLink className="ms-3" size={16} color="var(--color-foreground)" />
                    </motion.span>
                  </div>
                )}
              </div>
              </div>
            </div>
          ))}
        </div>

        <div ref={valuesRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 text-center"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
