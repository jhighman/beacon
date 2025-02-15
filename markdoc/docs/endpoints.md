---
title: API Endpoints
description: Complete list of available API endpoints
---

# API Endpoints

## Users

{% endpoint method="GET" path="/api/users" description="List all users" %}
{% parameter name="page" type="number" description="Page number for pagination" %}
{% parameter name="limit" type="number" description="Items per page (max 100)" %}
{% /endpoint %}

{% endpoint method="POST" path="/api/users" description="Create a new user" %}
{% parameter name="name" type="string" required=true description="User's full name" %}
{% parameter name="email" type="string" required=true description="User's email address" %}
{% /endpoint %}

## Documents

{% endpoint method="GET" path="/api/documents" description="List all documents" %}
{% parameter name="user_id" type="string" description="Filter by user ID" %}
{% parameter name="status" type="string" description="Filter by status (draft, published)" %}
{% /endpoint %}

{% endpoint method="POST" path="/api/documents" description="Create a new document" %}
{% parameter name="title" type="string" required=true description="Document title" %}
{% parameter name="content" type="string" required=true description="Document content in Markdown" %}
{% parameter name="status" type="string" description="Document status (default: draft)" %}
{% /endpoint %} 