"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Spotlight } from "./spotlight";
import { BorderBeam } from "./border-beam";
import { CardHoverEffect } from "./pulse-card";
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
  ArrowRight,
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
          <h1 className="bg-gradient-to-r from-foreground/80 via-foreground to-foreground/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            {t("title")}
          </h1>
        </motion.div>

        {/* Mission & Vision Section */}
        <div ref={missionRef} className="relative mx-auto mb-24 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={
                missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
              }
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative z-10 gap-12 rounded-2xl"
              key={index}
              style={{
                background: "radial-gradient(circle, #ffffff1a 0%, #1e00001a 60%, #000 100%)",
              }} 
            >
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="group border-border/40 relative block overflow-hidden rounded-2xl border bg-gradient-to-br p-10 backdrop-blur-3xl"
              >
                <BorderBeam
                  duration={8}
                  size={300}
                  className="via-primary/40 from-transparent to-transparent"
                />
                <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src={project?.image || ""}
                    alt={project?.name || ""}
                    fill
                    className="object-cover hover:scale-105 transition-all duration-300"
                  >
                  </Image>
                </div>
                <div className="space-y-4 pt-6">
                  <h2 className="from-primary/90 to-primary/70 mb-4 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
                    {project?.name}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {t("descriptions." + index)}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project?.tags.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
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

                {index == 0 || index == 2 ? (
                  <div className="flex flex-row justify-center items-center bg-background rounded-lg p-2 hover:scale-105 transition-all duration-300">
                    <p className="cursor-not-allowed lg:text-xl md:text-xs text-sm text-muted-foreground">
                      Coming soon...
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-row justify-center items-center bg-background rounded-lg p-2 hover:scale-105 transition-all duration-300">
                    <a
                      href={project?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="lg:text-xl md:text-xs text-sm text-foreground">
                        Check Live
                      </p>
                    </a>
                    <ArrowRight className="ms-3" color="var(--color-foreground)" />
                  </div>
                )}
              </div>
              </motion.div>
            </motion.div>
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
