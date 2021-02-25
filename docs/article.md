# Article Schema

```txt
https://divvydiary.com/schemas/article.json
```

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [article.json](../src/schemas/article.json "open original schema") |

## Article Type

`object` ([Article](article.md))

# Article Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                   |
| :-------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------- |
| [id](#id)             | `number` | Required | cannot be null | [Article](article-properties-id.md "https://divvydiary.com/schemas/article.json#/properties/id")             |
| [date](#date)         | `string` | Required | cannot be null | [Article](article-properties-date.md "https://divvydiary.com/schemas/article.json#/properties/date")         |
| [title](#title)       | `string` | Required | cannot be null | [Article](article-properties-title.md "https://divvydiary.com/schemas/article.json#/properties/title")       |
| [abstract](#abstract) | `string` | Required | cannot be null | [Article](article-properties-abstract.md "https://divvydiary.com/schemas/article.json#/properties/abstract") |
| [fulltext](#fulltext) | `string` | Required | cannot be null | [Article](article-properties-fulltext.md "https://divvydiary.com/schemas/article.json#/properties/fulltext") |

## id

`id`

- is required

- Type: `number`

- cannot be null

- defined in: [Article](article-properties-id.md "https://divvydiary.com/schemas/article.json#/properties/id")

### id Type

`number`

### id Constraints

**maximum**: the value of this number must smaller than or equal to: `4294967295`

**minimum**: the value of this number must greater than or equal to: `1`

## date

`date`

- is required

- Type: `string`

- cannot be null

- defined in: [Article](article-properties-date.md "https://divvydiary.com/schemas/article.json#/properties/date")

### date Type

`string`

### date Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## title

`title`

- is required

- Type: `string`

- cannot be null

- defined in: [Article](article-properties-title.md "https://divvydiary.com/schemas/article.json#/properties/title")

### title Type

`string`

### title Constraints

**maximum length**: the maximum number of characters for this string is: `255`

**minimum length**: the minimum number of characters for this string is: `3`

## abstract

`abstract`

- is required

- Type: `string`

- cannot be null

- defined in: [Article](article-properties-abstract.md "https://divvydiary.com/schemas/article.json#/properties/abstract")

### abstract Type

`string`

### abstract Constraints

**minimum length**: the minimum number of characters for this string is: `3`

## fulltext

`fulltext`

- is required

- Type: `string`

- cannot be null

- defined in: [Article](article-properties-fulltext.md "https://divvydiary.com/schemas/article.json#/properties/fulltext")

### fulltext Type

`string`

### fulltext Constraints

**minimum length**: the minimum number of characters for this string is: `3`
