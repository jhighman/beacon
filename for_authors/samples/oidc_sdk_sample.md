# **SDK Documentation: OIDC Identity Registration & Token Webhook**
📌 This document provides an overview of how to **register an identity** and **retrieve an OIDC token** using the SDK.  
🚀 Follow the steps below to integrate OIDC authentication into your application.

---

# **Getting Started**
{% callout title="Prerequisites" type="info" %}
Before you begin, ensure you have:
- An **OIDC Client ID** and **Client Secret** from the provider.
- A registered **Redirect URI**.
- The SDK installed in your project.
{% /callout %}

---

# **Installation**
{% tabs %}
{% tab label="JavaScript" default=true %}
```sh
npm install oidc-sdk
```
{% /tab %}

{% tab label="Python" %}
```sh
pip install oidc-sdk
```
{% /tab %}

{% tab label="Go" %}
```sh
go get github.com/oidc/sdk
```
{% /tab %}
{% /tabs %}

---

# **Registering an Identity**
To register a new identity, use the `registerIdentity()` method.  
This will create a new identity and provide an **authorization URL** to initiate the login flow.

{% endpoint method="POST" url="/api/v1/identity/register" %}
Registers a new identity in the OIDC system.
{% /endpoint %}

## **Request Parameters**
{% parameter name="email" type="string" required=true %}
The email address of the identity to register.
{% /parameter %}

{% parameter name="phone_number" type="string" required=false %}
Optional phone number for identity verification.
{% /parameter %}

## **Example Request**
{% tabs %}
{% tab label="JavaScript" default=true %}
```js
import { registerIdentity } from "oidc-sdk";

const identity = await registerIdentity({
  email: "user@example.com",
  phone_number: "+1234567890"
});

console.log(identity.auth_url); // URL for OIDC authentication
```
{% /tab %}

{% tab label="Python" %}
```python
from oidc_sdk import register_identity

identity = register_identity(email="user@example.com", phone_number="+1234567890")

print(identity["auth_url"])  # URL for OIDC authentication
```
{% /tab %}

{% tab label="Go" %}
```go
package main

import (
  "fmt"
  "oidcsdk"
)

func main() {
  identity, _ := oidcsdk.RegisterIdentity("user@example.com", "+1234567890")
  fmt.Println(identity.AuthURL) // URL for OIDC authentication
}
```
{% /tab %}
{% /tabs %}

## **Successful Response**
{% response status="201" %}
```json
{
  "identity_id": "abc123",
  "auth_url": "https://provider.com/auth?client_id=xyz"
}
```
{% /response %}

---

# **Handling Token Webhook**
Once authentication is complete, the **OIDC provider** will call the **token webhook** with the **access token**.

{% endpoint method="POST" url="/api/v1/token/webhook" %}
Handles the callback from the OIDC provider and returns the authentication token.
{% /endpoint %}

## **Webhook Request Parameters**
{% parameter name="identity_id" type="string" required=true %}
The unique identifier of the registered identity.
{% /parameter %}

{% parameter name="token" type="string" required=true %}
The access token provided by the OIDC provider.
{% /parameter %}

## **Webhook Implementation**
{% tabs %}
{% tab label="JavaScript" default=true %}
```js
import express from "express";

const app = express();
app.use(express.json());

app.post("/api/v1/token/webhook", (req, res) => {
  const { identity_id, token } = req.body;
  console.log(`Received token for identity ${identity_id}: ${token}`);
  res.status(200).send({ success: true });
});

app.listen(3000, () => console.log("Webhook listening on port 3000"));
```
{% /tab %}

{% tab label="Python" %}
```python
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/api/v1/token/webhook", methods=["POST"])
def token_webhook():
    data = request.json
    print(f"Received token for identity {data['identity_id']}: {data['token']}")
    return jsonify(success=True), 200

if __name__ == "__main__":
    app.run(port=3000)
```
{% /tab %}

{% tab label="Go" %}
```go
package main

import (
  "encoding/json"
  "fmt"
  "net/http"
)

type TokenRequest struct {
  IdentityID string `json:"identity_id"`
  Token      string `json:"token"`
}

func tokenWebhook(w http.ResponseWriter, r *http.Request) {
  var req TokenRequest
  json.NewDecoder(r.Body).Decode(&req)

  fmt.Printf("Received token for identity %s: %s
", req.IdentityID, req.Token)
  w.WriteHeader(http.StatusOK)
  json.NewEncoder(w).Encode(map[string]bool{"success": true})
}

func main() {
  http.HandleFunc("/api/v1/token/webhook", tokenWebhook)
  http.ListenAndServe(":3000", nil)
}
```
{% /tab %}
{% /tabs %}

## **Webhook Example Request**
```http
POST /api/v1/token/webhook HTTP/1.1
Content-Type: application/json

{
  "identity_id": "abc123",
  "token": "eyJhbGciOiJIUzI1..."
}
```

## **Webhook Response**
{% response status="200" %}
```json
{
  "success": true
}
```
{% /response %}

---

# **Error Handling**
Below are some common errors you might encounter and how to handle them.

## **Identity Registration Errors**
{% table %}
| Status Code | Message                           | Description |
|------------|-----------------------------------|-------------|
| `400` | `Invalid email format` | The email provided is not valid. |
| `409` | `Identity already exists` | The email is already registered. |
{% /table %}

## **Token Webhook Errors**
{% table %}
| Status Code | Message                  | Description |
|------------|--------------------------|-------------|
| `400` | `Missing identity_id or token` | Required parameters are missing. |
| `401` | `Invalid token` | The provided token is invalid. |
{% /table %}

---

# **Conclusion**
✅ **You have successfully registered an identity and handled the OIDC token webhook!**  
📌 For further details, refer to the [full API documentation](#).  