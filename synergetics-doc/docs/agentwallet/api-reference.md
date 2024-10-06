---
sidebar_position: 2
---

# AgentWallet API Reference

This page provides detailed information about the AgentWallet API endpoints and how to use them.

## Create Wallet

Creates a new digital wallet for an AI agent.

### Endpoint

```
POST /api/v1/agentwallet/wallets
```

### Request Body

```json
{
  "agentId": "agent-567890",
  "walletType": "multi-currency",
  "initialBalance": {
    "USD": 1000,
    "ETH": 0.5
  }
}
```

### Response

```json
{
  "id": "wallet-789012",
  "agentId": "agent-567890",
  "address": "0x1234567890123456789012345678901234567890",
  "createdAt": "2023-06-05T14:00:00Z"
}
```

For more endpoints and detailed usage, please refer to our full API documentation.