# API Morada App

## Modules
- Usuarios
- Propiedades

## API Reference

### Usuarios

Method | Endpoint | Data        | Auth Required
------ | -------- | ----------- | -------------
`POST` | /user/login   | body: { email, password } | No


### Propiedades

Method | Endpoint | Data        | Auth Required
------ | -------- | ----------- | -------------
`GET` | /property | query: type, businessType | No
`GET` | /property/:id | url: id               | No
`POST` | /property | body: { title, ... }     | Si
`DELETE` | /property/:id | url: id            | Si
`PUT` | /property/:id | body: { title, ... }  | Si
`POST` | /property/:id | body: {comentario}   | Si