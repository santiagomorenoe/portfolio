import { useTranslations } from "next-intl";

export default function Page() {

  const t = useTranslations("tecnologies")

  return (
    <div className="w-screen mt-12 pt-32 overflow-hidden" id="services">
      <div className="mx-auto w-screen max-w-2xl">
        <div className="text-center">
        <h1 className="bg-gradient-to-r from-foreground/80 via-foreground to-foreground/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl py-2">
            {t("title")}
          </h1>
          <p className="text-muted-foreground mt-3 text-xl">
            {t("description")}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-5">
          <div className="relative -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#e60a64,transparent_70%)] before:opacity-40 after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#c5769066] after:bg-zinc-900">
          </div>
        </div>
      </div>
    </div>
  );
}
