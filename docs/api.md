# Documentation for the Meetups-App REST API

<br>

__Endpoints__

<br>

Excepto &nbsp;&nbsp;*Meetups-App/auth/login*,&nbsp;&nbsp;todas las demas operaciones llevan el header:

<code>Authorization: Bearer *TOKEN*</code>

<br>

Ejemplo de un JSON Web __*TOKEN*__ válido: 

`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDQ0NWRlYmVjOTk1Y2Y4NWJlNWQzYSIsImlhdCI6MTY2NTU0MDg2MiwiZXhwIjoxNjY1NjI3MjYyfQ.DuVZ77_1monvuvVD91bHCjkuIwYQMlxgJlK4ZJctk-w`

<br>

Todos los *Request Body* y *Response Body* que se presentan a continuación:
* Se realizan en formato JSON
* Son *__bodies__* de ejemplo
* Van acompañados del header &nbsp; <code>Authorization: Bearer *TOKEN*</code> &nbsp; (excepto el endpoint *login*)

-------

## Autenticación de usuarios

<font size="3">

### POST /Meetups-App/auth/register

Request Body:
<br>
<code>
{
"name":"Juan",
"surname":"Garcia",
"dni":"12345678",
"email":"jgarcia01@gmail.com",
"telephone":"1177665544",
"is_admin":"false",
"password":"7dy47yry78"
}
</code>
<br>
<br>
Response Body:
<br>
<code>
{
  "message": "User registered successfully!"
}
</code>

<br>
<br>


### POST /Meetups-App/auth/login

Request Body:
<br>
<code>
{
  "email":"pepe@gmail.com",
  "password":"pepe1223"
}
</code>
<br>
<br>
Response Body:
<br>
<code>
{
  "message": "Logged-in successfully! Welcome!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDQ0NWRlYmVjOTk1Y2Y4NWJlNWQzYSIsImlhdCI6MTY2NTU0MDg2MiwiZXhwIjoxNjY1NjI3MjYyfQ.DuVZ77_1monvuvVD91bHCjkuIwYQMlxgJlK4ZJctk-w"
}
</code>

<br>
<br>

### POST /Meetups-App/auth/logout

Request Body:
<br>
<code> 
(ninguno)
</code>
<br>
<br>
Response Body:
<br>
<code>
{
  "message": "Logged-out successfully! Bye!"
}
</code>

<br>
<br>

----

## Pantalla de bienvenida

### GET /Meetups-App/

Request Body:
<br>
<code> 
(ninguno)
</code>
<br>
<br>
Response Body:
<br>
<code>
{
  "message": "Bienvenido a Meetups-App"
}
</code>

<br>
<br>

----

## CRUD de Meet-ups

### GET /Meetups-App/meetups/

Request Body:
<br>
<code> 
(ninguno)
</code>
<br>
<br>
Response Body:
<br>
<code>
[
  {
    "_id": "63446d427ba7b4ca36530c58",
    "name": "Mega Fiesta 2022",
    "description": "Fiesta por aumento de las acciones",
    "datetime": "2022-10-28T21:30:00.000Z",
    "place": "Centro Costa Salguero",
    "address": "Av. Costanera Rafael Obligado 1221, CABA",
    "organizer_id": "6342d4106216aa2ad593a005",
    "invited_people": [
      "6343b7b72c7f8efda107bb5f",
      "634445debec995cf85be5d3a",
      "6343b7b72c7f8efda107bb5f",
      "6343b7b72c7f8efda107bb5f"
    ],
    "checked-in_people": [],
    "is_over": false,
    "__v": 2
  }
]
</code>

<br>
<br>

### GET /Meetups-App/meetups/get/:meetup_id

Request Body:
<br>
<code>
 (ninguno)
