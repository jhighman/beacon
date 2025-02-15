---
title: API Documentation
---

# User API

{% endpoint method="GET" path="/api/users" description="List all users" %}

### Parameters

{% parameter name="page" type="number" description="Page number for pagination" %}
{% parameter name="limit" type="number" description="Number of items per page" %}

### Responses

{% response status=200 description="Successfully retrieved users" %}
```json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe"
    }
  ]
}
```
{% /response %}

{% response status=400 description="Invalid parameters" %}
{% /response %}

{% /endpoint %} 