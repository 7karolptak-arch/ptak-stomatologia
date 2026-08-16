import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { officialOfferHtml } from './officialContent';

export default function Oferta(){return <main className="offer-page"><SiteHeader/>
  <section className="official-offer shell" id="oferta-pelna" dangerouslySetInnerHTML={{__html:officialOfferHtml}}/>
  <section className="offer-bottom"><div className="shell"><p className="eyebrow light"><span/> PIERWSZY KROK</p><h2>Nie musisz wiedzieć,<br/><em>jakiego leczenia potrzebujesz.</em></h2><p>Podczas konsultacji ocenimy sytuację i przedstawimy możliwe rozwiązania.</p><a className="btn primary" href="/kontakt">Umów konsultację</a></div></section><SiteFooter/></main>}
