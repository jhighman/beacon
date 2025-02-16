---
title: SDK Endpoints
description: Complete list of SDK endpoints for credential management
---

# SDK Endpoints

## Credential Management

{% endpoint method="POST" path="/api/credentials" description="Create a new credential" %}
{% parameter name="type" type="string" required=true description="Credential type (badge, certificate, identity)" %}
{% parameter name="holder" type="string" required=true description="ID of the credential holder" %}
{% parameter name="data" type="object" required=true description="Credential-specific data" %}
{% parameter name="expiry" type="string" description="ISO date when credential expires" %}

{% response status=201 description="Credential created successfully" %}
```json
{
  "credential_id": "cred_123",
  "embed_url": "https://cred.example.com/embed/cred_123",
  "status": "active"
}
```
{% /response %}
{% /endpoint %}

{% endpoint method="GET" path="/api/credentials/{id}" description="Retrieve credential details" %}
{% parameter name="id" type="string" required=true description="Credential ID" %}
{% parameter name="include" type="string" description="Additional fields to include (history, metadata)" %}

{% response status=200 description="Credential retrieved successfully" %}
```json
{
  "id": "cred_123",
  "type": "badge",
  "holder": "user_456",
  "status": "active",
  "issued_at": "2024-01-01T00:00:00Z",
  "last_verified": "2024-03-15T12:00:00Z"
}
```
{% /response %}
{% /endpoint %}

## Embedding

{% endpoint method="GET" path="/api/embed/{id}" description="Get embed code for a credential" %}
{% parameter name="id" type="string" required=true description="Credential ID" %}
{% parameter name="theme" type="string" description="Color theme (light, dark)" %}
{% parameter name="size" type="string" description="Display size (small, medium, large)" %}

{% response status=200 description="Embed code retrieved" %}
```json
{
  "html": "<iframe src='...' />",
  "width": 400,
  "height": 300,
  "script_url": "https://cdn.example.com/embed.js"
}
```
{% /response %}
{% /endpoint %}

## Verification

{% endpoint method="POST" path="/api/verify/{id}" description="Verify a credential's authenticity" %}
{% parameter name="id" type="string" required=true description="Credential ID" %}

{% response status=200 description="Verification successful" %}
```json
{
  "valid": true,
  "verified_at": "2024-03-15T12:00:00Z",
  "issuer": {
    "name": "Example Corp",
    "verified": true
  }
}
```
{% /response %}
{% /endpoint %} 