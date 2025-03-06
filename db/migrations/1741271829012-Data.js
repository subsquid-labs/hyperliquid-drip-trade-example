module.exports = class Data1741271829012 {
    name = 'Data1741271829012'

    async up(db) {
        await db.query(`CREATE TABLE "item_sold" ("id" character varying NOT NULL, "block" integer NOT NULL, "seller" text NOT NULL, "buyer" text NOT NULL, "nft_address" text NOT NULL, "token_id" numeric NOT NULL, "quantity" numeric NOT NULL, "price_per_item" numeric NOT NULL, "payment_token" text NOT NULL, "txn_hash" text NOT NULL, CONSTRAINT "PK_78ff0948e3f5c3200ab33cb63ec" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_e3fd35de23fce566cbc33fde30" ON "item_sold" ("seller") `)
        await db.query(`CREATE INDEX "IDX_ecf9b9453d8630da677d83d658" ON "item_sold" ("buyer") `)
        await db.query(`CREATE INDEX "IDX_049c5e6333808f599d14d8c0d0" ON "item_sold" ("nft_address") `)
        await db.query(`CREATE INDEX "IDX_1621884a4fc209944e3a2c1087" ON "item_sold" ("payment_token") `)
        await db.query(`CREATE TABLE "bid_accepted" ("id" character varying NOT NULL, "block" integer NOT NULL, "seller" text NOT NULL, "bidder" text NOT NULL, "nft_address" text NOT NULL, "token_id" numeric NOT NULL, "quantity" numeric NOT NULL, "price_per_item" numeric NOT NULL, "payment_token" text NOT NULL, "txn_hash" text NOT NULL, "bid_type" text NOT NULL, CONSTRAINT "PK_daec372e1b4c7e4791062ebbd31" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_0492011966e878a13e9f468192" ON "bid_accepted" ("seller") `)
        await db.query(`CREATE INDEX "IDX_56ae05cd2854b93033beb984cb" ON "bid_accepted" ("bidder") `)
        await db.query(`CREATE INDEX "IDX_528b4dad936ac9fe00c5c88eed" ON "bid_accepted" ("nft_address") `)
        await db.query(`CREATE INDEX "IDX_7d466fe49cfdea3676833f0e95" ON "bid_accepted" ("payment_token") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "item_sold"`)
        await db.query(`DROP INDEX "public"."IDX_e3fd35de23fce566cbc33fde30"`)
        await db.query(`DROP INDEX "public"."IDX_ecf9b9453d8630da677d83d658"`)
        await db.query(`DROP INDEX "public"."IDX_049c5e6333808f599d14d8c0d0"`)
        await db.query(`DROP INDEX "public"."IDX_1621884a4fc209944e3a2c1087"`)
        await db.query(`DROP TABLE "bid_accepted"`)
        await db.query(`DROP INDEX "public"."IDX_0492011966e878a13e9f468192"`)
        await db.query(`DROP INDEX "public"."IDX_56ae05cd2854b93033beb984cb"`)
        await db.query(`DROP INDEX "public"."IDX_528b4dad936ac9fe00c5c88eed"`)
        await db.query(`DROP INDEX "public"."IDX_7d466fe49cfdea3676833f0e95"`)
    }
}
