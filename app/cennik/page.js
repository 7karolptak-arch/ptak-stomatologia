'use client';
import { useState } from 'react';
import { ArrowRight, ChevronDown, Phone } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

const groups=[
 ['Stomatologia zachowawcza',[['Badanie, diagram, konsultacja','100–300 zł','Pierwsza wizyta pozwala ocenić stan zdrowia jamy ustnej i omówić możliwe kierunki leczenia.'],['Badanie kontrolne z diagramem','80 zł'],['Znieczulenie komputerowe','70 zł'],['Wypełnienie zęba stałego','350–450 zł'],['ICON — leczenie przebarwień, 1 ząb','250–300 zł'],['Bonding / licówka kompozytowa','600–700 zł'],['Leczenie kanałowe — 1 kanał','800 zł'],['Leczenie kanałowe — 2 kanały','1 000 zł'],['Leczenie kanałowe — 3 kanały','1 200 zł'],['Leczenie kanałowe — 4 kanały','1 400 zł']]],
 ['Chirurgia stomatologiczna',[['Usunięcie zęba','350–450 zł','Ceny obejmują znieczulenie tradycyjne; znieczulenie komputerowe +70 zł.'],['Chirurgiczne usunięcie zęba','400–500 zł'],['Usunięcie zęba mądrości','400–500 zł'],['Usunięcie zatrzymanego zęba mądrości','700–900 zł'],['Szycie rany poekstrakcyjnej','80 zł'],['Podcięcie wędzidełka','350 zł']]],
 ['Profilaktyka i higienizacja',[['Skaling i piaskowanie','340–390 zł','Profesjonalne oczyszczanie pomaga utrzymać zdrowie zębów i dziąseł oraz świeży wygląd uśmiechu.'],['Pakiet z lakierowaniem','360–400 zł'],['Fluoryzacja','od 100 zł']]],
 ['Stomatologia estetyczna',[['Wybielanie nakładkowe','950 zł','Metodę wybielania dobieramy po ocenie stanu zębów i rozmowie o oczekiwanym efekcie.'],['Wybielanie zęba martwego','450 zł'],['ICON — leczenie białych plam','250–300 zł']]],
 ['Stomatologia dziecięca',[['Wizyta adaptacyjna','150 zł'],['Wypełnienie zęba mlecznego','250–300 zł'],['Usunięcie zęba mlecznego','250–300 zł'],['Lakierowanie zębów mlecznych','250 zł'],['Lakowanie — 1 ząb','150 zł']]],
 ['Protetyka',[['Korona porcelanowa na metalu','1 500 zł','Szczegółowa wycena zależy od wybranego rozwiązania, materiału i zakresu odbudowy.'],['Korona pełnoceramiczna z tlenku cyrkonu','od 1 800 zł'],['Licówka ceramiczna','1 900 zł'],['Inlay / onlay ceramiczny','1 200 zł'],['Proteza całkowita','1 700 zł'],['Proteza szkieletowa','2 500–3 000 zł']]],
 ['Periodontologia',[['Badanie periodontologiczne','300 zł'],['SRP — ćwiartka uzębienia','800 zł'],['Szynowanie zębów — 1 punkt','130 zł']]],
 ['Implantologia i ortodoncja',[['Cennik','w trakcie przygotowania','Koszt leczenia zostanie określony po konsultacji i przygotowaniu indywidualnego planu.']]]
];

export default function PricePage(){const [open,setOpen]=useState(0);return <main><SiteHeader/><section className="subhero price-hero"><div className="shell"><p className="breadcrumb"><a href="/">Strona główna</a> / Cennik</p><p className="eyebrow light"><span/> CENNIK</p><h1>Jasne zasady.<br/><em>Świadome decyzje.</em></h1><p>Orientacyjne ceny najczęściej wykonywanych zabiegów. Dokładny kosztorys otrzymasz po konsultacji i diagnostyce.</p></div></section>
  <section className="price-intro"><div className="shell price-intro-compact"><div><p className="eyebrow"><span/> WAŻNE</p><h2>Ceny orientacyjne</h2></div><p>Ostateczny koszt zależy od sytuacji klinicznej i jest omawiany po konsultacji. <a href="tel:+48664065582"><Phone/> 664 06 55 82</a></p></div></section>
  <section className="price-catalog section"><div className="shell"><div className="price-list">{groups.map(([title,rows],i)=><article className={`price-group ${open===i?'open':''}`} key={title}><button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}><span>{String(i+1).padStart(2,'0')}</span><h2>{title}</h2><ChevronDown/></button><div className="price-panel">{rows.map(([name,price,desc])=><div className="catalog-row" key={name}><div><h3>{name}</h3>{desc&&<p>{desc}</p>}</div><b>{price}</b></div>)}</div></article>)}</div></div></section>
  <section className="cta-band"><div className="shell"><div><p className="eyebrow light"><span/> KONSULTACJA</p><h2>Porozmawiajmy o leczeniu</h2></div><a className="btn primary" href="/#kontakt">Umów konsultację <ArrowRight/></a></div></section><SiteFooter/></main>}
