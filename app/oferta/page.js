import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { officialOfferHtml } from './officialContent';
import PageHero from '../components/PageHero';
import BackToTop from '../components/BackToTop';

const preparedOfferHtml=officialOfferHtml.replace('data-id="0b3418f" data-element_type="widget"','data-id="0b3418f" data-element_type="widget" id="stomatologia-estetyczna"');

export default function Oferta(){return <main className="offer-page"><SiteHeader/>
  <PageHero title="Oferta" image="/gallery/galeria-01.jpg" position="center 55%"/>
  <section className="official-offer shell" id="oferta-pelna" dangerouslySetInnerHTML={{__html:preparedOfferHtml}}/>
  <section className="offer-bottom"><div className="shell"><p className="eyebrow light"><span/> PIERWSZY KROK</p><h2>Nie musisz wiedzieć,<br/><em>jakiego leczenia potrzebujesz.</em></h2><p>Podczas konsultacji ocenimy sytuację i przedstawimy możliwe rozwiązania.</p><a className="btn primary" href="/kontakt">Umów konsultację</a></div></section><BackToTop/><SiteFooter/></main>}
