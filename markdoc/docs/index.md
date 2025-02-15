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