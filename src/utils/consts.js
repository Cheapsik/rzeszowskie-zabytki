import ratuszImg from "../assets/ratusz/ratusz.jpg";
import ratusz1 from "../assets/ratusz/ratusz_1.png";
import ratusz2 from "../assets/ratusz/ratusz_2.png";
import ratusz3 from "../assets/ratusz/ratusz_3.png";
import ratusz4 from "../assets/ratusz/ratusz_4.png";
import ratuszDescription from "../assets/ratusz/ratusz_description.jpg";

import gmachImg from "../assets/gmach/gmach.png";
import gmach_1 from "../assets/gmach/gmach_1.png";
import gmach_2 from "../assets/gmach/gmach_2.png";
import gmach_3 from "../assets/gmach/gmach_3.png";
import gmach_4 from "../assets/gmach/gmach_4.png";

import zamekImg from "../assets/zamek/zamek.png";
import zamek_1 from "../assets/zamek/zamek_1.png";

import synagoga_old_Img from "../assets/synagoga/synagoga_old.png";
import synanoga_old_Description from "../assets/synagoga/syganoga_old_description.png";
import synagoga_old_1 from "../assets/synagoga/synagoga_old_1.png";
import synagoga_old_2 from "../assets/synagoga/synagoga_old_2.png";

import synagoga_new_Img from "../assets/synagoga/synagoga_new.png";
import synanoga_new_Description from "../assets/synagoga/synagoga_new_description.png";
import synagoga_new_1 from "../assets/synagoga/synagoga_new_1.png";
import synagoga_new_2 from "../assets/synagoga/synagoga_new_2.png";

