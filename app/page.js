'use client';

import { useState } from 'react';
import {
  ArrowRight, CalendarDays, Check, ChevronDown, Clock3, Facebook,
  HeartPulse, Mail, MapPin, Menu, Microscope, Phone, ScanLine,
  ShieldCheck, Sparkles, Stethoscope, X
} from 'lucide-react';

const services = [
  { n: '01', title: 'Implantologia', text: 'Trwałe uzupełnienie brakujących zębów z wykorzystaniem implantów i nowoczesnej diagnostyki 3D.', icon: '◎' },
  { n: '02', title: 'Protetyka', text: 'Korony, mosty, licówki oraz uzupełnienia ruchome przywracające funkcję i estetykę uśmiechu.', icon: '◇' },
  { n: '03', title: 'Stomatologia zachowawcza', text: 'Leczenie próchnicy i wysokiej klasy wypełnienia estetyczne imitujące naturalne, zdrowe zęby.', icon: '○' },
  { n: '04', title: 'Stomatologia estetyczna', text: 'Bonding, licówki i wybielanie dla naturalnego, harmonijnego efektu dopasowanego do pacjenta.', icon: '✦' },
  { n: '05', title: 'Endodoncja mikroskopowa', text: 'Precyzyjne leczenie kanałowe pod mikroskopem, wspierane cyfrową rentgenodiagnostyką.', icon: '⌁' },
  { n: '06', title: 'Higienizacja', text: 'Skaling, piaskowanie, polerowanie i profilaktyka pomagające zachować zdrowie zębów i dziąseł.', icon: '◌' },
  { n: '07', title: 'Chirurgia stomatologiczna', text: 'Usuwanie zębów, zabiegi mikrochirurgiczne, plastyka tkanek i procedury regeneracyjne.', icon: '+' },
  { n: '08', title: 'Ortodoncja', text: 'Diagnostyka i leczenie wad zgryzu u dzieci oraz dorosłych, z wykorzystaniem skanów 3D.', icon: '≈' },
  { n: '09', title: 'Nowoczesne technologie', text: 'Tomografia CBCT, radiowizjografia, znieczulenie komputerowe oraz cyfrowy skaner wewnątrzustny.', icon: '⌗' },
];

const doctors = [
  { name: 'Grzegorz Ptak', role: 'lekarz dentysta, implantolog', scope: 'Stomatologia zachowawcza, endodoncja, protetyka, chirurgia, implantologia', image: '/ptak/grzegorz.jpg' },
  { name: 'Izabella Dziubek', role: 'lekarz dentysta, ortodoncja', scope: 'Ortodoncja, bonding, stomatologia dziecięca, periodontologia', image: '/ptak/izabella.jpg' },
  { name: 'Volodymyr Levchuk', role: 'lekarz dentysta, implantolog', scope: 'Stomatologia zachowawcza, implantologia, protetyka', image: '/ptak/volodymyr.jpg' },
  { name: 'Marcin Kusto', role: 'lekarz dentysta', scope: 'Stomatologia zachowawcza, pedodoncja, chirurgia, protetyka', image: null },
  { name: 'Aleksandra Surmacz', role: 'lekarz dentysta', scope: 'Stomatologia zachowawcza, endodoncja, chirurgia', image: '/ptak/aleksandra-surmacz.jpg' },
  { name: 'Bernard Woźniak', role: 'lekarz dentysta', scope: 'Stomatologia zachowawcza, endodoncja mikroskopowa', image: null },
  { name: 'Anna Kurek', role: 'lekarz dentysta', scope: 'Stomatologia zachowawcza, estetyczna i endodoncja', image: '/ptak/anna.jpg' },
  { name: 'Aleksandra Kubicka', role: 'lekarz dentysta', scope: 'Stomatologia zachowawcza dorosłych i dzieci, endodoncja', image: '/ptak/aleksandra-kubicka.jpeg' },
];

