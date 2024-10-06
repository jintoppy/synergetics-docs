---
sidebar_position: 2
---

# LangTest API Reference

This page provides detailed information about the LangTest API endpoints and how to use them.

## Create Test Suite

Creates a new test suite for your language model.

### Endpoint

```
POST /api/v1/langtest/test-suites
```

### Request Body

```json
{
  "name": "Accuracy Test Suite",
  "modelId": "model-123456",
  "testCases": [
    {
      "input": "What is the capital of France?",
      "expectedOutput": "Paris"
    }
  ]
}
```

### Response

```json
{
  "id": "test-suite-789012",
  "name": "Accuracy Test Suite",
  "status": "created",
  "createdAt": "2023-06-01T14:30:00Z"
}
```

For more endpoints and detailed usage, please refer to our full API documentation.