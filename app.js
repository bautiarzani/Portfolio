
const IMG = {"nubeHero": "img/nubeHero.jpg", "nubeRoom": "img/nubeRoom.jpg", "nubeEarly": "img/nubeEarly.jpg", "nubeDark": "img/nubeDark.jpg", "nubeProduct": "img/nubeProduct.jpg", "nubeDespiece": "img/nubeDespiece.jpg", "cmHero": "img/cmHero.jpg", "cmLam1": "img/cmLam1.jpg", "cmLam2": "img/cmLam2.jpg", "cmUso": "img/cmUso.jpg", "cmFunc": "img/cmFunc.jpg", "bqHero": "img/bqHero.jpg", "bqProd": "img/bqProd.jpg", "bqPack": "img/bqPack.jpg", "bqOpen": "img/bqOpen.jpg", "bqApertura": "img/bqApertura.jpg", "bqLam1": "img/bqLam1.jpg", "hd10": "img/hd10.jpg", "hd12": "img/hd12.jpg", "hd13": "img/hd13.jpg", "hd14": "img/hd14.jpg", "hd15": "img/hd15.jpg", "gotexBoceto": "img/gotexBoceto.jpg", "gotexL1": "img/gotexL1.jpg", "gotexL3": "img/gotexL3.jpg", "gotexL4": "img/gotexL4.jpg", "gotexL5": "img/gotexL5.jpg", "bqLam2": "img/bqLam2.jpg", "pFinal": "img/pFinal.jpg", "pThumb": "img/pThumb.jpg", "pLamina": "img/pLamina.jpg", "pExplot": "img/pExplot.jpg", "pBanco": "img/pBanco.jpg", "pProceso": "img/pProceso.jpg", "pAnclaje": "img/pAnclaje.jpg", "pModular": "img/pModular.jpg", "cmThumb": "img/cmThumb.jpg", "hdThumb": "img/hdThumb.jpg", "meSq": "img/meSq.jpg", "cert": "img/cert.jpg"};

/* ilustraciones de línea fina para proyectos sin render */
const I='var(--ink)', S='var(--sun)', G='var(--stone)';
const covers={
  pulso:`<svg viewBox="0 0 400 300"><g transform="translate(40 120)"><rect x="0" y="40" width="70" height="40" rx="10" fill="${S}"/><rect x="82" y="30" width="70" height="50" rx="10" fill="${G}"/><rect x="164" y="48" width="70" height="32" rx="10" fill="${S}"/><rect x="246" y="22" width="70" height="58" rx="10" fill="none" stroke="${I}" stroke-width="1.2"/><line x1="-10" y1="80" x2="330" y2="80" stroke="${I}" stroke-width="1.2" stroke-linecap="round"/></g><g fill="none" stroke="${I}" stroke-width="1.2" stroke-linecap="round"><path d="M75 140q8-14 16 0M70 132q13-24 26 0M65 124q18-34 36 0"/><path d="M277 132q8-14 16 0M272 124q13-24 26 0M267 116q18-34 36 0"/></g></svg>`,
  gotex:`<svg viewBox="0 0 400 300"><g fill="none" stroke="${I}" stroke-width="1.1" stroke-linejoin="round"><rect x="60" y="100" width="70" height="120" rx="3"/><rect x="130" y="100" width="40" height="120"/><rect x="170" y="100" width="70" height="120" rx="3"/><rect x="240" y="100" width="40" height="120"/><path d="M280 106l16 6v100l-16 6"/><path d="M170 100l6-46h58l6 46M60 220l8 36h54l8-36"/><path d="M130 100l6-22h28l6 22M240 100l6-22h28l6 22M130 220l6 20h28l6-20M240 220l6 20h28l6-20"/></g><g stroke="${G}" stroke-width="1.1" stroke-dasharray="4 4"><path d="M130 100v120M170 100v120M240 100v120M280 100v120"/></g><circle cx="205" cy="160" r="22" fill="${S}"/><text x="205" y="196" text-anchor="middle" font-family="Urbanist,sans-serif" font-weight="300" font-size="16" fill="${I}">gotex</text></svg>`,
  arrayan:`<svg viewBox="0 0 400 300"><g fill="none" stroke="${I}" stroke-width="1">${Array.from({length:11},(_,i)=>{const r=12+i*11;return `<path d="M${200-r} 150 C ${200-r} ${150-r*0.9}, ${200+r*1.1} ${150-r}, ${200+r} ${150+r*0.08} S ${200-r*0.8} ${150+r*1.05}, ${200-r} 150Z" ${i%4===0?`stroke="${S}" stroke-width="2.2"`:''}/>`}).join('')}</g></svg>`,
  blest:`<svg viewBox="0 0 400 300"><text x="200" y="128" text-anchor="middle" font-family="Georgia,serif" font-size="40" font-style="italic" fill="${I}">blest</text><text x="200" y="158" text-anchor="middle" font-family="Georgia,serif" font-size="11" font-style="italic" fill="${G}">we make sure the world can find it</text><g fill="${S}">${[0,1,2,3,4].map(i=>`<circle cx="${170+i*15}" cy="200" r="${i===1?4:2.5}"/>`).join('')}</g></svg>`,
  historia:`<svg viewBox="0 0 400 300"><g fill="none" stroke="${I}" stroke-width="1.2"><rect x="120" y="50" width="160" height="200" rx="14"/>${Array.from({length:5},(_,i)=>`<rect x="134" y="${66+i*36}" width="132" height="28" rx="8"/><line x1="190" y1="${80+i*36}" x2="210" y2="${80+i*36}" stroke-width="2.4" stroke-linecap="round"/>`).join('')}</g><rect x="134" y="138" width="132" height="28" rx="8" fill="${S}" transform="translate(30 0)"/></svg>`
};