const support = [
  ['Umida Radjapova-Galushka', 'dyplomowana higienistka stomatologiczna'],
  ['Weronika Warchał', 'dyplomowana higienistka stomatologiczna'],
  ['Joanna Zając', 'dyplomowana asystentka stomatologiczna'],
  ['Martyna Śliwa', 'dyplomowana asystentka stomatologiczna'],
  ['Ewelina Wiech', 'dyplomowana asystentka stomatologiczna'],
  ['Klaudia Smajek', 'rejestratorka medyczna'],
  ['Małgorzata Ptak', 'menadżer gabinetu'],
];

const priceGroups = [
  { title: 'Konsultacje i leczenie', rows: [['Konsultacja / badanie', '100–300 zł'], ['Wypełnienie zęba stałego', '350–450 zł'], ['Bonding / licówka kompozytowa', '600–700 zł'], ['Znieczulenie komputerowe', '70 zł']] },
  { title: 'Chirurgia i implantologia', rows: [['Usunięcie zęba', '350–450 zł'], ['Usunięcie zęba mądrości', '400–500 zł'], ['Wszczepienie implantu', 'od 2 900 zł'], ['Korona na implancie', 'od 2 500 zł']] },
  { title: 'Profilaktyka i estetyka', rows: [['Kamień + piaskowanie', '340–390 zł'], ['Pakiet z lakierowaniem', '360–400 zł'], ['Wybielanie nakładkowe', '950 zł'], ['Wybielanie zęba martwego', '450 zł']] },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [pricesOpen, setPricesOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const go = (id) => {
    setOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <div className="topbar">
        <div className="shell topbar-inner">
          <span><Clock3 size={14}/> Pon–Pt 9:00–20:00</span>
          <span><MapPin size={14}/> ul. Ady Sari 38, Wadowice</span>
          <a href="tel:+48664065582"><Phone size={14}/> 664 06 55 82</a>
        </div>
      </div>

      <header className="nav-wrap">
        <div className="shell nav">
          <button className="brand" onClick={() => go('#start')} aria-label="Przejdź na początek">
            <img className="official-logo" src="/ptak/logo.svg" alt="Ptak Stomatologia"/>
          </button>
          <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Główna nawigacja">
            <button onClick={() => go('#uslugi')}>Oferta <ChevronDown size={14}/></button>
            <button onClick={() => go('#o-nas')}>O nas</button>
            <button onClick={() => go('#zespol')}>Zespół</button>
            <button onClick={() => go('#rtg')}>Pracownia RTG</button>
            <button onClick={() => go('#cennik')}>Cennik</button>
            <button onClick={() => go('#kontakt')}>Kontakt</button>
          </nav>
          <div className="nav-actions">
            <a className="social" href="https://www.facebook.com/ptakstomatologia" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18}/></a>
            <a className="nav-phone" href="tel:+48664065582"><Phone size={17}/> 664 06 55 82</a>
          </div>
          <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <section className="hero ptak-hero" id="start">
        <div className="hero-bg" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow light"><span/> GABINET STOMATOLOGICZNY W WADOWICACH</p>
            <h1>Skuteczne leczenie.<br/><em>Na lata.</em></h1>
            <p className="hero-lead">Wysoka jakość świadczonych usług, nowoczesna diagnostyka i indywidualne podejście do każdego pacjenta.</p>
            <div className="hero-buttons">
              <a className="btn primary" href="tel:+48664065582">Zadzwoń i umów wizytę <Phone size={18}/></a>
              <button className="btn ghost" onClick={() => go('#uslugi')}>Poznaj ofertę</button>
            </div>
          </div>
          <div className="hero-card">
            <p>Rezerwacja terminów</p>
            <h3>Osobiście lub telefonicznie.</h3>
            <a href="tel:+48664065582"><Phone size={18}/> 664 06 55 82</a>
            <small>ul. Ady Sari 38, 34-100 Wadowice</small>
          </div>
        </div>
        <div className="hero-stats shell">
          <div><b>2021</b><span>nowa siedziba<br/>Ptak Stomatologia</span></div>
          <div><b>3</b><span>klimatyzowane<br/>gabinety</span></div>
          <div><b>CBCT</b><span>diagnostyka 3D<br/>na miejscu</span></div>
        </div>
      </section>

      <section className="intro section" id="o-nas">
        <div className="shell intro-grid">
          <div className="photo-stack">
            <img className="photo-main" src="/ptak/reception.jpg" alt="Recepcja Ptak Stomatologia w Wadowicach"/>
            <div className="photo-note"><Sparkles size={25}/><b>Komfortowe miejsce<br/>i przyjazna atmosfera</b></div>
          </div>
          <div className="intro-copy">
            <p className="eyebrow"><span/> STOMATOLOG WADOWICE</p>
            <h2>Poznaj nas.<br/><em>Ptak Stomatologia.</em></h2>
            <p>Myślą przewodnią gabinetu jest wysoka jakość świadczonych usług i skuteczność leczenia. Chcemy, aby efekt solidnie wykonanego zabiegu zachował się jak najdłużej.</p>
            <p>Każdy pacjent traktowany jest indywidualnie. Lekarz przedstawia najlepszy plan leczenia i pomaga podjąć świadome decyzje dotyczące rozwiązań terapeutycznych oraz finansowych.</p>
            <div className="signature-row"><span className="signature">Grzegorz Ptak</span><small>lekarz dentysta, implantolog<br/>założyciel gabinetu</small></div>
            <button className="text-link" onClick={() => go('#zespol')}>Poznaj nasz zespół <ArrowRight size={18}/></button>
          </div>
        </div>
      </section>

      <section className="services section" id="uslugi">
        <div className="shell">
          <div className="section-head split">
            <div><p className="eyebrow"><span/> JAK MOŻEMY CI POMÓC</p><h2>Nasze usługi</h2></div>
            <p>Nowoczesny sprzęt i wysokiej jakości materiały pozwalają prowadzić leczenie z zakresu implantologii, chirurgii, ortodoncji, endodoncji, protetyki i stomatologii zachowawczej.</p>
          </div>
          <div className="service-list">
            {services.map((s, index) => {
              const expanded = activeService === index;
              return <article className={`service-row ${expanded ? 'expanded' : ''}`} key={s.n}>
                <button className="service-trigger" onClick={() => setActiveService(expanded ? -1 : index)} aria-expanded={expanded}>
                  <span className="service-number">{s.n}</span>
                  <span className="service-symbol">{s.icon}</span>
                  <span className="service-title">{s.title}</span>
                  <ChevronDown className="service-chevron"/>
                </button>
                <div className="service-detail">
                  <div><p>{s.text}</p><button className="service-cta" onClick={() => go('#kontakt')}>Zapytaj o leczenie <ArrowRight size={17}/></button></div>
                  <span className="service-watermark">{s.icon}</span>
                </div>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="why section" id="rtg">
        <div className="shell why-grid">
          <div className="why-copy">
            <p className="eyebrow light"><span/> PRACOWNIA RTG</p>
            <h2>Precyzyjna diagnoza.<br/><em>Niska dawka.</em></h2>
            <p className="why-lead">Na miejscu wykonujemy cyfrową diagnostykę niezbędną do planowania i kontroli leczenia.</p>
            <div className="benefit-list">
              <div className="benefit"><span>01</span><div><h3>Tomografia komputerowa CBCT</h3><p>Trójwymiarowy obraz struktur kostnych wspierający implantologię, chirurgię i endodoncję.</p></div></div>
              <div className="benefit"><span>02</span><div><h3>Pantomografia i cefalometria</h3><p>Cyfrowe zdjęcia całego uzębienia oraz diagnostyka potrzebna w leczeniu ortodontycznym.</p></div></div>
              <div className="benefit"><span>03</span><div><h3>Radiowizjografia cyfrowa</h3><p>Obraz dostępny w kilka sekund, wykonywany bezpośrednio przy fotelu stomatologicznym.</p></div></div>
            </div>
          </div>
          <div className="why-visual">
            <img src="/ptak/hero-2.jpg" alt="Nowoczesny gabinet Ptak Stomatologia"/>
            <div className="floating-badge"><ScanLine/><b>Smart Plus Vatech<br/>obrazowanie cyfrowe<br/>na miejscu</b></div>
          </div>
        </div>
      </section>

      <section className="team section" id="zespol">
        <div className="shell">
          <div className="section-head split">
            <div><p className="eyebrow"><span/> NASZ ZESPÓŁ</p><h2>Doświadczenie wielu dziedzin.<br/><em>Jedna opieka.</em></h2></div>
            <p>Zespół lekarzy, higienistek, asystentek i rejestracji dba o precyzję leczenia oraz komfort pacjenta na każdym etapie wizyty.</p>
          </div>
          <div className="team-grid">
            {doctors.map((person) => <article className="person-card" key={person.name}>
              <div className={`person-photo ${!person.image ? 'person-placeholder' : ''}`}>
                {person.image ? <img src={person.image} alt={person.name}/> : <span>{person.name.split(' ').map(x=>x[0]).join('')}</span>}
              </div>
              <div className="person-copy"><h3>{person.name}</h3><p>{person.role}</p><small>{person.scope}</small></div>
            </article>)}
          </div>
          <div className="support-team">
            <p className="eyebrow"><span/> ZESPÓŁ WSPARCIA</p>
            <div>{support.map(([name, role]) => <span key={name}><b>{name}</b><small>{role}</small></span>)}</div>
          </div>
        </div>
      </section>

      <section className="process section">
        <div className="shell">
          <div className="section-head centered"><p className="eyebrow"><span/> JAK PRACUJEMY</p><h2>Indywidualny plan.<br/><em>Świadome decyzje.</em></h2></div>
          <div className="steps">
            <div><span><CalendarDays/></span><small>KROK 01</small><h3>Konsultacja</h3><p>Poznajemy potrzeby pacjenta i wykonujemy badanie wewnątrzustne.</p></div>
            <div><span><Microscope/></span><small>KROK 02</small><h3>Diagnostyka</h3><p>W razie potrzeby wykonujemy RTG, pantomografię lub tomografię CBCT.</p></div>
            <div><span><Stethoscope/></span><small>KROK 03</small><h3>Plan leczenia</h3><p>Omawiamy dostępne rozwiązania terapeutyczne i finansowe.</p></div>
            <div><span><HeartPulse/></span><small>KROK 04</small><h3>Leczenie</h3><p>Realizujemy uzgodniony plan z naciskiem na komfort i trwały efekt.</p></div>
          </div>
        </div>
      </section>

      <section className="pricing section" id="cennik">
        <div className="shell">
          <div className="section-head split">
            <div><p className="eyebrow light"><span/> CENNIK OD 02.2026</p><h2>Jasne zasady.<br/><em>Przejrzyste ceny.</em></h2></div>
            <p>Ostateczny koszt zależy od indywidualnej sytuacji klinicznej i jest omawiany z pacjentem po konsultacji.</p>
          </div>
          <div className="price-grid">
            {priceGroups.map((group) => <div className="price-card" key={group.title}><h3>{group.title}</h3>{group.rows.map(([name, price]) => <div className="price-row" key={name}><span>{name}</span><b>{price}</b></div>)}</div>)}
          </div>
          {pricesOpen && <div className="price-more"><p>Pełny cennik obejmuje także endodoncję mikroskopową, ortodoncję, stomatologię dziecięcą, protetykę, periodontologię oraz diagnostykę RTG.</p><a href="https://ptakstomatologia.pl/cennik/" target="_blank" rel="noreferrer">Zobacz pełny wykaz aktualnych cen <ArrowRight size={17}/></a></div>}
          <button className="btn outline-dark" onClick={() => setPricesOpen(!pricesOpen)}>{pricesOpen ? 'Zwiń szczegóły' : 'Więcej o cenniku'} <ChevronDown size={17}/></button>
        </div>
      </section>

      <section className="gallery-band">
        <div className="gallery-cell"><img src="/ptak/hero-1.jpg" alt="Wnętrze gabinetu Ptak Stomatologia"/></div>
        <div className="gallery-cell wide"><img src="/ptak/clinic-team.jpg" alt="Zespół Ptak Stomatologia"/></div>
        <div className="gallery-cell"><img src="/ptak/hero-3.jpg" alt="Wyposażenie gabinetu Ptak Stomatologia"/></div>
      </section>

      <section className="contact section" id="kontakt">
        <div className="shell contact-card">
          <div className="contact-copy">
            <p className="eyebrow light"><span/> REJESTRACJA</p>
            <h2>Umów swoją<br/><em>wizytę</em></h2>
            <p>Rezerwacja terminów odbywa się osobiście lub telefonicznie. Zapraszamy do gabinetu w spokojnej części Wadowic — na miejscu dostępny jest duży parking.</p>
            <div className="contact-meta">
              <a href="tel:+48664065582"><Phone/> <span><small>Telefon</small><b>664 06 55 82</b></span></a>
              <a href="mailto:rejestracja@ptakstomatologia.pl"><Mail/> <span><small>E-mail</small><b>rejestracja@ptakstomatologia.pl</b></span></a>
              <span><MapPin/> <span><small>Adres</small><b>ul. Ady Sari 38, 34-100 Wadowice</b></span></span>
            </div>
          </div>
          <form onSubmit={(e) => {e.preventDefault(); setSent(true)}}>
            {sent ? <div className="success"><span><Check/></span><h3>Dziękujemy!</h3><p>Formularz demonstracyjny jest gotowy do podłączenia do skrzynki rejestracji. Obecnie wizyty można rezerwować pod numerem 664 06 55 82.</p><button type="button" className="btn primary" onClick={() => setSent(false)}>Wróć do formularza</button></div> : <>
              <h3>Poproś o kontakt</h3>
              <label>Imię i nazwisko<input required placeholder="Jan Kowalski"/></label>
              <label>Numer telefonu<input required type="tel" placeholder="+48 000 000 000"/></label>
              <label>W czym możemy pomóc?<select defaultValue=""><option value="" disabled>Wybierz temat</option>{services.map(s=><option key={s.title}>{s.title}</option>)}</select></label>
              <label className="consent"><input type="checkbox" required/> <span>Wyrażam zgodę na kontakt telefoniczny w sprawie konsultacji.</span></label>
              <button className="btn primary" type="submit">Proszę o kontakt <ArrowRight size={18}/></button>
            </>}
          </form>
        </div>
      </section>

      <footer>
        <div className="shell footer-main">
          <div><div className="brand footer-brand"><img className="official-logo" src="/ptak/logo.svg" alt="Ptak Stomatologia"/></div><p>Wysoka jakość usług i skuteczność leczenia.</p></div>
          <div><b>Nawigacja</b><a href="#uslugi">Oferta</a><a href="#zespol">Zespół</a><a href="#rtg">Pracownia RTG</a><a href="#cennik">Cennik</a></div>
          <div><b>Kontakt</b><a href="tel:+48664065582">664 06 55 82</a><a href="mailto:rejestracja@ptakstomatologia.pl">rejestracja@ptakstomatologia.pl</a><span>ul. Ady Sari 38<br/>34-100 Wadowice</span></div>
          <div><b>Godziny</b><span>Pon–Pt: 9:00–20:00</span><span>Sobota: po uzgodnieniu</span><div className="footer-social"><a href="https://www.facebook.com/ptakstomatologia" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook/></a></div></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 PTAK STOMATOLOGIA sp. z o.o.</span><span>NIP 5512657728 &nbsp; • &nbsp; REGON 523848403</span></div>
      </footer>
    </main>
  );
}
