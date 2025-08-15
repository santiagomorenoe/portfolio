'use client';
import { Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import FooterDialog from "@/app/components/ui/footer-dialog";
import { useTranslations } from "next-intl";

export default function FooterGlow() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState('');
  const t = useTranslations("contact");

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, type: string) => {
    e.preventDefault();
    setDialogType(type);
    setIsDialogOpen(true);
  };
  return (
    <footer id="contact" className="relative z-10 mt-8 w-full overflow-hidden pt-16 pb-8">
      <style jsx global>{`
        .glass {
          backdrop-filter: blur(3px) saturate(180%);
          background: radial-gradient(circle, var(--color-secondary) 0%, #ffdce64d 60%, var(--color-primary) 100%);
          border: 1px solid #ff96b41a;
          justify-content: center;
          align-items: center;
          transition: all .3s;
          display: flex;
        }
        .glass:where(.dark, .dark *) {
          display: flex
          backdrop-filter: blur(2px) !important;
          background: radial-gradient(circle, #ffffff1a 0%, #1e00001a 60%, #2a0e0e 100%) !important;
          border: 1px solid #ffffff0d !important;
          border-radius: 16px !important;
          justify-content: center !important;
          align-items: center !important;
        }
      `}</style>
      <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full -translate-x-1/2 select-none">
        <div className="absolute top-32 left-1/4 h-52 w-52 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-24 h-60 w-60 rounded-full bg-primary/20 blur-3xl"></div>
      </div>
      <div className="glass relative mx-auto flex max-w-6xl flex-col items-center gap-8 rounded-2xl px-6 py-10 md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="flex flex-col items-center md:items-start">
          <a href="https://santis-personal-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="mb-4 hover:scale-105 transition-all duration-300">
            <img src="/Vector.svg" alt="logo" className="w-[64px] h-[64px] object-contain" />
          </a>
          <p className="text-foreground mb-6 max-w-xs text-center text-sm md:text-left">
            Desarrollado por Santi Moreno, desarrollador de software, estudiante de ingeniería en IA y fundador de Syntora.
          </p>
          <div className="mt-2 flex gap-3 text-primary">
            <a
              href="https://www.linkedin.com/in/santimdev/"
              aria-label="LinkedIn"
              className="hover:text-foreground transition"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/santii.lifts/"
              aria-label="Instagram"
              className="hover:text-foreground transition"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
        <nav className="flex w-full flex-col gap-9 text-center md:w-auto md:flex-row md:justify-end md:text-left">
          <div>
            <div className="mb-3 text-xs font-semibold tracking-widest text-primary uppercase">
              {t("form.enterprise")}
            </div>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-foreground/70 hover:text-foreground transition cursor-pointer"
                  onClick={(e) => handleLinkClick(e, 'acerca-de')}
                >
                  {t("form.enterprise")}
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-foreground/70 hover:text-foreground transition cursor-pointer"
                  onClick={(e) => handleLinkClick(e, 'contacto')}
                >
                  {t("form.contact")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs font-semibold tracking-widest text-primary uppercase">
              {t("form.product")}
            </div>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-foreground/70 hover:text-foreground transition cursor-pointer"
                  onClick={(e) => handleLinkClick(e, 'actualizaciones')}
                >
                  {t("form.updates")}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="text-foreground relative z-10 mt-10 text-center text-xs">
        <span>&copy; 2025 Syntora. All rights reserved.</span>
      </div>
      
      <FooterDialog 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        dialogType={dialogType}
      />
    </footer>
  );
}