const projects=[
 {id:'gravedad-cero',featured:true,img:'nubeHero',thumb:'nubeRoom',cat:'diseno',tag:'Producto · 1er premio',title:'Gravedad cero',sub:'Silla Nube · Solar × Metrar',year:'2026',role:'Diseño de producto',size:'w7',
  short:'Menos materia, más espacio. Una silla de aluminio que reduce su contacto con el suelo para transmitir suspensión y liviandad.',
  data:[['Cliente real','Solar · Metrar'],['Materia','Incubadora de Proyectos I'],['Cátedra','Matías Millet'],['Período','1er cuatrimestre 2026'],['Reconocimiento','1er premio · Alianzas Creativas 2026']],
  text:[['Brief','Diseñar un producto para la marca Solar aprovechando las posibilidades técnicas y productivas de Metrar, empresa de perfilería de aluminio. La propuesta tenía que responder a la identidad de la marca y explorar el aluminio desde lo estructural, lo estético y lo constructivo.'],
        ['Concepto','Gravedad cero parte de la sensación de liviandad y equilibrio. Nube reduce su contacto con el piso para que la estructura se lea ligera sin perder estabilidad: un objeto pensado como pausa, donde el cuerpo se libera y el espacio se vuelve más liviano.'],
        ['Proceso','Análisis de materiales, procesos de fabricación y sistemas de unión. La propuesta creció como familia: asiento Nube, luminaria Halo y soporte Nexo.']],
  gallery:[['nubeRoom','Escena final · Gravedad cero','full'],['cert','Certificado de primer premio · Alianzas Creativas 2026','full'],['nubeProduct','Silla Nube · render de producto',''],['nubeDespiece','Despiece en seis piezas',''],['nubeEarly','Primeras propuestas',''],['nubeDark','Estudio de volumen','']],
  specs:[['Aro superior / respaldo','Elemento estructural y ergonómico que acompaña la curvatura del cuerpo.'],['Soporte vertical curvo','Vincula asiento y respaldo; absorbe cargas con flexibilidad controlada.'],['Superficie acolchada','Leve concavidad para mejorar ergonomía y distribución del peso.'],['Placa estructural','Rigidiza el asiento y transmite las cargas hacia la base.'],['Aro estructural inferior','Marco portante que contiene el sistema y unifica la pieza.'],['Base cónica plegada','Chapa de aluminio plegada que da estabilidad y la sensación de flotación.']],
  quote:'Trabajar con clientes reales acercó la experiencia al ámbito profesional: cada decisión tenía que responder al concepto, a la empresa y a la viabilidad del producto.'},
 {id:'transicion-urbana',featured:true,img:'pFinal',thumb:'pThumb',cat:'diseno',tag:'Mobiliario urbano',title:'Transición urbana',sub:'Parada de colectivo · Puerto Madero',year:'2026',role:'Diseño urbano',
  short:'Una parada modular que convierte el tiempo de espera en parte de la experiencia de moverse por la ciudad.',
  data:[['Lugar','Puerto Madero, CABA'],['Materia','Incubadora de Proyectos I'],['Cátedra','Matías Millet'],['Entrega','Momento 3 · 100% plus'],['Sistema','Modular, prefabricado en taller']],
  text:[['Concepto','La parada como espacio de transición entre un punto de partida y un destino. Un refugio de líneas fluidas que combina protección, información y confort, y dialoga con el paisaje moderno del barrio y sus referencias costeras.'],
        ['Materialidad','Estructura de chapa de hierro cortada a láser, plegada en CNC, soldada y pintada en poliéster gris. Revestimiento que simula el muelle con panel fenólico marino y listones de aluminio. Cerramiento de vidrio laminado antivandálico.'],
        ['Producción e instalación','Todos los componentes se fabrican en taller y la parada viaja en módulos estandarizados lista para instalar: anclaje con pernos químicos sobre placa base, fundaciones mínimas y montaje rápido.']],
  gallery:[['pFinal','Render final · Puerto Madero','full'],['pExplot','Vista explotada','full'],['pBanco','Detalle del banco integrado','full'],['pProceso','Proceso productivo','full'],['pModular','Instalación modular',''],['pAnclaje','Anclaje al piso',''],['pLamina','Panel final · tecnología, materialidad y sistema constructivo','lamc']],
  specs:[['Cubierta metálica','Con pendiente para escurrir el agua e iluminación LED integrada.'],['Estructura lateral curvada','Chapa de hierro plegada y curvada que da rigidez y continuidad formal.'],['Pantalla informativa LED','Líneas y tiempos de espera en tiempo real.'],['Vidrio laminado antivandálico','Seguridad y protección frente al clima.'],['Revestimiento símil muelle','Panel fenólico con listones, muy resistente a la intemperie.'],['Banco metálico integrado','Chapa de hierro plegada de 4 mm en una sola pieza, con fijación oculta.'],['Base estructural','Perfil de apoyo y nivelación que además tapa el anclaje.']],
  quote:'Este proyecto me enseñó a diseñar pensando en el contexto: cada decisión tiene que estar respaldada por un concepto claro.'},
 {id:'cafe-martinez',featured:true,img:'cmHero',thumb:'cmThumb',cat:'diseno',tag:'Diseño de producto',title:'Café Martínez Foodtrail',sub:'Cafetería móvil self-service',year:'2026',role:'Diseño de producto',
  short:'Un remolque de café autoservicio que se instala en cualquier plaza: pedís, pagás, servís y te quedás en la barra.',
  data:[['Materia','Diseño de Productos IV'],['Cátedra','Fernández Méndez'],['Planta','3,50 × 3,00 m'],['Altura','2,20 m'],['Barra','2 m con banquetas']],
  text:[['Concepto','Una cafetería móvil para la marca Café Martínez, montada sobre un remolque que se traslada con una camioneta y se abre en el espacio público como un pequeño local de autoservicio.'],
        ['Recorrido de uso','El usuario hace el pedido y paga en la pantalla, retira un vaso del dispenser, lo apoya en la rejilla de la cafetera y termina la bebida en la zona de agregados, donde también descarta los residuos.'],
        ['Materialidad','Listones de madera, metal, madera clara y el rojo de la marca con su trama, combinados con un frente verde que arma la zona para sentarse y frenar a disfrutar el café.']],
  gallery:[['cmHero','Render final · Foodtrail en la ciudad','full'],['cmUso','Secuencia de uso','full'],['cmFunc','Módulos de autoservicio','full'],['cmLam1','Lámina 1','lam'],['cmLam2','Lámina 2 · funciones, medidas y materiales','lam']],
  specs:[['Pantalla de pedido','Realización del pedido y pago del café.'],['Dispenser de vasos','Tres tamaños distintos, se habilita después del pago.'],['Cafetera','Máquina Café Martínez revestida con la trama de la marca.'],['Zona de agregados','Agregados finales a la bebida y cesto de residuos.'],['Barra con banquetas','Frente vegetal y barra de 2 m para quedarse.'],['Remolque','Estructura móvil de 3,50 m, se traslada con camioneta.']]},
 {id:'universum',featured:true,img:'bqHero',thumb:'bqOpen',cat:'diseno',tag:'Producto · Packaging',title:'Universum',sub:'Banquito y su packaging',year:'2026',role:'Diseño de producto',
  short:'Un banquito de listones de eucalipto y asiento tapizado, con un packaging que lo transporta armado.',
  data:[['Materia','Taller de Productos III'],['Cátedra','Salmoiraghi'],['Materiales','Eucalipto · lino'],['Entrega','Producto + packaging']],
  text:[['Producto','Un asiento simple, funcional y adaptable a distintos espacios. La base cilíndrica de listones de madera y el asiento tapizado de formas suaves construyen una imagen liviana y equilibrada.'],
        ['Materialidad','Eucalipto varillado con acabado mate al agua que realza la veta y protege la superficie. Tapizado en lino de color natural, resistente y agradable al tacto.'],
        ['Packaging','Una caja que transporta el banquito completamente armado. La tapa superior se desmonta y la cara frontal se abate para sacar el producto con facilidad.']],
  gallery:[['bqHero','Render en ambiente','full'],['bqProd','Banquito · render de producto',''],['bqOpen','Packaging abierto',''],['bqPack','Packaging Universum','full'],['bqApertura','Sistema de apertura en cuatro pasos','full'],['bqLam1','Panel final · producto','lam'],['bqLam2','Panel final · packaging','lam']],
  specs:[['Tapizado','Lino natural sobre el asiento.'],['Asiento','Chato, para aprovechar al máximo la superficie de apoyo.'],['Base estructural','Plano que vincula asiento y varillado.'],['Varillado','Detalle estético que también cumple función de soporte.'],['Patas soporte','Estructura interna que sostiene el conjunto.'],['Base de apoyo','Plano inferior que da estabilidad al sentarse.']]},
 {id:'gotex',img:'gotexL1',white:true,cat:'diseno',tag:'Packaging',title:'Gotex',sub:'Estuche farmacéutico',year:'2026',role:'Packaging · Producción gráfica',
  short:'Estuche para un gotero oftálmico, desde el boceto y el troquel hasta las separaciones de color para imprenta.',
  data:[['Tipo','Estuche con tapa'],['Herramienta','Adobe Illustrator'],['Tintas','Pantone 2195C · 3533C · Black C'],['Entregable','Troquel + separaciones']],
  text:[['Desafío','Resolver el troquel completo de una caja para frasco gotero: paneles, solapas, líneas de corte y plegado, y la jerarquía de textos de un producto farmacéutico.'],
        ['Identidad','Una marca ficticia con un ojo como símbolo y una onda en dos azules que recorre los paneles y une las caras de la caja.'],
        ['Preimpresión','El arte se separó en capas por tinta (Pantone 2195C, Pantone 3533C y Black C) más la capa de troquel, lista para enviar a imprenta.']],
  gallery:[['gotexL1','Arte final con troquel','full'],['gotexBoceto','Boceto',''],['gotexL3','Capa de troquel',''],['gotexL4','Separación Black C',''],['gotexL5','Separación Pantone 3533C','']]},
 {id:'blest',cover:'blest',cat:'estrategia',tag:'Negocios',title:'Blest Agency',sub:'Plan de negocios y pitch deck',year:'2026',role:'Estrategia · Presentación',
  short:'Plan de negocios y presentación web interactiva para una agencia digital de Miami especializada en accesibilidad.',
  data:[['Materia','Desarrollo Profesional'],['Cátedra','Onofre'],['Entrega','Presentación M4 · 2026'],['Formato','Pitch deck web interactivo']],
  text:[['La agencia','Blest es una agencia de media digital y accesibilidad para organizaciones católicas, ministerios y ONGs que buscan una presencia digital clara, profesional e inclusiva. Trabajé ahí como diseñador web.'],
        ['El plan','Diez capítulos: idea emprendedora, contexto, mercado y competencia, público objetivo con mapa de empatía, propuesta de valor, factores críticos de éxito, proceso y equipo, embudo de ventas, análisis de riesgo y proyección financiera del primer año.'],
        ['La presentación','Diseñé el deck como un sitio web navegable con el teclado: tabla comparativa interactiva, mapa de empatía desplegable, identigrama en gráfico radar y matriz de riesgo.']],
  deck:true},
 {id:'guardado',img:'hd15',thumb:'hdThumb',white:true,cat:'diseno',tag:'Historia del diseño',title:'Muebles de guardado',sub:'1851 — 1939',year:'2026',role:'Investigación',
  short:'Cómo el mueble de guardado pasó de símbolo de poder burgués a objeto funcional y seriado.',
  data:[['Materia','Historia del Diseño I'],['Cátedra','Ratinoff'],['Entrega','Momento 3 · 100% plus'],['Período','1851 — 1939']],
  text:[['Objetivo','Analizar la evolución formal, tecnológica y simbólica del mobiliario de guardado para la oficina doméstica, y del estudio como el espacio que lo contiene.'],
        ['Recorrido','Era Victoriana, Art Nouveau orgánico, Art Nouveau geométrico y Principios de la Modernidad, desde el Wellington Chest de Edwards & Roberts hasta la cajonera de acero tubular de Mücke-Melder.'],
        ['Conclusión','El mueble de guardado dejó de ser ornamento y estatus para convertirse en un objeto funcional, tipificado y democratizado: la expresión material de la ética del trabajo moderno.']],
  gallery:[['hd15','Línea de tiempo','full'],['hd10','Era Victoriana · Wellington Chest',''],['hd12','Art Nouveau orgánico · Cabinet de documentos',''],['hd13','Art Nouveau geométrico · Three Door Cabinet',''],['hd14','Principios de la Modernidad · Cajonera de acero','']]}
];
const areas=[
 {t:'Diseño de producto',ico:'◯',d:'Mobiliario, objetos y packaging: del concepto al despiece y la lámina final.',href:'#proyectos',n:'Producto, urbano, packaging'},
 {t:'Diseño web y UX',ico:'▭',d:'Interfaces, arquitectura de información y auditorías de usabilidad y accesibilidad.',href:'#experiencia',n:'Experiencia en Miami'},
 {t:'Estrategia y negocios',ico:'◇',d:'Planes de negocio, modelos financieros y presentaciones que conectan el diseño con el mercado.',href:'#blest',n:'Plan de negocios'}
];
const cats={todos:'Todos',diseno:'Diseño',estrategia:'Negocios'};

