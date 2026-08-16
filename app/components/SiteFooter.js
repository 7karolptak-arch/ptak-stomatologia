import { Facebook } from 'lucide-react';

export default function SiteFooter() {
  return <footer><div className="shell footer-main">
    <div><a className="brand footer-brand" href="/"><img className="official-logo" src="/ptak/logo.svg" alt="Ptak Stomatologia"/></a><p>Wysoka jakość usług i skuteczność leczenia.</p></div>
    <div><b>Nawigacja</b><a href="/#uslugi">Oferta</a><a href="/zespol">Zespół</a><a href="/cennik">Cennik</a></div>
    <div><b>Kontakt</b><a href="tel:+48664065582">664 06 55 82</a><a href="mailto:rejestracja@ptakstomatologia.pl">rejestracja@ptakstomatologia.pl</a><span>ul. Ady Sari 38<br/>34-100 Wadowice</span></div>
    <div><b>Godziny</b><span>Pon–Pt: 9:00–20:00</span><span>Sobota: po uzgodnieniu</span><div className="footer-social"><a href="https://www.facebook.com/ptakstomatologia" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook/></a></div></div>
  </div><div className="shell footer-bottom"><span>© 2026 PTAK STOMATOLOGIA sp. z o.o.</span><span>NIP 5512657728 &nbsp; • &nbsp; REGON 523848403</span></div></footer>;
}
