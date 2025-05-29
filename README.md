# yes-or-no-text
A lightweight utility function to return localized "Yes" or "No" text based on a boolean or string input. Supports translations in over 50 languages with an optional language parameter.

## Installation
Install the package using npm or yarn:

```bash
npm install yes-or-no-text
```


## Usage
### Import the Function
```typescript
import yesOrNoText from 'yes-or-no-text'
```

### Example Usage
```typescript
//Default to English
console.log(yesOrNoText(true))//Yes
console.log(yesOrNoText(false))//No

//Specify a language
console.log(yesOrNoText(true, "fr"))//Oui
console.log(yesOrNoText(false, "es"))//No
console.log(yesOrNoText('true', "uz"))//Ha

//Unsupported languages or empty param defaults to English
console.log(yesOrNoText(true, "xyz"))//Yes
console.log(yesOrNoText(true))//Yes
```

## API
### `yesOrNoText(t: boolean | string, l?: string): string`

#### Parameters:
- **`t`**: A boolean or string that determines the output. If truthy, returns the localized "Yes." If falsy, returns the localized "No."
- **`l`** _(optional)_: A string representing the desired language code. Defaults to `'en'` (English).

#### Returns:
A localized string for "Yes" or "No" in the specified language.

## Supported Languages
| Code | Language   | Yes    | No     |
| ---- | ---------- | ------ | ------ |
| en   | English    | Yes    | No     |
| ru   | Russian    | Да     | Нет    |
| uz   | Uzbek      | Ha     | Yo‘q   |
| es   | Spanish    | Sí     | No     |
| fr   | French     | Oui    | Non    |
| de   | German     | Ja     | Nein   |
| it   | Italian    | Sì     | No     |
| pt   | Portuguese | Sim    | Não    |
| zh   | Chinese    | 是     | 否     |
| ja   | Japanese   | はい   | いいえ |
| ko   | Korean     | 예     | 아니요 |
| ar   | Arabic     | نعم    | لا     |
| tr   | Turkish    | Evet   | Hayır  |
| hi   | Hindi      | हाँ    | नहीं   |
| bn   | Bengali    | হ্যাঁ  | না     |
| vi   | Vietnamese | Có     | Không  |
| th   | Thai       | ใช่    | ไม่ใช่ |
| nl   | Dutch      | Ja     | Nee    |
| pl   | Polish     | Tak    | Nie    |
| sv   | Swedish    | Ja     | Nej    |
| he   | Hebrew     | כן     | לא     |
| id   | Indonesian | Ya     | Tidak  |
| ms   | Malay      | Ya     | Tidak  |
| el   | Greek      | Ναι    | Όχι    |
| hu   | Hungarian  | Igen   | Nem    |
| ro   | Romanian   | Da     | Nu     |
| cs   | Czech      | Ano    | Ne     |
| sk   | Slovak     | Áno    | Nie    |
| sr   | Serbian    | Да     | Не     |
| hr   | Croatian   | Da     | Ne     |
| sl   | Slovenian  | Da     | Ne     |
| bg   | Bulgarian  | Да     | Не     |
| uk   | Ukrainian  | Так    | Ні     |
| lt   | Lithuanian | Taip   | Ne     |
| lv   | Latvian    | Jā     | Nē     |
| et   | Estonian   | Jah    | Ei     |
| fi   | Finnish    | Kyllä  | Ei     |
| da   | Danish     | Ja     | Nej    |
| no   | Norwegian  | Ja     | Nei    |
| is   | Icelandic  | Já     | Nei    |
| af   | Afrikaans  | Ja     | Nee    |
| sw   | Swahili    | Ndio   | Hapana |
| ta   | Tamil      | ஆம்    | இல்லை  |
| te   | Telugu     | అవును  | కాదు   |
| kn   | Kannada    | ಹೌದು   | ಇಲ್ಲ   |
| ml   | Malayalam  | അതെ    | ഇല്ല   |
| gu   | Gujarati   | હા     | ના     |
| ur   | Urdu       | جی ہاں | نہیں   |
| am   | Amharic    | አዎ     | አይ     |
| fa   | Persian    | بله    | نه     |
| mt   | Maltese    | Iva    | Le     |
| eu   | Basque     | Bai    | Ez     |
| gl   | Galician   | Si     | Non    |

## License
This project is licensed under the MIT License.

## Contributions
Feel free to submit issues or pull requests for additional features or translations.