function cover(p){return p.img?`<img src="${IMG[p.thumb||p.img]}" alt="${p.title}" loading="lazy" style="object-position:${p.pos||'50% 50%'}">`:covers[p.cover]}
function card(p,size){return `<a class="card rv ${p.white?'white':''} ${p.cover&&!p.img?'svgc':''} ${size||p.size||''}" href="#${p.id}" data-cat="${p.cat}"><div class="cover">${cover(p)}<span class="tag ${p.sun?'sun':''}">${p.tag}</span></div><div class="meta"><span>${p.role}</span><span>${p.year}</span></div><h3>${p.title}</h3><p>${p.short}</p></a>`}
function band(t,side,sub,stone,more){return `<div class="band rv ${stone?'stone':''}"><h2>${t}</h2>${side?`<div class="side">${side}${sub?`<small>${sub}</small>`:''}</div>`:''}${more||''}</div>`}

const V={};
V.inicio=()=>`
<header class="hero"><div class="wrap">
  <div>
    <p class="kick ruled">Hola, soy Bauti</p>
    <h1><span>Juan</span><span>Bautista</span><span><b>Arzani</b></span></h1>
    <p class="lede">Diseñador de Buenos Aires. Hago producto, mobiliario, packaging e interfaces web. Estudio <strong>Diseño, Tecnología y Negocios</strong> en la Universidad de Palermo.</p>
    <div class="cta"><a class="btn solid" href="#sobre">Conoceme <span class="arr">→</span></a><a class="btn" href="#proyectos">Proyectos</a><a class="btn" href="#cv">CV</a></div>
  </div>
  <div class="stage me" aria-hidden="true">
    <span class="halo"></span>
    <div class="blob b1 rings-wrap"><img src="${IMG.meSq}" alt="Juan Bautista Arzani" style="object-position:50% 50%"></div>
  </div>
</div></header>
<div class="marquee" aria-hidden="true"><div class="track">${[...Array(2)].flatMap(()=>['Diseño de producto','Mobiliario urbano','Packaging','Diseño web y UX','Modelado 3D','Láminas y renders','Dirección de arte','Identidad de marca']).map(t=>`<span>${t}</span>`).join('')}</div></div>
<section class="sec"><div class="wrap">
  ${band('Qué hago','Tres áreas','Producto · UX · Negocios',true)}
  <div class="areas">${areas.map(x=>`<a class="area rv" href="${x.href}"><span class="ico">${x.ico}</span><h3>${x.t}</h3><p>${x.d}</p><span class="go">${x.n} →</span></a>`).join('')}</div>
</div></section>
<section class="sec"><div class="wrap split">
  <div class="portrait rv"><div class="blob mosaic2">${['bqOpen','nubeProduct','cmThumb','pThumb'].map(k=>`<img src="${IMG[k]}" alt="">`).join('')}</div></div>
  <div class="prose rv"><p class="lbl" style="color:var(--ink-2)">Sobre mí</p><p class="big">Me muevo entre el objeto, la pantalla y el negocio.</p><p>Estudio Diseño, Tecnología y Negocios, trabajé un año como diseñador web y UX para una agencia de Miami y diseñé para clientes reales y me interesan los proyectos que combinan creatividad, funcionalidad y una base conceptual sólida.</p><a class="more" href="#sobre" style="justify-self:start">Mi perfil completo →</a></div>
</div></section>
<section class="sec"><div class="wrap">
  ${band('Proyectos<br>destacados','Selección','',false,'<a class="more" href="#proyectos">Ver todos →</a>')}
  <div class="masonry two-col">${projects.filter(p=>p.featured).map(p=>card(p)).join('')}</div>
</div></section>
<section class="sec"><div class="wrap">
  ${band('Herramientas','Lo que uso','',true,'<a class="more" href="#herramientas">Ver detalle →</a>')}
  <div class="pills big rv">${[...new Set(tools.flatMap(t=>t[1]))].map(t=>`<span class="pill">${t}</span>`).join('')}</div>
</div></section>
<section class="sec"><div class="wrap">
  ${band('Logros','Reconocimiento','',true)}
  <div class="cert rv"><div class="cert-img"><img src="${IMG.cert}" alt="Certificado de Primer Premio, Alianzas Creativas 2026, Concurso Solar"></div><div class="cert-txt"><span class="lbl">Primer premio · Junio 2026</span><h3>Alianzas Creativas 2026</h3><p>Trabajos Reales para Clientes Reales · Concurso Solar, categoría Innovación en equipamiento.</p><p>Otorgado por Solar, Metrar y la Facultad de Diseño y Comunicación de la Universidad de Palermo al proyecto <b>Gravedad cero</b>.</p><a class="more" href="#gravedad-cero">Ver el proyecto →</a></div></div>
</div></section>`;

