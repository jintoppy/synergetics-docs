---
sidebar_position: 2
---

# AgentMarket API Reference

This page provides detailed information about the AgentMarket API endpoints and how to use them.

## List Agent Service

Lists a new AI agent service on the AgentMarket.

### Endpoint

```
POST /api/v1/agentmarket/services
```

### Request Body

```json
{
  "name": "Language Translation Pro",
  "description": "Advanced AI-powered language translation service",
  "pricing": {
    "model": "per-request",
    "price": 0.01,
    "currency": "USD"
  },
  "supportedLanguages": ["en", "es", "fr", "de", "zh"],
  "apiEndpoint": "https://api.translation-pro.com/v1/translate"
}
```

### Response

```json
{
  "id": "service-567890",
  "name": "Language Translation Pro",
  "status": "listed",
  "createdAt": "2023-06-09T15:45:00Z"
}
```

For more endpoints and detailed usage, please refer to our full API documentation.