export const monuments = [
  {
    id: 1,
    title: "Ratusz",
    image: ratuszImg,
    description: [
      { type: "text", content: "Historia rzeszowskiego ratusza sięga XIV wieku, powstał wkrótce po lokacji miasta w 1354 roku jako drewniany budynek pełniący funkcję władz miejskich, sądu oraz  straży. Przed 1591 rokiem, z inicjatywy Mikołaja Spytka Ligęzy, wzniesiono nowy, murowany ratusz. Zniszczony podczas najazdu Jerzego II Rakoczego w 1657 r., został odbudowany w drugiej połowie XVII wieku, a około 1730 r. poddany przebudowie pod kierunkiem Karola Henryka Wiedemanna." },
      { type: "image", flex: 'column', src: ratuszDescription, width: "100%", height: "auto", alt: "Zdjęcie ratusza", caption: "Fot.  Edward Janusz, Budynek ratusza przed przebudową, Galeria Fotografii Miasta Rzeszowa." },
      { type: "text", content: "Dzisiejszy wygląd ratusza to efekt gruntownej modernizacji z końca XIX wieku, wykonanej według projektu Franciszka Skowrona. Nowa forma  w stylu neorenesansowym z elementami neogotyku – nie tylko odpowiadała nowym funkcjom administracyjnym, ale była też wyrazem patriotyzmu i dążeń niepodległościowych w czasie zaborów" }
    ],
    objectPosition: "60% 55%",
    points: [
      {
        id: 1,
        label: "Orzeł ratuszowy",
        description: [
          { type: "image", src: ratusz1, width: "100%", height: "auto", alt: "Zdjęcie orła ratuszowego" },
          { type: "text", content: "Pozłacany orzeł z fasady ratusza pojawił się w 1897 roku, zaprojektowany przez Jana Daschka ze Lwowa. Choć wykonany był bez korony bo tak zdecydowały władze zaborcze stał się symbolem miejskiej dumy. W 1939 roku, w obliczu zbliżającej się okupacji, strażacy zdjęli orła, by uchronić go przed zniszczeniem. Przez lata wojny był ukrywany, według jednej z wersji nawet… w stajni w Woli Zgłobieńskiej! Po wojnie, w 1944 roku, orzeł wrócił na swoje miejsce nad zegarem " }
        ],
        top: "6%",
        left: "38%",
      },
      {
        id: 2,
        label: "Jak w Krakowie",
        description: [
          { type: "image", src: ratusz2, width: "100%", height: "auto", alt: "Zdjęcie szczytu ratusza" },
          { type: "text", content: "Choć dzieli je 160 kilometrów, rzeszowski ratusz i krakowskie Sukiennice mają zaskakująco wiele wspólnego! Oba przebudowano pod koniec XIX wieku w duchu historyzmu – stylu, który odwoływał się do polskiej świetności sprzed rozbiorów. Maszkaronowe attyki, ostrołukowe płyciny, arkadowe podcienia i polskie herby w salach – to nie przypadek! Architektura miała być nie tylko piękna, ale i „mówić po polsku”, przypominając   o dumie narodowej w czasach zaborów." },
          { type: "image", src: ratusz3, width: "100%", height: "auto", alt: "Zdjęcie przybliżone na attykę" },
          { type: "text", content: "Maszkaronowe attyki, ostrokułowe płyciny, arkadowe podcienie i polskie herby w salach to nie przypadek! Architektura miała być nie tylko piękna, ale i “mówić po polsku, przypominając o dumie narodowej w czasach zaborów" },

        ],
        top: "16%",
        left: "67%",
      },
      {
        id: 3,
        label: "Piwnice",
        description: [
          { type: "text", content: "Pod ratuszem, dawnym gmachem miejskim znajdowały się piwnice, które przez wieki tętniły życiem handlowym. To właśnie tutaj sprzedawano lokalne trunki: miód pitny, piwo marcowe i wina. Budynek stał w samym centrum miejskiego gwaru  tuż przy pręgierzu, wadze miejskiej, kramach i postrzygalni sukna. W dni targowe to miejsce stawało się sercem Rzeszowa, a sygnał do rozpoczęcia handlu dawał zegar z wieży ratusza, górującej nad rynkiem." }
        ],
        top: "42%",
        left: "69%",
      },
      {
        id: 4,
        label: "Herb rzeszowa",
        description: [
          { type: "image", src: ratusz4, width: "100%", height: "auto", alt: "Zdjęcie herbu Rzeszowa" },
          { type: "text", content: "W końcu XVIII wieku, kiedy Rzeszów stał się bezpośrednią częścią imperium Habsburgów, cesarz Józef II wydał zarządzenie o uzupełnieniu lokalnych herbów nowo nabytych ziem. Po reformach herb miasta zmienił się znacznie. W centrum znalazła się kamienna skrzynia, która miała być miejscem przechowywania przywilejów nadanych miastu. Na jej froncie umieszczono stary herb miasta – krzyż kawalerski oraz po obu stronach girlandy. Na wieku leżała otwarta księga, symbolizująca oświatę, wykształcenie, i skrzyżowane miecze (symbol (symbol waleczności) oraz kaduceusz (według mitologii jest oznaką spokoju i dobrego handlu)" }
        ],
        top: "31%",
        left: "42%",
      },
    ]
  },
  {
    id: 2,
    title: `Gmach "Sokoła"`,
    image: gmachImg,
    description: "Gmach „Sokoła” w Rzeszowie powstał w latach 1890–1894 jako reprezentacyjna siedziba Towarzystwa Gimnastycznego „Sokół”, które promowało kulturę fizyczną, patriotyzm i działalność społeczną. Budynek w stylu historyzującym, zaprojektowany przez Albina Zagórskiego, szybko stał się ważnym centrum życia kulturalnego – odbywały się tu przedstawienia, koncerty, bale i zebrania, a także istotne spotkania polityczne, jak zjazd Stronnictwa Ludowego w 1895 roku czy zawiązanie rzeszowskiego skautingu w 1911 roku. Po wojnie budynek przejął teatr, dziś znany jako Teatr im. Wandy Siemaszkowej, który kontynuuje jego wieloletnią tradycję artystyczną, czyniąc z dawnego „Sokoła” jeden z najbardziej rozpoznawalnych i symbolicznych zabytków Rzeszowa.",
    objectPosition: "60% 55%",
    points: [
      {
        id: 1,
        label: "Symbol sokoła",
        description: [
          { type: "image", src: gmach_1, width: "100%", height: "auto", alt: "Zdjęcie symbolu sokoła na gmachu" },
          { type: "text", content: "Choć dziś w dawnym gmachu Towarzystwa Gimnastycznego „Sokół” działa teatr, warto pamiętać, że budynek powstał właśnie dla tej niezwykłej organizacji. Pierwsze polskie „gniazdo” Towarzystwa Gimnastycznego „Sokół” powstało we Lwowie, na terenie ówczesnego zaboru austriackiego w 1867 roku. Jego głównym celem było promowanie kultury i sprawności fizycznej oraz budowanie świadomości narodowej. Symbolem organizacji został ptak trzymający w szponach ciężarki, a ich myślą przewodnią została łacińska sentencja „Mens sana in corpore sano” co przetłumaczyć można jako: „W zdrowym ciele zdrowy duch”" }
        ],
        top: "9%",
        left: "49%",
      },
      {
        id: 2,
        label: "Manifest",
        description: [
          { type: "image", src: gmach_2, width: "100%", height: "auto", alt: "Zdjęcie góry gmachu" },
          { type: "text", content: "Pod ratuszem, dawnym gmachem miejskim znajdowały się piwnice, które przez wieki tętniły życiem handlowym. To właśnie tutaj sprzedawano lokalne trunki: miód pitny, piwo marcowe i wina. Budynek stał w samym centrum miejskiego gwaru tuż przy pręgierzu, wadze miejskiej, kramach i postrzygalni sukna. W dni targowe to miejsce stawało się sercem Rzeszowa, a sygnał do rozpoczęcia handlu dawał zegar z wieży ratusza, górującej nad rynkiem." },
          { type: "image", src: gmach_3, width: "100%", height: "auto", alt: "Zdjęcie zbliżenia na attykę" },
          { type: "text", content: "Niestety, w latach 50. XX wieku attykę usunięto podczas przebudowy w duchu realizmu socjalistycznego. W jej wyniku z fasady budynku usunięto attyki oraz pierwotną dekorację architektoniczną w stylu eklektyczno-modernistycznym Elementy te kojarzono z przedwojennym burżuazyjnym stylem życia i wcześniejszym porządkiem społecznym.  W ich miejscu wprowadzono trójkątny naczółek ozdobiony symbolicznymi postaciami antycznych muz : Melpomene (muza tragedii ) i Erato (muza poezji miłosnej). Dopiero po latach, w trakcie prac konserwatorskich i modernizacyjnych, przywrócono budynkowi historyczny wygląd, przywracając fasadzie dawny charakter i pierwotny wyraz ideowy." },
          { type: "image", src: gmach_4, width: "100%", height: "auto", alt: "Zdjęcie leżącej attyki" },
        ],
        top: "19%",
        left: "68%",
      },
      {
        id: 3,
        label: "Przemiany",
        description: [
          { type: "text", content: "Czy wiesz, że budynek, w którym dziś mieści się teatr w Rzeszowie, pierwotnie powstał jako siedziba Towarzystwa Gimnastycznego „Sokół”? Na początku miasto planowało wybudować tu „dom przyjemności” – miejsce rozrywki i spotkań. Jednak dzięki inicjatywie działaczy „Sokoła” zdecydowano, że powstanie obiekt łączący funkcję klubu sportowego z domem kultury dla całej społeczności. Budowę rozpoczęto w 1890 roku, a ukończono przed 1895 rokiem. Z czasem siedziba „Sokoła” stała się centrum życia kulturalnego i społecznego miasta, a po II wojnie światowej budynek przejęła instytucja teatralna. Tak więc miejsce, które kiedyś tętniło sportową aktywnością i patriotycznym duchem, dziś żyje sztuką i widowiskami na scenie." }
        ],
        top: "35%",
        left: "32%",
      },
    ]
  },
  {
    id: 3,
    title: "Zamek Lubomirskich",
    image: zamekImg,
    description: "Zamek Rzeszowski został zbudowany na przełomie XVI i XVII wieku przez Mikołaja Spytka Ligęzę, który przeniósł się tu z dawnej rezydencji na Starym Mieście. Początkowo był to piętrowy dwór otoczony murami i wieżami. Wkrótce rozbudowano go do formy czteroskrzydłowego zamku z fortyfikacjami ziemnymi, łączącymi elementy włoskiej i holenderskiej szkoły fortyfikacji. Po śmierci Ligęzy, jego synowie oraz później ród Lubomirskich kontynuowali rozbudowę i modernizację zamku. W XVII wieku wybitny architekt barokowy Tylman z Gameren przekształcił zamek, wzmacniając fortyfikacje i nadając mu barokowy wygląd. W XVIII wieku Karol Henryk Wiedemann przeprowadził dalsze prace fortyfikacyjne i przebudowę elewacji, dodając m.in. wieżę bramną. W XIX wieku zamek stracił funkcję rezydencjalną i pełnił rolę więzienia, w którym przetrzymywano m.in. ważnych więźniów politycznych. W czasie II wojny światowej był miejscem egzekucji i tortur. Po wojnie kontynuowano działalność więzienną do 1981 roku. Na przełomie XIX i XX wieku zamek przeszedł gruntowną przebudowę konserwatorską, która nadała mu nowoczesny wygląd, zachowując jednocześnie historyczne elementy. Obecnie zamek jest siedzibą Sądu Okręgowego",
    points: [
      {
        id: 1,
        label: "Więzienie",
        description: [
          { type: "text", content: "Od czasów II wojny światowej rozpoczął się tragiczny rozdział w dziejach zamku. Najpierw Niemcy więzili, torturowali i mordowali tu Polaków podczas okupacji, a później, przez długie lata po wojnie, podobne działania prowadzili Sowieci i funkcjonariusze UB. Szacuje się, że w okresie PRL przez więzienie na Zamku Lubomirskich przewinęło się ponad 300 osób, w tym wielu żołnierzy Armii Krajowej, NSZ oraz WiN. Placówka UB na zamku słynęła z brutalnych przesłuchań, podczas których torturowano i zabijano więźniów. Wielu z nich ginęło w egzekucjach wykonywanych przez rozstrzelanie lub wieszano ich publicznie na zamkowym dziedzińcu. Część ciał pochowano potajemnie w obrębie zamku, co do dziś jest przedmiotem badań historyków i IPN. W latach 90. XX wieku, aby upamiętnić ofiary tych dramatycznych wydarzeń, postawiono na dziedzińcu krzyż." }
        ],
        top: "19%",
        left: "49%",
      },
      {
        id: 2,
        label: "Artyleria",
        description: [
          { type: "image", src: zamek_1, width: "100%", height: "auto", alt: "Zdjęcie bastionu" },
          { type: "text", content: "W drugiej połowie XVIII wieku Zamek Lubomirskich w Rzeszowie dysponował aż 41 armatami, które rozmieszczono na każdym bastionie obronnym. Jedna z nich, znana pod przydomkiem „smok”, wyróżniała się szczególną wielkością i potężną siłą rażenia. W 2001 roku podjęto próbę odnalezienia tej dawnej artylerii, ponieważ sądzono, że część dział mogła zostać ukryta w fosie zamkowej na przełomie XIX i XX wieku. Poszukiwania prowadzono przy udziale specjalistów i rzeszowskich odkrywców, którzy z pomocą wykrywaczy metalu przeczesywali okolice zamku. Choć początkowo wydawało się, że natrafiono na właściwe miejsce, wykopaliska nie przyniosły oczekiwanych rezultatów, a armat nie odnaleziono. Udało się jednak wydobyć inne przedmioty związane z dawną bronią palną, co stało się kolejnym elementem bogatej historii zamku i przyciągnęło uwagę pasjonatów militariów." },
        ],
        top: "34%",
        left: "28%",
      },
      {
        id: 3,
        label: "Wodne spacery",
        description: [
          { type: "text", content: "Dawny Rzeszów był miastem wypełnionym i otoczonym wodą. Płynący przy nim Wisłok był dziką rzeką, zmieniał koryta, tworzył rozlewiska. W mieście były stawy, jeziora strumyki, kanały. Utrudniało to wrogom zdobycie miasta, a właściciele mogli korzystać z wody jako środka transportu. Np. Lubomirscy na niedzielne msze do kościoła bernardyńskiego lub Tarnego wybierali się z Pałacu Letniego na łodziach." }
        ],
        top: "49%",
        left: "76%",
      },
    ]
  },
  {
    id: 4,
    title: "Synanoga Staromiejska",
    image: synagoga_old_Img,
    description: [
      { type: "text", content: "Synagoga Staromiejska w Rzeszowie powstała około 1610 roku na miejscu wcześniejszej drewnianej bożnicy i jest jedną z najstarszych zachowanych synagog na Podkarpaciu." },
      { type: "image", flex: 'column', src: synanoga_old_Description, width: "100%", height: "auto", alt: "Synagoga szkic", caption: "Rys. Władysława Łuszczkiewicza z 1891 roku przedstawiający widok synagogi Staromiejskiej z zewnątrz. Rycina [w:] „Sprawozdanie z wycieczki naukowej odbytej w lecie 1891 roku” przez prof. Władysława Łuszczkiewicza." },
      { type: "text", content: "Przez wieki była wielokrotnie niszczona przez najazdy i pożary, a mimo to zawsze odbudowywana przez miejscową społeczność żydowską. Niestety w czasie wojny wnętrze bożnicy zostało całkowicie zdewastowane, a po wojnie odbudowano ją w 1953 roku w mocno zmienionej formie. Dziś w jej murach mieści się Archiwum Państwowe, ale nadal pozostaje ważnym świadectwem wielowiekowej obecności Żydów w historii Rzeszowa." }
    ],    
    points: [
      {
        id: 1,
        label: "Góralski dach",
        description: [
          { type: "image", src: synagoga_old_1, width: "100%", height: "auto", alt: "Zdjęcie góralskiego dachu synagogi" },
          { type: "text", content: "Po II wojnie światowej, w 1953 roku, synagoga została odbudowana według projektu architektki Zofii Cydzikowej, jednak w formie całkowicie odmiennej od swojej historycznej sylwetki. Zamiast dawnego wysokiego, czterospadowego dachu synagogalnego nałożono prosty dach dwuspadowy pokryty deskami ułożonymi w jodełkę, charakterystycznymi dla architektury podhalańskiej. Takie rozwiązanie zupełnie nie pasowało do typowej żydowskiej architektury sakralnej i sprawiło, że budynek bardziej przypominał góralską chatę niż tradycyjną bożnicę. Przebudowie uległa także wieżyczka oraz południowy przedsionek, który stracił dekoracyjną attykę i został zastąpiony trzema prostymi daszkami. W efekcie synagoga zatraciła swój oryginalny, historyczny charakter i do dziś wzbudza kontrowersje wśród badaczy oraz mieszkańców miasta." }
        ],
        top: "10%",
        left: "49%",
      },
      {
        id: 2,
        label: "Wieża",
        description: [
          { type: "image", src: synagoga_old_2, width: "100%", height: "auto", alt: "Zdjęcie wieży synagogi" },
          { type: "text", content: "Synagoga Staromiejska w Rzeszowie nie pełniła wyłącznie funkcji sakralnych, ale wchodziła także w skład miejskich fortyfikacji. Jej wyjątkowym elementem była cylindryczna wieża w północno-zachodnim narożniku, mieszcząca klatkę schodową prowadzącą od piwnic aż po strych. Co ciekawe, wieża pełniła również rolę małego więzienia, w którym tymczasowo osadzano osoby zakłócające porządek w dzielnicy żydowskiej. Ten nietypowy element architektoniczny, bardziej kojarzący się z warownią niż świątynią, doskonale pokazuje, jak Synagoga Staromiejska łączyła funkcje religijne i militarne, stając się ważnym punktem obronnym całego" },
        ],
        top: "34%",
        left: "28%",
      },
      {
        id: 3,
        label: "Funkcja",
        description: [
          { type: "text", content: "Choć synagoga kojarzy się przede wszystkim z miejscem modlitwy, ta w Rzeszowie pełniła również funkcję militarną. Włączono ją w system fortyfikacji miejskich, gdzie stanowiła punkt zbiórki dla wojsk broniących miasta, a także magazynowano tam broń i amunicję. To unikalne połączenie funkcji sakralnej i obronnej czyni ją niezwykle ciekawym przykładem architektury tamtych czasów." }
        ],
        top: "27%",
        left: "67%",
      },
    ]
  },
  {
    id: 5,
    title: "Synagoga Nowomiejska",
    image: synagoga_new_Img,
    description: [
      { type: "text", content: "Synagoga Nowomiejska w Rzeszowie powstała w latach 1705–1712 według projektu włoskiego architekta Jana Chrzciciela Belottiego. Była nazywana też Dużą Szkołą, a jej budowę sfinansowała społeczność żydowska dzięki pożyczkom od lokalnych zakonów. Zbudowana na planie prostokąta, wyróżniała się monumentalną bryłą i bogatym barokowym wnętrzem z polichromiami oraz sztukateriami." },
      { type: "image", flex: 'column', src: synanoga_new_Description, width: "100%", height: "auto", alt: "Zdjęcie synagogi nowomiejskiej", caption: "Fot.  Synagoga Nowomiejska w Rzeszowie przed przebudową. Pocztówka z 1912 roku. Zbiory Muzeum Okręgowego w Rzeszowie." },
      { type: "text", content: "Po pożarze miasta w 1842 roku synagoga zyskała dwuspadowy dach, który przetrwał do II wojny światowej. W czasie okupacji Niemcy zamienili ją w stajnię, a potem magazyn wojskowy, a wycofując się w 1944 roku, podpalili budynek. Dzięki odbudowie w latach 1961–1965 synagoga uniknęła rozbiórki i została przekształcona w Biuro Wystaw Artystycznych, zmieniając jednocześnie swój wygląd i funkcję." }
    ],
    points: [
      {
        id: 1,
        label: "Przebudowa",
        description: [
          { type: "image", src: synagoga_new_2, width: "100%", height: "auto", alt: "Zdjęcie przypór" },
          { type: "text", content: "Po wojnie synagoga była w ruinie, ale dzięki odbudowie w latach 1961–1965 zyskała nowe życie jako Biuro Wystaw Artystycznych. W ramach przebudowy wnętrze podzielono stropem na dwa poziomy, tworząc sale wystawowe i kawiarnię. Budynek został również nadbudowany o dodatkowe piętro, w którym urządzono pracownie dla plastyków, a całość zwieńczono wyraźnym gzymsem, nadającym bryle bardziej nowoczesny wygląd." }
        ],
        top: "10%",
        left: "42%",
      },
      {
        id: 2,
        label: "Przypory",
        description: [
          { type: "image", src: synagoga_new_1, width: "100%", height: "auto", alt: "Zdjęcie synagogi" },
          { type: "text", content: "Fasada synagogi wzmocniona jest przyporami, które nie tylko podtrzymywały sklepienie, ale także nadawały budowli monumentalny charakter. Te masywne elementy konstrukcyjne były konieczne ze względu na podmokły teren, na którym powstała synagoga. Przypory przejmowały część obciążeń z ciężkiego sklepienia i rozkładały je równomiernie na fundamenty. Dzięki temu budynek mógł przetrwać przez stulecia mimo trudnych warunków gruntowych." },
        ],
        top: "31%",
        left: "71%",
      },
      {
        id: 3,
        label: "Wojenne losy",
        description: [
          { type: "text", content: "W czasie okupacji niemieckiej synagoga została splądrowana i zamieniona najpierw w stajnię, a potem w wojskowy magazyn. Pod koniec wojny wycofujące się wojska niemieckie podpaliły budynek, co spowodowało zawalenie części sklepień i niemal całkowite zniszczenie dachu oraz konstrukcji świątyni." }
        ],
        top: "46%",
        left: "33%",
      },
    ]
  }
];