V.sobre=()=>`
<section class="sec"><div class="wrap">
  ${band('Sobre mí','Hola,','soy Bauti')}
  <div class="split">
    <div class="portrait rv"><div class="blob"><img src="${IMG.meSq}" alt="Juan Bautista Arzani" style="width:100%;height:100%;object-fit:cover"></div></div>
    <div class="prose rv">
      <p class="big">Estudio Diseño, Tecnología y Negocios en la Universidad de Palermo. Me muevo entre el objeto, la pantalla y el negocio.</p>
      <p>Trabajé como <b>Website Designer</b> en Blest Digital Media &amp; Accessibility, donde diseñé interfaces y audité la experiencia de usuario para que cada sitio fuera estético, accesible e intuitivo.</p>
      <p>En la facultad diseño producto, mobiliario y packaging: una silla de aluminio para Solar, una parada de colectivo para Puerto Madero, una cafetería móvil para Café Martínez y un banquito con su propio packaging. También armé el plan de negocios y la presentación web de Blest Agency.</p>
      <dl class="facts">
        <div><dt>Base</dt><dd>Buenos Aires</dd></div>
        <div><dt>Universidad de Palermo</dt><dd>Diseño, Tecnología y Negocios</dd></div>
        <div><dt>Experiencia</dt><dd>Diseño web y UX</dd></div>
        <div><dt>Busco</dt><dd>Pasantías en estudios de diseño</dd></div>
      </dl>
    </div>
  </div>
</div></section>
<section class="sec"><div class="wrap">
  ${band('En qué me<br>destaco','y qué estoy','trabajando',true)}
  <div class="two">
    <div class="panel sunp rv"><h3>Me destaco en</h3><ul class="skl">
      <li><strong>Concepto y storytelling de producto</strong><span>Llevo una idea a láminas, renders y presentación final.</span><div class="lvl"><i style="--v:.92"></i></div></li>
      <li><strong>Diseño web y UX</strong><span>Interfaces, arquitectura de información y auditorías de usabilidad.</span><div class="lvl"><i style="--v:.85"></i></div></li>
      <li><strong>Presentación de proyectos</strong><span>Láminas, renders y despieces que explican cada decisión.</span><div class="lvl"><i style="--v:.9"></i></div></li>
      <li><strong>Criterio visual</strong><span>Exigente con la estética y la identidad de marca.</span><div class="lvl"><i style="--v:.88"></i></div></li>
    </ul></div>
    <div class="panel rv"><h3>En desarrollo</h3><ul class="skl">
      <li><strong>Modelado 3D avanzado</strong><span>Sumar render y animación de producto a lo que ya hago.</span><div class="lvl"><i style="--v:.6"></i></div></li>
      <li><strong>Datos</strong><span>SQL y Excel aplicados a proyectos.</span><div class="lvl"><i style="--v:.45"></i></div></li>
    </ul></div>
  </div>
</div></section>`;

