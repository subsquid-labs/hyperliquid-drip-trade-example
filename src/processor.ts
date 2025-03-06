import {EvmBatchProcessor} from '@subsquid/evm-processor'
import * as dripTradeAbi from './abi/drip-trade'

export const DRIP_TRADE_CONTRACT_ADDRESS =
  '0x7be8f48894d9ec0528ca70d9151cf2831c377be0'

export const processor = new EvmBatchProcessor()
  .setGateway('https://v2.archive.subsquid.io/network/hyperliquid-mainnet')
  .setRpcEndpoint('https://rpc.hyperliquid.xyz/evm')
  .setFinalityConfirmation(1)
  .addLog({
    range: { from: 377_808 },
    address: [DRIP_TRADE_CONTRACT_ADDRESS],
    topic0: [
        dripTradeAbi.events.ItemSold.topic,
        dripTradeAbi.events.BidAccepted.topic, 
    ],
  })
  .setFields({
    log: {
      transactionHash: true,
    },
  })
