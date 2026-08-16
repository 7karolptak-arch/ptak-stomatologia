'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import Gallery from './components/Gallery';
import { services } from './data';

export default function Home() {
  const [activeService, setActiveService] = useState(-1);
  const [slide, setSlide] = useState(0);
  const [loadedSlides, setLoadedSlides] = useState([0]);
  const heroPhotos=['/hero-custom/gabinet.webp','/hero-custom/elewacja.webp','/hero-custom/recepcja.webp','/hero-custom/pylon.webp'];
  useEffect(()=>{const preload=setTimeout(()=>setLoadedSlides(current=>current.includes(1)?current:[...current,1]),2500);const timer=setInterval(()=>setSlide(s=>(s+1)%heroPhotos.length),6500);return()=>{clearTimeout(preload);clearInterval(timer)}},[]);
  useEffect(()=>{const next=(slide+1)%heroPhotos.length;setLoadedSlides(current=>current.includes(next)?current:[...current,next])},[slide]);
  return <main><SiteHeader/>
    <section className="hero" id="start"><div className="hero-slides">{heroPhotos.map((src,i)=>loadedSlides.includes(i)?<picture key={src} className={`hero-bg ${slide===i?'active':''}`}><source media="(max-width: 720px)" srcSet={src.replace('.webp','-mobile.webp')}/><img src={src} alt="" aria-hidden="true" fetchPriority={i===0?'high':'auto'} loading={i===0?'eager':'lazy'} decoding={i===0?'sync':'async'}/></picture>:null)}</div><div className="hero-shade"/><div className="shell hero-grid"><div className="hero-copy">
      <h1>Profesjonalne Usługi<br/><em>Stomatologiczne.</em></h1>
      <div className="hero-checklist"><span><Check/> Kompleksowa oferta leczenia</span><span><Check/> Jeden zespół wielu specjalizacji</span><span><Check/> Rozwiązania dopasowane do Ciebie</span></div>
      <div className="hero-buttons"><a className="btn primary" href="/kontakt">Umów konsultację <ArrowRight size={18}/></a><a className="btn ghost" href="/oferta">Poznaj ofertę</a></div>
      <div className="hero-proof" aria-label="Oceny pacjentów"><a href="https://www.google.com/maps/search/?api=1&query=PTAK+STOMATOLOGIA+Ady+Sari+38+Wadowice" target="_blank" rel="noreferrer" aria-label="Zobacz opinie Ptak Stomatologia w Google"><b>4,8 <span>★★★★★</span></b><small>Google • 119 opinii</small></a><i/><a href="https://www.rankinglekarzy.pl/grzegorz-ptak-28649" target="_blank" rel="noreferrer" aria-label="Zobacz opinie o Grzegorzu Ptaku w RankingLekarzy.pl"><b>5,0 <span>★★★★★</span></b><small>RankingLekarzy.pl • 26 opinii Grzegorza Ptaka</small></a></div>
    </div></div></section>

    <section className="intro section" id="o-nas"><div className="shell intro-grid"><div className="photo-stack intro-photo-new"><img className="photo-main" src="/ptak/clinic-team.jpg" alt="Zespół Ptak Stomatologia w Wadowicach" loading="lazy" decoding="async" width="2560" height="1707"/></div><div className="intro-copy">
      <p className="eyebrow"><span/> KLINIKA PTAK STOMATOLOGIA W WADOWICACH</p><h2>Poznaj nas.</h2>
      <p>Myślą przewodnią gabinetu jest wysoka jakość świadczonych usług i skuteczność leczenia. Chcemy, aby efekt solidnie wykonanego zabiegu zachował się jak najdłużej.</p>
      <p>Każdy pacjent traktowany jest indywidualnie. Lekarz przedstawia najlepszy plan leczenia i pomaga podjąć świadome decyzje terapeutyczne oraz finansowe.</p>
      <div className="intro-actions"><a className="text-link intro-team-link" href="/zespol">Poznaj zespół <ArrowRight size={18}/></a><a className="text-link" href="/kontakt">Umów konsultację <ArrowRight size={18}/></a></div>
    </div></div></section>

    <section className="services section" id="uslugi"><div className="shell"><div className="section-head split"><div><p className="eyebrow"><span/> JAK MOŻEMY CI POMÓC</p><h2>Nasze usługi</h2></div></div><div className="home-services-grid"><div className="service-list">
      {services.map((s,index)=>{const expanded=activeService===index;return <article className={`service-row ${expanded?'expanded':''}`} key={s.n}><button className="service-trigger" onClick={()=>setActiveService(expanded?-1:index)} aria-expanded={expanded}><span className="service-number">{s.n}</span><span className="service-title">{s.title}</span><ChevronDown className="service-chevron"/></button><div className="service-detail"><div><p>{s.text}</p><div className="service-actions"><a className="service-cta" href={`/oferta#${s.slug}`}>Dowiedz się więcej <ArrowRight size={17}/></a><a className="service-cta secondary" href="/kontakt">Zapytaj o leczenie</a></div></div></div></article>})}
    </div><div className="services-photo"><img src="/gallery/galeria-03.jpg" alt="Gabinet Ptak Stomatologia" loading="lazy" decoding="async" width="1620" height="1080"/><div><small>KOMPLEKSOWA OPIEKA</small><b>Wszystkie etapy leczenia<br/>w jednym miejscu.</b></div></div></div></div></section>

    <section className="page-links"><div className="shell page-links-grid"><a href="/zespol"><small>POZNAJ SPECJALISTÓW</small><h2>Nasz zespół</h2><span>Zobacz zespół <ArrowRight/></span></a><a href="/cennik"><small>PRZEJRZYSTE ZASADY</small><h2>Cennik</h2><span>Sprawdź ceny <ArrowRight/></span></a></div></section>

    <Gallery/><SiteFooter/></main>;
}
