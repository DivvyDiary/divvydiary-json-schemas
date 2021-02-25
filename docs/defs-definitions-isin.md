# Untitled string in Symbol Schema

```txt
https://divvydiary.com/schemas/symbol.json#/properties/isin
```

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                         |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [symbol.json\*](../src/schemas/symbol.json "open original schema") |

## isin Type

`string`

## isin Constraints

**maximum length**: the maximum number of characters for this string is: `12`

**minimum length**: the minimum number of characters for this string is: `12`

**pattern**: the string must match the following regular expression:

```regexp
^[A-Z]{2}[A-Z0-9]{9}[0-9]{1}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Z%5D%7B2%7D%5BA-Z0-9%5D%7B9%7D%5B0-9%5D%7B1%7D%24 "try regular expression with regexr.com")
