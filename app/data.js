export const services = [
  ['01','Implantologia','Trwałe uzupełnienie brakujących zębów z wykorzystaniem implantów i nowoczesnej diagnostyki 3D.','◎'],
  ['02','Protetyka','Korony, mosty, licówki oraz uzupełnienia ruchome przywracające funkcję i estetykę uśmiechu.','◇'],
  ['03','Stomatologia zachowawcza','Leczenie próchnicy i estetyczne wypełnienia imitujące naturalne, zdrowe zęby.','○'],
  ['04','Stomatologia estetyczna','Bonding, licówki i wybielanie dla naturalnego, harmonijnego efektu dopasowanego do pacjenta.','✦'],
  ['05','Endodoncja mikroskopowa','Precyzyjne leczenie kanałowe pod mikroskopem, wspierane cyfrową diagnostyką.','⌁'],
  ['06','Higienizacja','Skaling, piaskowanie, polerowanie i profilaktyka pomagające zachować zdrowie zębów i dziąseł.','◌'],
  ['07','Chirurgia stomatologiczna','Usuwanie zębów, zabiegi mikrochirurgiczne, plastyka tkanek i procedury regeneracyjne.','+'],
  ['08','Ortodoncja','Diagnostyka i leczenie wad zgryzu u dzieci oraz dorosłych z wykorzystaniem skanów 3D.','≈']
].map(([n,title,text,icon])=>({n,title,text,icon}));

export const doctors = [
  ['Grzegorz Ptak','lekarz dentysta, implantolog','Stomatologia zachowawcza, endodoncja, protetyka, chirurgia, implantologia','/ptak/grzegorz.jpg'],
  ['Izabella Dziubek','lekarz dentysta, ortodoncja','Ortodoncja, bonding, stomatologia dziecięca, periodontologia','/ptak/izabella.jpg'],
  ['Volodymyr Levchuk','lekarz dentysta, implantolog','Stomatologia zachowawcza, implantologia, protetyka','/ptak/volodymyr.jpg'],
  ['Marcin Kusto','lekarz dentysta','Stomatologia zachowawcza, pedodoncja, chirurgia, protetyka',null],
  ['Aleksandra Surmacz','lekarz dentysta','Stomatologia zachowawcza, endodoncja, chirurgia','/ptak/aleksandra-surmacz.jpg'],
  ['Bernard Woźniak','lekarz dentysta','Stomatologia zachowawcza, endodoncja mikroskopowa',null],
  ['Anna Kurek','lekarz dentysta','Stomatologia zachowawcza, estetyczna i endodoncja','/ptak/anna.jpg'],
  ['Aleksandra Kubicka','lekarz dentysta','Stomatologia zachowawcza dorosłych i dzieci, endodoncja','/ptak/aleksandra-kubicka.jpeg']
].map(([name,role,scope,image])=>({name,role,scope,image}));

export const support = [['Umida Radjapova-Galushka','dyplomowana higienistka stomatologiczna'],['Weronika Warchał','dyplomowana higienistka stomatologiczna'],['Joanna Zając','dyplomowana asystentka stomatologiczna'],['Martyna Śliwa','dyplomowana asystentka stomatologiczna'],['Ewelina Wiech','dyplomowana asystentka stomatologiczna'],['Klaudia Smajek','rejestratorka medyczna'],['Małgorzata Ptak','menadżer gabinetu']];
