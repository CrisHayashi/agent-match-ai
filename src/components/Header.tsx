"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#diagnostico", label: "Diagnostico" },
  { href: "#comparacao", label: "Comparacao" },
  { href: "#sdd", label: "SDD" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-night/82 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 focus-ring rounded-md">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-electric via-violet to-cyan text-sm font-black text-white shadow-glow">
            AM
          </span>
          <span className="text-base font-semibold tracking-wide">Agent Match AI</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-gray-300 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#diagnostico"
          className="hidden rounded-lg bg-white px-4 py-2 text-sm font-semibold text-night transition hover:bg-cyan md:inline-flex"
        >
          Iniciar Diagnostico
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-night px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-gray-200 hover:bg-white/8">
                {link.label}
              </a>
            ))}
            <a href="#diagnostico" onClick={() => setOpen(false)} className="rounded-lg bg-white px-3 py-2 text-center font-semibold text-night">
              Iniciar Diagnostico
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
