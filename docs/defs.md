# Definitions Schema

```txt
https://divvydiary.com/schemas/defs.json
```

| Abstract               | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                           |
| :--------------------- | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ---------------------------------------------------- |
| Cannot be instantiated | Yes        | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [defs.json](../out/defs.json "open original schema") |

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
| `"AUD"` |             |
| `"BGN"` |             |
| `"BRL"` |             |
| `"CAD"` |             |
| `"CHF"` |             |
| `"CNY"` |             |
| `"CZK"` |             |
| `"DKK"` |             |
| `"EUR"` |             |
| `"GBP"` |             |
| `"HKD"` |             |
| `"HRK"` |             |
| `"HUF"` |             |
| `"IDR"` |             |
| `"ILS"` |             |
| `"INR"` |             |
| `"ISK"` |             |
| `"JPY"` |             |
| `"KRW"` |             |
| `"MXN"` |             |
| `"MYR"` |             |
| `"NOK"` |             |
| `"NZD"` |             |
| `"PHP"` |             |
| `"PLN"` |             |
| `"RON"` |             |
| `"RUB"` |             |
| `"SEK"` |             |
| `"SGD"` |             |
| `"THB"` |             |
| `"TRY"` |             |
| `"USD"` |             |
| `"ZAR"` |             |

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
