import { ArrowRight } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { doctors, support } from '../data';

export default function TeamPage(){return <main><SiteHeader/><section className="subhero team-hero"><div className="shell"><p className="breadcrumb"><a href="/">Strona główna</a> / Zespół</p><p className="eyebrow light"><span/> NASI SPECJALIŚCI</p><h1>Ludzie, którym<br/><em>możesz zaufać.</em></h1><p>Wiedza z wielu dziedzin stomatologii, wspólny standard leczenia i uważność na potrzeby każdego pacjenta.</p></div></section>
  <section className="team section"><div className="shell"><div className="section-head split"><div><p className="eyebrow"><span/> LEKARZE</p><h2>Doświadczenie wielu dziedzin.<br/><em>Jedna opieka.</em></h2></div><p>Każdy plan leczenia powstaje z myślą o trwałym, naturalnym efekcie i komforcie pacjenta.</p></div><div className="team-grid">{doctors.map(p=><article className="person-card" key={p.name}><div className={`person-photo ${!p.image?'person-placeholder':''}`}>{p.image?<img src={p.image} alt={p.name}/>:<span>{p.name.split(' ').map(x=>x[0]).join('')}</span>}</div><div className="person-copy"><h3>{p.name}</h3><p>{p.role}</p><small>{p.scope}</small></div></article>)}</div>
  <div className="support-team"><p className="eyebrow"><span/> ZESPÓŁ WSPARCIA</p><div>{support.map(([name,role])=><span key={name}><b>{name}</b><small>{role}</small></span>)}</div></div></div></section>
  <section className="cta-band"><div className="shell"><div><p className="eyebrow light"><span/> PIERWSZY KROK</p><h2>Umów konsultację</h2></div><a className="btn primary" href="/#kontakt">Przejdź do rejestracji <ArrowRight/></a></div></section><SiteFooter/></main>}
