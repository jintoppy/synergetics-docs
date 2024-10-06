---
sidebar_position: 2
---

# AgentSeller API Reference

This page provides detailed information about the AgentSeller API endpoints and how to use them.

## List Product

Lists a new product for sale through an AI agent.

### Endpoint

```
POST /api/v1/agentseller/products
```

### Request Body

```json
{
  "agentId": "agent-567890",
  "name": "AI-Generated Artwork",
  "description": "Unique digital artwork created by an AI artist",
  "price": 99.99,
  "currency": "USD",
  "category": "digital-art",
  "tags": ["ai-generated", "digital", "artwork"]
}
```

### Response

```json
{
  "id": "product-456789",
  "agentId": "agent-567890",
  "status": "listed",
  "createdAt": "2023-06-08T13:15:00Z"
}
```

For more endpoints and detailed usage, please refer to our full API documentation.