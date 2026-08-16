import { Check, ChevronRight, Clock3, Disc3, ScanLine, ShieldCheck } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import PageHero from '../components/PageHero';

const pointUses = [
  'wykrywanie zmian zapalnych i kontrola gojenia tkanek okołowierzchołkowych',
  'ocena wypełnień, przyzębia oraz urazów zębów i kości',
  'planowanie, prowadzenie i kontrola leczenia endodontycznego',
  'ocena korzeni przed ekstrakcją oraz kontrola po wszczepieniu implantu',
];

const panoramaUses = [
  'diagnostyka zaawansowanej próchnicy, stanów zapalnych i zębów zatrzymanych',
  'planowanie leczenia kanałowego, protetycznego i ortodontycznego',
  'przygotowanie do ekstrakcji, zabiegów chirurgicznych i implantacji',
  'ocena urazów twarzoczaszki oraz podejrzanych zmian chorobowych',
];

const cbctUses = [
  'ocena szczęki, żuchwy, uzębienia, zatok i jamy nosowej',
  'precyzyjne planowanie implantów i zabiegów chirurgicznych',
  'diagnostyka kanałów korzeniowych i morfologii korzeni',
  'lokalizacja źródła bólu i określenie zakresu zmian patologicznych',
];

function CheckList({items}) {
  return <ul className="rtg-list">{items.map(item => <li key={item}><Check aria-hidden="true"/>{item}</li>)}</ul>;
}

