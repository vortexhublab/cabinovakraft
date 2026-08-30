import { HeroRevolve } from "@/components/hero-revolve";

export function SpatialHero({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-ink text-white">
      <div className="grid lg:grid-cols-2">
        <HeroRevolve />
        <div className="flex flex-col justify-center border-t border-bronze/25 px-5 py-7 sm:px-8 sm:py-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-10 xl:px-14">
          <div className="hero-stack mx-auto w-full max-w-lg lg:mx-0">{children}</div>
        </div>
      </div>
    </section>
  );
}
