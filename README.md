# Drip.trade events on Hyperliquid

This squid captures NFT marketplace events (`ItemSold` and `BidAccepted`) from the [Drip.trade](https://www.drip.trade/) marketplace on the Hyperliquid network. It processes these events and makes them queryable through a GraphQL API.

Dependencies: Node.js, Docker.

## Quickstart

```bash
# 0. Install @subsquid/cli a.k.a. the sqd command globally
npm i -g @subsquid/cli

# 1. Retrieve the template
sqd init hyperliquid-drip-trade -t https://github.com/subsquid-labs/hyperliquid-drip-trade-example
cd hyperliquid-drip-trade

# 2. Install dependencies
npm ci

# 3. Create .env file
mv .env.example .env

# 4. Start a Postgres database container and detach
sqd up

# 5. Build and start the processor
sqd process

# 6. The command above will block the terminal
#    being busy with fetching the chain data, 
#    transforming and storing it in the target database.
#
#    To start the graphql server open the separate terminal
#    and run
sqd serve
```
A GraphiQL playground will be available at [localhost:4350/graphql](http://localhost:4350/graphql).

## What's happening

This project demos how to index data from Hyperliquid blockchain using SQD. Specifically, it tracks NFT trading activities from the Drip.trade marketplace, including:

- `ItemSold` events: When NFTs are sold directly through listings
- `BidAccepted` events: When bids for NFTs are accepted by sellers

The processor begins indexing from block 377,808 (block where Drip's contract was deployed) and connects to Hyperliquid's network using both archive (`https://v2.archive.subsquid.io/network/hyperliquid-mainnet`) and RPC (`https://rpc.hyperliquid.xyz/evm`) endpoints.

This data can be useful for:
- Tracking NFT sales and pricing trends
- Analyzing marketplace activity
- Building custom dashboards or analytics tools for Drip.trade
