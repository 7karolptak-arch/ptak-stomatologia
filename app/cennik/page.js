'use client';
import { useState } from 'react';
import { ArrowRight, ChevronDown, Phone } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

const groups=[
 ['Konsultacje i stomatologia zachowawcza',[['Konsultacja / badanie','100–300 zł','Pierwsza wizyta pozwala ocenić stan zdrowia jamy ustnej i omówić możliwe kierunki leczenia.'],['Wizyta kontrolna','80 zł'],['Wypełnienie zęba stałego','350–450 zł'],['Bonding / licówka kompozytowa','600–700 zł'],['Znieczulenie komputerowe','70 zł']]],
 ['Chirurgia stomatologiczna',[['Usunięcie zęba stałego','350–450 zł','Zakres zabiegu i ostateczna cena zależą od stopnia trudności oraz sytuacji klinicznej.'],['Usunięcie zęba mądrości','400–500 zł'],['Nacięcie ropnia','od 250 zł'],['Szycie rany','od 150 zł']]],
 ['Profilaktyka i higienizacja',[['Skaling i piaskowanie','340–390 zł','Profesjonalne oczyszczanie pomaga utrzymać zdrowie zębów i dziąseł oraz świeży wygląd uśmiechu.'],['Pakiet z lakierowaniem','360–400 zł'],['Fluoryzacja','od 100 zł']]],
 ['Stomatologia estetyczna',[['Wybielanie nakładkowe','950 zł','Metodę wybielania dobieramy po ocenie stanu zębów i rozmowie o oczekiwanym efekcie.'],['Wybielanie zęba martwego','450 zł'],['ICON — leczenie białych plam','250–300 zł']]],
 ['Endodoncja mikroskopowa',[['Konsultacja endodontyczna','od 150 zł','Precyzyjne leczenie kanałowe planowane indywidualnie po diagnostyce.'],['Leczenie kanałowe','wycena indywidualna'],['Powtórne leczenie kanałowe','wycena indywidualna']]],
 ['Protetyka i implantologia',[['Konsultacja protetyczna','od 150 zł','Szczegółowa wycena zależy od wybranego rozwiązania, materiału i zakresu odbudowy.'],['Korony i mosty','wycena indywidualna'],['Leczenie implantologiczne','wycena indywidualna']]],
 ['Ortodoncja',[['Konsultacja ortodontyczna','wycena indywidualna','Plan leczenia powstaje po analizie zgryzu oraz potrzeb pacjenta.'],['Aparaty i wizyty kontrolne','wycena indywidualna']]]
];

export default function PricePage(){const [open,setOpen]=useState(0);return <main><SiteHeader/><section className="subhero price-hero"><div className="shell"><p className="breadcrumb"><a href="/">Strona główna</a> / Cennik</p><p className="eyebrow light"><span/> CENNIK</p><h1>Jasne zasady.<br/><em>Świadome decyzje.</em></h1><p>Orientacyjne ceny najczęściej wykonywanych zabiegów. Dokładny kosztorys otrzymasz po konsultacji i diagnostyce.</p></div></section>
  <section className="price-intro section"><div className="shell price-intro-grid"><div><p className="eyebrow"><span/> ZANIM ZACZNIEMY</p><h2>Najpierw poznajemy<br/><em>Twoje potrzeby.</em></h2></div><div><p>Podczas pierwszej wizyty lekarz oceni stan zdrowia jamy ustnej, porozmawia z Tobą o oczekiwaniach i zaproponuje odpowiedni plan leczenia.</p><p>Podane ceny mają charakter informacyjny. Ostateczny koszt zależy od indywidualnej sytuacji klinicznej.</p><a href="tel:+48664065582"><Phone/> 664 06 55 82</a></div></div></section>
  <section className="price-catalog section"><div className="shell"><div className="price-list">{groups.map(([title,rows],i)=><article className={`price-group ${open===i?'open':''}`} key={title}><button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}><span>{String(i+1).padStart(2,'0')}</span><h2>{title}</h2><ChevronDown/></button><div className="price-panel">{rows.map(([name,price,desc])=><div className="catalog-row" key={name}><div><h3>{name}</h3>{desc&&<p>{desc}</p>}</div><b>{price}</b></div>)}</div></article>)}</div></div></section>
  <section className="cta-band"><div className="shell"><div><p className="eyebrow light"><span/> KONSULTACJA</p><h2>Porozmawiajmy o leczeniu</h2></div><a className="btn primary" href="/#kontakt">Umów konsultację <ArrowRight/></a></div></section><SiteFooter/></main>}
