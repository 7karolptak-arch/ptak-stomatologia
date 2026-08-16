import { ArrowDown } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { officialOfferHtml } from './officialContent';

export default function Oferta(){return <main><SiteHeader/>
  <section className="subhero offer-hero"><div className="shell"><p className="eyebrow light"><span/> OFERTA</p><h1>Pełny zakres<br/><em>leczenia.</em></h1><p>W jednym miejscu znajdziesz szczegółowe informacje o metodach, przebiegu i możliwościach leczenia w Ptak Stomatologia.</p><a className="btn primary" href="#oferta-pelna">Przejdź do oferty <ArrowDown size={18}/></a></div></section>
  <section className="official-offer shell" id="oferta-pelna" dangerouslySetInnerHTML={{__html:officialOfferHtml}}/>
  <section className="offer-bottom"><div className="shell"><p className="eyebrow light"><span/> PIERWSZY KROK</p><h2>Nie musisz wiedzieć,<br/><em>jakiego leczenia potrzebujesz.</em></h2><p>Podczas konsultacji ocenimy sytuację i przedstawimy możliwe rozwiązania.</p><a className="btn primary" href="/kontakt">Umów konsultację</a></div></section><SiteFooter/></main>}
