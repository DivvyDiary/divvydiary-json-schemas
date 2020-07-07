# Definitions Schema

```txt
https://divvydiary.com/schemas/defs.json
```

| Abstract               | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                   |
| :--------------------- | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------ |
| Cannot be instantiated | Yes        | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [defs.json](../src/schemas/defs.json "open original schema") |

## Definitions Type

unknown ([Definitions](defs.md))

# Definitions Definitions

## Definitions group currency

Reference this group by using

```json
{ "$ref": "https://divvydiary.com/schemas/defs.json#/definitions/currency" }
```

`currency`

- is optional
- Type: `string`
- cannot be null
- defined in: [Definitions](defs-definitions-currency.md "https://divvydiary.com/schemas/defs.json#/definitions/currency")

### currency Type

`string`

### currency Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation |
| :------ | ----------- |
| `"AED"` |             |
| `"AFN"` |             |
| `"ALL"` |             |
| `"AMD"` |             |
| `"ANG"` |             |
| `"AOA"` |             |
| `"ARS"` |             |
| `"AUD"` |             |
| `"AWG"` |             |
| `"AZN"` |             |
| `"BAM"` |             |
| `"BBD"` |             |
| `"BDT"` |             |
| `"BGN"` |             |
| `"BHD"` |             |
| `"BIF"` |             |
| `"BMD"` |             |
| `"BND"` |             |
| `"BOB"` |             |
| `"BRL"` |             |
| `"BSD"` |             |
| `"BTC"` |             |
| `"BTN"` |             |
| `"BWP"` |             |
| `"BYN"` |             |
| `"BYR"` |             |
| `"BZD"` |             |
| `"CAD"` |             |
| `"CDF"` |             |
| `"CHF"` |             |
| `"CLF"` |             |
| `"CLP"` |             |
| `"CNY"` |             |
| `"COP"` |             |
| `"CRC"` |             |
| `"CUC"` |             |
| `"CUP"` |             |
| `"CVE"` |             |
| `"CZK"` |             |
| `"DJF"` |             |
| `"DKK"` |             |
| `"DOP"` |             |
| `"DZD"` |             |
| `"EGP"` |             |
| `"ERN"` |             |
| `"ETB"` |             |
| `"EUR"` |             |
| `"FJD"` |             |
| `"FKP"` |             |
| `"GBP"` |             |
| `"GEL"` |             |
| `"GGP"` |             |
| `"GHS"` |             |
| `"GIP"` |             |
| `"GMD"` |             |
| `"GNF"` |             |
| `"GTQ"` |             |
| `"GYD"` |             |
| `"HKD"` |             |
| `"HNL"` |             |
| `"HRK"` |             |
| `"HTG"` |             |
| `"HUF"` |             |
| `"IDR"` |             |
| `"ILS"` |             |
| `"IMP"` |             |
| `"INR"` |             |
| `"IQD"` |             |
| `"IRR"` |             |
| `"ISK"` |             |
| `"JEP"` |             |
| `"JMD"` |             |
| `"JOD"` |             |
| `"JPY"` |             |
| `"KES"` |             |
| `"KGS"` |             |
| `"KHR"` |             |
| `"KMF"` |             |
| `"KPW"` |             |
| `"KRW"` |             |
| `"KWD"` |             |
| `"KYD"` |             |
| `"KZT"` |             |
| `"LAK"` |             |
| `"LBP"` |             |
| `"LKR"` |             |
| `"LRD"` |             |
| `"LSL"` |             |
| `"LTL"` |             |
| `"LVL"` |             |
| `"LYD"` |             |
| `"MAD"` |             |
| `"MDL"` |             |
| `"MGA"` |             |
| `"MKD"` |             |
| `"MMK"` |             |
| `"MNT"` |             |
| `"MOP"` |             |
| `"MRO"` |             |
| `"MUR"` |             |
| `"MVR"` |             |
| `"MWK"` |             |
| `"MXN"` |             |
| `"MYR"` |             |
| `"MZN"` |             |
| `"NAD"` |             |
| `"NGN"` |             |
| `"NIO"` |             |
| `"NOK"` |             |
| `"NPR"` |             |
| `"NZD"` |             |
| `"OMR"` |             |
| `"PAB"` |             |
| `"PEN"` |             |
| `"PGK"` |             |
| `"PHP"` |             |
| `"PKR"` |             |
| `"PLN"` |             |
| `"PYG"` |             |
| `"QAR"` |             |
| `"RON"` |             |
| `"RSD"` |             |
| `"RUB"` |             |
| `"RWF"` |             |
| `"SAR"` |             |
| `"SBD"` |             |
| `"SCR"` |             |
| `"SDG"` |             |
| `"SEK"` |             |
| `"SGD"` |             |
| `"SHP"` |             |
| `"SLL"` |             |
| `"SOS"` |             |
| `"SRD"` |             |
| `"STD"` |             |
| `"SVC"` |             |
| `"SYP"` |             |
| `"SZL"` |             |
| `"THB"` |             |
| `"TJS"` |             |
| `"TMT"` |             |
| `"TND"` |             |
| `"TOP"` |             |
| `"TRY"` |             |
| `"TTD"` |             |
| `"TWD"` |             |
| `"TZS"` |             |
| `"UAH"` |             |
| `"UGX"` |             |
| `"USD"` |             |
| `"UYU"` |             |
| `"UZS"` |             |
| `"VEF"` |             |
| `"VND"` |             |
| `"VUV"` |             |
| `"WST"` |             |
| `"XAF"` |             |
| `"XAG"` |             |
| `"XAU"` |             |
| `"XCD"` |             |
| `"XDR"` |             |
| `"XOF"` |             |
| `"XPF"` |             |
| `"YER"` |             |
| `"ZAR"` |             |
| `"ZMK"` |             |
| `"ZMW"` |             |
| `"ZWL"` |             |

