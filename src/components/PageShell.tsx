import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { IMAGES } from "@/lib/site-content";

export function PageShell({
  children,
  background = IMAGES.sky,
}: {
  children: ReactNode;
  background?: string;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* page background image layer */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <img src={background} alt="" className="size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/92 to-background/97" />
      </div>

      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  copy,
  image,
  children,
}: {
  kicker: string;
  title: string;
  copy: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <img
        src={image}
        alt=""
        className="absolute inset-0 size-full scale-105 object-cover opacity-40 animate-in fade-in duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/75 to-background" />
      <div className="relative mx-auto w-full max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-28 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground sm:text-xs sm:tracking-[0.32em]">
          {kicker}
        </p>
        <h1 className="mt-4 font-display text-[2rem] leading-[1.08] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base lg:text-lg">
          {copy}
        </p>
        {children ? (
          <div className="mt-7 flex flex-wrap justify-center gap-2 sm:gap-3">{children}</div>
        ) : null}
      </div>
    </section>
  );
}
