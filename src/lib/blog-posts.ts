import heroDive from "@/assets/csoportos-merules-erdelyi-tonal.jpg";
import courseTraining from "@/assets/naui-buvartanfolyam-medencei-oktatas.jpg";
import experience from "@/assets/naui-buvaroktato-tanitvany-gyakorlat.jpg";
import gear from "@/assets/buvarfelszereles-medence-szelen.jpg";
import practice from "@/assets/buvarpalack-bcd-medencei-gyakorlas.jpg";
import groupLake from "@/assets/buvarcsoport-erdelyi-to-parton.jpg";
import dockCheck from "@/assets/buvarfelszereles-ellenorzes-stegen.jpg";
import okSign from "@/assets/buvar-ok-jelzes-felszinen.jpg";
import briefing from "@/assets/naui-oktato-briefing-medenceben.jpg.asset.json";
import maskSkill from "@/assets/naui-medencei-kepzes-maszk-gyakorlat.jpg.asset.json";
import uwTraining from "@/assets/buvartanfolyam-medence-viz-alatti-kepzes.jpg.asset.json";
import advanced from "@/assets/advanced-merulok-ereszkedes-paros-melyviz.jpg.asset.json";
import portrait from "@/assets/buvar-portre-viz-alatt-kozelrol.jpg.asset.json";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string; // meta description
  keywords: string;
  date: string; // ISO
  readingMinutes: number;
  category: string;
  tags: string[];
  cover: string;
  coverAlt: string;
  sections: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "h3"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "quote"; text: string }
    | { type: "img"; src: string; alt: string; caption?: string }
    | { type: "links"; title?: string; items: Array<{ to: string; label: string; note?: string }> }
  >;
};


