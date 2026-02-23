"use client"

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui";
import { ChevronDown } from 'lucide-react';
import { isMobile } from './hooks/isMobile';

const locales = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
];

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = locales.find(l => l.code === locale);

  const handleLocaleChange = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  const isMobileDevice = isMobile();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="rounded-lg flex items-center justify-center border border-input p-2 hover:bg-accent cursor-pointer">
          {isMobileDevice ? currentLocale?.flag : currentLocale?.name}
          <ChevronDown className="h-[1.2rem] w-[1.2rem]" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-lg">
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc.code}
            onClick={() => handleLocaleChange(loc.code)}
            className={locale === loc.code ? 'bg-accent' : ''}
          >
            <span className="mr-2">{loc.flag}</span>
            <span>{loc.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}