V.proyectos=()=>`
<section class="sec"><div class="wrap">
  ${band('Proyectos',projects.length+' trabajos','Producto · Urbano · Packaging · Negocios')}
  <div class="filters" role="group" aria-label="Filtrar proyectos">${Object.entries(cats).map(([k,v],i)=>`<button class="chip" data-f="${k}" aria-pressed="${i===0}">${v}</button>`).join('')}</div>
  <div class="masonry" id="pgrid">${projects.map(p=>card(p)).join('')}</div>
</div></section>`;

const exp=[
 {when:'Ago 2023 — Ago 2024',kind:'Diseño web · UX',hl:true,t:'Website Designer',org:'Blest Digital Media & Accessibility · Miami, EE.UU.',d:'Diseño web y UX enfocado en interfaces de alto impacto y en validar los flujos de usuario.',li:['Soporte al diseño visual de los sitios web de la agencia.','Supervisión de la arquitectura de información.','Auditorías de UX para productos estéticos, accesibles, intuitivos y eficientes.']},
 {when:'2024 — hoy',kind:'Facultad',uni:true,t:'Proyectos de la facultad',org:'Universidad de Palermo · Lic. en Diseño, Tecnología y Negocios',d:'Proyectos de diseño desarrollados en la carrera, varios para clientes reales.',li:[]}
];
V.experiencia=()=>`
<section class="sec"><div class="wrap">
  ${band('Experiencia','Trayectoria','Diseño de producto y UX')}
  <div class="tl">${exp.map(e=>`<article class="tl-item rv ${e.hl?'hl':''}"><span class="when">${e.when}</span><div><h3>${e.t}</h3><span class="org">${e.org}</span><p>${e.d}</p>${e.li.length?`<ul>${e.li.map(x=>`<li>${x}</li>`).join('')}</ul>`:''}${e.uni?`<div class="uni">${projects.map(p=>`<a href="#${p.id}"><span class="th">${cover(p)}</span><span><b>${p.title}</b><small>${p.sub}</small></span></a>`).join('')}</div>`:''}</div><span class="kind">${e.kind}</span></article>`).join('')}</div>
</div></section>
<section class="sec"><div class="wrap">
  ${band('Logros','Reconocimiento','',true)}
  <div class="cert rv"><div class="cert-img"><img src="${IMG.cert}" alt="Certificado de Primer Premio, Alianzas Creativas 2026, Concurso Solar"></div><div class="cert-txt"><span class="lbl">Primer premio · Junio 2026</span><h3>Alianzas Creativas 2026</h3><p>Trabajos Reales para Clientes Reales · Concurso Solar, categoría Innovación en equipamiento.</p><p>Otorgado por Solar, Metrar y la Facultad de Diseño y Comunicación de la Universidad de Palermo al proyecto <b>Gravedad cero</b>.</p><a class="more" href="#gravedad-cero">Ver el proyecto →</a></div></div>
</div></section>`;

