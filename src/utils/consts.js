import ratuszImg from "../assets/ratusz.jpg";

export const monuments = [
  {
    id: 1,
    title: "Ratusz",
    image: ratuszImg,
    description: [
      { type: "text", content: "Historia rzeszowskiego ratusza sięga XIV wieku, powstał wkrótce po lokacji miasta w 1354 roku jako drewniany budynek pełniący funkcję władz miejskich, sądu oraz  straży. Przed 1591 rokiem, z inicjatywy Mikołaja Spytka Ligęzy, wzniesiono nowy, murowany ratusz. Zniszczony podczas najazdu Jerzego II Rakoczego w 1657 r., został odbudowany w drugiej połowie XVII wieku, a około 1730 r. poddany przebudowie pod kierunkiem Karola Henryka Wiedemanna." },
      { type: "image", src: ratuszImg, width: "300px", height: "200px", alt: "Ratusz w Rzeszowie", caption: "Fot.  Edward Janusz, Budynek ratusza przed przebudową, Galeria Fotografii Miasta Rzeszowa." },
      { type: "text", content: "Dzisiejszy wygląd ratusza to efekt gruntownej modernizacji z końca XIX wieku, wykonanej według projektu Franciszka Skowrona. Nowa forma  w stylu neorenesansowym z elementami neogotyku – nie tylko odpowiadała nowym funkcjom administracyjnym, ale była też wyrazem patriotyzmu i dążeń niepodległościowych w czasie zaborów" }
    ],
    objectPosition: "60% 55%",
    points: [
      {
        id: 1,
        label: "Orzeł ratuszowy",
        description: [
          { type: "image", src: ratuszImg, width: "auto", height: "300px", alt: "Ratusz w Rzeszowie" },
          { type: "text", content: "Pozłacany orzeł z fasady ratusza pojawił się w 1897 roku, zaprojektowany przez Jana Daschka ze Lwowa. Choć wykonany był bez korony bo tak zdecydowały władze zaborcze stał się symbolem miejskiej dumy. W 1939 roku, w obliczu zbliżającej się okupacji, strażacy zdjęli orła, by uchronić go przed zniszczeniem. Przez lata wojny był ukrywany, według jednej z wersji nawet… w stajni w Woli Zgłobieńskiej! Po wojnie, w 1944 roku, orzeł wrócił na swoje miejsce nad zegarem " }
        ],
        top: "6%",
        left: "20%",
      },
      {
        id: 2,
        label: "Jak w Krakowie",
        description: [
          { type: "image", src: ratuszImg, width: "auto", height: "300px", alt: "Ratusz w Rzeszowie" },
          { type: "text", content: "Choć dzieli je 160 kilometrów, rzeszowski ratusz i krakowskie Sukiennice mają zaskakująco wiele wspólnego! Oba przebudowano pod koniec XIX wieku      w duchu historyzmu – stylu, który odwoływał się do polskiej świetności sprzed rozbiorów. Maszkaronowe attyki, ostrołukowe płyciny, arkadowe podcienia i polskie herby w salach – to nie przypadek! Architektura miała być nie tylko piękna, ale i „mówić po polsku”, przypominając   o dumie narodowej w czasach zaborów." }
        ],
        top: "12%",
        left: "47%",
      },
      {
        id: 3,
        label: "Piwnice",
        description: [
          { type: "image", src: ratuszImg, width: "auto", height: "300px", alt: "Ratusz w Rzeszowie" },
          { type: "text", content: "Pod ratuszem, dawnym gmachem miejskim znajdowały się piwnice, które przez wieki tętniły życiem handlowym. To właśnie tutaj sprzedawano lokalne trunki: miód pitny, piwo marcowe i wina. Budynek stał w samym centrum miejskiego gwaru  tuż przy pręgierzu, wadze miejskiej, kramach i postrzygalni sukna. W dni targowe to miejsce stawało się sercem Rzeszowa, a sygnał do rozpoczęcia handlu dawał zegar z wieży ratusza, górującej nad rynkiem." }
        ],
        top: "45%",
        left: "60%",
      },
      {
        id: 4,
        label: "Todo",
        description: [
          { type: "image", src: ratuszImg, width: "auto", height: "300px", alt: "Ratusz w Rzeszowie" },
          { type: "text", content: "Not implemented yet." }
        ],
        top: "31%",
        left: "20%",
      },
    ]
  },
  {
    id: 2,
    title: "Zabytek 2",
    image: ratuszImg,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet."
  },
  {
    id: 3,
    title: "Zabytek 3",
    image: ratuszImg,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet."
  },
  {
    id: 4,
    title: "Zabytek 4",
    image: "./assets/ratusz.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet."
  },
  {
    id: 5,
    title: "Zabytek 5",
    image: "./assets/ratusz.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet."
  },
  {
    id: 6,
    title: "Zabytek 6",
    image: "./assets/ratusz.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet."
  }
];