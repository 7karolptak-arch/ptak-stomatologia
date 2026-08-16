import { Facebook, MapPin, Phone } from 'lucide-react';

const hours=[['Poniedziałek','9.00 - 20.00'],['Wtorek','9.00 - 20.00'],['Środa','9.00 - 20.00'],['Czwartek','9.00 - 20.00'],['Piątek','9.00 - 20.00'],['Sobota','9.00 - 16.00']];

export default function SiteFooter(){return <footer><div className="shell footer-main footer-official">
  <div><a className="brand footer-brand" href="/"><img className="official-logo" src="/ptak/logo.svg" alt="Ptak Stomatologia"/></a><p>Wysoka jakość świadczonych usług<br/>i skuteczność leczenia.</p></div>
  <div className="footer-hours"><b>Godziny otwarcia</b>{hours.map(([day,time])=><span key={day}><i>{day}</i><em/><strong>{time}</strong></span>)}</div>
  <div className="footer-contact"><b>Kontakt</b><MapPin/><span>ul. Ady Sari 38<br/>34-100 Wadowice</span><Phone/><a className="footer-phone" href="tel:+48664065582">664 06 55 82</a><a href="mailto:rejestracja@ptakstomatologia.pl">rejestracja@ptakstomatologia.pl</a><div className="footer-social"><a href="https://www.facebook.com/PTAKStomatologia/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook/></a></div></div>
  </div><div className="shell footer-bottom"><span>© 2026 Wszelkie prawa zastrzeżone</span><span>PTAK STOMATOLOGIA sp. z o.o. • NIP 5512657728 • REGON 523848403</span></div></footer>}
