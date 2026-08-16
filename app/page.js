'use client';

import { useState } from 'react';
import {
  ArrowRight, CalendarDays, Check, ChevronDown, Clock3, Facebook,
  HeartPulse, Instagram, MapPin, Menu, Microscope, Phone, ShieldCheck,
  Sparkles, Star, Stethoscope, X
} from 'lucide-react';

const services = [
  { n: '01', title: 'Implantologia', text: 'Trwałe uzupełnienie braków zębowych — od diagnostyki po odbudowę uśmiechu.', icon: '◎' },
  { n: '02', title: 'Stomatologia estetyczna', text: 'Licówki, bonding i wybielanie planowane z poszanowaniem naturalnych rysów.', icon: '✦' },
  { n: '03', title: 'Leczenie kanałowe', text: 'Precyzyjne leczenie pod mikroskopem, które pozwala ratować własne zęby.', icon: '⌁' },
  { n: '04', title: 'Ortodoncja', text: 'Aparaty i nakładki dobierane do potrzeb dzieci, młodzieży oraz dorosłych.', icon: '◌' },
  { n: '05', title: 'Chirurgia', text: 'Bezpieczne zabiegi w komfortowych warunkach i z troskliwą opieką pozabiegową.', icon: '+' },
  { n: '06', title: 'Higienizacja', text: 'Profesjonalna profilaktyka, która pomaga zachować zdrowy uśmiech na dłużej.', icon: '◇' },
];

