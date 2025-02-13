# API Documentation

## Introduction

This documentation provides details about the available API endpoints. You can import `hoppscotch.json` into [Hoppscotch](https://hoppscotch.io/) to test the APIs directly.

## Base URL

```
http://182.70.118.252:8080/api
```

## Endpoints

### 1. Get All Posts

**Method:** `GET`

**Endpoint:**

```
/api/posts?page=1
```

### 2. Get Post by ID

**Method:** `GET`

**Endpoint:**

```
/api/posts/:post_id
```

### 3. Create a Post

**Method:** `POST`

**Endpoint:**

```
/api/posts
```

**Body (JSON):**

```json
{
	"title": "new post",
	"description": "cool post",
	"author": "soham"
}
```

### 4. Update a Post

**Method:** `PUT`

**Endpoint:**

```
/api/posts/:post_id
```

**Body (JSON):**

```json
{
	"author": "soham"
}
```

### 5. Delete a Post

**Method:** `DELETE`

**Endpoint:**

```
/api/posts/:post_id
```
