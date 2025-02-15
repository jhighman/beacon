---
title: Authentication
description: Learn how to authenticate with the Beacon API
---

# Authentication

The Beacon API uses Bearer token authentication. All authenticated endpoints require an `Authorization` header with a valid token.

## Getting a Token

{% endpoint method="POST" path="/api/auth/token" description="Get an authentication token" %}

{% parameter name="username" type="string" required=true description="Your API username" %}
{% parameter name="password" type="string" required=true description="Your API password" %}

{% response status=200 description="Successfully retrieved token" %}
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "expires_in": 3600
}
```
{% /response %}

{% response status=401 description="Invalid credentials" %}
{% /response %}

{% /endpoint %}

## Using the Token

Include the token in your requests using the Authorization header:

```bash
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

## Token Expiration

Tokens expire after 1 hour. You can get a new token using the same endpoint above. 