'use client';

import { useState } from 'react';
import { ChevronDown, Facebook, Menu, Phone, X } from 'lucide-react';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="nav-wrap"><div className="shell nav">
      <a className="brand" href="/" onClick={close}><img className="official-logo" src="/ptak/logo.svg" alt="Ptak Stomatologia"/></a>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Główna nawigacja">
        <a href="/#uslugi" onClick={close}>Oferta <ChevronDown size={14}/></a><a href="/#o-nas" onClick={close}>O nas</a><a href="/zespol" onClick={close}>Zespół</a><a href="/cennik" onClick={close}>Cennik</a><a href="/#kontakt" onClick={close}>Kontakt</a>
      </nav>
      <div className="nav-actions"><a className="social" href="https://www.facebook.com/ptakstomatologia" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={22}/></a><a className="nav-phone" href="tel:+48664065582"><Phone size={17}/> 664 06 55 82</a></div>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/> : <Menu/>}</button>
    </div></header>;
}
