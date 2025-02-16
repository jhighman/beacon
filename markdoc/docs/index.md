---
title: API Documentation
description: Welcome to the Beacon API documentation
---

# Beacon API Documentation

Welcome to the Beacon API documentation. This guide will help you understand and integrate with our API endpoints.

## Getting Started

- [Authentication](/docs/auth)
- [API Overview](/docs/overview)
- [Endpoints](/docs/endpoints)

## Quick Links

{% endpoint method="GET" path="/api/health" description="Check API health status" %}

{% response status=200 description="API is healthy" %}
```json
{
  "status": "healthy",
  "version": "1.0.0"
}
```
{% /response %}

{% /endpoint %}

## API Conventions

All API endpoints:
- Use JSON for request and response bodies
- Require authentication via Bearer token
- Return standard HTTP status codes
- Include rate limiting headers

---
title: Credential SDK Documentation
description: Documentation for securely embedding verified credentials
---

# Credential SDK Documentation

Welcome to the Credential SDK documentation. This guide will help you integrate and display verified credentials on your website.

## Getting Started

- [Overview](/docs/overview)
- [Authentication](/docs/auth)
- [SDK Endpoints](/docs/endpoints)

## Quick Example

{% endpoint method="GET" path="/api/embed/{id}" description="Get embed code for a credential" %}

{% response status=200 description="Embed code retrieved" %}
```json
{
  "html": "<iframe src='https://cred.example.com/embed/cred_123' />",
  "width": 400,
  "height": 300
}
```
{% /response %}

{% /endpoint %}

## Key Concepts

- **Secure Rendering**: All credentials are server-rendered to prevent tampering
- **Real-time Updates**: Automatic updates when credential status changes
- **Customizable Display**: Safe theming options while maintaining security
- **Cross-Platform**: Support for all major web frameworks

## Integration Steps

1. [Register your application](/docs/auth#getting-started)
2. [Get your API credentials](/docs/auth#api-keys)
3. [Generate client tokens](/docs/auth#client-tokens)
4. [Embed credentials](/docs/endpoints#embedding)
5. [Verify authenticity](/docs/endpoints#verification) 