</code>
<br>
<br>
Response Body:
<br>
<code>
{
  "_id": "63446d427ba7b4ca36530c58",
  "name": "Mega Fiesta 2022",
  "description": "Fiesta por aumento de las acciones",
  "datetime": "2022-10-28T21:30:00.000Z",
  "place": "Centro Costa Salguero",
  "address": "Av. Costanera Rafael Obligado 1221, CABA",
  "organizer_id": "6342d4106216aa2ad593a005",
  "invited_people": [
    "6343b7b72c7f8efda107bb5f",
    "634445debec995cf85be5d3a",
    "6343b7b72c7f8efda107bb5f",
    "6343b7b72c7f8efda107bb5f"
  ],
  "checked-in_people": [],
  "is_over": false,
  "__v": 2
}
</code>

<br>
<br>

### GET /Meetups-App/meetups/get_by_user

Request Body:
<br>
<code> 
(ninguno)
</code>
<br>
<br>
Response Body:
<br>
<code> 
(meetups a las cuales el usuario autenticado está invitado)
[
  {
    "_id": "63446d427ba7b4ca36530c58",
    "name": "Mega Fiesta 2022",
    "description": "Fiesta por aumento de las acciones",
    "datetime": "2022-10-28T21:30:00.000Z",
    "place": "Centro Costa Salguero",
    "address": "Av. Costanera Rafael Obligado 1221, CABA",
    "organizer_id": "3443b7b72c7f8efda134ff56",
    "invited_people": [
      "6343b7b72c7f8efda107bb5f",
      "6346250e6cbc1d79290b75aa"
    ],
    "checked-in_people": [],
    "is_over": false,
    "__v": 2
  }
]
</code>

<br>
<br>

### POST /Meetups-App/meetups/create

Request Body:
<br>
<code>
{
    "name": "Cumple de Maria S",
    "description": "FELICES 42 MARIIII :D",
    "datetime": "2022-11-16T18:45:00.000Z",
    "place": "Centro Costa Salguero",
    "address": "Av. Costanera Rafael Obligado 1221, CABA",
    "organizer_id": "3443b7b72c7f8efda134ff56",
    "invited_people": [
      "6343b7b72c7f8efda107bb5f",
      "6346250e6cbc1d79290b75aa"
    ]
}
</code>
<br>
<br>
Response Body:
<br>
<code>
{
  "message": "Meetup added successfully!",
  "meetup_data": {
    "name": "Cumple de Maria S",
    "description": "FELICES 42 MARIIII :D",
    "datetime": "2022-11-16T18:45:00.000Z",
    "place": "Centro Costa Salguero",
    "address": "Av. Costanera Rafael Obligado 1221, CABA",
    "organizer_id": "3443b7b72c7f8efda134ff56",
    "invited_people": [
      "6343b7b72c7f8efda107bb5f",
      "6346250e6cbc1d79290b75aa"
    ],
    "checked-in_people": [],
    "is_over": false,
    "_id": "634628606cbc1d79290b763f",
    "__v": 0
  }
}
</code>

<br>
<br>

### PATCH /Meetups-App/meetups/update/:meetup_id

Example URL: http://127.0.0.1:3000/Meetups-App/meetups/update/634628606cbc1d79290b763f

Request Body:
<br>
<code> 
(ejemplo de una variable que queremos actualizar del evento)
{
 "datetime": "2022-11-17 14:30:00"
}
</code>
<br>
<br>
Response Body:
<br>
<code>
{
  "message": "Meetup updated successfully!"
}
</code>

<br>
<br>

### DELETE /Meetups-App/meetups/delete/:meetup_id

Request Body:
<br>
<code>
 (ninguno)
</code>
<br>
<br>
Response Body:
<br>
<code>
{
  "message": "Meetup deleted successfully!"
}
</code>

<br>
<br>

### GET /Meetups-App/meetups/buy_beers

Request Body:
<br>
<code>
 (ninguno)
</code>
<br>
<br>
Response Body:
<br>
<code> 
(debemos comprar 8 cajas para el evento)
{
  "beer_boxes_to_buy": 8
}
</code>

<br>
<br>

