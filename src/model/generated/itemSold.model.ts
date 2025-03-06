import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, StringColumn as StringColumn_, Index as Index_, BigIntColumn as BigIntColumn_} from "@subsquid/typeorm-store"

@Entity_()
export class ItemSold {
    constructor(props?: Partial<ItemSold>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @IntColumn_({nullable: false})
    block!: number

    @Index_()
    @StringColumn_({nullable: false})
    seller!: string

    @Index_()
    @StringColumn_({nullable: false})
    buyer!: string

    @Index_()
    @StringColumn_({nullable: false})
    nftAddress!: string

    @BigIntColumn_({nullable: false})
    tokenId!: bigint

    @BigIntColumn_({nullable: false})
    quantity!: bigint

    @BigIntColumn_({nullable: false})
    pricePerItem!: bigint

    @Index_()
    @StringColumn_({nullable: false})
    paymentToken!: string

    @StringColumn_({nullable: false})
    txnHash!: string
}
