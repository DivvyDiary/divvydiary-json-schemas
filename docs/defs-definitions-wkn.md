# Untitled string in Symbol Schema

```txt
https://divvydiary.com/schemas/symbol.json#/properties/wkn/oneOf/0
```

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                         |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [symbol.json\*](../src/schemas/symbol.json "open original schema") |

## 0 Type

`string`

## 0 Constraints

**maximum length**: the maximum number of characters for this string is: `6`

**minimum length**: the minimum number of characters for this string is: `6`

**pattern**: the string must match the following regular expression:

```regexp
^[A-Z0-9]{6}$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Z0-9%5D%7B6%7D%24 "try regular expression with regexr.com")
