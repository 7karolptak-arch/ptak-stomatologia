'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, CalendarDays, Check, ChevronDown, HeartPulse, Mail, MapPin, Microscope, Phone, Sparkles, Stethoscope } from 'lucide-react';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import Gallery from './components/Gallery';
import { services } from './data';

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const [sent, setSent] = useState(false);
  const [slide, setSlide] = useState(0);
  const heroPhotos=['/gallery/galeria-01.jpg','/gallery/galeria-13.jpg','/gallery/galeria-03.jpg','/gallery/galeria-28.jpg'];
  useEffect(()=>{const timer=setInterval(()=>setSlide(s=>(s+1)%heroPhotos.length),6500);return()=>clearInterval(timer)},[]);
  return <main><SiteHeader/>
    <section className="hero" id="start"><div className="hero-slides">{heroPhotos.map((src,i)=><div key={src} className={`hero-bg ${slide===i?'active':''}`} style={{backgroundImage:`url(${src})`}}/>)}</div><div className="hero-shade"/><div className="shell hero-grid"><div className="hero-copy">
      <p className="eyebrow light"><span/> KOMPLEKSOWA STOMATOLOGIA • WADOWICE</p><h1>Twój uśmiech.<br/><em>Dobrze zaplanowany.</em></h1>
      <p className="hero-lead">Od pierwszej konsultacji po zakończenie leczenia — jeden zespół, przejrzysty plan i rozwiązania dopasowane do Ciebie.</p>
      <div className="hero-buttons"><a className="btn primary" href="#kontakt">Umów konsultację <ArrowRight size={18}/></a><a className="btn ghost" href="/oferta">Poznaj ofertę</a></div>
      <div className="hero-proof" aria-label="Oceny pacjentów"><div><b>4,8 <span>★★★★★</span></b><small>Google • 119 opinii</small></div><i/><div><b>5,0 <span>★★★★★</span></b><small>RankingLekarzy.pl • 26 opinii Grzegorza Ptaka</small></div></div>
    </div></div></section>

    <section className="intro section" id="o-nas"><div className="shell intro-grid"><div className="photo-stack"><img className="photo-main" src="/ptak/reception.jpg" alt="Recepcja Ptak Stomatologia w Wadowicach"/><div className="photo-note"><Sparkles size={25}/><b>Komfortowe miejsce<br/>i przyjazna atmosfera</b></div></div><div className="intro-copy">
      <p className="eyebrow"><span/> STOMATOLOG WADOWICE</p><h2>Poznaj nas.<br/><em>Ptak Stomatologia.</em></h2>
      <p>Myślą przewodnią gabinetu jest wysoka jakość świadczonych usług i skuteczność leczenia. Chcemy, aby efekt solidnie wykonanego zabiegu zachował się jak najdłużej.</p>
      <p>Każdy pacjent traktowany jest indywidualnie. Lekarz przedstawia najlepszy plan leczenia i pomaga podjąć świadome decyzje terapeutyczne oraz finansowe.</p>
      <a className="text-link" href="#kontakt">Umów konsultację <ArrowRight size={18}/></a>
    </div></div></section>

    <section className="services section" id="uslugi"><div className="shell"><div className="section-head split"><div><p className="eyebrow"><span/> JAK MOŻEMY CI POMÓC</p><h2>Nasze usługi</h2></div><p>Kompleksowe leczenie prowadzone przez zespół lekarzy różnych specjalizacji — w jednym, komfortowym miejscu.</p></div><div className="service-list">
      {services.map((s,index)=>{const expanded=activeService===index;return <article className={`service-row ${expanded?'expanded':''}`} key={s.n}><button className="service-trigger" onClick={()=>setActiveService(expanded?-1:index)} aria-expanded={expanded}><span className="service-number">{s.n}</span><span className="service-symbol">{s.icon}</span><span className="service-title">{s.title}</span><ChevronDown className="service-chevron"/></button><div className="service-detail"><div><p>{s.text}</p><div className="service-actions"><a className="service-cta" href={`/oferta#${s.slug}`}>Dowiedz się więcej <ArrowRight size={17}/></a><a className="service-cta secondary" href="#kontakt">Zapytaj o leczenie</a></div></div><span className="service-watermark">{s.icon}</span></div></article>})}
    </div></div></section>

    <section className="process section"><div className="shell"><div className="section-head centered"><p className="eyebrow"><span/> JAK PRACUJEMY</p><h2>Indywidualny plan.<br/><em>Świadome decyzje.</em></h2></div><div className="steps">
      <div><span><CalendarDays/></span><small>KROK 01</small><h3>Konsultacja</h3><p>Poznajemy potrzeby pacjenta i wykonujemy badanie.</p></div><div><span><Microscope/></span><small>KROK 02</small><h3>Diagnostyka</h3><p>Dobieramy badania potrzebne do bezpiecznego planowania.</p></div><div><span><Stethoscope/></span><small>KROK 03</small><h3>Plan leczenia</h3><p>Omawiamy rozwiązania terapeutyczne i finansowe.</p></div><div><span><HeartPulse/></span><small>KROK 04</small><h3>Leczenie</h3><p>Realizujemy uzgodniony plan z troską o komfort.</p></div>
    </div></div></section>

    <section className="page-links"><div className="shell page-links-grid"><a href="/zespol"><small>POZNAJ SPECJALISTÓW</small><h2>Nasz zespół</h2><span>Zobacz zespół <ArrowRight/></span></a><a href="/cennik"><small>PRZEJRZYSTE ZASADY</small><h2>Cennik</h2><span>Sprawdź ceny <ArrowRight/></span></a></div></section>

    <Gallery/>

    <section className="contact section" id="kontakt"><div className="shell contact-card"><div className="contact-copy"><p className="eyebrow light"><span/> REJESTRACJA</p><h2>Umów swoją<br/><em>wizytę</em></h2><p>Rezerwacja terminów odbywa się osobiście lub telefonicznie. Zapraszamy do gabinetu w spokojnej części Wadowic.</p><div className="contact-meta"><a href="tel:+48664065582"><Phone/><span><small>Telefon</small><b>664 06 55 82</b></span></a><a href="mailto:rejestracja@ptakstomatologia.pl"><Mail/><span><small>E-mail</small><b>rejestracja@ptakstomatologia.pl</b></span></a><span><MapPin/><span><small>Adres</small><b>ul. Ady Sari 38, 34-100 Wadowice</b></span></span></div></div>
      <form onSubmit={e=>{e.preventDefault();const f=new FormData(e.currentTarget);const subject=encodeURIComponent('Prośba o kontakt — '+f.get('name'));const body=encodeURIComponent(`Imię i nazwisko: ${f.get('name')}\nTelefon: ${f.get('phone')}\nTemat: ${f.get('topic')}\n\nProszę o kontakt w sprawie konsultacji.`);window.location.href=`mailto:rejestracja@ptakstomatologia.pl?subject=${subject}&body=${body}`;setSent(true)}}>{sent?<div className="success"><span><Check/></span><h3>Wiadomość jest gotowa</h3><p>Otworzyliśmy Twój program pocztowy z uzupełnioną wiadomością do rejestracji. Sprawdź treść i naciśnij „Wyślij”.</p><button type="button" className="btn primary" onClick={()=>setSent(false)}>Wróć do formularza</button></div>:<><h3>Napisz do rejestracji</h3><label>Imię i nazwisko<input name="name" required placeholder="Jan Kowalski"/></label><label>Numer telefonu<input name="phone" required type="tel" placeholder="+48 000 000 000"/></label><label>W czym możemy pomóc?<select name="topic" defaultValue=""><option value="" disabled>Wybierz temat</option>{services.map(s=><option key={s.title}>{s.title}</option>)}</select></label><label className="consent"><input type="checkbox" required/><span>Wyrażam zgodę na przekazanie danych do rejestracji w celu kontaktu.</span></label><button className="btn primary" type="submit">Otwórz wiadomość e-mail <ArrowRight size={18}/></button><small className="form-note">Po kliknięciu otworzy się Twój program pocztowy. Wiadomość zostanie wysłana dopiero po Twoim potwierdzeniu.</small></>}</form>
    </div></section><SiteFooter/></main>;
}