export default function RtgPage(){return <main><SiteHeader/>
  <PageHero title="Pracownia RTG" image="/page-heroes/rtg.png" position="center 48%"/>

  <nav className="rtg-jump" aria-label="Spis treści"><div className="shell">
    <a href="#pracownia">Pracownia</a><a href="#zdjecia-punktowe">Zdjęcia punktowe</a><a href="#pantomografia">Pantomografia</a><a href="#cbct">Tomografia CBCT</a><a href="#cefalometria">Cefalometria</a><a href="#skierowanie">Skierowanie</a>
  </div></nav>

  <article className="rtg-article">
    <section id="pracownia" className="shell rtg-opening">
      <div className="rtg-opening-copy">
        <p className="eyebrow"><span/> PRACOWNIA RTG</p>
        <h2>Precyzyjna diagnostyka jest podstawą dobrego leczenia.</h2>
        <p className="rtg-lead">Badania rentgenowskie pozwalają rozpoznawać zmiany patologiczne, planować zabiegi oraz na bieżąco kontrolować wykonywane procedury lecznicze.</p>
        <p>Ptak Stomatologia dysponuje pantomografem cyfrowym i tomografem komputerowym Smart Plus firmy Vatech z ramieniem cefalometrycznym. Aparat zapewnia wysoką jakość obrazu przy możliwie niskiej dawce promieniowania.</p>
        <div className="rtg-feature-row"><span><ShieldCheck/>Niska dawka</span><span><Clock3/>Krótki czas badania</span><span><ScanLine/>Obrazowanie 2D i 3D</span></div>
      </div>
      <figure className="rtg-opening-photo"><img src="https://ptakstomatologia.pl/wp-content/uploads/2024/11/Pracownia-RTG.jpg" alt="Pracownia RTG Ptak Stomatologia"/><figcaption>Vatech Smart Plus</figcaption></figure>
    </section>

    <section className="rtg-standard"><div className="shell rtg-standard-grid">
      <div><p className="eyebrow light"><span/> ZŁOTY STANDARD</p><h2>Wysoka jakość obrazu.<br/><em>Minimalna ekspozycja.</em></h2></div>
      <div><p>W obrazowaniu cyfrowym najważniejsze jest uzyskanie obrazu diagnostycznego wysokiej jakości przy ograniczeniu dawki promieniowania. Urządzenie wykonuje zdjęcie panoramiczne w 7–14,1 sekundy, CBCT w 18 sekund, a zdjęcie cefalometryczne w 1,9–3,9 sekundy.</p><p>Badania wykonujemy dla pacjentów kliniki oraz osób skierowanych z innych gabinetów — po wcześniejszym ustaleniu terminu w rejestracji.</p></div>
    </div></section>

    <section className="shell rtg-types-intro"><p className="eyebrow"><span/> ZAKRES DIAGNOSTYKI</p><h2>Rodzaje badań RTG</h2><div className="rtg-type-pills"><span>Zdjęcia punktowe</span><span>Panoramiczne OPG</span><span>Tomografia CBCT</span><span>Mikrotomografia</span><span>Cefalometria</span></div></section>

    <section id="zdjecia-punktowe" className="shell rtg-detail"><div className="rtg-detail-number">01</div><div className="rtg-detail-main"><p className="eyebrow"><span/> BADANIE WEWNĄTRZUSTNE</p><h2>Zdjęcia punktowe</h2><p>To zdjęcia o małym polu obrazowania — pojedynczego zęba, dwóch lub trzech zębów, a także zdjęcia zgryzowe i zgryzowo-skrzydłowe. Dzięki radiowizjografii cyfrowej obraz pojawia się na monitorze w ciągu kilku sekund, bez konieczności wywoływania kliszy.</p><h3>Najczęstsze wskazania</h3><CheckList items={pointUses}/></div><aside><strong>Bez skierowania</strong><p>Zdjęcie punktowe można wykonać bez skierowania lekarza.</p></aside></section>

    <section id="pantomografia" className="rtg-detail rtg-detail-tinted"><div className="shell rtg-detail-inner"><div className="rtg-detail-number">02</div><div className="rtg-detail-main"><p className="eyebrow"><span/> PEŁNY OBRAZ UZĘBIENIA</p><h2>Zdjęcie panoramiczne OPG</h2><p>Panorama przedstawia całe uzębienie i struktury twarzoczaszki. Jest szeroko wykorzystywana w stomatologii, ortodoncji i chirurgii szczękowo-twarzowej, ponieważ ułatwia zaplanowanie leczenia i zabiegów.</p><h3>Najczęstsze wskazania</h3><CheckList items={panoramaUses}/></div><figure><img src="https://ptakstomatologia.pl/wp-content/uploads/2024/11/Zdjecia-RTG-ze-strony-moze-mozna-wykorzystac.webp" alt="Przykładowe obrazy diagnostyczne RTG"/></figure></div></section>

    <section id="cbct" className="shell rtg-detail"><div className="rtg-detail-number">03</div><div className="rtg-detail-main"><p className="eyebrow"><span/> OBRAZOWANIE TRÓJWYMIAROWE</p><h2>Tomografia CBCT</h2><p>Tomografia wiązki stożkowej umożliwia uzyskanie trójwymiarowego obrazu jamy ustnej, szczęki, żuchwy i okolicznych tkanek. Szczególnie wspiera diagnostykę w endodoncji, implantologii oraz chirurgii stomatologicznej.</p><h3>Zastosowanie badania CBCT</h3><CheckList items={cbctUses}/><div className="rtg-fields"><b>Dostępne pola obrazowania</b><span>12 × 9 cm — szczęka i żuchwa</span><span>10 × 8,5 cm — osoba dorosła</span><span>10 × 7 cm — dziecko</span><span>5 × 5 cm — mikrotomografia</span></div></div><aside className="rtg-benefit-aside"><ScanLine/><strong>Dokładniej i bezpieczniej</strong><p>Wysoka rozdzielczość wspiera precyzyjną diagnozę, ogranicza potrzebę powtarzania badań i pomaga dobrze zaplanować leczenie.</p></aside></section>

    <section id="cefalometria" className="rtg-detail rtg-detail-tinted"><div className="shell rtg-detail-inner"><div className="rtg-detail-number">04</div><div className="rtg-detail-main"><p className="eyebrow"><span/> DIAGNOSTYKA ORTODONTYCZNA</p><h2>Cefalometria</h2><p>Zdjęcie cefalometryczne pokazuje czaszkę w projekcji bocznej, wraz ze zgryzem, kośćmi oraz tkankami miękkimi i twardymi twarzy. Pozwala ortodoncie określić anatomiczne przyczyny wady zgryzu, zaplanować leczenie i oceniać jego postępy.</p></div><figure><img src="https://ptakstomatologia.pl/wp-content/uploads/2024/11/close-up-dentist-instruments.jpg" alt="Diagnostyka stomatologiczna w Ptak Stomatologia"/></figure></div></section>

    <section className="rtg-safety"><div className="shell"><div className="section-head split"><div><p className="eyebrow"><span/> BEZPIECZEŃSTWO</p><h2>Ochrona radiologiczna pacjenta</h2></div><p>Stosujemy zasadę ALARA: dawka promieniowania jest ograniczana do najniższego poziomu, który pozwala zachować odpowiednią jakość diagnostyczną obrazu.</p></div><div className="rtg-safety-cards"><article><ShieldCheck/><h3>Kontrolowana dawka</h3><p>Cyfrowa technologia i krótki czas ekspozycji pomagają ograniczyć narażenie pacjenta.</p></article><article><Clock3/><h3>Sprawne badanie</h3><p>Precyzyjne pozycjonowanie i szybkie skanowanie zwiększają komfort podczas badania.</p></article><article><Disc3/><h3>Wynik badania</h3><p>Po wykonaniu badania pacjent otrzymuje obraz RTG zapisany w formie cyfrowej.</p></article></div></div></section>

    <section id="skierowanie" className="shell rtg-referral"><div><p className="eyebrow light"><span/> WAŻNE PRZED BADANIEM</p><h2>Skierowanie na RTG</h2><p>Zdjęcia wewnątrzustne punktowe nie wymagają skierowania. Badania zewnątrzustne — panoramiczne, CBCT oraz cefalometria — wykonujemy na podstawie skierowania od lekarza.</p><p>Skierowanie powinno zawierać dane pacjenta, rodzaj i obszar badania, uzasadnienie medyczne oraz dane lekarza kierującego.</p><a href="/kontakt">Umów termin badania <ChevronRight/></a></div><aside><strong>RTG a ciąża</strong><p>Kobieta w ciąży lub podejrzewająca ciążę powinna bezwzględnie poinformować o tym personel przed badaniem. Badania panoramiczne, CBCT i cefalometryczne są w ciąży przeciwwskazane, poza szczególnymi sytuacjami medycznymi.</p></aside></section>
  </article>

  <section className="cta-band"><div className="shell"><div><p className="eyebrow light"><span/> REJESTRACJA</p><h2>Umów badanie RTG w Wadowicach</h2></div><a className="btn primary" href="tel:+48664065582">Zadzwoń: 664 06 55 82</a></div></section>
  <SiteFooter/>
</main>}
