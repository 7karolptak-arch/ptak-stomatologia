import { ArrowRight, Star } from 'lucide-react';

const reviews=[
  ['alina pasnik','„Nowoczesny sprzęt, najwyższy standard gabinetu i doskonała obsługa. Podejście do dzieci cudowne.”'],
  ['a pm','„Wszystko na najwyższym poziomie. Przyjazna atmosfera, pomocna recepcja i fach w ręku.”'],
  ['Fido P','„Bardzo dobrzy specjaliści. Czuć dobrą atmosferę i poczucie bezpieczeństwa.”']
];

export default function GoogleReviews(){return <section className="reviews-section section"><div className="shell"><div className="section-head split"><div><p className="eyebrow"><span/> OPINIE PACJENTÓW</p><h2>Zaufanie, które<br/><em>widać w opiniach.</em></h2></div><div className="google-score"><strong>4,8</strong><div><span>{[1,2,3,4,5].map(i=><Star key={i} fill="currentColor"/>)}</span><b>98 opinii w Google</b><small>Stan na sierpień 2026</small></div></div></div><div className="review-grid">{reviews.map(([name,text])=><article key={name}><div className="review-stars">★★★★★</div><p>{text}</p><footer><span>{name[0].toUpperCase()}</span><div><b>{name}</b><small>Opinia Google</small></div></footer></article>)}</div><a className="reviews-link" href="https://www.google.com/maps/search/?api=1&query=Ptak+Stomatologia+Ady+Sari+38+Wadowice" target="_blank" rel="noreferrer">Zobacz wszystkie opinie w Google <ArrowRight/></a></div></section>}
