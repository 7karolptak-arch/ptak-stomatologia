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
      <p className="eyebrow light"><span/> GABINET STOMATOLOGICZNY W WADOWICACH</p><h1>Skuteczne leczenie.<br/><em>Na lata.</em></h1>
      <p className="hero-lead">Wysoka jakość świadczonych usług, nowoczesna diagnostyka i indywidualne podejście do każdego pacjenta.</p>
      <div className="hero-buttons"><a className="btn primary" href="tel:+48664065582">Zadzwoń i umów wizytę <Phone size={18}/></a><a className="btn ghost" href="#uslugi">Poznaj ofertę</a></div>
    </div><div className="hero-card"><p>Rezerwacja terminów</p><h3>Osobiście lub telefonicznie.</h3><a href="tel:+48664065582"><Phone size={18}/> 664 06 55 82</a><small>ul. Ady Sari 38, 34-100 Wadowice</small></div></div>
    <div className="hero-stats shell"><div><b>2021</b><span>nowa siedziba<br/>Ptak Stomatologia</span></div><div><b>3</b><span>komfortowe<br/>gabinety</span></div><div><b>Wadowice</b><span>opieka blisko<br/>Twojego domu</span></div></div></section>

    <section className="intro section" id="o-nas"><div className="shell intro-grid"><div className="photo-stack"><img className="photo-main" src="/ptak/reception.jpg" alt="Recepcja Ptak Stomatologia w Wadowicach"/><div className="photo-note"><Sparkles size={25}/><b>Komfortowe miejsce<br/>i przyjazna atmosfera</b></div></div><div className="intro-copy">
      <p className="eyebrow"><span/> STOMATOLOG WADOWICE</p><h2>Poznaj nas.<br/><em>Ptak Stomatologia.</em></h2>
      <p>Myślą przewodnią gabinetu jest wysoka jakość świadczonych usług i skuteczność leczenia. Chcemy, aby efekt solidnie wykonanego zabiegu zachował się jak najdłużej.</p>
      <p>Każdy pacjent traktowany jest indywidualnie. Lekarz przedstawia najlepszy plan leczenia i pomaga podjąć świadome decyzje terapeutyczne oraz finansowe.</p>
      <a className="text-link" href="#kontakt">Umów konsultację <ArrowRight size={18}/></a>
    </div></div></section>

    <section className="services section" id="uslugi"><div className="shell"><div className="section-head split"><div><p className="eyebrow"><span/> JAK MOŻEMY CI POMÓC</p><h2>Nasze usługi</h2></div><p>Kompleksowe leczenie prowadzone przez zespół lekarzy różnych specjalizacji — w jednym, komfortowym miejscu.</p></div><div className="service-list">
      {services.map((s,index)=>{const expanded=activeService===index;return <article className={`service-row ${expanded?'expanded':''}`} key={s.n}><button className="service-trigger" onClick={()=>setActiveService(expanded?-1:index)} aria-expanded={expanded}><span className="service-number">{s.n}</span><span className="service-symbol">{s.icon}</span><span className="service-title">{s.title}</span><ChevronDown className="service-chevron"/></button><div className="service-detail"><div><p>{s.text}</p><a className="service-cta" href="#kontakt">Zapytaj o leczenie <ArrowRight size={17}/></a></div><span className="service-watermark">{s.icon}</span></div></article>})}
    </div></div></section>

    <section className="process section"><div className="shell"><div className="section-head centered"><p className="eyebrow"><span/> JAK PRACUJEMY</p><h2>Indywidualny plan.<br/><em>Świadome decyzje.</em></h2></div><div className="steps">
      <div><span><CalendarDays/></span><small>KROK 01</small><h3>Konsultacja</h3><p>Poznajemy potrzeby pacjenta i wykonujemy badanie.</p></div><div><span><Microscope/></span><small>KROK 02</small><h3>Diagnostyka</h3><p>Dobieramy badania potrzebne do bezpiecznego planowania.</p></div><div><span><Stethoscope/></span><small>KROK 03</small><h3>Plan leczenia</h3><p>Omawiamy rozwiązania terapeutyczne i finansowe.</p></div><div><span><HeartPulse/></span><small>KROK 04</small><h3>Leczenie</h3><p>Realizujemy uzgodniony plan z troską o komfort.</p></div>
    </div></div></section>

    <section className="page-links"><div className="shell page-links-grid"><a href="/zespol"><small>POZNAJ SPECJALISTÓW</small><h2>Nasz zespół</h2><span>Zobacz zespół <ArrowRight/></span></a><a href="/cennik"><small>PRZEJRZYSTE ZASADY</small><h2>Cennik</h2><span>Sprawdź ceny <ArrowRight/></span></a></div></section>

    <Gallery/>

    <section className="contact section" id="kontakt"><div className="shell contact-card"><div className="contact-copy"><p className="eyebrow light"><span/> REJESTRACJA</p><h2>Umów swoją<br/><em>wizytę</em></h2><p>Rezerwacja terminów odbywa się osobiście lub telefonicznie. Zapraszamy do gabinetu w spokojnej części Wadowic.</p><div className="contact-meta"><a href="tel:+48664065582"><Phone/><span><small>Telefon</small><b>664 06 55 82</b></span></a><a href="mailto:rejestracja@ptakstomatologia.pl"><Mail/><span><small>E-mail</small><b>rejestracja@ptakstomatologia.pl</b></span></a><span><MapPin/><span><small>Adres</small><b>ul. Ady Sari 38, 34-100 Wadowice</b></span></span></div></div>
      <form onSubmit={e=>{e.preventDefault();setSent(true)}}>{sent?<div className="success"><span><Check/></span><h3>Dziękujemy!</h3><p>Formularz demonstracyjny jest gotowy do podłączenia. Obecnie wizyty można rezerwować pod numerem 664 06 55 82.</p><button type="button" className="btn primary" onClick={()=>setSent(false)}>Wróć</button></div>:<><h3>Poproś o kontakt</h3><label>Imię i nazwisko<input required placeholder="Jan Kowalski"/></label><label>Numer telefonu<input required type="tel" placeholder="+48 000 000 000"/></label><label>W czym możemy pomóc?<select defaultValue=""><option value="" disabled>Wybierz temat</option>{services.map(s=><option key={s.title}>{s.title}</option>)}</select></label><label className="consent"><input type="checkbox" required/><span>Wyrażam zgodę na kontakt telefoniczny w sprawie konsultacji.</span></label><button className="btn primary" type="submit">Proszę o kontakt <ArrowRight size={18}/></button></>}</form>
    </div></section><SiteFooter/></main>;
}
