# API Morada App

## Modules

- Usuarios
- Propiedades

## API Reference

### Usuarios

| Method | Endpoint    | Data                      | Auth Required |
| ------ | ----------- | ------------------------- | ------------- |
| `POST` | /user/login | body: { email, password } | No            |

### Propiedades

| Method   | Endpoint      | Data                      | Auth Required | Description                                          |
| -------- | ------------- | ------------------------- | ------------- | ---------------------------------------------------- |
| `GET`    | /property     | query: type, businessType | No            | Obtener todas las propiedades con opción de filtrado |
| `GET`    | /property/:id | url: id                   | No            | Obtener una sola propiedad / detalle                 |
| `POST`   | /property     | body: { title, ... }      | Si            | Agregar una propiedad                                |
| `DELETE` | /property/:id | url: id                   | Si            | Eliminar una propiedad                               |
| `PUT`    | /property/:id | body: { title, ... }      | Si            | Actualizar una propiedad                             |
| `POST`   | /property/:id | body: {comentario}        | Si            | Notificar interés sobre una propiedad                |