export const blogPosts: BlogPost[] = [
  {
    slug: "elso-buvarkodas-romaniaban",
    title: "Első búvárkodásod Romániában – mire számíts a víz alatt?",
    excerpt:
      "Mit érez egy kezdő búvár az első merülésen Erdélyben? Félelmek, élmények, felszerelés és a NAUI oktatás menete egy helyen.",
    description:
      "Első búvárkodás Romániában: mire számíts a víz alatt? Félelmek, felszerelés, oktatás és élmények egy NAUI oktató tollából — Búvárkodás Erdély.",
    keywords:
      "búvárkodás Romániában, első merülés, búvár tanfolyam, Transilvania diving, kezdő búvár Erdély",
    date: "2026-06-10",
    readingMinutes: 8,
    category: "Élmény",
    tags: ["kezdő", "élménymerülés", "Erdély"],
    cover: heroDive,
    coverAlt:
      "Búvárkodás Romániában — Transilvania víz alatti élmény egy erdélyi tóban",
    sections: [
      {
        type: "p",
        text: "Az első merülés mindig különleges. Az a pillanat, amikor a fejed először kerül a víz szintje alá és rájössz, hogy a légzőautomata tényleg működik — ez minden búvár életében meghatározó. Romániában, különösen Erdély tiszta tavaiban ez az élmény még mélyebb: a hegyek között, csendben, egy egészen új világba lépsz be.",
      },
      { type: "h2", text: "Mit érez egy kezdő az első merülés előtt?" },
      {
        type: "p",
        text: "A legtöbb tanítványunk három dolgot említ: izgalom, kíváncsiság és egy egészséges adag félelem. Ez teljesen természetes — a víz alatti környezet nem az „otthonunk\". A jó hír: az első félelmek a medence szélén, az első levegővétellel együtt eltűnnek. A NAUI rendszer pont erre épül: lépésről lépésre, biztonságos környezetben építjük fel a bizalmadat.",
      },
      {
        type: "img",
        src: briefing.url,
        alt: "NAUI búvároktató eligazítást tart kezdő tanítványnak a medence szélén Romániában",
        caption: "Minden merülés egy alapos briefinggel kezdődik.",
      },
      { type: "h2", text: "A felszerelés — barátok, nem ellenségek" },
      {
        type: "p",
        text: "Sok kezdő úgy érzi, hogy a búvárfelszerelés bonyolult. Valójában mindössze néhány elemet kell megértened ahhoz, hogy biztonságosan és élvezettel merülj. Az első merülésed előtt mi minden darabot bemutatunk, felpróbálsz, kipróbálsz a felszínen, majd a sekély vízben.",
      },
      {
        type: "ul",
        items: [
          "Maszk és pipa: a tiszta látás és a felszíni légzés alapja.",
          "BCD (lebegéskompenzátor): ez tart a vízben pontosan ott, ahol szeretnél lenni.",
          "Légzőautomata (regulátor): a palackból a tüdődbe juttatja a levegőt — minden helyzetben.",
          "Búvárpalack: a levegőtartalékod, általában 12 literes acél vagy alumínium.",
          "Neoprén ruha: az erdélyi tavak hűvös vize miatt elengedhetetlen.",
        ],
      },
      {
        type: "img",
        src: gear,
        alt: "Búvárfelszerelés — palack, BCD és légzőautomata rendezve a medence szélén búvár tanfolyam előtt",
        caption: "A felszerelés ismerete az első lépés a magabiztos merüléshez.",
      },
      { type: "h2", text: "Hogyan zajlik egy első élménymerülés?" },
      {
        type: "p",
        text: "A Búvárkodás Erdély „Discover Scuba\" programja egy oktatóval személyre szabottan zajlik. Először a parton vagy a medence szélén megbeszéljük a légzést, a fülnyomás kiegyenlítését és néhány alapvető kézjelet. Ezután sekély vízben gyakorolsz — itt érzed meg először, milyen lebegni.",
      },
      { type: "h3", text: "Lépésről lépésre" },
      {
        type: "ul",
        items: [
          "1. Elméleti eligazítás (kb. 20 perc).",
          "2. Felszerelés felvétele és ellenőrzése a buddy rendszerben.",
          "3. Sekély vízi skill-gyakorlat: légzés, fülkiegyenlítés, maszkürítés.",
          "4. Vezetett merülés az oktatóval — max. 6 méter mélységig.",
          "5. Debriefing, kép- és élménymegosztás.",
        ],
      },
      {
        type: "img",
        src: experience,
        alt: "NAUI búvároktató kezdő tanítvány mellett első élménymerülés közben Erdélyben",
        caption: "Az oktató végig melletted van — szó szerint karnyújtásnyira.",
      },
      { type: "h2", text: "Az élmény, ami megváltoztat" },
      {
        type: "quote",
        text: "Amikor először lebegtem szabadon a víz alatt, megértettem, miért hívják ezt háromdimenziós szabadságnak.",
      },
      {
        type: "p",
        text: "A merülés után a legtöbben ugyanazt mondják: „mikor mehetünk újra?\". Pontosan ezért hoztuk létre a NAUI tanfolyamainkat — hogy ne csak megkóstold, hanem otthon érezd magad a víz alatti világban.",
      },
      { type: "h2", text: "Hol és mikor próbáld ki?" },
      {
        type: "p",
        text: "Erdély számos kristálytiszta tavat és bányatavat kínál, ahol egész évben merülhetsz. A nyári hónapokban a felszíni hőmérséklet kellemes, télen viszont igazi kalandot jelent a jégalatti merülés is — ezt azonban már csak gyakorlott búvároknak ajánljuk.",
      },
      {
        type: "p",
        text: "Ha érdekel az első élménymerülés vagy a teljes NAUI búvártanfolyam, nézd meg részletes szolgáltatásainkat vagy vedd fel velünk a kapcsolatot — együtt megtervezzük az első merülésedet.",
      },
    ],
  },
  {
    slug: "professzionalis-buvar-tanfolyam",
    title: "Hogyan zajlik egy professzionális búvártanfolyam lépésről lépésre",
    excerpt:
      "Elméleti képzéstől a nyílt vízi vizsgáig — így néz ki egy professzionális NAUI búvártanfolyam Romániában, a Búvárkodás Erdélynél.",
    description:
      "Professzionális búvártanfolyam Romániában lépésről lépésre: elmélet, medencés gyakorlat, nyílt vízi merülés, biztonsági protokollok és NAUI minősítés.",
    keywords:
      "búvártanfolyam, diving course Romania, scuba training, NAUI alapok, CMAS, NAUI Open Water",
    date: "2026-06-22",
    readingMinutes: 10,
    category: "Tanfolyam",
    tags: ["NAUI", "tanfolyam", "Open Water"],
    cover: courseTraining,
    coverAlt:
      "NAUI búvártanfolyam Romániában — medencés oktatás csoportban a Búvárkodás Erdélynél",
    sections: [
      {
        type: "p",
        text: "Egy professzionális búvártanfolyam nem egy hétvégi élmény — egy strukturált, nemzetközileg elismert képzés, amely életre szóló képességeket ad. A Búvárkodás Erdélynél a NAUI (National Association of Underwater Instructors) rendszer szerint dolgozunk, ami a világ egyik legszigorúbb és legrégebbi búvároktatási standardja. Ebben a cikkben végigvezetünk a teljes folyamaton.",
      },
      { type: "h2", text: "1. Elméleti képzés — a tudás alapja" },
      {
        type: "p",
        text: "Minden tanfolyam egy elméleti modullal indul. Itt nem száraz tananyagot kapsz, hanem azokat a fizikai, fiziológiai és gyakorlati alapokat, amelyek nélkül a víz alatt nem lehet biztonságosan tájékozódni. A modulokat online és személyes konzultációval is támogatjuk.",
      },
      {
        type: "ul",
        items: [
          "Búvárfizika — nyomás, térfogat, felhajtóerő.",
          "Búvárfiziológia — fülkiegyenlítés, dekompresszió, narkózis.",
          "Felszerelés — összetétel, karbantartás, ellenőrzés.",
          "Tervezés — merülési táblák, no-decompression limit, buddy rendszer.",
          "Vészhelyzeti eljárások — out-of-air, megosztott levegő, vészfelemelkedés.",
        ],
      },
      {
        type: "img",
        src: briefing.url,
        alt: "NAUI oktató elméleti eligazítást tart búvártanfolyamon Romániában",
        caption: "Elméleti modul: a biztonságos merülés alapja.",
      },
      { type: "h2", text: "2. Medencés gyakorlat — a skillek otthona" },
      {
        type: "p",
        text: "Az elméleti alapok után a medence következik. Itt nyugodt, ellenőrzött körülmények között gyakorolod be azokat a skilleket, amelyek a nyílt vízi merülésen elengedhetetlenek. A medence a búvárok edzőterme — itt válsz magabiztossá.",
      },
      { type: "h3", text: "Tipikus medencés gyakorlatok" },
      {
        type: "ul",
        items: [
          "Maszkürítés és újrafelhelyezés víz alatt.",
          "Légzőautomata visszanyerés és tisztítás.",
          "Buddy levegőmegosztás (octopus).",
          "Lebegési kontroll — neutrális trim.",
          "Vészfelemelkedés szabályos sebességgel.",
        ],
      },
      {
        type: "img",
        src: maskSkill.url,
        alt: "NAUI medencei maszkgyakorlat búvártanfolyam keretében — Búvárkodás Erdély",
        caption: "Maszkürítés: az egyik első és legfontosabb skill.",
      },
      {
        type: "img",
        src: uwTraining.url,
        alt: "Búvártanfolyam víz alatti pillanata — oktató és tanítvány skill gyakorlat közben a medencében",
      },
      { type: "h2", text: "3. Nyílt vízi merülés — a vizsga előtti élmény" },
      {
        type: "p",
        text: "A NAUI Open Water Diver tanfolyam minimum 4 nyílt vízi merülést ír elő. Ezeket Erdély gyönyörű tavain és bányatavain teljesítjük, ahol a látótávolság és a környezet ideális kezdő búvároknak. Itt minden, amit a medencében tanultál, valós környezetbe kerül.",
      },
      {
        type: "img",
        src: groupLake,
        alt: "Búvártanfolyam csoport nyílt vízi merülés előtt egy erdélyi tó partján",
        caption: "Nyílt vízi modul — egy erdélyi tó partján.",
      },
      {
        type: "ul",
        items: [
          "Merülés #1: lebegési kontroll és tájékozódás.",
          "Merülés #2: navigáció kompasszal és természetes pontokkal.",
          "Merülés #3: vészhelyzeti gyakorlatok valós környezetben.",
          "Merülés #4: tervezett élménymerülés, mintha már certifikált lennél.",
        ],
      },
      { type: "h2", text: "4. Biztonsági protokollok — a kompromisszummentes pillér" },
      {
        type: "p",
        text: "A NAUI rendszer alapja, hogy a biztonság nem opció. Minden merülés előtt pre-dive check, párban dolgozó buddy-rendszer és világos vészhelyzeti terv készül. A Búvárkodás Erdélynél ezt nem formalitásként kezeljük, hanem életmódként.",
      },
      {
        type: "img",
        src: dockCheck,
        alt: "Búvárfelszerelés ellenőrzés a stégen — biztonsági protokoll búvártanfolyam előtt",
        caption: "Pre-dive check — a stégen, minden merülés előtt.",
      },
      {
        type: "img",
        src: practice,
        alt: "Búvárpalack és BCD a medence szélén — biztonsági ellenőrzés búvártanfolyamon",
      },
      { type: "h2", text: "5. Vizsga és NAUI minősítés" },
      {
        type: "p",
        text: "A tanfolyam végén egy elméleti írásbeli vizsga és gyakorlati értékelés következik. Ha sikeres vagy, megkapod a nemzetközileg elismert NAUI minősítésedet, amellyel a világ bármely búvárközpontjában merülhetsz vagy folytathatod a képzést haladó szintekkel — Advanced, Rescue, Master Diver vagy akár oktatói szint felé.",
      },
      {
        type: "img",
        src: advanced.url,
        alt: "Advanced Open Water búvárok közös ereszkedése a mélybe — NAUI továbbképzés",
        caption: "Open Water után jön az Advanced — és az igazi mélységek.",
      },
      { type: "h2", text: "Miért érdemes a Búvárkodás Erdélyt választani?" },
      {
        type: "quote",
        text: "Nem csak tanfolyamot adunk — egy életre szóló közösséget és tudást.",
      },
      {
        type: "ul",
        items: [
          "Nemzetközileg elismert NAUI minősítés.",
          "Kis csoportok, személyre szabott figyelem.",
          "Helyi merülőhelyek alapos ismerete.",
          "Kompromisszummentes biztonsági szemlélet.",
          "Folyamatos közösség és haladó képzések.",
        ],
      },
      {
        type: "img",
        src: okSign,
        alt: "Búvár OK jelzéssel a víz felszínén sikeres NAUI tanfolyam után",
      },
      {
        type: "p",
        text: "Ha készen állsz a kezdésre, nézd meg részletes NAUI tanfolyam oldalunkat, böngészd a szolgáltatásainkat, vagy vedd fel velünk a kapcsolatot — segítünk megtalálni a számodra ideális képzési utat.",
      },
      {
        type: "img",
        src: portrait.url,
        alt: "NAUI minősítésű búvár portré víz alatt — Búvárkodás Erdély",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("hu-HU", { year: "numeric", month: "long", day: "numeric" });
}
