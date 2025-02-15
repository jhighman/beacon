---
title: API Overview
description: Overview of the Beacon API architecture and conventions
---

# API Overview

The Beacon API is organized around REST principles. We use standard HTTP methods and return JSON-encoded responses.

## Base URL

All API requests should be made to:

```
https://api.beacon.com/v1
```

## Request Format

{% parameter name="Content-Type" type="string" required=true description="Always set to application/json" %}
{% parameter name="Authorization" type="string" required=true description="Bearer token for authentication" %}

## Response Format

All responses include:

- HTTP status code indicating success/failure
- JSON response body
- Rate limit headers

Example response:

```json
{
  "data": {
    // Response data here
  },
  "meta": {
    "page": 1,
    "total": 100,
    "per_page": 20
  }
}
```

## Rate Limiting

{% endpoint method="GET" path="/api/rate-limit" description="Check your current rate limit status" %}

{% response status=200 description="Current rate limit status" %}
```json
{
  "rate": {
    "limit": 5000,
    "remaining": 4995,
    "reset": 1635724800
  }
}
```
{% /response %}

{% /endpoint %} 