'use client';

import { useEffect, useRef } from 'react';

export default function PageHero({title,image,position='center'}) {
  const heroRef=useRef(null);
  useEffect(()=>{
    const hero=heroRef.current;
    if(!hero) return;
    let frame;
    const update=()=>{
      frame=null;
      const progress=Math.max(0,Math.min(1,-hero.getBoundingClientRect().top/hero.offsetHeight));
      hero.style.setProperty('--hero-progress',progress.toFixed(3));
    };
    const onScroll=()=>{if(!frame) frame=requestAnimationFrame(update)};
    update();
    window.addEventListener('scroll',onScroll,{passive:true});
    return ()=>{window.removeEventListener('scroll',onScroll);if(frame) cancelAnimationFrame(frame)};
  },[]);
  const mobileImage=image.replace('.webp','-mobile.webp');
  return <section ref={heroRef} className="page-photo-hero" aria-label={title}>
    <picture><source media="(max-width: 720px)" srcSet={mobileImage}/><img src={image} alt="" aria-hidden="true" style={{objectPosition:position}} fetchPriority="high" decoding="sync" width="1620" height="1080"/></picture>
    <div className="page-photo-shade"/>
    <h1>{title}</h1>
  </section>;
}
