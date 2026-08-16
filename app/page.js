'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import Gallery from './components/Gallery';
import { services } from './data';

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const [slide, setSlide] = useState(0);
  const heroPhotos=['/gallery/galeria-01.jpg','/gallery/galeria-13.jpg','/gallery/galeria-03.jpg','/gallery/galeria-28.jpg'];
  useEffect(()=>{const timer=setInterval(()=>setSlide(s=>(s+1)%heroPhotos.length),6500);return()=>clearInterval(timer)},[]);
  return <main><SiteHeader/>
    <section className="hero" id="start"><div className="hero-slides">{heroPhotos.map((src,i)=><div key={src} className={`hero-bg ${slide===i?'active':''}`} style={{backgroundImage:`url(${src})`}}/>)}</div><div className="hero-shade"/><div className="shell hero-grid"><div className="hero-copy">
      <p className="eyebrow light"><span/> KOMPLEKSOWA STOMATOLOGIA • WADOWICE</p><h1>Twój uśmiech.<br/><em>Dobrze zaplanowany.</em></h1>
      <p className="hero-lead">Od pierwszej konsultacji po zakończenie leczenia — jeden zespół, przejrzysty plan i rozwiązania dopasowane do Ciebie.</p>
      <div className="hero-buttons"><a className="btn primary" href="/kontakt">Umów konsultację <ArrowRight size={18}/></a><a className="btn ghost" href="/oferta">Poznaj ofertę</a></div>
      <div className="hero-proof" aria-label="Oceny pacjentów"><div><b>4,8 <span>★★★★★</span></b><small>Google • 119 opinii</small></div><i/><div><b>5,0 <span>★★★★★</span></b><small>RankingLekarzy.pl • 26 opinii Grzegorza Ptaka</small></div></div>
    </div></div></section>

    <section className="intro section" id="o-nas"><div className="shell intro-grid"><div className="photo-stack"><img className="photo-main" src="/ptak/reception.jpg" alt="Recepcja Ptak Stomatologia w Wadowicach"/><div className="photo-note"><Sparkles size={25}/><b>Komfortowe miejsce<br/>i przyjazna atmosfera</b></div></div><div className="intro-copy">
      <p className="eyebrow"><span/> STOMATOLOG WADOWICE</p><h2>Poznaj nas.<br/><em>Ptak Stomatologia.</em></h2>
      <p>Myślą przewodnią gabinetu jest wysoka jakość świadczonych usług i skuteczność leczenia. Chcemy, aby efekt solidnie wykonanego zabiegu zachował się jak najdłużej.</p>
      <p>Każdy pacjent traktowany jest indywidualnie. Lekarz przedstawia najlepszy plan leczenia i pomaga podjąć świadome decyzje terapeutyczne oraz finansowe.</p>
      <a className="text-link" href="/kontakt">Umów konsultację <ArrowRight size={18}/></a>
    </div></div></section>

    <section className="services section" id="uslugi"><div className="shell"><div className="section-head split"><div><p className="eyebrow"><span/> JAK MOŻEMY CI POMÓC</p><h2>Nasze usługi</h2></div><p>Kompleksowe leczenie prowadzone przez zespół lekarzy różnych specjalizacji.</p></div><div className="home-services-grid"><div className="service-list">
      {services.map((s,index)=>{const expanded=activeService===index;return <article className={`service-row ${expanded?'expanded':''}`} key={s.n}><button className="service-trigger" onClick={()=>setActiveService(expanded?-1:index)} aria-expanded={expanded}><span className="service-number">{s.n}</span><span className="service-title">{s.title}</span><ChevronDown className="service-chevron"/></button><div className="service-detail"><div><p>{s.text}</p><div className="service-actions"><a className="service-cta" href={`/oferta#${s.slug}`}>Dowiedz się więcej <ArrowRight size={17}/></a><a className="service-cta secondary" href="/kontakt">Zapytaj o leczenie</a></div></div></div></article>})}
    </div><div className="services-photo"><img src="/gallery/galeria-03.jpg" alt="Gabinet Ptak Stomatologia"/><div><small>KOMPLEKSOWA OPIEKA</small><b>Wszystkie etapy leczenia<br/>w jednym miejscu.</b></div></div></div></div></section>

    <section className="page-links"><div className="shell page-links-grid"><a href="/zespol"><small>POZNAJ SPECJALISTÓW</small><h2>Nasz zespół</h2><span>Zobacz zespół <ArrowRight/></span></a><a href="/cennik"><small>PRZEJRZYSTE ZASADY</small><h2>Cennik</h2><span>Sprawdź ceny <ArrowRight/></span></a></div></section>

    <Gallery/><SiteFooter/></main>;
}
