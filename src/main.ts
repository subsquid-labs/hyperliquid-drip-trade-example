import { TypeormDatabase } from "@subsquid/typeorm-store";
import * as dripTradeAbi from "./abi/drip-trade";
import { ItemSold, BidAccepted } from "./model";
import { processor, DRIP_TRADE_CONTRACT_ADDRESS } from "./processor";

const db = new TypeormDatabase({ supportHotBlocks: true });

processor.run(db, async (ctx) => {
  const itemsSold: ItemSold[] = [];
  const bidsAccepted: BidAccepted[] = [];

  for (let block of ctx.blocks) {
    for (let log of block.logs) {
      if (log.address !== DRIP_TRADE_CONTRACT_ADDRESS) continue;

      if (log.topics[0] === dripTradeAbi.events.ItemSold.topic) {
        const {
          seller,
          buyer,
          nftAddress,
          tokenId,
          quantity,
          pricePerItem,
          paymentToken,
        } = dripTradeAbi.events.ItemSold.decode(log);

        itemsSold.push(
          new ItemSold({
            id: log.id,
            seller,
            buyer,
            nftAddress,
            tokenId,
            quantity,
            pricePerItem,
            paymentToken,
            block: block.header.height,
            txnHash: log.transactionHash,
          })
        );
      }

      if (log.topics[0] === dripTradeAbi.events.BidAccepted.topic) {
        const {
          seller,
          bidder,
          nftAddress,
          tokenId,
          quantity,
          pricePerItem,
          paymentToken,
          bidType,
        } = dripTradeAbi.events.BidAccepted.decode(log);

        bidsAccepted.push(
          new BidAccepted({
            id: log.id,
            seller,
            bidder,
            nftAddress,
            tokenId,
            quantity,
            pricePerItem,
            paymentToken,
            bidType: bidType === 0 ? "token_bid" : "collection_bid",
            block: block.header.height,
            txnHash: log.transactionHash,
          })
        );
      }
    }
  }
  
  await ctx.store.insert(itemsSold);
  await ctx.store.insert(bidsAccepted);
});
