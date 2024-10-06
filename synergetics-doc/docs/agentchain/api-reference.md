---
sidebar_position: 2
---

# AgentChain API Reference

This page provides detailed information about the AgentChain API endpoints and how to use them.

## Deploy Agent Smart Contract

Deploys an AI agent as a smart contract on the AgentChain network.

### Endpoint

```
POST /api/v1/agentchain/contracts
```

### Request Body

```json
{
  "agentId": "agent-567890",
  "contractName": "AutoTrader",
  "initialParams": {
    "tradingPair": "ETH/USD",
    "maxTradeAmount": 1000
  }
}
```

### Response

```json
{
  "id": "contract-234567",
  "agentId": "agent-567890",
  "address": "0x9876543210987654321098765432109876543210",
  "deployedAt": "2023-06-06T16:45:00Z"
}
```

For more endpoints and detailed usage, please refer to our full API documentation.