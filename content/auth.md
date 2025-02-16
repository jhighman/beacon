---
title: Authentication
description: Learn how to authenticate with the Credential SDK
---

# Authentication

The Credential SDK uses API keys and client tokens to secure access to credential data.

## Getting Started

{% endpoint method="POST" path="/api/auth/register" description="Register your application" %}
{% parameter name="organization" type="string" required=true description="Your organization name" %}
{% parameter name="domain" type="string" required=true description="Your website domain" %}
{% parameter name="callback_url" type="string" required=true description="Webhook URL for credential updates" %}

{% response status=200 description="Successfully registered" %}
```json
{
  "client_id": "client_abc123",
  "api_key": "sk_live_xyz789",
  "environment": "production"
}
```
{% /response %}
{% /endpoint %}

## API Keys

Your API key should be kept secure and only used server-side. Never expose it in client-side code.

{% parameter name="Authorization" type="string" required=true description="Your API key in the format: Bearer sk_live_xyz789" %}

## Client Tokens

For client-side usage, generate short-lived tokens:

{% endpoint method="POST" path="/api/auth/token" description="Generate a client token" %}
{% parameter name="client_id" type="string" required=true description="Your client ID" %}
{% parameter name="domain" type="string" required=true description="Domain requesting access" %}

{% response status=200 description="Token generated successfully" %}
```json
{
  "token": "eyJhbGciOiJIUzI1...",
  "expires_in": 3600
}
```
{% /response %}
{% /endpoint %}

## Security Best Practices

1. Keep API keys secure
2. Rotate tokens regularly
3. Whitelist allowed domains
4. Monitor token usage
5. Use HTTPS for all requests

## Webhook Authentication

Webhooks are signed with your API key to verify authenticity:

{% parameter name="X-Signature" type="string" required=true description="HMAC signature of the payload" %}
{% parameter name="X-Timestamp" type="string" required=true description="Unix timestamp of the request" %}

Verify webhook signatures to ensure updates are legitimate:

```javascript
const isValidSignature = (payload, signature, timestamp, apiKey) => {
  const message = `${timestamp}.${JSON.stringify(payload)}`;
  const expectedSignature = crypto
    .createHmac('sha256', apiKey)
    .update(message)
    .digest('hex');
  return signature === expectedSignature;
};
``` 