const tools=[
 ['Diseño gráfico',['Adobe Illustrator','Troqueles','Separación de color','Láminas de presentación'],['Adobe Illustrator']],
 ['Producto y 3D',['Modelado 3D','Fusion 360','Renders','Despieces'],['Modelado 3D']],
 ['Web y UX',['Diseño de interfaces','Auditorías de UX','Accesibilidad web'],['Diseño de interfaces']],
 ['Oficina y datos',['Excel','PowerPoint','Word','SQL'],['Excel']]
];
V.herramientas=()=>`
<section class="sec"><div class="wrap">
  ${band('Herramientas','Lo que uso','En amarillo, las principales')}
  <div class="tools">${tools.map(([h,list,k])=>`<div class="tgroup rv"><h3>${h}</h3><div class="pills">${list.map(t=>`<span class="pill ${k.includes(t)?'k':''}">${t}</span>`).join('')}</div></div>`).join('')}</div>
</div></section>`;

V.cv=()=>`
<section class="sec"><div class="wrap">
  ${band('Currículum','CV','Versión completa en PDF por mail',true)}
  <article class="cv rv">
    <aside>
      <div><img class="cv-photo" src="${IMG.meSq}" alt="Juan Bautista Arzani"><h2>Juan Bautista<br>Arzani</h2><p style="color:var(--ink-2);margin-top:8px">Estudiante de Diseño, Tecnología y Negocios</p></div>
      <div><h4>Contacto</h4><p>bautiarzani@gmail.com<br>linkedin.com/in/juan-bautista-arzani-8886b1357<br>Buenos Aires, Argentina</p></div>
      <div><h4>Aptitudes</h4><ul><li>Adobe Illustrator</li><li>Modelado 3D</li><li>SQL</li><li>Diseño web y UX</li><li>Presentación de proyectos</li></ul></div>
    </aside>
    <div class="blk">
      <div><h4>Experiencia</h4>
        ${exp.map(e=>`<div class="row"><b>${e.t}</b><small>${e.org} · ${e.when}</small></div>`).join('')}
      </div>
      <div><h4>Formación</h4>
        <div class="row"><b>Licenciatura en Diseño, Tecnología y Negocios</b><small>Universidad de Palermo · 2024 — 2027</small></div>
        <div class="row"><b>Bachillerato en Economía y Administración</b><small>Colegio Champagnat · 2014 — 2022</small></div>
      </div>
      <div><h4>Logros</h4><ul><li>Primer premio, Alianzas Creativas 2026 · Concurso Solar, Innovación en equipamiento · Gravedad cero.</li></ul></div>
      <div><h4>Proyectos</h4><ul>${projects.map(p=>`<li><b>${p.title}</b> · ${p.sub}</li>`).join('')}</ul></div>
    </div>
  </article>
</div></section>`;

