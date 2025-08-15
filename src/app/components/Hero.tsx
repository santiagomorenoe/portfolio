"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraText } from "@/app/components/ui/aurora-text";
import { useTranslations } from "next-intl";
import { AnimatedShinyText } from "@/app/components/ui/animate-shiny-text";
import { MacbookScroll } from "./ui/macbook-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GradientHero() {
  const t = useTranslations("home");
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  return (
    <div
      className="bg-background relative w-full overflow-hidden pt-24 md:pt-0"
      id="home"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="from-primary/20 via-background to-background absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]"></div>
        <div className="bg-primary/5 absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:16px_16px] opacity-15"></div>

      <div className="relative z-10 container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 flex justify-center"
          >
            <div className="border-border bg-background/80 inline-flex items-center rounded-full border px-3 py-1 text-sm backdrop-blur-sm">
              <AnimatedShinyText className="font-secondary flex items-center gap-2">
                <span className="mr-1">🚀</span> {t("subtitle")}
                <ChevronRight className="text-neutral-600/70 dark:text-neutral-700/70 ml-1 h-4 w-4" />
              </AnimatedShinyText>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="from-primary/10 via-foreground/85 to-foreground/50 bg-gradient-to-tl bg-clip-text text-center text-3xl tracking-tighter text-balance text-transparent md:text-6xl lg:text-7xl font-primary font-bold flex items-center justify-center gap-2"
          >
            {t("title.first")}
            <AuroraText>{t("title.second")}</AuroraText>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground/80 mx-auto mt-6 max-w-2xl text-center text-base"
          >
            {t("description")} <br />
            {t("founder")}{" "}
            <span className="text-foreground underline hover:text-primary/80 transition-all duration-300">
              Santi Moreno
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="group bg-primary text-primary-foreground hover:shadow-primary/30 relative overflow-hidden rounded-full px-6 shadow-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer"
              onClick={() => {
                window.open("/cv.pdf", "_blank");
              }}
            >
              <span className="relative z-10 flex items-center">
                {t("cta.primary")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="from-primary via-primary/90 to-primary/80 absolute inset-0 z-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-border bg-background/50 flex items-center gap-2 rounded-full backdrop-blur-sm hover:scale-105 hover:cursor-pointer"
              onClick={() => {
                window.open("https://www.linkedin.com/in/santimdev/", "_blank");
              }}
            >
              <Linkedin className="h-4 w-4" />
              {t("cta.secondary")}
            </Button>
          </motion.div>

          <MacbookScroll src="/syntora.jpg" />
        </div>
      </div>
    </div>
  );
}
