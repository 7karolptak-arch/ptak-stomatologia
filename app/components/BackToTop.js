'use client';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop(){
  const [visible,setVisible]=useState(false);
  useEffect(()=>{const update=()=>setVisible(window.scrollY>650);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update)},[]);
  return <button className={`back-to-top ${visible?'visible':''}`} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="Wróć na górę strony"><ArrowUp/></button>;
}
