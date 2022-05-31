<h1 align="center"> Micro Frontend 🔥 </h1> 
<h3 align="center"> Reusable Component, Routing Cross Module <br /> Sharing JWT </h3>

<p align="center">
    <a href="https://reactjs.org/"><img alt="Made With React" src="https://img.shields.io/badge/made%20with-react-61DAFB?style=flat-square" /></a>
</p>

## Teknologi

**Client:** ReactJs, TailwindCSS

**Server:** NestJs

## API Reference

#### Get all products

```http
  GET http://localhost:8080/products
```

#### Get product detail

```http
  GET http://localhost:8080/products/${id}
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `id`      | `string` | **Required**. Id of product to fetch |

#### Auth login

```http
  POST http://localhost:8080/auth/login
```

| Parameter  | Type     | Description   |
| :--------- | :------- | :------------ |
| `username` | `string` | **Required**. |
| `password` | `string` | **Required**. |

#### Get Cart

```http
  Get http://localhost:8080/cart
```

#### Post Cart

```http
  POST http://localhost:8080/cart
```

#### Delete Cart

```http
  DELETE http://localhost:8080/cart
```
