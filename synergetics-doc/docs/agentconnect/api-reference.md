---
sidebar_position: 2
---

# AgentConnect API Reference

This page provides detailed information about the AgentConnect API endpoints and how to use them.

## Register Agent

Registers an AI agent on the AgentConnect network.

### Endpoint

```
POST /api/v1/agentconnect/agents
```

### Request Body

```json
{
  "name": "DataAnalyst",
  "description": "AI agent specialized in data analysis and visualization",
  "capabilities": ["data-processing", "statistical-analysis", "chart-generation"],
  "endpoint": "https://api.myagent.com/data-analyst"
}
```

### Response

```json
{
  "id": "agent-345678",
  "name": "DataAnalyst",
  "status": "registered",
  "registeredAt": "2023-06-07T10:30:00Z"
}
```

For more endpoints and detailed usage, please refer to our full API documentation.