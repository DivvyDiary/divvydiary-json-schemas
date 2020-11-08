# User Schema

```txt
https://divvydiary.com/schemas/user.json
```

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                   |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [user.json](../src/schemas/user.json "open original schema") |

## User Type

`object` ([User](user.md))

# User Properties

| Property                                              | Type      | Required | Nullable       | Defined by                                                                                                                          |
| :---------------------------------------------------- | --------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                             | `integer` | Optional | cannot be null | [User](user-properties-id.md "https://divvydiary.com/schemas/user.json#/properties/id")                                             |
| [email](#email)                                       | `string`  | Optional | cannot be null | [User](user-properties-email.md "https://divvydiary.com/schemas/user.json#/properties/email")                                       |
| [forename](#forename)                                 | `string`  | Optional | cannot be null | [User](user-properties-forename.md "https://divvydiary.com/schemas/user.json#/properties/forename")                                 |
| [newsletter](#newsletter)                             | `boolean` | Optional | cannot be null | [User](user-properties-newsletter.md "https://divvydiary.com/schemas/user.json#/properties/newsletter")                             |
| [emailConfirmed](#emailconfirmed)                     | `boolean` | Optional | cannot be null | [User](user-properties-emailconfirmed.md "https://divvydiary.com/schemas/user.json#/properties/emailConfirmed")                     |
| [currency](#currency)                                 | Merged    | Optional | cannot be null | [User](user-properties-currency.md "https://divvydiary.com/schemas/user.json#/properties/currency")                                 |
| [apiKey](#apikey)                                     | Merged    | Optional | cannot be null | [User](user-properties-apikey.md "https://divvydiary.com/schemas/user.json#/properties/apiKey")                                     |
| [emailNotificationDaily](#emailnotificationdaily)     | `boolean` | Optional | cannot be null | [User](user-properties-emailnotificationdaily.md "https://divvydiary.com/schemas/user.json#/properties/emailNotificationDaily")     |
| [emailNotificationWeekly](#emailnotificationweekly)   | `boolean` | Optional | cannot be null | [User](user-properties-emailnotificationweekly.md "https://divvydiary.com/schemas/user.json#/properties/emailNotificationWeekly")   |
| [emailNotificationMonthly](#emailnotificationmonthly) | `boolean` | Optional | cannot be null | [User](user-properties-emailnotificationmonthly.md "https://divvydiary.com/schemas/user.json#/properties/emailNotificationMonthly") |
| [pushNotificationDaily](#pushnotificationdaily)       | `boolean` | Optional | cannot be null | [User](user-properties-pushnotificationdaily.md "https://divvydiary.com/schemas/user.json#/properties/pushNotificationDaily")       |

## id

`id`

- is optional
- Type: `integer`
- cannot be null
- defined in: [User](user-properties-id.md "https://divvydiary.com/schemas/user.json#/properties/id")

### id Type

`integer`

### id Constraints

**maximum**: the value of this number must smaller than or equal to: `4294967295`

**minimum**: the value of this number must greater than or equal to: `1`

## email

`email`

- is optional
- Type: `string`
- cannot be null
- defined in: [User](user-properties-email.md "https://divvydiary.com/schemas/user.json#/properties/email")

### email Type

`string`

### email Constraints

**maximum length**: the maximum number of characters for this string is: `255`

**email**: the string must be an email address, according to [RFC 5322, section 3.4.1](https://tools.ietf.org/html/rfc5322 "check the specification")

## forename

`forename`

- is optional
- Type: `string`
- cannot be null
- defined in: [User](user-properties-forename.md "https://divvydiary.com/schemas/user.json#/properties/forename")

### forename Type

`string`

### forename Constraints

**maximum length**: the maximum number of characters for this string is: `255`

## newsletter

`newsletter`

- is optional
- Type: `boolean`
- cannot be null
- defined in: [User](user-properties-newsletter.md "https://divvydiary.com/schemas/user.json#/properties/newsletter")

### newsletter Type

`boolean`

## emailConfirmed

`emailConfirmed`

- is optional
- Type: `boolean`
- cannot be null
- defined in: [User](user-properties-emailconfirmed.md "https://divvydiary.com/schemas/user.json#/properties/emailConfirmed")

### emailConfirmed Type

`boolean`

## currency

`currency`

- is optional
- Type: merged type ([Details](user-properties-currency.md))
- cannot be null
- defined in: [User](user-properties-currency.md "https://divvydiary.com/schemas/user.json#/properties/currency")

### currency Type

merged type ([Details](user-properties-currency.md))

one (and only one) of

- [Untitled string in User](defs-definitions-currency.md "check type definition")
- [Untitled null in User](user-properties-currency-oneof-1.md "check type definition")

## apiKey

`apiKey`

- is optional
- Type: merged type ([Details](user-properties-apikey.md))
- cannot be null
- defined in: [User](user-properties-apikey.md "https://divvydiary.com/schemas/user.json#/properties/apiKey")

### apiKey Type

merged type ([Details](user-properties-apikey.md))

one (and only one) of

- [Untitled string in User](defs-definitions-uuid.md "check type definition")
- [Untitled null in User](user-properties-apikey-oneof-1.md "check type definition")

## emailNotificationDaily

`emailNotificationDaily`

- is optional
- Type: `boolean`
- cannot be null
- defined in: [User](user-properties-emailnotificationdaily.md "https://divvydiary.com/schemas/user.json#/properties/emailNotificationDaily")

### emailNotificationDaily Type

`boolean`

## emailNotificationWeekly

`emailNotificationWeekly`

- is optional
- Type: `boolean`
- cannot be null
- defined in: [User](user-properties-emailnotificationweekly.md "https://divvydiary.com/schemas/user.json#/properties/emailNotificationWeekly")

### emailNotificationWeekly Type

`boolean`

## emailNotificationMonthly

`emailNotificationMonthly`

- is optional
- Type: `boolean`
- cannot be null
- defined in: [User](user-properties-emailnotificationmonthly.md "https://divvydiary.com/schemas/user.json#/properties/emailNotificationMonthly")

### emailNotificationMonthly Type

`boolean`

## pushNotificationDaily

`pushNotificationDaily`

- is optional
- Type: `boolean`
- cannot be null
- defined in: [User](user-properties-pushnotificationdaily.md "https://divvydiary.com/schemas/user.json#/properties/pushNotificationDaily")

### pushNotificationDaily Type

`boolean`
