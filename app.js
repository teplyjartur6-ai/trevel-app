
// Демонстрационный справочник: два города на страну, без внешних платных API.
const countries=[
['Австрия','🇦🇹',47.5,14.5,[['Вена',48.2082,16.3738],['Зальцбург',47.8095,13.055]]],
['Албания','🇦🇱',41.15,20.17,[['Тирана',41.3275,19.8187],['Дуррес',41.3231,19.4414]]],
['Андорра','🇦🇩',42.55,1.6,[['Андорра-ла-Велья',42.5063,1.5218],['Эскальдес',42.5089,1.5345]]],
['Беларусь','🇧🇾',53.7,27.95,[['Минск',53.9006,27.559],['Брест',52.0976,23.7341]]],
['Бельгия','🇧🇪',50.5,4.5,[['Брюссель',50.8503,4.3517],['Брюгге',51.2093,3.2247]]],
['Болгария','🇧🇬',42.7,25.5,[['София',42.6977,23.3219],['Пловдив',42.1354,24.7453]]],
['Босния и Герцеговина','🇧🇦',44.2,17.7,[['Сараево',43.8563,18.4131],['Мостар',43.3438,17.8078]]],
['Ватикан','🇻🇦',41.9029,12.4534,[['Ватикан',41.9029,12.4534]]],
['Великобритания','🇬🇧',54,-2,[['Лондон',51.5074,-.1278],['Эдинбург',55.9533,-3.1883]]],
['Венгрия','🇭🇺',47.16,19.5,[['Будапешт',47.4979,19.0402],['Дебрецен',47.5316,21.6273]]],
['Германия','🇩🇪',51.2,10.45,[['Берлин',52.52,13.405],['Мюнхен',48.1351,11.582]]],
['Греция','🇬🇷',39,22,[['Афины',37.9838,23.7275],['Салоники',40.6401,22.9444]]],
['Дания','🇩🇰',56.2,9.5,[['Копенгаген',55.6761,12.5683],['Орхус',56.1629,10.2039]]],
['Ирландия','🇮🇪',53.1,-8,[['Дублин',53.3498,-6.2603],['Корк',51.8985,-8.4756]]],
['Исландия','🇮🇸',64.9,-18.6,[['Рейкьявик',64.1466,-21.9426],['Акюрейри',65.6885,-18.1262]]],
['Испания','🇪🇸',40.4,-3.7,[['Барселона',41.3874,2.1686],['Мадрид',40.4168,-3.7038]]],
['Италия','🇮🇹',42.5,12.5,[['Рим',41.9028,12.4964],['Флоренция',43.7696,11.2558],['Милан',45.4642,9.19],['Венеция',45.4408,12.3155]]],
['Кипр','🇨🇾',35.1,33.4,[['Никосия',35.1856,33.3823],['Лимасол',34.7071,33.0226]]],
['Косово','🇽🇰',42.6,20.9,[['Приштина',42.6629,21.1655],['Призрен',42.2139,20.7397]]],
['Латвия','🇱🇻',56.88,24.6,[['Рига',56.9496,24.1052],['Даугавпилс',55.8747,26.5362]]],
['Литва','🇱🇹',55.2,23.9,[['Вильнюс',54.6872,25.2797],['Каунас',54.8985,23.9036]]],
['Лихтенштейн','🇱🇮',47.16,9.55,[['Вадуц',47.141,9.5209],['Шаан',47.164,9.5087]]],
['Люксембург','🇱🇺',49.8,6.1,[['Люксембург',49.6116,6.1319],['Эш-сюр-Альзетт',49.4958,5.9806]]],
['Мальта','🇲🇹',35.9,14.4,[['Валлетта',35.8992,14.5141],['Мдина',35.8869,14.403]]],
['Молдова','🇲🇩',47,28.6,[['Кишинёв',47.0105,28.8638],['Бельцы',47.7591,27.9291]]],
['Монако','🇲🇨',43.7384,7.4246,[['Монако',43.7384,7.4246]]],
['Нидерланды','🇳🇱',52.2,5.3,[['Амстердам',52.3676,4.9041],['Роттердам',51.9244,4.4777]]],
['Норвегия','🇳🇴',61,8.5,[['Осло',59.9139,10.7522],['Берген',60.3913,5.3221]]],
['Польша','🇵🇱',52,19,[['Варшава',52.2297,21.0122],['Краков',50.0647,19.945],['Лодзь',51.7592,19.4560],['Плоцк',52.5468,19.7064],['Гданьск',54.3520,18.6466],['Гдыня',54.5189,18.5305],['Вроцлав',51.1079,17.0385],['Познань',52.4064,16.9252],['Катовице',50.2649,19.0238],['Люблин',51.2465,22.5684],['Щецин',53.4285,14.5528],['Быдгощ',53.1235,18.0084],['Торунь',53.0138,18.5984],['Жешув',50.0412,21.9991],['Белосток',53.1325,23.1688],['Ольштын',53.7784,20.4801],['Ополе',50.6751,17.9213],['Кельце',50.8661,20.6286],['Радом',51.4027,21.1471],['Ченстохова',50.8118,19.1203],['Гливице',50.2945,18.6714],['Сопот',54.4416,18.5601]]],
['Португалия','🇵🇹',39.5,-8,[['Лиссабон',38.7223,-9.1393],['Порту',41.1579,-8.6291]]],
['Россия','🇷🇺',55.75,37.62,[['Москва',55.7558,37.6173],['Санкт-Петербург',59.9343,30.3351]]],
['Румыния','🇷🇴',45.9,24.97,[['Бухарест',44.4268,26.1025],['Клуж-Напока',46.7712,23.6236]]],
['Сан-Марино','🇸🇲',43.94,12.45,[['Сан-Марино',43.9424,12.4578]]],
['Северная Македония','🇲🇰',41.6,21.7,[['Скопье',41.9981,21.4254],['Охрид',41.1231,20.8016]]],
['Сербия','🇷🇸',44,21,[['Белград',44.7866,20.4489],['Нови-Сад',45.2671,19.8335]]],
['Словакия','🇸🇰',48.7,19.7,[['Братислава',48.1486,17.1077],['Кошице',48.7164,21.2611]]],
['Словения','🇸🇮',46.15,14.99,[['Любляна',46.0569,14.5058],['Блед',46.3683,14.1146]]],
['Украина','🇺🇦',49,32,[['Киев',50.4501,30.5234],['Львов',49.8397,24.0297]]],
['Финляндия','🇫🇮',64,26,[['Хельсинки',60.1699,24.9384],['Тампере',61.4978,23.761]]],
['Франция','🇫🇷',46.6,2.2,[['Париж',48.8566,2.3522],['Ницца',43.7102,7.262]]],
['Хорватия','🇭🇷',45.1,15.2,[['Загреб',45.815,15.9819],['Дубровник',42.6507,18.0944]]],
['Черногория','🇲🇪',42.7,19.3,[['Подгорица',42.4304,19.2594],['Котор',42.4247,18.7712]]],
['Чехия','🇨🇿',49.8,15.5,[['Прага',50.0755,14.4378],['Брно',49.1951,16.6068]]],
['Швейцария','🇨🇭',46.8,8.2,[['Цюрих',47.3769,8.5417],['Женева',46.2044,6.1432]]],
['Швеция','🇸🇪',62,15,[['Стокгольм',59.3293,18.0686],['Гётеборг',57.7089,11.9746]]],
['Эстония','🇪🇪',58.6,25,[['Таллин',59.437,24.7536],['Тарту',58.3776,26.729]]]
].map(([name,flag,lat,lng,cities])=>({name,flag,lat,lng,cities}));

