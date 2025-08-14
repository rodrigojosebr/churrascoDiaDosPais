'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const links = [
  { href: '/', label: 'Início' },
  { href: '/quando-onde', label: 'Quando & Onde' },
  { href: '/cardapio', label: 'Cardápio' },
  { href: '/cronograma', label: 'Cronograma' },
  { href: '/rsvp', label: 'RSVP' },
  { href: '/ao-vivo', label: 'Ao vivo' },
  { href: '/galeria', label: 'Galeria' }
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [pathname]); // close when route changes

  return (<header className="sticky top-0 z-50 bg-charcoal/80 backdrop-blur border-b border-zinc-800">
    <nav className="container flex h-14 items-center justify-between">
      <Link href="/" className="font-semibold">🔥 Churrascão Dia dos Pais</Link>

      {/* Desktop */}
      <ul className="hidden sm:flex items-center gap-4 text-sm">
        {links.map(l => (
          <li key={l.href}>
            <Link href={l.href} className={"px-3 py-1.5 rounded-lg hover:bg-zinc-800 " + (pathname === l.href ? "bg-zinc-800" : "")}>{l.label}</Link>
          </li>
        ))}
      </ul>
      {/* <Link href="/rsvp" className="hidden sm:inline-flex btn btn-primary sm:ml-4">Confirmar presença</Link> */}

      {/* Mobile hamburger */}
      <button aria-label="Menu" onClick={() => setOpen(v => !v)} className="sm:hidden btn btn-outline">☰</button>
    </nav>

    {/* Mobile sheet */}
    {open && (
      <div className="sm:hidden border-t border-zinc-800 bg-charcoal">
        <div className="container py-3">
          <ul className="grid gap-2 text-sm">
            {links.map(l => (
              <li key={l.href}>
                <Link href={l.href} className={"block px-3 py-2 rounded-lg hover:bg-zinc-800 " + (pathname === l.href ? "bg-zinc-800" : "")}>{l.label}</Link>
              </li>
            ))}
            {/* <li><Link href="/rsvp" className="btn btn-primary w-full justify-center mt-1">Confirmar presença</Link></li> */}
          </ul>
        </div>
      </div>
    )}
  </header>);
}
