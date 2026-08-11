"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { company, navItems } from "@/lib/content";
import { ButtonLink } from "@/components/ButtonLink";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/96 backdrop-blur transition ${
        scrolled ? "border-b border-line shadow-sm" : "border-b border-transparent"
      }`}
    >
      <nav
        className="container-x flex h-[var(--header-height)] items-center justify-between"
        aria-label="Primary navigation"
      >
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md">
          <Image
            src="/logo.jpg"
            alt={`${company.brandTop} logo`}
            width={48}
            height={48}
            className="h-11 w-11 rounded-md object-cover"
            priority
          />
          <span className="leading-tight">
            <span className="block text-sm font-black tracking-[0.12em] text-navy">
              {company.brandTop}
            </span>
            <span className="block text-[11px] font-semibold tracking-[0.22em] text-muted">
              {company.brandBottom}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="focus-ring rounded-sm text-sm font-semibold text-ink/78 transition hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <ButtonLink href="/request-staff">Request Staff</ButtonLink>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <div
        className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`absolute left-0 right-0 top-[var(--header-height)] border-y border-line bg-white shadow-lift transition ${
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
        >
          <div className="container-x py-5">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-md px-3 py-3 text-base font-semibold text-navy transition hover:bg-navy/5"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <ButtonLink href="/request-staff" className="mt-4 w-full">
              Request Staff
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