### GET /Meetups-App/meetups/weather

Request Body:
<br>
<code>
 (ninguno)
</code>
<br>
<br>
Response Body:
<br>
<code> 
(el dia del evento hará 16 grados)
{
  "temperature": 16
}
</code>

<br>
<br>

### POST /Meetups-App/meetups/join/:meetup_id

Example URL: http://127.0.0.1:3000/Meetups-App/meetups/join/63446d427ba7b4ca36530c58

Request Body:
<br>
<code>
 (ninguno)
</code>
<br>
<br>
Response Body:
<br>
<code>
{
  "message": "Joined the meetup successfully!",
  "invitation_code": "634629bb6cbc1d79290b765c"
}
</code>

<br>
<br>

### POST /Meetups-App/meetups/unjoin/:meetup_id

Request Body:
<br>
<code>
 (ninguno)
</code>
<br>
<br>
Response Body:
<br>
<code>
{
  "message": "Unjoined the meetup successfully!"
}
</code>

<br>
<br>

### POST /Meetups-App/meetups/checkin/:meetup_id


Request Body:
<br>
<code>
{
 "name":"Juan",
 "surname":"Garcia",
 "dni": "12345678",
 "invitation_code": "634629bb6cbc1d79290b765c"
}
</code>
<br>
<br>
Response Body:
<br>
<code>
{
  "message": "Checked-in at the meeting successfully!"
}
</code>

<br>
<br>

----


## Manejador de notificaciones (users & admins)

### GET /Meetups-App/notifications/get_all/:user_id

Request Body:
<br>
<code>
 (ninguno)
</code>
<br>
<br>
Response Body:
<br>
<code> 
(devuelve tanto las notificaciones vistas como no vistas)
[
  {
    "_id": "63446d427ba7b4ca36530c5a",
    "user_id": "6343b7b72c7f8efda107bb5f",
    "message": "Se ha creado un nuevo evento para el Fri Oct 28 2022 18:30:00 GMT-0300 (hora estándar de Argentina)",
    "seen": false,
    "createdAt": "2022-10-10T19:06:42.271Z",
    "updatedAt": "2022-10-10T19:06:42.271Z",
    "__v": 0
  },
  {
    "_id": "63446d427ba7b4ca36530c5c",
    "user_id": "6343b7b72c7f8efda107bb5f",
    "message": "Se ha creado un nuevo evento para el Fri Oct 28 2022 18:30:00 GMT-0300 (hora estándar de Argentina)",
    "seen": false,
    "createdAt": "2022-10-10T19:06:42.272Z",
    "updatedAt": "2022-10-10T19:06:42.272Z",
    "__v": 0
  },
  {
    "_id": "634628606cbc1d79290b7641",
    "user_id": "6343b7b72c7f8efda107bb5f",
    "message": "Se ha creado un nuevo evento para el día Wed Nov 16 2022 15:45:00 GMT-0300 (hora estándar de Argentina)",
    "seen": true,
    "createdAt": "2022-10-12T02:37:20.678Z",
    "updatedAt": "2022-10-12T02:37:20.678Z",
    "__v": 0
  }
]
</code>

<br>
<br>

### GET /Meetups-App/notifications/get_new/:user_id

Request Body:
<br>
<code> 
(ninguno)
</code>
<br>
<br>
Response Body:
<br>
<code> 
(devuelve solo las notificaciones no vistas, es decir, aquellas con la variable "seen"=false)
[
  {
    "_id": "63446d427ba7b4ca36530c5a",
    "user_id": "6343b7b72c7f8efda107bb5f",
    "message": "Se ha creado un nuevo evento para el Fri Oct 28 2022 18:30:00 GMT-0300 (hora estándar de Argentina)",
    "seen": false,
    "createdAt": "2022-10-10T19:06:42.271Z",
    "updatedAt": "2022-10-10T19:06:42.271Z",
    "__v": 0
  },
  {
    "_id": "63446d427ba7b4ca36530c5c",
    "user_id": "6343b7b72c7f8efda107bb5f",
    "message": "Se ha creado un nuevo evento para el Fri Oct 28 2022 18:30:00 GMT-0300 (hora estándar de Argentina)",
    "seen": false,
    "createdAt": "2022-10-10T19:06:42.272Z",
    "updatedAt": "2022-10-10T19:06:42.272Z",
    "__v": 0
  }
]
</code>

