# Dividend Schema

```txt
https://divvydiary.com/schemas/dividend.json
```

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                           |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [dividend.json](../src/schemas/dividend.json "open original schema") |

## Dividend Type

`object` ([Dividend](dividend.md))

# Dividend Properties

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                          |
| :------------------------ | --------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------ |
| [id](#id)                 | `integer` | Optional | cannot be null | [Dividend](dividend-properties-id.md "https://divvydiary.com/schemas/dividend.json#/properties/id")                 |
| [exDate](#exDate)         | `string`  | Optional | cannot be null | [Dividend](dividend-properties-exdate.md "https://divvydiary.com/schemas/dividend.json#/properties/exDate")         |
| [payDate](#payDate)       | `string`  | Optional | cannot be null | [Dividend](dividend-properties-paydate.md "https://divvydiary.com/schemas/dividend.json#/properties/payDate")       |
| [name](#name)             | `string`  | Optional | cannot be null | [Dividend](dividend-properties-name.md "https://divvydiary.com/schemas/dividend.json#/properties/name")             |
| [symbol](#symbol)         | `string`  | Optional | cannot be null | [Dividend](dividend-properties-symbol.md "https://divvydiary.com/schemas/dividend.json#/properties/symbol")         |
| [amount](#amount)         | `number`  | Optional | cannot be null | [Dividend](dividend-properties-amount.md "https://divvydiary.com/schemas/dividend.json#/properties/amount")         |
| [lastAmount](#lastAmount) | `number`  | Optional | cannot be null | [Dividend](dividend-properties-lastamount.md "https://divvydiary.com/schemas/dividend.json#/properties/lastAmount") |
| [quantity](#quantity)     | `number`  | Optional | cannot be null | [Dividend](dividend-properties-quantity.md "https://divvydiary.com/schemas/dividend.json#/properties/quantity")     |
| [isin](#isin)             | `string`  | Optional | cannot be null | [Dividend](defs-definitions-isin.md "https://divvydiary.com/schemas/dividend.json#/properties/isin")                |
| [wkn](#wkn)               | Merged    | Optional | cannot be null | [Dividend](dividend-properties-wkn.md "https://divvydiary.com/schemas/dividend.json#/properties/wkn")               |
| [currency](#currency)     | `string`  | Optional | cannot be null | [Dividend](defs-definitions-currency.md "https://divvydiary.com/schemas/dividend.json#/properties/currency")        |

## id

`id`

- is optional
- Type: `integer`
- cannot be null
- defined in: [Dividend](dividend-properties-id.md "https://divvydiary.com/schemas/dividend.json#/properties/id")

### id Type

`integer`

### id Constraints

**minimum**: the value of this number must greater than or equal to: `1`

## exDate

`exDate`

- is optional
- Type: `string`
- cannot be null
- defined in: [Dividend](dividend-properties-exdate.md "https://divvydiary.com/schemas/dividend.json#/properties/exDate")

### exDate Type

`string`

### exDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## payDate

`payDate`

- is optional
- Type: `string`
- cannot be null
- defined in: [Dividend](dividend-properties-paydate.md "https://divvydiary.com/schemas/dividend.json#/properties/payDate")

### payDate Type

`string`

### payDate Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## name

`name`

- is optional
- Type: `string`
- cannot be null
- defined in: [Dividend](dividend-properties-name.md "https://divvydiary.com/schemas/dividend.json#/properties/name")

### name Type

`string`

### name Constraints

**maximum length**: the maximum number of characters for this string is: `255`

## symbol

`symbol`

- is optional
- Type: `string`
- cannot be null
- defined in: [Dividend](dividend-properties-symbol.md "https://divvydiary.com/schemas/dividend.json#/properties/symbol")

### symbol Type

`string`

### symbol Constraints

**maximum length**: the maximum number of characters for this string is: `6`

**minimum length**: the minimum number of characters for this string is: `1`

## amount

`amount`

- is optional
- Type: `number`
- cannot be null
- defined in: [Dividend](dividend-properties-amount.md "https://divvydiary.com/schemas/dividend.json#/properties/amount")

### amount Type

`number`

### amount Constraints

**multiple of**: the value of this number must be a multiple of: `0.0001`

**minimum**: the value of this number must greater than or equal to: `0`

## lastAmount

`lastAmount`

- is optional
- Type: `number`
- cannot be null
- defined in: [Dividend](dividend-properties-lastamount.md "https://divvydiary.com/schemas/dividend.json#/properties/lastAmount")

### lastAmount Type

`number`

### lastAmount Constraints

**multiple of**: the value of this number must be a multiple of: `0.0001`

**minimum**: the value of this number must greater than or equal to: `0`

## quantity

`quantity`

- is optional
- Type: `number`
- cannot be null
- defined in: [Dividend](dividend-properties-quantity.md "https://divvydiary.com/schemas/dividend.json#/properties/quantity")

### quantity Type

`number`

### quantity Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**minimum**: the value of this number must greater than or equal to: `0`

## isin

`isin`

- is optional
- Type: `string`
- cannot be null
- defined in: [Dividend](defs-definitions-isin.md "https://divvydiary.com/schemas/dividend.json#/properties/isin")

### isin Type

`string`

### isin Constraints

**maximum length**: the maximum number of characters for this string is: `12`

**minimum length**: the minimum number of characters for this string is: `12`

## wkn

`wkn`

- is optional
- Type: merged type ([Details](dividend-properties-wkn.md))
- cannot be null
- defined in: [Dividend](dividend-properties-wkn.md "https://divvydiary.com/schemas/dividend.json#/properties/wkn")

### wkn Type

merged type ([Details](dividend-properties-wkn.md))

one (and only one) of

- [Untitled string in Dividend](defs-definitions-wkn.md "check type definition")
- [Untitled null in Dividend](dividend-properties-wkn-oneof-1.md "check type definition")

## currency

`currency`

- is optional
- Type: `string`
- cannot be null
- defined in: [Dividend](defs-definitions-currency.md "https://divvydiary.com/schemas/dividend.json#/properties/currency")

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
