import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
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
        className="absolute inset-0 size-full scale-105 object-cover opacity-30 animate-in fade-in duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">{kicker}</p>
        <h1 className="mt-5 font-display text-4xl leading-[1.05] sm:text-6xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">{copy}</p>
        {children ? <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div> : null}
      </div>
    </section>
  );
}
