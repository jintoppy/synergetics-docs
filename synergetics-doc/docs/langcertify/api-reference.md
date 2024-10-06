---
sidebar_position: 2
---

# LangCertify API Reference

This page provides detailed information about the LangCertify API endpoints and how to use them.

## Submit Model for Certification

Submits a language model for certification.

### Endpoint

```
POST /api/v1/langcertify/certifications
```

### Request Body

```json
{
  "modelId": "model-123456",
  "version": "1.0.0",
  "description": "Enhanced language model for customer support"
}
```

### Response

```json
{
  "id": "cert-345678",
  "modelId": "model-123456",
  "status": "pending",
  "submittedAt": "2023-06-02T10:15:00Z"
}
```

For more endpoints and detailed usage, please refer to our full API documentation.