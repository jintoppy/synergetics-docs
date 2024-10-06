---
sidebar_position: 2
---

# AgentFlow API Reference

This page provides detailed information about the AgentFlow API endpoints and how to use them.

## Create Workflow

Creates a new AI agent workflow.

### Endpoint

```
POST /api/v1/agentflow/workflows
```

### Request Body

```json
{
  "name": "Customer Support Workflow",
  "description": "Automated customer support process",
  "agents": [
    {
      "type": "intent-classifier",
      "config": {
        "model": "support-classifier-v1"
      }
    },
    {
      "type": "response-generator",
      "config": {
        "model": "support-responder-v2"
      }
    }
  ]
}
```

### Response

```json
{
  "id": "workflow-901234",
  "name": "Customer Support Workflow",
  "status": "created",
  "createdAt": "2023-06-03T09:45:00Z"
}
```

For more endpoints and detailed usage, please refer to our full API documentation.