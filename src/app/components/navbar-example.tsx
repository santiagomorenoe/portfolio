"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
  NavbarControls,
} from "@/app/components/ui/resizable-navbar";
import { useTranslations } from "next-intl";

export function NavbarExample() {

  const t = useTranslations("common.navigation");

  const navItems = [
    { name: t("home"), link: "#home" },
    { name: t("services"), link: "#services" },
    { name: t("products"), link: "#products" },
    { name: t("contact"), link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Función para scroll suave a las secciones
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Función para manejar clicks en items de navegación
  const handleNavItemClick = (link: string) => {
    if (link.startsWith('#')) {
      scrollToSection(link);
    }
    handleItemClick();
  };

  return (
    <Navbar className="top-4">
      {/* Navegación para escritorio */}
      <NavBody>
        <NavbarLogo />
        <NavItems 
          items={navItems} 
          onItemClick={handleItemClick}
          onNavItemClick={handleNavItemClick}
        />
        <div className="flex items-center space-x-2">
          <NavbarControls />
        </div>
      </NavBody>

      {/* Navegación para móvil */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center space-x-2">
            <NavbarControls className="mr-2" />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={handleMobileMenuToggle}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {/* Enlaces de navegación móvil */}
          <div className="flex w-full flex-col space-y-2">
            {navItems.map((item, idx) => (
              <button
                key={`mobile-link-${idx}`}
                onClick={() => handleNavItemClick(item.link)}
                className="w-full rounded-md px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 text-left"
              >
                {item.name}
              </button>
            ))}
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}