/* Representative photographs for 8 popular cities. Wikimedia's pageimages API
   returns the page's thumbnail, not a random image from unrelated cities.
   If network/photo fails, the designed gradient background is still shown. */
const featuredCityPages={
  'барселона':'Barcelona','barcelona':'Barcelona',
  'мадрид':'Madrid','madrid':'Madrid',
  'париж':'Paris','paris':'Paris',
  'рим':'Rome','rome':'Rome','roma':'Rome',
  'берлин':'Berlin','berlin':'Berlin',
  'варшава':'Warsaw','warsaw':'Warsaw','warszawa':'Warsaw',
  'лодзь':'Łódź','lodz':'Łódź','łódź':'Łódź',
  'гамбург':'Hamburg','hamburg':'Hamburg'
};
const cityPhotoCache=new Map();
const previewBox=document.getElementById('cityPreview');
const previewImg=document.getElementById('previewImg');
const previewSource=document.getElementById('previewSource');
const welcomeBox=document.getElementById('welcomeScreen');
const welcomeImg=document.getElementById('welcomeImg');
const welcomeCredit=document.getElementById('welcomeCredit');
let previewSequence=0,welcomeSequence=0,previewHideTimer=null,welcomeHideTimer=null,welcomeFinishTimer=null;
function normalizeCityKey(name){return name.toLocaleLowerCase('ru').trim().replace(/ё/g,'е').replace(/\s+/g,' ')}
function getCityPhoto(name){
  const title=featuredCityPages[normalizeCityKey(name)];
  if(!title)return Promise.resolve(null);
  if(cityPhotoCache.has(title))return cityPhotoCache.get(title);
  const args=new URLSearchParams({action:'query',prop:'pageimages',titles:title,redirects:'1',pithumbsize:'1500',format:'json',origin:'*'});
  const request=fetch('https://en.wikipedia.org/w/api.php?'+args.toString())
    .then(r=>{if(!r.ok)throw Error('Фотография недоступна');return r.json()})
    .then(data=>{
      const page=Object.values(data.query?.pages||{})[0];
      const source=page?.thumbnail?.source;
      if(!source || !/^https:\/\//.test(source))return null;
      return {src:source,url:'https://en.wikipedia.org/wiki/'+encodeURIComponent(title.replace(/ /g,'_'))};
    }).catch(()=>null);
  cityPhotoCache.set(title,request);
  return request;
}
function resetPhoto(img){img.classList.remove('ready');img.removeAttribute('src');img.alt='';}
function applyPhoto(img,link,photo,city){
  resetPhoto(img);link.hidden=true;link.removeAttribute('href');
  if(!photo)return;
  img.onload=()=>img.classList.add('ready');
  img.onerror=()=>{resetPhoto(img);link.hidden=true;};
  img.alt='Фотография города '+city;
  img.src=photo.src;
  link.href=photo.url;
  link.hidden=false;
}
function hideCityPreview(){
  ++previewSequence;
  if(previewHideTimer){clearTimeout(previewHideTimer);previewHideTimer=null;}
  previewBox.classList.remove('active');
}
function showCityPreview(city,country,isFrom=false){
  hideCityPreview();
  const id=++previewSequence;
  const name=city[0];
  document.getElementById('previewLabel').textContent=isFrom?'ГОРОД ОТПРАВЛЕНИЯ':'ГОРОД НАЗНАЧЕНИЯ';
  document.getElementById('previewCityName').textContent=name;
  document.getElementById('previewCountryName').textContent=(country?.flag||'🌍')+'  '+(country?.name||'');
  resetPhoto(previewImg);previewSource.hidden=true;
  previewBox.classList.add('active');
  getCityPhoto(name).then(photo=>{if(id===previewSequence)applyPhoto(previewImg,previewSource,photo,name)});
  if(isFrom)previewHideTimer=setTimeout(()=>{if(id===previewSequence)hideCityPreview()},5200);
}
function hideWelcome(){
  ++welcomeSequence;
  if(welcomeHideTimer){clearTimeout(welcomeHideTimer);welcomeHideTimer=null;}
  if(welcomeFinishTimer){clearTimeout(welcomeFinishTimer);welcomeFinishTimer=null;}
  welcomeBox.classList.remove('visible');
}
function showArrivalWelcome(city,country){
  hideCityPreview();hideWelcome();
  const id=++welcomeSequence;
  document.getElementById('welcomeCityName').textContent=city[0];
  document.getElementById('welcomeCountryName').textContent=(country?.flag||'🌍')+'  '+(country?.name||'');
  resetPhoto(welcomeImg);welcomeCredit.hidden=true;
  welcomeBox.classList.add('visible');
  getCityPhoto(city[0]).then(photo=>{if(id===welcomeSequence)applyPhoto(welcomeImg,welcomeCredit,photo,city[0])});
  welcomeHideTimer=setTimeout(()=>{
    if(id!==welcomeSequence)return;
    welcomeBox.classList.remove('visible');
    welcomeFinishTimer=setTimeout(()=>{
      if(id!==welcomeSequence)return;
      document.body.classList.remove('flight-mode');
      if(destinationMarker)destinationMarker.openPopup();
    },900);
  },4400);
}

const fromCountryInput=document.getElementById('fromCountry'),fromCityInput=document.getElementById('fromCity'),fromCountryOptions=document.getElementById('fromCountryOptions'),fromCityOptions=document.getElementById('fromCityOptions');
const countryInput=document.getElementById('country'),cityInput=document.getElementById('city'),countryOptions=document.getElementById('countryOptions'),cityOptions=document.getElementById('cityOptions'),hint=document.getElementById('hint'),legend=document.getElementById('legend');
let chosen=null,fromChosen=null,fromSelectedCity=null,toSelectedCity=null,route=null,trail=null,plane=null,vehicle=null,originMarker=null,destinationMarker=null,animationFrame=null,zoomTimer=null,uiReturnTimer=null;
const transportModes={
  plane:{label:'Самолёт',symbol:'✈️'},
  train:{label:'Поезд',symbol:'🚆'},
  bus:{label:'Автобус',symbol:'🚌'},
  car:{label:'Автомобиль',symbol:'🚗'}
};
let selectedTransport='plane';
const transportNote=document.getElementById('transportNote');
const transportButtons=[...document.querySelectorAll('[data-transport]')];
const travelDateRow=document.getElementById('travelDateRow');
const travelDateInput=document.getElementById('travelDate');
const routeProgress=document.getElementById('routeProgress');
const startTripButton=document.getElementById('startTripButton');
const startTripHelp=document.getElementById('startTripHelp');
const todayLocal=new Date();
todayLocal.setDate(todayLocal.getDate()+1);
travelDateInput.value=[todayLocal.getFullYear(),String(todayLocal.getMonth()+1).padStart(2,'0'),String(todayLocal.getDate()).padStart(2,'0')].join('-');
let routeGeneration=0,routeController=null;
function setProgress(text){routeProgress.textContent=text||'';routeProgress.classList.toggle('visible',Boolean(text));}
function setTransport(mode){
  if(!transportModes[mode]||mode===selectedTransport)return;
  selectedTransport=mode;
  transportButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.transport===mode)));
  travelDateRow.classList.add('visible');
  updateTicketPanel();
  transportNote.textContent=mode==='plane'
    ?'Самолёт: кинематографический полёт с облаками.'
    :mode==='car'?'Автомобиль: построим маршрут по дорогам OpenStreetMap.'
    :'Найдём поездку по открытым расписаниям. Если рейс не найден, не будем рисовать вымышленный путь.';
  updateRoute();
}
transportButtons.forEach(button=>button.addEventListener('click',()=>setTransport(button.dataset.transport)));
travelDateInput.addEventListener('change',()=>updateRoute());
travelDateRow.classList.add('visible');


