# Symbol Schema

```txt
https://divvydiary.com/schemas/symbol.json
```

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                       |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [symbol.json](../src/schemas/symbol.json "open original schema") |

## Symbol Type

`object` ([Symbol](symbol.md))

# Symbol Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                               |
| :-------------------- | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------- |
| [name](#name)         | `string` | Optional | cannot be null | [Symbol](symbol-properties-name.md "https://divvydiary.com/schemas/symbol.json#/properties/name")        |
| [symbol](#symbol)     | `string` | Optional | cannot be null | [Symbol](symbol-properties-symbol.md "https://divvydiary.com/schemas/symbol.json#/properties/symbol")    |
| [isin](#isin)         | `string` | Optional | cannot be null | [Symbol](defs-definitions-isin.md "https://divvydiary.com/schemas/symbol.json#/properties/isin")         |
| [wkn](#wkn)           | Merged   | Optional | cannot be null | [Symbol](symbol-properties-wkn.md "https://divvydiary.com/schemas/symbol.json#/properties/wkn")          |
| [exchange](#exchange) | `string` | Optional | cannot be null | [Symbol](defs-definitions-exchange.md "https://divvydiary.com/schemas/symbol.json#/properties/exchange") |

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