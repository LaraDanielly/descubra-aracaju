import Image from "next/image";

/** Mapa ilustrado: Brasil → zoom em Sergipe com Aracaju e São Cristóvão. */
export default function MapaBrasilSergipe({ className = "" }: { className?: string }) {
  return (
    <figure className={`relative overflow-hidden rounded-xl ${className}`}>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/25" />
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-caju/30 blur-2xl" aria-hidden />
      <div className="absolute -bottom-10 -left-6 h-32 w-32 rounded-full bg-arara/40 blur-2xl" aria-hidden />
      <Image
        src="/mapa-sergipe.jpg"
        alt="Mapa do Brasil com destaque para Sergipe, Aracaju e São Cristóvão"
        width={900}
        height={520}
        className="relative z-[1] h-auto w-full object-contain"
        sizes="(max-width:1024px) 90vw, 380px"
        priority
      />
    </figure>
  );
}
