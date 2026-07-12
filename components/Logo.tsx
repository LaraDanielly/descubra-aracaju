export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* Caju: fruto laranja */}
      <path
        d="M22 26c-7 2-12 9-11 17 1 9 9 15 18 14 8-1 14-8 14-16 0-3-1-6-2-8l-9-7c-3-2-7-1-10 0Z"
        fill="url(#gradCaju)"
      />
      {/* Castanha do caju */}
      <path
        d="M41 31c4-1 8 1 9 5 1 3-1 7-5 8-3 1-6-1-8-3l-2-5c2-3 4-4 6-5Z"
        fill="#8a5a2b"
      />
      {/* Asa da arara (azul) */}
      <path
        d="M14 24C18 10 34 4 48 8c-3 3-4 6-8 8 3 0 6 0 9 2-4 4-9 5-14 5 2 1 3 3 4 5-9 3-20 2-25-4Z"
        fill="url(#gradArara)"
      />
      {/* Folha verde */}
      <path
        d="M24 22c-1-5 2-10 7-11 1 4-1 9-7 11Z"
        fill="#16a34a"
      />
      <defs>
        <linearGradient id="gradCaju" x1="11" y1="26" x2="43" y2="57">
          <stop stopColor="#fb703c" />
          <stop offset="1" stopColor="#ea330c" />
        </linearGradient>
        <linearGradient id="gradArara" x1="14" y1="8" x2="49" y2="28">
          <stop stopColor="#3b99f6" />
          <stop offset="1" stopColor="#1e52af" />
        </linearGradient>
      </defs>
    </svg>
  );
}
