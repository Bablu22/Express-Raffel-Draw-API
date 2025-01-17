﻿# Express-Raffel-Draw-API

# Raffle Draw API


## Features

- Sell sungle Ticket
- Sell Bulk(Multiple) Ticket
- Get all Ticket
- Get ticket By Id
- Get ticket By Username
- Update ticket
- Delete ticket
- Raffle Draw ticket



## API Reference

#### Get all items

```http
  GET /api/v1/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get Ticket by username

```http
  GET /api/v1/u/username
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. username of item to fetch |


#### Get Ticket by Id

```http
  GET /api/v1/t/ticketId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ticketId`      | `string` | **Required**. ticketId of item to fetch |


#### Sell single ticket

```http
  POST /api/v1/sell
```


#### Sell Bulk ticket

```http
  POST /api/v1/bulk
```
#### Raffle draw ticket

```http
  POST /api/v1/draw
  Pass a winnercount valuse as json()
```



```http
  PUT /api/v1/Id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Id`      | `string` | **Required**. Id of item to Update |
```http
  Delete /api/v1/Id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Id`      | `string` | **Required**. Id of item to Delete |

## API Link

- [https://blooming-wildwood-65908.herokuapp.com/](https://blooming-wildwood-65908.herokuapp.com/)

