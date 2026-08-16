'use client';
import { useState } from 'react';
import { ArrowRight, Check, Clock3, Mail, MapPin, Phone } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import PageHero from '../components/PageHero';
import { services } from '../data';

const hours=[['Poniedziałek','9.00 - 20.00'],['Wtorek','9.00 - 20.00'],['Środa','9.00 - 20.00'],['Czwartek','9.00 - 20.00'],['Piątek','9.00 - 20.00'],['Sobota','9.00 - 16.00']];

export default function Kontakt(){
  const [sent,setSent]=useState(false);
  const submit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);const subject=encodeURIComponent('Prośba o kontakt — '+f.get('name'));const body=encodeURIComponent(`Imię i nazwisko: ${f.get('name')}\nTelefon: ${f.get('phone')}\nE-mail: ${f.get('email')}\nTemat: ${f.get('topic')}\n\nWiadomość:\n${f.get('message')}`);window.location.href=`mailto:rejestracja@ptakstomatologia.pl?subject=${subject}&body=${body}`;setSent(true)};
  return <main><SiteHeader/><PageHero title="Kontakt" image="/page-heroes/kontakt.png" position="center 52%"/>
    <section className="contact-page section"><div className="shell">
      <div className="contact-page-intro"><p className="eyebrow"><span/> KONTAKT</p><h1>Skontaktuj się z rejestracją</h1><p>Umów wizytę telefonicznie, mailowo lub skorzystaj z formularza.</p></div>
      <div className="contact-cards contact-cards-wide"><a href="tel:+48664065582"><Phone/><span><small>Telefon</small><b>664 06 55 82</b></span></a><a href="mailto:rejestracja@ptakstomatologia.pl"><Mail/><span><small>E-mail</small><b>rejestracja@ptakstomatologia.pl</b></span></a><div><MapPin/><span><small>Adres</small><b>ul. Ady Sari 38<br/>34-100 Wadowice</b></span></div></div>
      <form className="contact-form contact-form-wide" onSubmit={submit}>{sent?<div className="success"><span><Check/></span><h3>Wiadomość jest gotowa</h3><p>Otworzyliśmy Twój program pocztowy. Sprawdź wiadomość i naciśnij „Wyślij”.</p><button type="button" className="btn primary" onClick={()=>setSent(false)}>Wróć do formularza</button></div>:<><p className="eyebrow"><span/> FORMULARZ</p><h2>Napisz do rejestracji</h2><div className="form-two"><label>Imię i nazwisko<input name="name" required placeholder="Jan Kowalski"/></label><label>Numer telefonu<input name="phone" required type="tel" placeholder="+48 000 000 000"/></label></div><label>Adres e-mail<input name="email" type="email" required placeholder="jan@email.pl"/></label><label>W czym możemy pomóc?<select name="topic" defaultValue=""><option value="" disabled>Wybierz temat</option>{services.map(s=><option key={s.title}>{s.title}</option>)}</select></label><label>Wiadomość<textarea name="message" rows="5" placeholder="Napisz krótko, czego dotyczy kontakt"/></label><label className="consent"><input type="checkbox" required/><span>Wyrażam zgodę na przekazanie danych do rejestracji w celu kontaktu.</span></label><button className="btn primary" type="submit">Otwórz wiadomość e-mail <ArrowRight size={18}/></button><small className="form-note">Wiadomość zostanie wysłana dopiero po Twoim potwierdzeniu w programie pocztowym.</small></>}</form>
      <div className="contact-support-grid"><div className="company-data"><h3>Dane firmy</h3><p>PTAK STOMATOLOGIA sp. z o.o.</p><p><b>NIP:</b> 5512657728</p><p><b>REGON:</b> 523848403</p></div><div className="contact-hours"><h3><Clock3/> Godziny otwarcia</h3>{hours.map(([d,h])=><span key={d}><i>{d}</i><b>{h}</b></span>)}</div></div>
      <div className="contact-map"><div><p className="eyebrow"><span/> DOJAZD</p><h2>Znajdź nas w Wadowicach</h2><p>ul. Ady Sari 38, 34-100 Wadowice</p><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Ptak+Stomatologia+Ady+Sari+38+Wadowice" target="_blank" rel="noreferrer">Otwórz trasę w Google Maps <ArrowRight size={17}/></a></div><iframe title="Mapa dojazdu do Ptak Stomatologia" src="https://www.google.com/maps?q=Ptak+Stomatologia,+Ady+Sari+38,+34-100+Wadowice&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div>
    </div></section><SiteFooter/></main>
}