// Покупка билетов пока происходит на внешних официальных сайтах.
// Не генерируем неподтверждённые URL результатов поиска и не имитируем наличие билетов.
const ticketPanel=document.getElementById('ticketPanel');
const ticketRoute=document.getElementById('ticketRoute');
const ticketTitle=document.getElementById('ticketTitle');
const ticketSubtitle=document.getElementById('ticketSubtitle');
const ticketLinks=document.getElementById('ticketLinks');
const ticketCopy=document.getElementById('copyTicketRoute');
function ticketServices(mode){
  if(mode==='plane')return [
    {name:'Google Flights',url:'https://www.google.com/travel/flights',label:'Сравнить авиабилеты'},
    {name:'Skyscanner',url:'https://www.skyscanner.net/',label:'Другие предложения'},
    {name:'Omio',url:'https://www.omio.com/',label:'Сравнить транспорт'}];
  if(mode==='train')return [
    {name:'Omio',url:'https://www.omio.com/',label:'Поезда по Европе'},
    {name:'PKP Intercity',url:'https://bilet.intercity.pl/',label:'Билеты в Польше'},
    {name:'Deutsche Bahn',url:'https://www.bahn.de/',label:'Германия и Европа'},
    {name:'BILKOM',url:'https://bilkom.pl/',label:'Железные дороги Польши'}];
  if(mode==='bus')return [
    {name:'FlixBus',url:'https://www.flixbus.pl/',label:'Автобусные билеты'},
    {name:'Omio',url:'https://www.omio.com/',label:'Сравнить рейсы'},
    {name:'BlaBlaCar',url:'https://www.blablacar.pl/',label:'Автобусы и попутчики'}];
  return [
    {name:'Google Maps',url:'https://www.google.com/maps/dir/?api=1&origin='+encodeURIComponent((fromSelectedCity?.[0]||'')+', '+(fromChosen?.name||''))+'&destination='+encodeURIComponent((toSelectedCity?.[0]||'')+', '+(chosen?.name||''))+'&travelmode=driving',label:'Открыть маршрут'},
    {name:'ViaMichelin',url:'https://www.viamichelin.com/',label:'Расходы и дороги'},
    {name:'BlaBlaCar',url:'https://www.blablacar.pl/',label:'Поиск попутчиков'}];
}
const ticketTimeInput=document.getElementById('ticketTime');
const ticketSortInput=document.getElementById('ticketSort');
const searchTicketsButton=document.getElementById('searchTickets');
const ticketResults=document.getElementById('ticketResults');
const ticketNotice=document.getElementById('ticketNotice');
let ticketAbortController=null;
let ticketFound=[];
function ticketEmpty(message){ticketResults.replaceChildren();const el=document.createElement('div');el.className='ticket-empty';el.textContent=message;ticketResults.append(el)}
function updateTicketPanel(){
  const ready=Boolean(fromSelectedCity&&toSelectedCity&&fromChosen&&chosen);
  ticketPanel.classList.toggle('visible',ready);
  if(ticketAbortController){ticketAbortController.abort();ticketAbortController=null;}
  ticketFound=[];
  if(!ready)return;
  const mode=selectedTransport;
  ticketTitle.textContent=mode==='car'?'Дорожная поездка':'Поиск билетов';
  ticketRoute.textContent=transportModes[mode].symbol+' '+fromSelectedCity[0]+' → '+toSelectedCity[0]+' · '+travelDateInput.value;
  ticketSubtitle.textContent=mode==='car'?'Для своего автомобиля билет не нужен. Ниже — дорожные сервисы.':mode==='train'||mode==='bus'?'Проверим реальные открытые расписания. Цена и наличие мест здесь пока недоступны.':'Для поиска цен на авиабилеты нужен отдельный билетный API. Пока можно перейти на агрегатор.';
  searchTicketsButton.hidden=mode==='car';
  ticketTimeInput.disabled=mode==='car';ticketSortInput.disabled=mode==='car';
  ticketEmpty(mode==='car'?'Откройте дорогу в сервисе ниже. Для поиска попутчиков выберите BlaBlaCar.':'Нажмите «Найти поездки», чтобы проверить выбранную дату.');
  ticketLinks.replaceChildren();
  for(const item of ticketServices(mode)){
    const a=document.createElement('a');a.className='ticket-link';a.href=item.url;a.target='_blank';a.rel='noopener noreferrer';
    const name=document.createElement('span');name.textContent=item.name;
    const label=document.createElement('span');label.textContent='↗';a.title=item.label;
    a.append(name,label);ticketLinks.appendChild(a);
  }
}
function getDeparture(iso){const time=new Date(iso);return Number.isNaN(+time)?null:time}
function formatClock(value){const t=getDeparture(value);return t?t.toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'}):'—'}
function filterByTime(it){const t=getDeparture(it.startTime);if(!t)return ticketTimeInput.value==='all';const h=t.getHours();return ticketTimeInput.value==='all'||(ticketTimeInput.value==='morning'&&h>=6&&h<12)||(ticketTimeInput.value==='day'&&h>=12&&h<18)||(ticketTimeInput.value==='evening'&&h>=18)||(ticketTimeInput.value==='night'&&h<6)}
function getDuration(it){if(Number.isFinite(it.duration))return it.duration;const a=getDeparture(it.startTime),b=getDeparture(it.endTime);return a&&b?(+b-+a)/1000:Infinity}
function showTicketResults(){
  const results=ticketFound.filter(filterByTime).slice();
  const order=ticketSortInput.value;
  results.sort((a,b)=>order==='duration'?getDuration(a)-getDuration(b):order==='transfers'?a.transfers-b.transfers:(getDeparture(a.startTime)?.getTime()||0)-(getDeparture(b.startTime)?.getTime()||0));
  if(!results.length){ticketEmpty(ticketFound.length?'На выбранное время поездки не найдены. Попробуйте «Любое время».':'Подходящих рейсов в открытой базе не найдено. Проверьте сайты перевозчиков ниже.');return;}
  ticketResults.replaceChildren();
  for(const trip of results){
    const item=document.createElement('div');item.className='ticket-result';
    const top=document.createElement('div');top.className='ticket-result-top';
    const title=document.createElement('span');title.textContent=(selectedTransport==='train'?'🚆 ':'🚌 ')+(trip.agency||'Маршрут из открытого расписания');
    const price=document.createElement('span');price.textContent='Цена: нет данных';
    top.append(title,price);
    const main=document.createElement('div');main.className='ticket-result-main';main.textContent=formatClock(trip.startTime)+' → '+formatClock(trip.endTime);
    const meta=document.createElement('div');meta.className='ticket-result-meta';const sec=getDuration(trip);const dur=Number.isFinite(sec)?Math.round(sec/60)+' мин':'время уточняется';meta.textContent=dur+' · '+(trip.transfers===0?'Без пересадок':trip.transfers+' пересадок')+' · расписание, не подтверждённый билет';
    const foot=document.createElement('div');foot.className='ticket-result-foot';const source=document.createElement('span');source.className='ticket-result-meta';source.textContent='Источник: Transitous';const hint=document.createElement('span');hint.className='ticket-result-meta';hint.textContent='Покупка — у перевозчика ↓';foot.append(source,hint);
    item.append(top,main,meta,foot);ticketResults.append(item);
  }
}
async function searchPublicTickets(){
  if(selectedTransport==='car')return;
  if(selectedTransport==='plane'){ticketEmpty('Авиационные цены и рейсы нельзя получить без подключённого билетного API. Откройте Google Flights или Skyscanner ниже.');return;}
  if(ticketAbortController)ticketAbortController.abort();
  const controller=new AbortController();ticketAbortController=controller;
  const from=[fromSelectedCity[1],fromSelectedCity[2]],to=[toSelectedCity[1],toSelectedCity[2]];
  const mode=selectedTransport,date=travelDateInput.value;
  searchTicketsButton.disabled=true;searchTicketsButton.textContent='⏳ Ищем рейсы…';ticketEmpty('Ищем поездки в открытых расписаниях…');
  try{
    const wanted=mode==='train'?RAIL_MODES:BUS_MODES;
    const params=new URLSearchParams({fromPlace:from.join(','),toPlace:to.join(','),transitModes:wanted.join(','),directModes:'',radius:'4000',numItineraries:'12',detailedTransfers:'true',language:'ru',time:new Date(date+'T08:00:00').toISOString()});
    const response=await fetch('https://api.transitous.org/api/v6/plan?'+params.toString(),{signal:controller.signal});
    if(!response.ok)throw Error('Сервис расписаний временно недоступен ('+response.status+').');
    const payload=await response.json();
    const allowed=new Set(wanted);
    const itineraries=Array.isArray(payload.itineraries)?payload.itineraries:[];
    ticketFound=itineraries.filter(it=>Array.isArray(it.legs)&&it.legs.some(l=>allowed.has(l.mode))&&it.legs.every(l=>allowed.has(l.mode)||l.mode==='WALK')).map(it=>{
      const legs=it.legs.filter(l=>allowed.has(l.mode));
      const agency=legs.map(l=>l.agencyName||l.route?.agency?.name||l.agency?.name||l.routeShortName||l.route?.shortName).filter(Boolean).join(' · ');
      return {startTime:it.startTime||it.legs[0]?.startTime||it.legs[0]?.departureTime,endTime:it.endTime||it.legs.at(-1)?.endTime||it.legs.at(-1)?.arrivalTime,duration:it.duration,transfers:Math.max(0,legs.length-1),agency};
    });
    showTicketResults();
  }catch(e){if(e.name!=='AbortError')ticketEmpty('Не удалось получить расписание: '+e.message+' Попробуйте позднее или откройте сайт перевозчика ниже.');}
  finally{if(ticketAbortController===controller){ticketAbortController=null;searchTicketsButton.disabled=false;searchTicketsButton.textContent='🔎 Найти поездки на выбранную дату';}}
}
searchTicketsButton.addEventListener('click',searchPublicTickets);
ticketTimeInput.addEventListener('change',showTicketResults);
ticketSortInput.addEventListener('change',showTicketResults);
ticketCopy.addEventListener('click',async()=>{
  if(!fromSelectedCity||!toSelectedCity)return;
  const value=transportModes[selectedTransport].label+': '+fromSelectedCity[0]+', '+fromChosen.name+' → '+toSelectedCity[0]+', '+chosen.name+'; '+travelDateInput.value;
  try{await navigator.clipboard.writeText(value);ticketCopy.textContent='Скопировано ✓';}
  catch{const ta=document.createElement('textarea');ta.value=value;ta.style.position='fixed';ta.style.left='-9999px';document.body.append(ta);ta.select();const ok=document.execCommand('copy');ta.remove();ticketCopy.textContent=ok?'Скопировано ✓':'Не удалось скопировать';}
  setTimeout(()=>ticketCopy.textContent='Скопировать маршрут',1900);
});

const map=L.map('map',{zoomControl:false,zoomSnap:0.25,zoomDelta:0.5,wheelDebounceTime:60,wheelPxPerZoomLevel:160,inertia:true,inertiaDeceleration:2000,easeLinearity:0.2,fadeAnimation:true,zoomAnimation:true,markerZoomAnimation:true,preferCanvas:true}).setView([51,14],4);
L.control.zoom({position:'bottomright'}).addTo(map);
const tiles=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',maxZoom:19,keepBuffer:8,updateWhenIdle:false,updateWhenZooming:false}).addTo(map);
window.addEventListener('load',()=>setTimeout(()=>map.invalidateSize(),250));
// Булавка сохраняется на карте во время составления маршрута и полёта.
const pinSvg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 58" width="44" height="58" aria-hidden="true"><defs><filter id="pinshadow" x="-70%" y="-50%" width="240%" height="240%"><feGaussianBlur stdDeviation="2"/></filter></defs><ellipse cx="22" cy="53" rx="9" ry="3" fill="#000" opacity=".4" filter="url(#pinshadow)"/><path d="M22 3C11 3 4 11 4 22c0 15 18 31 18 31s18-16 18-31C40 11 33 3 22 3Z" fill="#f1c789" stroke="#fff" stroke-width="2.8"/><circle cx="22" cy="22" r="8" fill="#213842" stroke="#fff" stroke-width="1.8"/></svg>';
const pinIcon=L.divIcon({className:'origin-pin',html:pinSvg,iconSize:[44,58],iconAnchor:[22,53]});
function syncOriginPin(){
  if(!fromSelectedCity){if(originMarker){map.removeLayer(originMarker);originMarker=null;}return;}
  const ll=[fromSelectedCity[1],fromSelectedCity[2]];
  if(originMarker)originMarker.setLatLng(ll);
  else originMarker=L.marker(ll,{icon:pinIcon,zIndexOffset:650}).addTo(map);
  originMarker.bindPopup('📍 Отправление: '+fromSelectedCity[0]);
}
function smoothFocus(ll,zoom,duration=2.4){
  map.stop();
  map.flyTo(ll,zoom,{animate:true,duration,easeLinearity:.2,noMoveStart:false});
}

function closeLists(){[countryOptions,cityOptions,fromCountryOptions,fromCityOptions].forEach(el=>el.classList.remove('open'))}
function fillOptions(container,items,format,onChoose){container.replaceChildren();items.forEach(item=>{const b=document.createElement('button');b.type='button';b.className='option';b.setAttribute('role','option');b.textContent=format(item);b.addEventListener('click',()=>{onChoose(item);closeLists()});container.appendChild(b)});if(!items.length){const p=document.createElement('div');p.className='option';p.textContent='Ничего не найдено';container.appendChild(p)}container.classList.add('open')}
function resetFlight(){++routeGeneration;if(routeController){routeController.abort();routeController=null;}setProgress('');hideCityPreview();hideWelcome();document.body.classList.remove('flight-mode','flight-clouds');map.stop();if(uiReturnTimer)clearTimeout(uiReturnTimer);uiReturnTimer=null;if(animationFrame)cancelAnimationFrame(animationFrame);animationFrame=null;if(zoomTimer)clearTimeout(zoomTimer);zoomTimer=null;if(route)map.removeLayer(route);if(trail)map.removeLayer(trail);if(plane)map.removeLayer(plane);if(vehicle)map.removeLayer(vehicle);if(destinationMarker)map.removeLayer(destinationMarker);route=trail=plane=vehicle=destinationMarker=null}
function updateRoute(){
  resetFlight();syncOriginPin();updateTicketPanel();
  const ready=Boolean(fromChosen&&fromSelectedCity&&chosen&&toSelectedCity&&travelDateInput.value);
  startTripButton.disabled=!ready;
  if(ready){
    hint.textContent='Маршрут выбран. Проверьте дату, транспорт и варианты билетов, затем нажмите «Начать путешествие».';
    legend.textContent=transportModes[selectedTransport].symbol+' '+fromSelectedCity[0]+' → '+toSelectedCity[0]+' · Готово к путешествию';
    startTripHelp.textContent='Можете сначала открыть сайты билетов. Анимация начнётся только после нажатия кнопки.';
  }else{
    hint.textContent='Выберите города, транспорт и дату. Путешествие не начнётся автоматически.';
    legend.textContent=transportModes[selectedTransport].symbol+' Карта Европы · Составьте маршрут';
    startTripHelp.textContent='Сначала выберите города отправления и назначения и дату.';
  }
}
startTripButton.addEventListener('click',()=>{
  if(startTripButton.disabled||!fromSelectedCity||!toSelectedCity||!travelDateInput.value)return;
  if(selectedTransport==='plane')startFlight(toSelectedCity);
  else startGroundTrip(toSelectedCity);
});
function setupCountry(input,options,cityInput,isFrom){function show(){const q=input.value.trim().toLocaleLowerCase('ru');fillOptions(options,countries.filter(c=>c.name.toLocaleLowerCase('ru').includes(q)),c=>`${c.flag}  ${c.name}`,c=>{if(isFrom){fromChosen=c;fromSelectedCity=null}else{chosen=c;toSelectedCity=null}input.value=`${c.flag}  ${c.name}`;cityInput.disabled=false;cityInput.value='';cityInput.placeholder='Введите город…';updateRoute();smoothFocus([c.lat,c.lng],Math.max(4,Math.min(5.5,map.getZoom())),2.6)})}input.addEventListener('focus',()=>{input.value='';if(isFrom){fromChosen=null;fromSelectedCity=null}else{chosen=null;toSelectedCity=null}cityInput.value='';cityInput.disabled=true;cityInput.placeholder='Сначала выберите страну';updateRoute();show()});input.addEventListener('input',()=>{if(isFrom){fromChosen=null;fromSelectedCity=null}else{chosen=null;toSelectedCity=null}cityInput.disabled=true;cityInput.value='';updateRoute();show()})}
// Живой поиск населённых пунктов по всей Европе (Open-Meteo Geocoding).
// Локальные города остаются запасным вариантом, если сеть недоступна.
function countryCode(country){
  const code=[...country.flag].map(ch=>ch.codePointAt(0)-127397).map(n=>String.fromCharCode(n)).join('');
  return /^[A-Z]{2}$/.test(code)?code:'';
}
function setupCity(input,options,isFrom){
  let timer=null,requestId=0,controller=null;
  const normalize=s=>s.toLocaleLowerCase('ru').replace(/ё/g,'е').trim();
  function message(text,loading=false){
    options.replaceChildren();
    const status=document.createElement('div');status.className='city-search-status';status.setAttribute('role','status');
    if(loading){const spinner=document.createElement('span');spinner.className='city-search-spinner';spinner.setAttribute('aria-hidden','true');status.appendChild(spinner);}
    const label=document.createElement('span');label.textContent=text;status.appendChild(label);
    options.appendChild(status);options.classList.add('open');
  }
  function render(items){
    fillOptions(options,items,city=>city[0],city=>{
      input.value=city[0];
      if(isFrom)fromSelectedCity=city;else toSelectedCity=city;
      updateRoute();
      showCityPreview(city,isFrom?fromChosen:chosen,isFrom);
      if(isFrom && !toSelectedCity) smoothFocus([city[1],city[2]],Math.max(5,Math.min(6.25,map.getZoom())),2.4);
    });
  }
  function show(){
    const c=isFrom?fromChosen:chosen;
    if(!c)return;
    clearTimeout(timer);
    if(controller){controller.abort();controller=null;}
    const id=++requestId;
    const q=input.value.trim();
    const local=c.cities.filter(city=>normalize(city[0]).includes(normalize(q)));
    if(q.length<2){render(local);return;}
    // Показываем реальные локальные совпадения сразу; иначе — загрузку, а не «Ничего не найдено».
    if(local.length)render(local);else message('Ищем города…',true);
    timer=setTimeout(async()=>{
      const activeController=new AbortController();controller=activeController;
      try{
        const url='https://geocoding-api.open-meteo.com/v1/search?'+new URLSearchParams({name:q,count:'100',language:'ru',format:'json',countryCode:countryCode(c)});
        const response=await fetch(url,{signal:activeController.signal});
        if(!response.ok)throw Error('Ошибка сервиса поиска');
        const data=await response.json();
        if(id!==requestId)return;
        const results=(data.results||[]).filter(x=>x.latitude!=null&&x.longitude!=null).map(x=>[x.name,x.latitude,x.longitude]);
        const unique=new Map();
        [...local,...results].forEach(city=>unique.set(normalize(city[0])+'|'+city[1].toFixed(2)+'|'+city[2].toFixed(2),city));
        if(unique.size)render([...unique.values()]);
        else message('Город не найден. Попробуйте другое написание.');
      }catch(error){
        if(id!==requestId||error.name==='AbortError')return;
        if(!local.length)message('Не удалось загрузить города. Проверьте интернет и попробуйте ещё раз.');
      }finally{if(controller===activeController)controller=null;}
    },300);
  }
  input.addEventListener('focus',()=>{if(isFrom)fromSelectedCity=null;else toSelectedCity=null;updateRoute();show()});
  input.addEventListener('input',()=>{if(isFrom)fromSelectedCity=null;else toSelectedCity=null;updateRoute();show()});
}
setupCountry(fromCountryInput,fromCountryOptions,fromCityInput,true);
setupCountry(countryInput,countryOptions,cityInput,false);
setupCity(fromCityInput,fromCityOptions,true);setupCity(cityInput,cityOptions,false);
document.addEventListener('click',e=>{if(!e.target.closest('.field'))closeLists()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLists()});
function startFlight(city){
  resetFlight();closeLists();document.activeElement?.blur?.();
  document.body.classList.add('flight-mode');
  const origin=[fromSelectedCity[1],fromSelectedCity[2]],end=[city[1],city[2]];
  const n=180,points=[];
  // Curved flight path, scaled to distance and capped for short journeys.
  const curve=Math.min(4,Math.max(.2,Math.abs(end[1]-origin[1])*.1));
  for(let i=0;i<=n;i++){
    const t=i/n;
    points.push([origin[0]+(end[0]-origin[0])*t+Math.sin(Math.PI*t)*curve,origin[1]+(end[1]-origin[1])*t]);
  }
  route=L.polyline(points,{color:'#e8c9a0',weight:2,opacity:.3,dashArray:'5 12'}).addTo(map);
  trail=L.polyline([origin],{color:'#f5c77e',weight:4,opacity:.95,lineCap:'round',className:'flight-route-glow'}).addTo(map);
  destinationMarker=L.circleMarker(end,{radius:8,color:'#fff',weight:2,fillColor:'#e8c9a0',fillOpacity:1}).addTo(map).bindPopup(`📍 ${city[0]}, ${chosen.name}`);
  const planeSvg=`<div class="aircraft-wrap"><span class="aircraft-glow"></span><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs><linearGradient id="wingMetal" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ffffff"/><stop offset=".55" stop-color="#e4edf3"/><stop offset="1" stop-color="#8ea4b5"/></linearGradient></defs>
    <path d="M32 3 C29 3 27 9 27 15 L27 25 L6 39 Q4 41 7 44 L27 39 L28 52 L21 57 L21 60 L32 57 L43 60 L43 57 L36 52 L37 39 L57 44 Q60 41 58 39 L37 25 L37 15 C37 9 35 3 32 3Z" fill="url(#wingMetal)" stroke="#567082" stroke-width="1.2" stroke-linejoin="round"/>
    <path d="M32 7 L32 55" stroke="#fff" stroke-opacity=".65" stroke-width="1.5"/><path d="M29 13 L35 13 L35 23 L29 23Z" fill="#5a91ad" opacity=".85"/>
    <path d="M10 39 L27 34 M54 39 L37 34" stroke="#fff" stroke-opacity=".7" stroke-width="1.3"/>
  </svg></div>`;
  const planeIcon=L.divIcon({className:'plane-icon',html:planeSvg,iconSize:[58,58],iconAnchor:[29,29]});
  plane=L.marker(origin,{icon:planeIcon,zIndexOffset:1000,interactive:false}).addTo(map);
  // Не прыгаем к рамке маршрута: сначала мягко приближаемся к булавке отправления.
  syncOriginPin();
  legend.textContent=`✈️ ${fromSelectedCity[0]} → ${city[0]} (${chosen.name})`;
  hint.textContent='Самолёт летит к выбранному городу…';
  const duration=9500;
  const ease=x=>x*x*(3-2*x);
  const interpolate=(a,b,t)=>a+(b-a)*t;
  // Постоянный масштаб во время полёта; карта не запрашивает новые масштабы каждый кадр.
  const followZoom=6.25;
  let started=null,lastTs=null,cameraPos=[origin[0],origin[1]];
  let cloudsOn=false;
  function frame(ts){
    if(started===null)started=ts;
    const raw=Math.min((ts-started)/duration,1);
    const t=ease(raw);
    const idx=t*n,lo=Math.floor(idx),hi=Math.min(n,lo+1),f=idx-lo;
    const position=[interpolate(points[lo][0],points[hi][0],f),interpolate(points[lo][1],points[hi][1],f)];
    plane.setLatLng(position);
    const a=map.latLngToLayerPoint(points[Math.max(0,lo-1)]);
    const b=map.latLngToLayerPoint(points[Math.min(n,hi+1)]);
    const angle=Math.atan2(b.x-a.x,-(b.y-a.y))*180/Math.PI;
    const aircraft=plane.getElement()?.querySelector('.aircraft-wrap');
    if(aircraft)aircraft.style.transform=`rotate(${angle}deg)`;
    trail.setLatLngs(points.slice(0,lo+1).concat([position]));
    if(!cloudsOn && raw>.18){cloudsOn=true;document.body.classList.add('flight-clouds');}
    if(cloudsOn && raw>.83){cloudsOn=false;document.body.classList.remove('flight-clouds');}
    // Одна камера, один цикл кадров. Не запускаем конкурирующие flyTo.
    const dt=lastTs===null?1/60:Math.min(.06,Math.max(.001,(ts-lastTs)/1000));
    const alpha=1-Math.exp(-12*dt);
    cameraPos[0]=interpolate(cameraPos[0],position[0],alpha);
    cameraPos[1]=interpolate(cameraPos[1],position[1],alpha);
    map.panTo(cameraPos,{animate:false});
    lastTs=ts;
    if(raw<1){animationFrame=requestAnimationFrame(frame);return;}
    animationFrame=null;
    trail.setLatLngs(points);
    plane.setLatLng(end);
    document.body.classList.remove('flight-clouds');
    hint.textContent=`Вы прибыли в ${city[0]}! Позже здесь появятся отели, рестораны и достопримечательности.`;
    // Длинное мягкое прибытие вместо резкого скачка с масштаба 6 на 10.
    smoothFocus(end,8.5,3.5);
    zoomTimer=setTimeout(()=>{
      zoomTimer=null;
      showArrivalWelcome(city,chosen);
    },3650);
  }
  // Без fitBounds(...animate:false): именно он давал мгновенный скачок камеры.
  smoothFocus(origin,followZoom,2.6);
  zoomTimer=setTimeout(()=>{
    zoomTimer=null;
    hideCityPreview();
    cameraPos=[origin[0],origin[1]];
    animationFrame=requestAnimationFrame(frame);
  },2750);

}


/* Актуальные наземные маршруты: OSRM для дорог, Transitous для маршрутов по расписанию.
 * Нельзя выдавать OSRM-заезд по дороге за подтверждённый автобусный рейс.
 * Для поездов требуется железнодорожная геометрия и действующее расписание. */
function decodePolyline6(encoded){
  if(typeof encoded!=='string')return [];
  let idx=0,lat=0,lon=0;const result=[];
  while(idx<encoded.length&&result.length<50000){
    const coords=[];
    for(let n=0;n<2;n++){
      let b,shift=0,value=0;
      do{
        if(idx>=encoded.length||shift>30)return [];
        b=encoded.charCodeAt(idx++)-63;
        if(b<0)return [];
        value|=(b&31)<<shift;shift+=5;
      }while(b>=32);
      coords.push((value&1)?~(value>>1):(value>>1));
    }
    lat+=coords[0];lon+=coords[1];result.push([lat/1e6,lon/1e6]);
  }
  return result;
}
function validPoint(p){return Array.isArray(p)&&p.length>=2&&Number.isFinite(p[0])&&Number.isFinite(p[1])&&Math.abs(p[0])<=90&&Math.abs(p[1])<=180;}
async function fetchJSON(url,signal){
  const response=await fetch(url,{signal,mode:'cors'});
  if(!response.ok)throw Error('Сервис ответил кодом '+response.status);
  return response.json();
}
async function fetchRoadRoute(start,end,signal){
  const url='https://router.project-osrm.org/route/v1/driving/' +
    `${start[1]},${start[0]};${end[1]},${end[0]}` +
    '?overview=full&geometries=geojson&steps=false&alternatives=false';
  const result=await fetchJSON(url,signal);
  if(result.code!=='Ok'||!result.routes?.[0]?.geometry?.coordinates)throw Error('Дорожный маршрут не найден.');
  const resultRoute=result.routes[0];
  const points=resultRoute.geometry.coordinates.map(([lon,lat])=>[lat,lon]).filter(validPoint);
  if(points.length<2)throw Error('Нет данных о дороге между городами.');
  return {points,km:resultRoute.distance/1000,seconds:resultRoute.duration,detail:'По автомобильным дорогам OpenStreetMap. Дорожные ограничения и границы нужно проверять отдельно.'};
}
const RAIL_MODES=['RAIL','HIGHSPEED_RAIL','LONG_DISTANCE','NIGHT_RAIL','REGIONAL_FAST_RAIL','REGIONAL_RAIL','SUBURBAN'];
const BUS_MODES=['BUS','COACH'];
async function fetchPublicRoute(mode,start,end,signal){
  const wanted=mode==='train'?RAIL_MODES:BUS_MODES;
  const params=new URLSearchParams({
    fromPlace:start.join(','),toPlace:end.join(','),
    transitModes:wanted.join(','),directModes:'',
    radius:'4000',numItineraries:'4',
    detailedTransfers:'true',language:'ru',
    time:new Date((travelDateInput.value||'2026-10-30')+'T09:00:00').toISOString()
  });
  const payload=await fetchJSON('https://api.transitous.org/api/v6/plan?'+params.toString(),signal);
  const trips=Array.isArray(payload.itineraries)?payload.itineraries:[];
  const allowed=new Set(wanted);
  const matching=trips.filter(it=>{
    const legs=it.legs||[];
    return legs.some(l=>allowed.has(l.mode))&&legs.every(l=>allowed.has(l.mode)||l.mode==='WALK');
  });
  if(!matching.length)throw Error('По открытым расписаниям подходящий '+(mode==='train'?'железнодорожный':'автобусный')+' маршрут не найден на выбранную дату.');
  matching.sort((a,b)=>(a.duration||Infinity)-(b.duration||Infinity));
  for(const itinerary of matching){
    let points=[],railLegs=0,skipped=false;
    for(const leg of itinerary.legs){
      if(allowed.has(leg.mode))railLegs++;
      const decoded=decodePolyline6(leg.legGeometry?.points);
      if(decoded.length<2){
        // Никогда не подставляем прямую вместо отсутствующей геометрии поезда или автобуса.
        if(allowed.has(leg.mode)){skipped=true;break;}
        continue;
      }
      if(points.length&&Math.abs(points[points.length-1][0]-decoded[0][0])<.00001&&Math.abs(points[points.length-1][1]-decoded[0][1])<.00001)decoded.shift();
      points.push(...decoded);
    }
    if(skipped||points.length<2)continue;
    // Невалидная геометрия не должна прыгать с континента на континент.
    if(!points.every(validPoint))continue;
    const times=Number(itinerary.duration)||0;
    return {points,km:null,seconds:times,legs:railLegs,
      detail:(mode==='train'?'Поезд':'Автобус')+' по доступному расписанию Transitous на '+travelDateInput.value+'. Возможны пересадки и пешие участки; перед поездкой проверьте билет и расписание перевозчика.'};
  }
  throw Error('Маршрут найден, но точная геометрия пути недоступна. Не показываем его по прямой.');
}
function distanceBetween(a,b){
  const rad=Math.PI/180,dLat=(b[0]-a[0])*rad,dLon=(b[1]-a[1])*rad;
  const k=Math.sin(dLat/2)**2+Math.cos(a[0]*rad)*Math.cos(b[0]*rad)*Math.sin(dLon/2)**2;
  return 6371000*2*Math.asin(Math.min(1,Math.sqrt(k)));
}
// Пересэмплирование через метры — транспорт движется с постоянной скоростью на кривых.
function resamplePath(points,maxSamples=650){
  const dist=[0];
  for(let i=1;i<points.length;i++)dist.push(dist[i-1]+distanceBetween(points[i-1],points[i]));
  const total=dist[dist.length-1];if(total<5)return points;
  const n=Math.max(2,Math.min(maxSamples,Math.ceil(total/300)));
  const out=[points[0]];let j=1;
  for(let i=1;i<n;i++){
    const d=total*i/n;
    while(j<dist.length-1&&dist[j]<d)j++;
    const span=dist[j]-dist[j-1]||1,t=(d-dist[j-1])/span;
    out.push([points[j-1][0]+(points[j][0]-points[j-1][0])*t,points[j-1][1]+(points[j][1]-points[j-1][1])*t]);
  }
  out.push(points[points.length-1]);return out;
}
function vehicleSvg(mode){
  const common='<defs><linearGradient id="groundMetal" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fcfeff"/><stop offset=".55" stop-color="#dbe8ed"/><stop offset="1" stop-color="#83a8b8"/></linearGradient></defs>';
  const car='<rect x="31" y="10" width="38" height="81" rx="13" fill="url(#groundMetal)" stroke="#597c8d" stroke-width="2"/>'+
    '<path d="M34 31 Q50 20 66 31 L63 48 H37Z" fill="#307089"/><path d="M37 61 H63 L66 76 H34Z" fill="#447c90"/>'+
    '<path d="M35 16 H44 M56 16 H65" stroke="#fff1ae" stroke-width="5"/><path d="M35 85 H44 M56 85 H65" stroke="#e96c5c" stroke-width="4"/>';
  const bus='<rect x="27" y="3" width="46" height="93" rx="9" fill="url(#groundMetal)" stroke="#577889" stroke-width="2"/>'+
    '<rect x="32" y="11" width="36" height="19" rx="4" fill="#2d6d88"/>'+
    '<rect x="32" y="38" width="36" height="15" rx="3" fill="#43819b"/>'+
    '<rect x="32" y="59" width="36" height="19" rx="3" fill="#43819b"/>'+
    '<path d="M29 15 H33 M67 15 H71" stroke="#fff1ae" stroke-width="4"/>';
  const train='<path d="M50 3 Q72 4 72 21 V91 Q50 99 28 91 V21 Q28 4 50 3Z" fill="url(#groundMetal)" stroke="#567989" stroke-width="2"/>'+
    '<path d="M34 20 Q50 12 66 20 V35 H34Z" fill="#2a718d"/>'+
    '<rect x="34" y="43" width="32" height="12" rx="3" fill="#5590a5"/><rect x="34" y="63" width="32" height="12" rx="3" fill="#5590a5"/>'+
    '<path d="M33 29 H38 M62 29 H67" stroke="#fff1ae" stroke-width="3"/>';
  return `<div class="ground-vehicle-wrap" aria-hidden="true"><svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${common}${mode==='car'?car:mode==='bus'?bus:train}</svg></div>`;
}
async function startGroundTrip(city){
  resetFlight();closeLists();document.activeElement?.blur?.();
  const id=routeGeneration;
  const mode=selectedTransport,modeData=transportModes[mode];
  const start=[fromSelectedCity[1],fromSelectedCity[2]],end=[city[1],city[2]];
  const startCity=fromSelectedCity[0],destinationCity=city[0],destCountry=chosen;
  syncOriginPin();
  setProgress(modeData.symbol+' Ищем маршрут…');
  transportNote.textContent='Ищем '+(mode==='car'?'дороги':'доступные рейсы')+' между городами…';
  const controller=new AbortController();routeController=controller;
  let data;
  try{
    const timeout=setTimeout(()=>controller.abort(),18000);
    try{data=mode==='car'?await fetchRoadRoute(start,end,controller.signal):await fetchPublicRoute(mode,start,end,controller.signal);}
    finally{clearTimeout(timeout);}
  }catch(err){
    if(id!==routeGeneration)return;
    routeController=null;setProgress('');
    const msg=err.name==='AbortError'?'Сервис маршрутов не ответил вовремя. Попробуйте ещё раз.':(err.message||'Не удалось получить маршрут.');
    transportNote.textContent='⚠️ '+msg;
    hint.textContent='Маршрут не построен. Выберите другой транспорт или дату.';
    legend.textContent=modeData.symbol+' '+startCity+' → '+destinationCity+' · Маршрут недоступен';
    // Показываем города, а не выдуманную соединяющую их дорогу.
    map.flyToBounds(L.latLngBounds(start,end).pad(.4),{duration:2.4,maxZoom:7});
    return;
  }
  if(id!==routeGeneration)return;
  routeController=null;
  const points=resamplePath(data.points);
  const approximateKm=data.km!=null?data.km:points.reduce((d,p,i)=>i?d+distanceBetween(points[i-1],p):0,0)/1000;
  const hours=data.seconds?Math.round(data.seconds/3600*10)/10:null;
  const info=[Math.round(approximateKm).toLocaleString('ru')+' км',hours?('около '+hours.toLocaleString('ru')+' ч'):null].filter(Boolean).join(' · ');
  transportNote.textContent=data.detail;
  setProgress('');
  document.body.classList.add('flight-mode');
  const bounds=L.latLngBounds(points);
  route=L.polyline(points,{color:'#a8d4e0',weight:3,opacity:.63,interactive:false}).addTo(map);
  trail=L.polyline([points[0]],{color:'#f9c981',weight:5,opacity:.98,lineCap:'round',className:'ground-line-glow',interactive:false}).addTo(map);
  destinationMarker=L.circleMarker(end,{radius:8,color:'#fff',weight:2,fillColor:'#e8c9a0',fillOpacity:1}).addTo(map)
    .bindPopup('📍 '+destinationCity+', '+destCountry.name);
  const icon=L.divIcon({className:'ground-vehicle-icon',html:vehicleSvg(mode),iconSize:[64,70],iconAnchor:[32,35]});
  vehicle=L.marker(points[0],{icon,zIndexOffset:1000,interactive:false}).addTo(map);
  legend.textContent=modeData.symbol+' '+startCity+' → '+destinationCity+' · '+info;
  hint.textContent=data.detail;
  setProgress(modeData.symbol+' Маршрут найден: '+info);
  map.stop();map.flyToBounds(bounds.pad(.23),{duration:2.7,maxZoom:8});
  zoomTimer=setTimeout(()=>{
    if(id!==routeGeneration)return;
    zoomTimer=null;
    setProgress('');hideCityPreview();
    smoothFocus(points[0],Math.min(7.5,Math.max(6.5,map.getZoom()+1.3)),2.3);
    zoomTimer=setTimeout(()=>{
      if(id!==routeGeneration)return;
      zoomTimer=null;
      let started=null,lastTime=null,cameraPos=points[0].slice(),lastBearing=0;
      const duration=Math.max(8500,Math.min(13500,10500+points.length*2));
      const n=points.length-1;
      function frame(ts){
        if(id!==routeGeneration)return;
        if(started===null)started=ts;
        const raw=Math.min(1,(ts-started)/duration);
        const t=raw*raw*(3-2*raw);
        const u=t*n,lo=Math.floor(u),hi=Math.min(n,lo+1),f=u-lo;
        const pos=[points[lo][0]+(points[hi][0]-points[lo][0])*f,points[lo][1]+(points[hi][1]-points[lo][1])*f];
        vehicle.setLatLng(pos);
        trail.setLatLngs(points.slice(0,lo+1).concat([pos]));
        const a=map.latLngToLayerPoint(points[Math.max(0,lo-1)]),b=map.latLngToLayerPoint(points[Math.min(n,hi+1)]);
        const bearing=Math.atan2(b.x-a.x,-(b.y-a.y))*180/Math.PI;
        if(raw<.01)lastBearing=bearing;
        const diff=((bearing-lastBearing+540)%360)-180;
        lastBearing+=diff*.22;
        const iconElement=vehicle.getElement()?.querySelector('.ground-vehicle-wrap');
        if(iconElement)iconElement.style.transform='rotate('+lastBearing+'deg)';
        const dt=lastTime===null?1/60:Math.min(.06,Math.max(.001,(ts-lastTime)/1000));
        const alpha=1-Math.exp(-13*dt);
        cameraPos[0]+=(pos[0]-cameraPos[0])*alpha;
        cameraPos[1]+=(pos[1]-cameraPos[1])*alpha;
        map.panTo(cameraPos,{animate:false});lastTime=ts;
        if(raw<1){animationFrame=requestAnimationFrame(frame);return;}
        animationFrame=null;
        vehicle.setLatLng(points[n]);trail.setLatLngs(points);
        setProgress(modeData.symbol+' Прибываем в '+destinationCity);
        smoothFocus(end,Math.min(9,Math.max(7.5,map.getZoom()+1.25)),3.1);
        zoomTimer=setTimeout(()=>{
          if(id!==routeGeneration)return;
          zoomTimer=null;setProgress('');showArrivalWelcome(city,destCountry);
        },3250);
      }
      animationFrame=requestAnimationFrame(frame);
    },2400);
  },2850);
}