## Definitions group exchange

Reference this group by using

```json
{ "$ref": "https://divvydiary.com/schemas/defs.json#/definitions/exchange" }
```

`exchange`

- is optional
- Type: `string`
- cannot be null
- defined in: [Definitions](defs-definitions-exchange.md "https://divvydiary.com/schemas/defs.json#/definitions/exchange")

### exchange Type

`string`

### exchange Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | ----------- |
| `"OTC"`  |             |
| `"XAMS"` |             |
| `"XASX"` |             |
| `"XBRN"` |             |
| `"XBRU"` |             |
| `"XCSE"` |             |
| `"XETR"` |             |
| `"XFRA"` |             |
| `"XHEL"` |             |
| `"XLON"` |             |
| `"XMAD"` |             |
| `"XMIL"` |             |
| `"XMOS"` |             |
| `"XNAS"` |             |
| `"XNSE"` |             |
| `"XNXC"` |             |
| `"XNYS"` |             |
| `"XOSL"` |             |
| `"XPAR"` |             |
| `"XSHG"` |             |
| `"XSTO"` |             |
| `"XSWX"` |             |
| `"XTSE"` |             |
| `"XTSX"` |             |
| `"XWBO"` |             |

## Definitions group isin

Reference this group by using

```json
{ "$ref": "https://divvydiary.com/schemas/defs.json#/definitions/isin" }
```

`isin`

- is optional
- Type: `string`
- cannot be null
- defined in: [Definitions](defs-definitions-isin.md "https://divvydiary.com/schemas/defs.json#/definitions/isin")

### isin Type

`string`

### isin Constraints

**maximum length**: the maximum number of characters for this string is: `12`

**minimum length**: the minimum number of characters for this string is: `12`

**pattern**: the string must match the following regular expression:

```regexp
^[A-Z]{2}[A-Z0-9]{9}[0-9]{1}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Z%5D%7B2%7D%5BA-Z0-9%5D%7B9%7D%5B0-9%5D%7B1%7D%24 "try regular expression with regexr.com")

## Definitions group password

Reference this group by using

```json
{ "$ref": "https://divvydiary.com/schemas/defs.json#/definitions/password" }
```

`password`

- is optional
- Type: `string`
- cannot be null
- defined in: [Definitions](defs-definitions-password.md "https://divvydiary.com/schemas/defs.json#/definitions/password")

### password Type

`string`

### password Constraints

**minimum length**: the minimum number of characters for this string is: `6`

## Definitions group uuid

Reference this group by using

```json
{ "$ref": "https://divvydiary.com/schemas/defs.json#/definitions/uuid" }
```

`uuid`

- is optional
- Type: `string`
- cannot be null
- defined in: [Definitions](defs-definitions-uuid.md "https://divvydiary.com/schemas/defs.json#/definitions/uuid")

### uuid Type

`string`

### uuid Constraints

**maximum length**: the maximum number of characters for this string is: `36`

**minimum length**: the minimum number of characters for this string is: `36`

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")

## Definitions group wkn

Reference this group by using

```json
{ "$ref": "https://divvydiary.com/schemas/defs.json#/definitions/wkn" }
```

`wkn`

- is optional
- Type: `string`
- cannot be null
- defined in: [Definitions](defs-definitions-wkn.md "https://divvydiary.com/schemas/defs.json#/definitions/wkn")

### wkn Type

`string`

### wkn Constraints

**maximum length**: the maximum number of characters for this string is: `6`

**minimum length**: the minimum number of characters for this string is: `6`

**pattern**: the string must match the following regular expression:

```regexp
^[A-Z0-9]{6}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Z0-9%5D%7B6%7D%24 "try regular expression with regexr.com")