<br>
<br>

### GET /Meetups-App/notifications/get/:notification_id

Example URL: http://127.0.0.1:3000/Meetups-App/notifications/get/634628606cbc1d79290b7642

Request Body:
<br>
<code>
 (ninguno)
</code>
<br>
<br>
Response Body:
<br>
<code>
{
  "_id": "634628606cbc1d79290b7642",
  "user_id": "6346250e6cbc1d79290b75aa",
  "message": "Se ha creado un nuevo evento para el día Wed Nov 16 2022 15:45:00 GMT-0300 (hora estándar de Argentina)",
  "seen": false,
  "createdAt": "2022-10-12T02:37:20.679Z",
  "updatedAt": "2022-10-12T02:37:20.679Z",
  "__v": 0
}
</code>

<br>
<br>

### GET /Meetups-App/notifications/mark_as_seen/:notification_id

Request Body:
<br>
<code>
 (ninguno)
</code>
<br>
<br>
Response Body:
<br>
<code>
{
  "message": "Notification updated successfully!"
}
</code>

<br>
<br>

----

## CRUD de usuarios (solo para admins)

### GET /Meetups-App/users/

Request Body:
<br>
<code>
 (ninguno)
</code>
<br>
<br>
Response Body:
<br>
<code>
[
  {
    "_id": "634445debec995cf85be5d3a",
    "name": "Pepe",
    "surname": "Pepe",
    "dni": 45878535,
    "email": "pepe@gmail.com",
    "telephone": "1198990000",
    "is_admin": false,
    "password": "$2a$10$9wZ/J7PX8MX.y7hBP3PU/eFk3NdfcHNC7wc2vnaUmMASKv7OmmIFK",
    "is_logged-in": false,
    "__v": 0
  },
  {
    "_id": "6346250e6cbc1d79290b75aa",
    "name": "Juan",
    "surname": "Garcia",
    "dni": 12345678,
    "email": "jgarcia01@gmail.com",
    "telephone": "1177665544",
    "is_admin": true,
    "password": "$2a$10$OE8.bTuSA3KFC2CERBKG/OzPNPv5RQ9jC1H2d1oiax1U0d1DVoAlW",
    "__v": 0
  }
]
</code>

<br>
<br>

### GET /Meetups-App/users/:user_id

Request Body:
<br>
<code>
 (ninguno)
</code>
<br>
<br>
Response Body:
<br>
<code>
{
  "_id": "634445debec995cf85be5d3a",
  "name": "Pepe",
  "surname": "Pepe",
  "dni": 45878535,
  "email": "pepe@gmail.com",
  "telephone": "1198990000",
  "is_admin": false,
  "password": "$2a$10$9wZ/J7PX8MX.y7hBP3PU/eFk3NdfcHNC7wc2vnaUmMASKv7OmmIFK",
  "is_logged-in": false,
  "__v": 0
}
</code>

<br>
<br>

### PATCH /Meetups-App/users/update/:user_id

Request Body:
<br>
<code> 
(el usuario cambió de teléfono)
{
 "telephone": "1133447766"
}
</code>
<br>
<br>
Response Body:
<br>
<code>
{
  "message": "User updated successfully!"
}
</code>

<br>
<br>

### DELETE /Meetups-App/users/delete/:user_id

Request Body:
<br>
<code> 
(ninguno)
</code>
<br>
<br>
Response Body:
<br>
<code>
{
  "message": "User deleted successfully!"
}
</code>
<br>
<br>

</font>

----

[Go back](../README.md)

