import { ArrowRight, Check, Clock3, FileText, ScanLine, ShieldCheck } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

const exams=[
  ['Zdjęcie punktowe','Obraz jednego lub kilku zębów, pomocny m.in. w diagnostyce próchnicy, endodoncji i kontroli leczenia.','30–50 zł'],
  ['Zdjęcie panoramiczne OPG','Przegląd całego uzębienia i struktur twarzoczaszki wykorzystywany w chirurgii, protetyce i ortodoncji.','110 zł'],
  ['Tomografia CBCT','Trójwymiarowy obraz szczęki, żuchwy i otaczających tkanek do precyzyjnego planowania leczenia.','220–270 zł'],
  ['Mikrotomografia','Małe pole obrazowania 5 × 5 cm zapewniające bardzo dokładny obraz wybranego obszaru.','130 zł'],
  ['Cefalometria','Boczne zdjęcie czaszki wykorzystywane przy planowaniu i kontroli leczenia ortodontycznego.','100 zł'],
];

export default function RtgPage(){return <main><SiteHeader/>
  <section className="subhero rtg-hero"><div className="shell"><p className="breadcrumb"><a href="/">Strona główna</a> / Pracownia RTG</p><p className="eyebrow light"><span/> DIAGNOSTYKA CYFROWA</p><h1>Pracownia RTG<br/><em>w Ptak Stomatologia.</em></h1><p>Precyzyjne obrazowanie stomatologiczne, krótki czas badania i możliwie niska dawka promieniowania.</p></div></section>

  <section className="rtg-intro section"><div className="shell rtg-intro-grid"><div><p className="eyebrow"><span/> PEWNA DIAGNOZA</p><h2>Obraz, który pomaga<br/><em>dobrze zaplanować leczenie.</em></h2><p>Diagnostyka rentgenowska pozwala rozpoznawać zmiany, planować zabiegi i kontrolować przebieg leczenia. Pracownia jest dostępna zarówno dla pacjentów kliniki, jak i osób skierowanych z innych gabinetów.</p><div className="rtg-benefits"><span><ShieldCheck/> Niska dawka promieniowania</span><span><Clock3/> Krótki czas ekspozycji</span><span><ScanLine/> Obrazowanie 2D i 3D</span></div></div><div className="rtg-machine"><img src="/gallery/galeria-04.jpg" alt="Pracownia diagnostyki RTG Ptak Stomatologia"/><span>Vatech Smart Plus</span></div></div></section>

  <section className="rtg-exams section"><div className="shell"><div className="section-head split"><div><p className="eyebrow"><span/> ZAKRES BADAŃ</p><h2>Badania wykonywane<br/><em>na miejscu.</em></h2></div><p>Cyfrowy pantomograf i tomograf komputerowy z ramieniem cefalometrycznym zapewniają wysoką jakość obrazu przy krótkiej ekspozycji.</p></div><div className="rtg-exam-grid">{exams.map(([title,text,price],i)=><article key={title}><small>{String(i+1).padStart(2,'0')}</small><ScanLine/><h3>{title}</h3><p>{text}</p><b>{price}</b></article>)}</div></div></section>

  <section className="rtg-info section"><div className="shell rtg-info-grid"><div><p className="eyebrow"><span/> PRZED BADANIEM</p><h2>Najważniejsze informacje.</h2><div className="rtg-checks"><span><Check/> Zdjęcia punktowe nie wymagają skierowania.</span><span><Check/> OPG, CBCT i cefalometria wymagają skierowania od lekarza.</span><span><Check/> Badanie dla osób spoza kliniki wykonujemy po ustaleniu terminu w rejestracji.</span><span><Check/> Poinformuj personel o ciąży lub możliwości ciąży.</span><span><Check/> Wynik badania otrzymasz w formie cyfrowej.</span></div></div><aside><FileText/><small>SKIEROWANIE</small><h3>Co powinno zawierać?</h3><p>Dane pacjenta, rodzaj i obszar badania, uzasadnienie medyczne oraz dane lekarza kierującego.</p><a href="tel:+48664065582">Zapytaj w rejestracji <ArrowRight/></a></aside></div></section>

  <section className="cta-band"><div className="shell"><div><p className="eyebrow light"><span/> UMÓW BADANIE</p><h2>Pracownia RTG w Wadowicach</h2></div><a className="btn primary" href="/kontakt">Kontakt i rejestracja <ArrowRight/></a></div></section><SiteFooter/></main>}
