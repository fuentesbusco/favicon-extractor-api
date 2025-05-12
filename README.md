# Favicon Extractor API

Extract the favicon URL of any website — including parsing `<link rel="icon">` tags and falling back to `/favicon.ico`. Optionally, retrieve the favicon as a base64-encoded image.

---

## 🚀 Features

- Fetch favicon using common HTML `<link>` tags
- Fallback to `/favicon.ico` if no tag is found
- Handle relative and absolute URLs
- Return favicon as image URL or base64 (optional)

---

## 🧰 Tech Stack

- [NestJS](https://nestjs.com/) (Node.js framework)
- [Axios](https://github.com/axios/axios) (HTTP client)
- [Cheerio](https://cheerio.js.org/) (HTML parser)

---

## 🔗 API Usage

### GET `/favicon`

#### Query Parameters:

| Name     | Type    | Required | Description                            |
| -------- | ------- | -------- | -------------------------------------- |
| `url`    | string  | ✅ Yes   | Website URL to extract favicon from    |
| `base64` | boolean | ❌ No    | If `true`, returns the image as base64 |

#### Example:

```http
GET /favicon?url=https://example.com&base64=true
```

#### Response:

```json
{
  "faviconUrl": "https://example.com/favicon.ico",
  "base64": "data:image/x-icon;base64,AAABAAE..."
}
```

## 🛡 License

MIT © 2025 Atelier Busco
