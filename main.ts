/**
 * Returns a localized 'Yes' or 'No' based on the input boolean or string.
 *
 * @param text - Boolean or string to determine the response.
 * @param lang - Optional current language for translation (defaults to 'en').
 * @returns Localized 'Yes' or 'No' string based on the provided or default language.
 */
export default function yesOrNoText(text: boolean | string, lang: string = "en"): string {
  const translations: Record<string, { yes: string; no: string }> = {
    en: { yes: "Yes", no: "No" },
    es: { yes: "Sí", no: "No" },
    fr: { yes: "Oui", no: "Non" },
    de: { yes: "Ja", no: "Nein" },
    ru: { yes: "Да", no: "Нет" },
    uz: { yes: "Ha", no: "Yo‘q" },
    it: { yes: "Sì", no: "No" },
    pt: { yes: "Sim", no: "Não" },
    zh: { yes: "是", no: "否" },
    ja: { yes: "はい", no: "いいえ" },
    ko: { yes: "예", no: "아니요" },
    ar: { yes: "نعم", no: "لا" },
    tr: { yes: "Evet", no: "Hayır" },
    hi: { yes: "हाँ", no: "नहीं" },
    bn: { yes: "হ্যাঁ", no: "না" },
    vi: { yes: "Có", no: "Không" },
    th: { yes: "ใช่", no: "ไม่ใช่" },
    nl: { yes: "Ja", no: "Nee" },
    pl: { yes: "Tak", no: "Nie" },
    sv: { yes: "Ja", no: "Nej" },
    he: { yes: "כן", no: "לא" },
    id: { yes: "Ya", no: "Tidak" },
    ms: { yes: "Ya", no: "Tidak" },
    el: { yes: "Ναι", no: "Όχι" },
    hu: { yes: "Igen", no: "Nem" },
    ro: { yes: "Da", no: "Nu" },
    cs: { yes: "Ano", no: "Ne" },
    sk: { yes: "Áno", no: "Nie" },
    sr: { yes: "Да", no: "Не" },
    hr: { yes: "Da", no: "Ne" },
    sl: { yes: "Da", no: "Ne" },
    bg: { yes: "Да", no: "Не" },
    uk: { yes: "Так", no: "Ні" },
    lt: { yes: "Taip", no: "Ne" },
    lv: { yes: "Jā", no: "Nē" },
    et: { yes: "Jah", no: "Ei" },
    fi: { yes: "Kyllä", no: "Ei" },
    da: { yes: "Ja", no: "Nej" },
    no: { yes: "Ja", no: "Nei" },
    is: { yes: "Já", no: "Nei" },
    af: { yes: "Ja", no: "Nee" },
    sw: { yes: "Ndio", no: "Hapana" },
    ta: { yes: "ஆம்", no: "இல்லை" },
    te: { yes: "అవును", no: "కాదు" },
    kn: { yes: "ಹೌದು", no: "ಇಲ್ಲ" },
    ml: { yes: "അതെ", no: "ഇല്ല" },
    gu: { yes: "હા", no: "ના" },
    ur: { yes: "جی ہاں", no: "نہیں" },
    am: { yes: "አዎ", no: "አይ" },
    fa: { yes: "بله", no: "نه" },
    mt: { yes: "Iva", no: "Le" },
    eu: { yes: "Bai", no: "Ez" },
    gl: { yes: "Si", no: "Non" },
  };

  const translation = translations[lang] || translations["en"]; // Default to English if language is unsupported
  return text ? translation?.yes : translation?.no;
}