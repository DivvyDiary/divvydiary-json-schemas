# Symbol Schema

```txt
https://divvydiary.com/schemas/symbol.json
```

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [symbol.json](../src/schemas/symbol.json "open original schema") |

## Symbol Type

`object` ([Symbol](symbol.md))

# Symbol Properties

| Property                                | Type     | Required | Nullable       | Defined by                                                                                                                 |
| :-------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                           | `string` | Optional | cannot be null | [Symbol](symbol-properties-name.md "https://divvydiary.com/schemas/symbol.json#/properties/name")                          |
| [symbol](#symbol)                       | `string` | Optional | cannot be null | [Symbol](symbol-properties-symbol.md "https://divvydiary.com/schemas/symbol.json#/properties/symbol")                      |
| [isin](#isin)                           | `string` | Optional | cannot be null | [Symbol](defs-definitions-isin.md "https://divvydiary.com/schemas/symbol.json#/properties/isin")                           |
| [wkn](#wkn)                             | Merged   | Optional | cannot be null | [Symbol](symbol-properties-wkn.md "https://divvydiary.com/schemas/symbol.json#/properties/wkn")                            |
| [exchange](#exchange)                   | `string` | Optional | cannot be null | [Symbol](defs-definitions-exchange.md "https://divvydiary.com/schemas/symbol.json#/properties/exchange")                   |
| [dividendFrequency](#dividendfrequency) | `string` | Optional | cannot be null | [Symbol](defs-definitions-dividendfrequency.md "https://divvydiary.com/schemas/symbol.json#/properties/dividendFrequency") |

## name

`name`

- is optional

- Type: `string`

- cannot be null

- defined in: [Symbol](symbol-properties-name.md "https://divvydiary.com/schemas/symbol.json#/properties/name")

### name Type

`string`

### name Constraints

**maximum length**: the maximum number of characters for this string is: `255`

## symbol

`symbol`

- is optional

- Type: `string`

- cannot be null

- defined in: [Symbol](symbol-properties-symbol.md "https://divvydiary.com/schemas/symbol.json#/properties/symbol")

### symbol Type

`string`

### symbol Constraints

**maximum length**: the maximum number of characters for this string is: `6`

**minimum length**: the minimum number of characters for this string is: `1`

## isin

`isin`

- is optional

- Type: `string`

- cannot be null

- defined in: [Symbol](defs-definitions-isin.md "https://divvydiary.com/schemas/symbol.json#/properties/isin")

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

## wkn

`wkn`

- is optional

- Type: merged type ([Details](symbol-properties-wkn.md))

- cannot be null

- defined in: [Symbol](symbol-properties-wkn.md "https://divvydiary.com/schemas/symbol.json#/properties/wkn")

### wkn Type

merged type ([Details](symbol-properties-wkn.md))

one (and only one) of

- [Untitled string in Symbol](defs-definitions-wkn.md "check type definition")

- [Untitled null in Symbol](symbol-properties-wkn-oneof-1.md "check type definition")

## exchange

`exchange`

- is optional

- Type: `string`

- cannot be null

- defined in: [Symbol](defs-definitions-exchange.md "https://divvydiary.com/schemas/symbol.json#/properties/exchange")

### exchange Type

`string`

### exchange Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"OTC"`  |             |
| `"XAMS"` |             |
| `"XASX"` |             |
| `"XBER"` |             |
| `"XBRN"` |             |
| `"XBRU"` |             |
| `"XCBO"` |             |
| `"XCSE"` |             |
| `"XETR"` |             |
| `"XFRA"` |             |
| `"XHEL"` |             |
| `"XJSE"` |             |
| `"XLIT"` |             |
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
| `"XSES"` |             |
| `"XSHG"` |             |
| `"XSTO"` |             |
| `"XSWX"` |             |
| `"XTAL"` |             |
| `"XTKS"` |             |
| `"XTSE"` |             |
| `"XTSX"` |             |
| `"XWAR"` |             |
| `"XWBO"` |             |

## dividendFrequency

`dividendFrequency`

- is optional

- Type: `string`

- cannot be null

- defined in: [Symbol](defs-definitions-dividendfrequency.md "https://divvydiary.com/schemas/symbol.json#/properties/dividendFrequency")

### dividendFrequency Type

`string`

### dividendFrequency Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"none"`       |             |
| `"monthly"`    |             |
| `"quarterly"`  |             |
| `"biannually"` |             |
| `"annually"`   |             |