const benefits = [
  ['Wszystko w jednym miejscu', 'Konsultacje, diagnostyka i leczenie prowadzi współpracujący zespół specjalistów.'],
  ['Komfort bez pośpiechu', 'Rezerwujemy czas na rozmowę, pytania i spokojne przeprowadzenie każdego etapu.'],
  ['Technologia, która pomaga', 'Skaner wewnątrzustny, tomografia 3D i mikroskop wspierają precyzyjne decyzje.'],
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const go = (id) => {
    setOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <div className="topbar">
        <div className="shell topbar-inner">
          <span><Clock3 size={14}/> Pon–Pt 8:00–20:00</span>
          <span><MapPin size={14}/> ul. Jasna 14, Warszawa</span>
          <a href="tel:+48221234567"><Phone size={14}/> +48 22 123 45 67</a>
        </div>
      </div>

      <header className="nav-wrap">
        <div className="shell nav">
          <button className="brand" onClick={() => go('#start')} aria-label="Przejdź na początek">
            <span className="brand-mark"><span>N</span></span>
            <span className="brand-copy"><b>NOVA</b><small>DENTAL CLINIC</small></span>
          </button>
          <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Główna nawigacja">
            <button onClick={() => go('#uslugi')}>Usługi <ChevronDown size={14}/></button>
            <button onClick={() => go('#o-nas')}>O nas</button>
            <button onClick={() => go('#dlaczego')}>Dlaczego my</button>
            <button onClick={() => go('#opinie')}>Opinie</button>
            <button onClick={() => go('#kontakt')}>Kontakt</button>
          </nav>
          <div className="nav-actions">
            <a className="social" href="#kontakt" aria-label="Instagram"><Instagram size={18}/></a>
            <a className="social" href="#kontakt" aria-label="Facebook"><Facebook size={18}/></a>
            <button className="nav-cta" onClick={() => go('#kontakt')}>Umów wizytę <ArrowRight size={17}/></button>
          </div>
          <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <section className="hero" id="start">
        <div className="hero-bg" />
        <div className="shell hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow light"><span/> KLINIKA STOMATOLOGICZNA</p>
            <h1>Zdrowy uśmiech.<br/><em>Spokojna głowa.</em></h1>
            <p className="hero-lead">Kompleksowe leczenie stomatologiczne w miejscu, w którym nowoczesna technologia spotyka się z prawdziwą troską.</p>
            <div className="hero-buttons">
              <button className="btn primary" onClick={() => go('#kontakt')}>Umów konsultację <ArrowRight size={18}/></button>
              <button className="btn ghost" onClick={() => go('#uslugi')}>Poznaj usługi</button>
            </div>
          </div>
          <div className="hero-card">
            <p>Nie wiesz, od czego zacząć?</p>
            <h3>Porozmawiajmy o Twoim uśmiechu.</h3>
            <a href="tel:+48221234567"><Phone size={18}/> +48 22 123 45 67</a>
            <small>Oddzwonimy lub znajdziemy dogodny termin.</small>
          </div>
        </div>
        <div className="hero-stats shell">
          <div><b>4.9</b><span><span className="stars">★★★★★</span> 340+ opinii</span></div>
          <div><b>12</b><span>doświadczonych<br/>specjalistów</span></div>
          <div><b>9 lat</b><span>troski o zdrowe<br/>uśmiechy</span></div>
        </div>
      </section>

      <section className="intro section" id="o-nas">
        <div className="shell intro-grid">
          <div className="photo-stack">
            <img className="photo-main" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=88" alt="Nowoczesny gabinet stomatologiczny"/>
            <div className="photo-note"><Sparkles size={25}/><b>Twój komfort<br/>jest częścią leczenia</b></div>
          </div>
          <div className="intro-copy">
            <p className="eyebrow"><span/> POZNAJ NOVA DENTAL</p>
            <h2>Stomatologia, której możesz <em>zaufać</em></h2>
            <p>Tworzymy klinikę, do której wchodzi się bez napięcia. Zaczynamy od uważnej rozmowy, przedstawiamy jasny plan i prowadzimy Cię przez cały proces krok po kroku.</p>
            <p>Nasz zespół łączy wiedzę z różnych dziedzin, dlatego nawet złożone leczenie może odbywać się w jednym, dobrze znanym miejscu.</p>
            <div className="signature-row"><span className="signature">dr Anna Nowak</span><small>Dyrektor medyczna<br/>Nova Dental</small></div>
            <button className="text-link" onClick={() => go('#dlaczego')}>Poznaj naszą filozofię <ArrowRight size={18}/></button>
          </div>
        </div>
      </section>

      <section className="services section" id="uslugi">
        <div className="shell">
          <div className="section-head split">
            <div><p className="eyebrow"><span/> JAK MOŻEMY CI POMÓC</p><h2>Kompleksowa opieka.<br/><em>Jeden zespół.</em></h2></div>
            <p>Od profilaktyki po pełne metamorfozy uśmiechu. Plan leczenia dobieramy indywidualnie — bez schematów i zbędnego pośpiechu.</p>
          </div>
          <div className="service-grid">
            {services.map((s) => <article className="service-card" key={s.n}>
              <div className="service-top"><span className="service-icon">{s.icon}</span><small>{s.n}</small></div>
              <h3>{s.title}</h3><p>{s.text}</p><button onClick={() => go('#kontakt')} aria-label={`Zapytaj o ${s.title}`}><ArrowRight/></button>
            </article>)}
          </div>
        </div>
      </section>

      <section className="why section" id="dlaczego">
        <div className="shell why-grid">
          <div className="why-copy">
            <p className="eyebrow light"><span/> DLACZEGO NOVA DENTAL</p>
            <h2>Nowoczesność,<br/><em>która daje spokój</em></h2>
            <div className="benefit-list">
              {benefits.map((b, i) => <div className="benefit" key={b[0]}><span>0{i+1}</span><div><h3>{b[0]}</h3><p>{b[1]}</p></div></div>)}
            </div>
          </div>
          <div className="why-visual">
            <img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=88" alt="Stomatolog podczas konsultacji"/>
            <div className="floating-badge"><ShieldCheck/><b>Bezpiecznie.<br/>Przejrzyście.<br/>Po Twojemu.</b></div>
          </div>
        </div>
      </section>

      <section className="process section">
        <div className="shell">
          <div className="section-head centered"><p className="eyebrow"><span/> PIERWSZA WIZYTA</p><h2>Dobry plan zaczyna się<br/>od <em>dobrej rozmowy</em></h2></div>
          <div className="steps">
            <div><span><CalendarDays/></span><small>KROK 01</small><h3>Konsultacja</h3><p>Rozmawiamy o Twoich potrzebach, obawach i oczekiwaniach.</p></div>
            <div><span><Microscope/></span><small>KROK 02</small><h3>Diagnostyka</h3><p>Wykonujemy potrzebne badania i pokazujemy Ci pełny obraz sytuacji.</p></div>
            <div><span><Stethoscope/></span><small>KROK 03</small><h3>Plan leczenia</h3><p>Otrzymujesz czytelne etapy, koszty i możliwe warianty terapii.</p></div>
            <div><span><HeartPulse/></span><small>KROK 04</small><h3>Opieka</h3><p>Prowadzimy leczenie w Twoim tempie i pozostajemy w kontakcie.</p></div>
          </div>
        </div>
      </section>

      <section className="reviews section" id="opinie">
        <div className="shell reviews-grid">
          <div className="reviews-intro"><p className="eyebrow light"><span/> GŁOS NASZYCH PACJENTÓW</p><h2>Najbardziej cieszy nas<br/><em>Wasz spokój</em></h2><p>Każda opinia przypomina nam, że dobre leczenie to nie tylko efekt, ale też całe doświadczenie po drodze.</p><div className="rating"><b>4.9</b><span><span className="stars">★★★★★</span><small>na podstawie 340+ opinii</small></span></div></div>
          <blockquote><Star className="quote-star" fill="currentColor"/><p>„Od pierwszej rozmowy czułam, że jestem w dobrych rękach. Wszystko zostało wyjaśnione spokojnie i zrozumiale, a efekt przerósł moje oczekiwania.”</p><footer><span>MK</span><div><b>Magdalena K.</b><small>Pacjentka Nova Dental</small></div></footer></blockquote>
        </div>
      </section>

      <section className="contact section" id="kontakt">
        <div className="shell contact-card">
          <div className="contact-copy">
            <p className="eyebrow light"><span/> ZRÓB PIERWSZY KROK</p>
            <h2>Porozmawiajmy<br/>o Twoim <em>uśmiechu</em></h2>
            <p>Zostaw numer telefonu. Nasza koordynatorka oddzwoni, odpowie na pytania i zaproponuje dogodny termin konsultacji.</p>
            <div className="contact-meta"><a href="tel:+48221234567"><Phone/> <span><small>Zadzwoń</small><b>+48 22 123 45 67</b></span></a><span><MapPin/> <span><small>Odwiedź nas</small><b>ul. Jasna 14, Warszawa</b></span></span></div>
          </div>
          <form onSubmit={(e) => {e.preventDefault(); setSent(true)}}>
            {sent ? <div className="success"><span><Check/></span><h3>Dziękujemy!</h3><p>To wersja demonstracyjna — formularz działa wizualnie i jest gotowy do podłączenia do systemu kliniki.</p><button type="button" className="btn primary" onClick={() => setSent(false)}>Wróć do formularza</button></div> : <>
              <h3>Umów konsultację</h3><label>Imię i nazwisko<input required placeholder="Jan Kowalski"/></label><label>Numer telefonu<input required type="tel" placeholder="+48 000 000 000"/></label><label>W czym możemy pomóc?<select defaultValue=""><option value="" disabled>Wybierz temat</option><option>Implantologia</option><option>Stomatologia estetyczna</option><option>Leczenie kanałowe</option><option>Ortodoncja</option><option>Inne</option></select></label><label className="consent"><input type="checkbox" required/> <span>Wyrażam zgodę na kontakt telefoniczny w sprawie konsultacji.</span></label><button className="btn primary" type="submit">Proszę o kontakt <ArrowRight size={18}/></button>
            </>}
          </form>
        </div>
      </section>

      <footer>
        <div className="shell footer-main">
          <div><div className="brand footer-brand"><span className="brand-mark"><span>N</span></span><span className="brand-copy"><b>NOVA</b><small>DENTAL CLINIC</small></span></div><p>Zdrowy uśmiech. Spokojna głowa.</p></div>
          <div><b>Nawigacja</b><a href="#uslugi">Usługi</a><a href="#o-nas">O nas</a><a href="#dlaczego">Dlaczego my</a></div>
          <div><b>Kontakt</b><a href="tel:+48221234567">+48 22 123 45 67</a><a href="mailto:kontakt@novadental.pl">kontakt@novadental.pl</a><span>ul. Jasna 14, Warszawa</span></div>
          <div><b>Godziny</b><span>Pon–Pt: 8:00–20:00</span><span>Sob: 9:00–14:00</span><div className="footer-social"><a href="#"><Instagram/></a><a href="#"><Facebook/></a></div></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 Nova Dental. Wszelkie prawa zastrzeżone.</span><span>Polityka prywatności &nbsp; • &nbsp; Cookies</span></div>
      </footer>
    </main>
  );
}
