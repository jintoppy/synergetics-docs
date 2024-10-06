---
sidebar_position: 2
---

# LangTrain API Reference

This page provides detailed information about the LangTrain API endpoints and how to use them.

## Create Model

Creates a new language model in LangTrain.

### Endpoint

```
POST /api/v1/langtrain/models
```

### Request Body

```json
{
  "name": "My Custom Model",
  "baseModel": "gpt-3.5-turbo",
  "trainingData": "https://example.com/training-data.jsonl"
}
```

### Response

```json
{
  "id": "model-123456",
  "name": "My Custom Model",
  "status": "training",
  "createdAt": "2023-06-01T12:00:00Z"
}
```

For more endpoints and detailed usage, please refer to our full API documentation.