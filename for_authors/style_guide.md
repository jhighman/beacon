# **📌 SDK Documentation Style Guide**
This guide provides a **list of available Markdoc components** along with their usage examples so content authors can use them effectively when writing documentation.

---

## **🛠 List of Custom Markdoc Components**
Below are the **custom components** defined in your **Markdoc configuration**:

| **Component**  | **Purpose**  | **Usage**  |
|--------------|------------|------------|
| `Heading`  | Custom headings with automatic IDs  | `## Section Title`  |
| `Callout`  | Highlight important information in different styles (info, warning, success, error) | `{% callout title="Warning" type="warning" %}Your warning message{% /callout %}` |
| `Tabs`  | Display tabbed content for different code samples or explanations  | `{% tabs %}{% tab label="JavaScript" default=true %}JS code{% /tab %}{% tab label="Python" %}Python code{% /tab %}{% /tabs %}` |
| `Accordion`  | Collapsible content section  | `{% accordion title="Click to expand" %}Hidden details{% /accordion %}` |
| `Table`  | Render structured data in tabular format  | See the **Table** section below |
| `Blockquote`  | Styled blockquote for citations or important statements  | `> This is a blockquote.` |
| `List`  | Custom-styled ordered (`1.`) or unordered (`-`) lists  | `- List item 1` |
| `Code`  | Syntax-highlighted code blocks  | See **Code Blocks** below |
| `Endpoint`  | Define an API endpoint documentation block  | `{% endpoint method="GET" url="/api/v1/users" %}API description{% /endpoint %}` |
| `Parameter`  | Describe API parameters inside an `Endpoint`  | `{% parameter name="id" type="string" required=true %}User ID{% /parameter %}` |
| `Response`  | Define expected API response output  | `{% response status="200" %}Success response{% /response %}` |

---

## **📖 Style Guide for Content Authors**
This guide ensures **consistent and readable documentation** when using Markdoc.

### **🔹 1. Headings & Structure**
- Use `#`, `##`, `###` for **sections and subsections**.
- Avoid skipping heading levels (e.g., do not go from `#` to `###` directly).
- Keep section titles **short and descriptive**.

✅ **Good Example:**
```md
# Introduction
## Getting Started
### Installation
```
❌ **Bad Example:**
```md
# Introduction
### Skipped Level Heading
```

---

### **🔹 2. Callouts (Info, Warning, Success, Error)**
Use `{% callout %}` blocks to **highlight important information**.

✅ **Example:**
```md
{% callout title="Important" type="info" %}
This is an informational message.
{% /callout %}
```
**Available Types:** `"info"`, `"warning"`, `"success"`, `"error"`

---

### **🔹 3. Code Blocks (JavaScript, Python, etc.)**
Use fenced code blocks **inside `Tabs`** when applicable.

✅ **Example:**
```md
{% tabs %}
{% tab label="JavaScript" default=true %}
```js
console.log("Hello, World!");
```
{% /tab %}

{% tab label="Python" %}
```python
print("Hello, World!")
```
{% /tab %}
{% /tabs %}
```

❌ **Bad Example:**
```md
```javascript
console.log("Hello, World!");
```
```
*(Avoid raw code blocks unless necessary.)*

---

### **🔹 4. Tables for Structured Data**
Use `{% table %}` to format **data tables**.

✅ **Example:**
```md
{% table %}
| Name     | Type    | Required | Description         |
|----------|--------|----------|---------------------|
| `id`     | String | ✅       | Unique identifier  |
| `email`  | String | ❌       | User's email       |
{% /table %}
```

❌ **Bad Example:**
```md
| Name  | Type  | Required | Description |
|-------|------|---------|-------------|
| id    | String | ✅  | Unique identifier |
```
*(Missing `{% table %}` wrapper.)*

---

### **🔹 5. API Documentation (Endpoints, Parameters, Responses)**
Use `{% endpoint %}` for documenting **API endpoints**.

✅ **Example:**
```md
{% endpoint method="GET" url="/api/v1/users" %}
Retrieves a list of users.
{% /endpoint %}

{% parameter name="id" type="string" required=true %}
Unique identifier for the user.
{% /parameter %}

{% response status="200" %}
Returns a JSON array of users.
{% /response %}
```

---

### **🔹 6. Lists (Ordered & Unordered)**
- **Use `-` for unordered lists.**
- **Use numbers `1.` for ordered lists.**

✅ **Example:**
```md
- Item One
- Item Two
- Item Three
```
```md
1. First Step
2. Second Step
3. Third Step
```

---

### **🔹 7. Blockquotes for Quotes or Important Notes**
Use `>` for blockquotes.

✅ **Example:**
```md
> "This is a famous quote." — Author
```

---

### **🔹 8. Accordions for Expandable Content**
Use `{% accordion %}` for **collapsible sections**.

✅ **Example:**
```md
{% accordion title="Click to Expand" %}
Here is some hidden content.
{% /accordion %}
```

---

## **🎯 Final Notes**
📌 **Do:**
✅ Use proper **headings** to structure content.  
✅ Use **callouts, tables, and code blocks** for clarity.  
✅ Keep API documentation **consistent** using `endpoint`, `parameter`, and `response`.  

📌 **Don’t:**
❌ Skip heading levels randomly.  
❌ Use raw Markdown tables when `{% table %}` exists.  
❌ Overuse callouts unless necessary.  

---

## **📄 Example Full Markdown File**
```md
# Welcome to Our API

## Getting Started

{% callout title="Note" type="info" %}
Make sure to use the latest API version.
{% /callout %}

## Example API Call

{% endpoint method="GET" url="/api/v1/users" %}
Retrieves all users.
{% /endpoint %}

{% parameter name="id" type="string" required=true %}
Unique identifier for the user.
{% /parameter %}

{% response status="200" %}
Returns a JSON array of users.
{% /response %}

## Code Examples

{% tabs %}
{% tab label="JavaScript" default=true %}
```js
fetch("/api/v1/users")
  .then(res => res.json())
  .then(data => console.log(data));
```
{% /tab %}

{% tab label="Python" %}
```python
import requests

response = requests.get("/api/v1/users")
print(response.json())
```
{% /tab %}
{% /tabs %}
```

---

## **🔥 Now Authors Can Write Well-Structured Documentation!**
✅ **Consistent and readable docs**  
✅ **Ensures correct usage of Markdoc components**  
✅ **Easy for non-developers to contribute**  
