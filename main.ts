export type LanguagesCodes="en"|"es"|"fr"|"de"|"ru"|"uz"|"it"|"pt"|"zh"|"ja"|"ko"|"ar"|"tr"|"hi"|"bn"|"vi"|"th"|"nl"|"pl"|"sv"|"he"|"id"|"ms"|"el"|"hu"|"ro"|"cs"|"sk"|"sr"|"hr"|"sl"|"bg"|"uk"|"lt"|"lv"|"et"|"fi"|"da"|"no"|"is"|"af"|"sw"|"ta"|"te"|"kn"|"ml"|"gu"|"ur"|"am"|"fa"|"mt"|"eu"|"gl";
const translations:Record<string,{y:string;n:string}>={en:{y:"Yes",n:"No"},es:{y:"Sí",n:"No"},fr:{y:"Oui",n:"Non"},de:{y:"Ja",n:"Nein"},ru:{y:"Да",n:"Нет"},uz:{y:"Ha",n:"Yo‘q"},it:{y:"Sì",n:"No"},pt:{y:"Sim",n:"Não"},zh:{y:"是",n:"否"},ja:{y:"はい",n:"いいえ"},ko:{y:"예",n:"아니요"},ar:{y:"نعم",n:"لا"},tr:{y:"Evet",n:"Hayır"},hi:{y:"हाँ",n:"नहीं"},bn:{y:"হ্যাঁ",n:"না"},vi:{y:"Có",n:"Không"},th:{y:"ใช่",n:"ไม่ใช่"},nl:{y:"Ja",n:"Nee"},pl:{y:"Tak",n:"Nie"},sv:{y:"Ja",n:"Nej"},he:{y:"כן",n:"לא"},id:{y:"Ya",n:"Tidak"},ms:{y:"Ya",n:"Tidak"},el:{y:"Ναι",n:"Όχι"},hu:{y:"Igen",n:"Nem"},ro:{y:"Da",n:"Nu"},cs:{y:"Ano",n:"Ne"},sk:{y:"Áno",n:"Nie"},sr:{y:"Да",n:"Не"},hr:{y:"Da",n:"Ne"},sl:{y:"Da",n:"Ne"},bg:{y:"Да",n:"Не"},uk:{y:"Так",n:"Ні"},lt:{y:"Taip",n:"Ne"},lv:{y:"Jā",n:"Nē"},et:{y:"Jah",n:"Ei"},fi:{y:"Kyllä",n:"Ei"},da:{y:"Ja",n:"Nej"},no:{y:"Ja",n:"Nei"},is:{y:"Já",n:"Nei"},af:{y:"Ja",n:"Nee"},sw:{y:"Ndio",n:"Hapana"},ta:{y:"ஆம்",n:"இல்லை"},te:{y:"అవును",n:"కాదు"},kn:{y:"ಹೌದು",n:"ಇಲ್ಲ"},ml:{y:"അതെ",n:"ഇല്ല"},gu:{y:"હા",n:"ના"},ur:{y:"جی ہاں",n:"نہیں"},am:{y:"አዎ",n:"አይ"},fa:{y:"بله",n:"نه"},mt:{y:"Iva",n:"Le"},eu:{y:"Bai",n:"Ez"},gl:{y:"Si",n:"Non"}};
/**
 * Returns a localized 'Yes' or 'No' based on the input boolean or string.
 *
 * @param text - Boolean or string to determine the response.
 * @param lang - Optional current language for translation (defaults to 'en').
 * @returns Localized 'Yes' or 'No' string based on the provided or default to English if language is unsupported.
 */
export default function yesOrNoText(text:boolean|string,lang:LanguagesCodes="en"):string{
  return translations?.[lang]?.[!!text?"y":"n"];
}