V.contacto=()=>`
<section class="sec"><div class="wrap contact">
  <div class="c-me"><img src="${IMG.meSq}" alt=""><p class="kick ruled" style="color:var(--ink-2)">Contacto</p></div>
  <h2>Hablemos de<br><b>tu proyecto.</b></h2>
  <p class="lede" style="color:var(--ink-2);max-width:46ch;margin-top:18px">Para pasantías, proyectos o colaboraciones, escribime por mail o por LinkedIn. Respondo a la brevedad.</p>
  <div class="cgrid">
    <div class="sun"><span class="lbl">Email</span><span class="val" id="mail">bautiarzani@gmail.com</span><div class="acts"><a class="copy" href="mailto:bautiarzani@gmail.com">Escribime ↗</a><button class="copy" data-copy="mail" type="button">Copiar</button></div></div>
    <div><span class="lbl">LinkedIn</span><span class="val">juan-bautista-arzani</span><a class="copy" href="https://www.linkedin.com/in/juan-bautista-arzani-8886b1357" target="_blank" rel="noopener">Ver perfil ↗</a></div>
    <div><span class="lbl">Ubicación</span><span class="val">Buenos Aires</span><span class="note">Presencial o remoto.</span></div>
  </div>

</div></section>`;

V.project=p=>{const i=projects.indexOf(p),prev=projects[(i-1+projects.length)%projects.length],next=projects[(i+1)%projects.length];return `
<div class="wrap">
  <a class="back" href="#proyectos">← Proyectos</a>
  ${band(p.title,p.tag,p.year,false)}
  <div class="pd-hero">
    <div><p class="kick ruled" style="color:var(--ink-2)">${p.sub}</p><h1>${p.title}</h1><p class="lede">${p.short}</p></div>
    <div class="blob ${p.img?'':'svg'}">${cover(p)}</div>
  </div>
  <dl class="pd-data">${p.data.map(([k,v])=>`<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
  <div class="pd-text">${p.text.map(([h,t])=>`<article class="rv"><h3 class="ruled">${h}</h3><p>${t}</p></article>`).join('')}</div>
  ${p.gallery?`<div class="gallery">${p.gallery.map(([k,c,s])=>`<figure class="rv ${s}"><div class="fr">${k.startsWith('video:')?`<video src="${k.slice(6)}" controls playsinline muted preload="metadata"></video>`:`<img src="${IMG[k]}" alt="${c}" loading="lazy">`}</div><figcaption>${c}</figcaption></figure>`).join('')}</div>`:''}
  ${p.deck?`<div class="deck rv">
    <div class="deck-cover"><span class="lbl">Desarrollo Profesional · Cátedra Onofre · UP</span><p class="dk-logo">blest</p><p class="dk-tag">Your mission is already meaningful, we make sure the world can find it.</p></div>
    <div class="deck-stats">${[['1/6','personas en el mundo vive con discapacidad','OMS, 2023'],['94%','de las primeras impresiones dependen del diseño del sitio','Forbes, 2024'],['96%','de los sitios tiene errores críticos de accesibilidad','WebAIM, 2025']].map(([n,t,f])=>`<div><b>${n}</b><span>${t}</span><small>${f}</small></div>`).join('')}</div>
    <div class="deck-steps">${['Discovery session','Estrategia y tono','Producción web','Testing WCAG','Lanzamiento'].map((t,i)=>`<div><i>${String(i+1).padStart(2,'0')}</i><span>${t}</span></div>`).join('')}</div>
    <p class="deck-close">blest no compite por volumen. <em>Compite por comprensión.</em></p>
  </div>`:''}
  ${p.specs?`${band('Detalles<br>constructivos','Componentes','',true)}<ol class="specs ${p.specs.length===7?'c4':''}">${p.specs.map(([b,s])=>`<li class="rv"><b>${b}</b><span>${s}</span></li>`).join('')}</ol>`:''}
  ${p.quote?`<div class="quote rv" style="margin-top:clamp(24px,4vw,40px)"><span class="lbl">Reflexión personal</span><p>“${p.quote}”</p></div>`:''}
  <nav class="pd-nav" aria-label="Otros proyectos"><a class="more" href="#${prev.id}">← ${prev.title}</a><a class="more" href="#${next.id}">${next.title} →</a></nav>
</div>`};

/* router */
const app=document.getElementById('app');
function route(){
  const h=(location.hash||'#inicio').slice(1)||'inicio';
  const p=projects.find(x=>x.id===h);
  const key=p?'proyectos':(V[h]?h:'inicio');
  app.innerHTML=`<div class="view">${p?V.project(p):V[key]()}</div>`;
  document.querySelectorAll('.links a,.mnav a.it').forEach(a=>a.setAttribute('aria-current',a.getAttribute('href')==='#'+key?'page':'false'));
  setMenu(false);
  window.scrollTo(0,0);
  wire();
}
window.addEventListener('hashchange',route);

const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function wire(){
  const els=[...app.querySelectorAll('.rv')];
  if(!reduce && 'IntersectionObserver' in window){
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.remove('pre');io.unobserve(e.target)}}),{threshold:.06});
    els.forEach(el=>{if(el.getBoundingClientRect().top>innerHeight){el.classList.add('pre');io.observe(el)}});
  }
  app.querySelectorAll('.chip').forEach(b=>b.addEventListener('click',()=>{
    app.querySelectorAll('.chip').forEach(c=>c.setAttribute('aria-pressed',c===b));
    const f=b.dataset.f;app.querySelectorAll('#pgrid .card').forEach(c=>c.hidden=!(f==='todos'||c.dataset.cat===f));
  }));
  app.querySelectorAll('button.copy').forEach(b=>b.addEventListener('click',async()=>{
    const el=document.getElementById(b.dataset.copy);
    try{await navigator.clipboard.writeText(el.textContent);b.textContent='Copiado'}catch(e){const r=document.createRange();r.selectNodeContents(el);const s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Seleccionado'}
    setTimeout(()=>b.textContent='Copiar',1800);
  }));
  const r=document.getElementById('rings');if(r)rings(r);
  // parallax suave en el hero
  const st=app.querySelector('.stage');
  if(st&&!reduce)st.parentElement.addEventListener('pointermove',e=>{const b=st.getBoundingClientRect();const x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;st.querySelector('.b1 img').style.transform=`scale(1.08) translate(${x*-14}px,${y*-14}px)`});
  app.querySelectorAll('a,button').forEach(a=>{a.addEventListener('mouseenter',()=>cur.classList.add('big'));a.addEventListener('mouseleave',()=>cur.classList.remove('big'))});
}

function rings(c){
  const ctx=c.getContext('2d');const dpr=Math.min(devicePixelRatio||1,2);
  const w=c.offsetWidth,h=c.offsetHeight;c.width=w*dpr;c.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
  const cs=getComputedStyle(document.documentElement);const ink=cs.getPropertyValue('--stone').trim(),ac=cs.getPropertyValue('--sun').trim();
  let t=0;
  const draw=()=>{ctx.clearRect(0,0,w,h);
    for(let i=1;i<22;i++){ctx.beginPath();const R=i*Math.max(w,h)/30;
      for(let a=0;a<=6.3;a+=.05){const n=Math.sin(a*3+i*.5+t)*R*.05+Math.cos(a*5-i*.3)*R*.03;const x=w*.55+Math.cos(a)*(R+n),y=h*.5+Math.sin(a)*(R+n);a===0?ctx.moveTo(x,y):ctx.lineTo(x,y)}
      ctx.closePath();ctx.strokeStyle=i%5===0?ac:ink;ctx.lineWidth=i%5===0?2.2:.8;ctx.stroke()}
    t+=.006;if(!reduce&&document.getElementById('rings')===c)requestAnimationFrame(draw)};
  draw();
}

const cur=document.getElementById('cursor');
addEventListener('pointermove',e=>{cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px'});

const mnav=document.getElementById('mnav'),mbtn=document.getElementById('menuBtn');let mt;
function setMenu(open){
  if(!mnav)return;clearTimeout(mt);
  mbtn.setAttribute('aria-expanded',open);mbtn.querySelector('.tx').textContent=open?'Cerrar':'Menú';
  document.documentElement.classList.toggle('menu-open',open);
  if(open){mnav.hidden=false;requestAnimationFrame(()=>mnav.classList.add('open'))}
  else{mnav.classList.remove('open');mt=setTimeout(()=>{if(!mnav.classList.contains('open'))mnav.hidden=true},450)}
}
mbtn.addEventListener('click',()=>setMenu(mbtn.getAttribute('aria-expanded')!=='true'));
mnav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
addEventListener('resize',()=>{if(innerWidth>900)setMenu(false)});
const modes=['sistema','claro','oscuro'];let mi=0;
try{mi=Math.max(0,modes.indexOf(localStorage.getItem('ba-theme')||'sistema'))}catch(e){}
function applyTheme(){const m=modes[mi];if(m==='sistema')document.documentElement.removeAttribute('data-theme');else document.documentElement.setAttribute('data-theme',m==='claro'?'light':'dark');document.getElementById('themeBtn').textContent='Tema: '+m;try{localStorage.setItem('ba-theme',m)}catch(e){}}
document.getElementById('themeBtn').addEventListener('click',()=>{mi=(mi+1)%3;applyTheme();route()});
applyTheme();
route();
