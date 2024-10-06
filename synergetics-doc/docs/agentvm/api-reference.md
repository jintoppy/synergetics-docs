---
sidebar_position: 2
---

# AgentVM API Reference

This page provides detailed information about the AgentVM API endpoints and how to use them.

## Deploy Agent

Deploys an AI agent to the AgentVM environment.

### Endpoint

```
POST /api/v1/agentvm/deployments
```

### Request Body

```json
{
  "agentId": "agent-567890",
  "version": "1.2.0",
  "resources": {
    "cpu": "2",
    "memory": "4Gi",
    "gpu": "1"
  }
}
```

### Response

```json
{
  "id": "deployment-123456",
  "agentId": "agent-567890",
  "status": "deploying",
  "createdAt": "2023-06-04T11:30:00Z"
}
```

For more endpoints and detailed usage, please refer to our full API documentation.