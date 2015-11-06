# random-data-provider

Generates random data includin name, address, mothers maiden name, geo coordinates, phone, age, birthday, zodiac signs, email, username, password, credit card, employment, height, weight ,tracking number ups western union moneygram, color, vehicle, GUID

All Data are generated from fakenamegenerator.com

### Example

```js
var DataSource = require('random-data-provider');

DataSource.getRandomData([options]);

{ name: 'Steven H. West',
  addressLine: '3326 Nancy Street',
  city: 'Mebane',
  state: 'NC',
  zipCode: '27302',
  mothersMaidenName: 'Hunt',
  ssn: '238-82-XXXX',
  geoCoordinates: '36.18478, -79.283049',
  phone: '919-568-0810',
  DOB: 'September 1, 1959',
  age: '56 years old',
  zodiac: 'Virgo',
  emailAddress: 'StevenHWest@teleworm.us',
  userName: 'Ligationly',
  passWord: 'EiTh3oi5hae',
  website: 'TalkScope.com',
  cardNumber: '4929 3367 8846 6173',
  expires: '9/2019',
  cvv2: '493',
  company: 'Laneco',
  occupation: 'Credit reporter',
  height: '5\' 6" (168 centimeters)',
  weight: '158.0 pounds (71.8 kilograms)',
  bloodType: 'B+',
  upsTrackingNumber: '1Z 178 40A 27 5848 991 1',
  westernUnion: '2573378179',
  moneyGram: '16372294',
  favoriteColor: 'Blue',
  vehicle: '1993 Mitsubishi Mum 500',
  guid: 'c5cb551c-b5c0-49c4-87b4-4f05193db9c3' }


```

`options.gender` can take values 'random', 'male', 'female'

`options.country` Visit fa
```
["au", "as", "bg", "br", "ca", "cyen", "cygk", "cz", "dk", "ee", "fi", "fr", "gr", "gl", "hu", "is", "it", "nl", "nz", "no", "pl", "pt", "sl", "za", "sp", "sw", "sz", "tn", "uk", "us", "uy"];
```

`options.nameset`

```
["us", "ar", "au", "br", "celat", "ch", "zhtw", "hr", "cs", "dk", "nl", "en", "er", "fi", "fr", "gr", "gl", "sp", "hobbit", "hu", "is", "ig", "it", "jpja", "jp", "tlh", "ninja", "no", "fa", "pl", "ru", "rucyr", "gd", "sl", "sw", "th", "vn"];
```

Visit fakenamegenerator.com for detail list which you can pass.
