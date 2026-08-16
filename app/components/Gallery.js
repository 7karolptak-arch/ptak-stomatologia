'use client';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Images, X } from 'lucide-react';

const photos=['01','28','13','14','15','30','19','16','17','12','11','27','02','03','04','05','06','08','09','10','22','23','24','25','07','20','21','26','29'].map(n=>`/gallery/galeria-${n}.jpg`);

export default function Gallery(){
 const [active,setActive]=useState(null); const move=(d)=>setActive(i=>(i+d+photos.length)%photos.length);
 useEffect(()=>{if(active===null)return;const key=e=>{if(e.key==='Escape')setActive(null);if(e.key==='ArrowRight')move(1);if(e.key==='ArrowLeft')move(-1)};document.body.style.overflow='hidden';window.addEventListener('keydown',key);return()=>{document.body.style.overflow='';window.removeEventListener('keydown',key)}},[active]);
 return <><section className="gallery-band" aria-label="Galeria gabinetu">{photos.slice(0,3).map((src,i)=><button key={src} className={i===1?'wide':''} onClick={()=>setActive(i)} aria-label={`Otwórz zdjęcie ${i+1}`}><img src={src} alt="Wnętrze Ptak Stomatologia"/>{i===1&&<span><Images/> Zobacz całą galerię</span>}</button>)}</section>
 {active!==null&&<div className="lightbox" role="dialog" aria-modal="true" aria-label="Galeria zdjęć" onClick={()=>setActive(null)}><button className="lightbox-close" onClick={()=>setActive(null)} aria-label="Zamknij"><X/></button><button className="lightbox-prev" onClick={e=>{e.stopPropagation();move(-1)}} aria-label="Poprzednie zdjęcie"><ArrowLeft/></button><div className="lightbox-stage" onClick={e=>e.stopPropagation()}><img src={photos[active]} alt={`Galeria Ptak Stomatologia — zdjęcie ${active+1}`}/><span>{active+1} / {photos.length}</span><div className="thumb-strip">{photos.map((src,i)=><button className={i===active?'active':''} key={src} onClick={()=>setActive(i)}><img src={src} alt=""/></button>)}</div></div><button className="lightbox-next" onClick={e=>{e.stopPropagation();move(1)}} aria-label="Następne zdjęcie"><ArrowRight/></button></div>}</>;
}
