import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    ApprovalStatusUpdated: event("0x7b71c64fa32d1fb7a72baef31c02199ec1d77835b747e905b0581f5a248075a1", "ApprovalStatusUpdated(address,uint8,address)", {"nftAddress": p.address, "status": p.uint8, "paymentToken": p.address}),
    BidAccepted: event("0xf6b2b7813b1815a0e2e32964b4f22ec24862322d9c9c0e0eefac425dfc455ab1", "BidAccepted(address,address,address,uint256,uint64,uint128,address,uint8)", {"seller": p.address, "bidder": p.address, "nftAddress": p.address, "tokenId": p.uint256, "quantity": p.uint64, "pricePerItem": p.uint128, "paymentToken": p.address, "bidType": p.uint8}),
    CollectionBidCancelled: event("0xf5913151c29e184e3a477be2274f0b06b63cd67c1ab11e1cc103d25701cfbdf2", "CollectionBidCancelled(address,address)", {"bidder": p.address, "nftAddress": p.address}),
    CollectionBidCreatedOrUpdated: event("0x9f6945ee84d160722b736d12d84f9f3349075d2c78064575b40620be21bf6eef", "CollectionBidCreatedOrUpdated(address,address,uint64,uint128,uint64,address)", {"bidder": p.address, "nftAddress": p.address, "quantity": p.uint64, "pricePerItem": p.uint128, "expirationTime": p.uint64, "paymentToken": p.address}),
    Initialized: event("0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2", "Initialized(uint64)", {"version": p.uint64}),
    ItemCanceled: event("0x9ba1a3cb55ce8d63d072a886f94d2a744f50cddf82128e897d0661f5ec623158", "ItemCanceled(address,address,uint256)", {"seller": indexed(p.address), "nftAddress": indexed(p.address), "tokenId": indexed(p.uint256)}),
    ItemListed: event("0xb21f4a0122c6667aa16da06fcb7d9d3b2688164dfb40b7253aed80ea36d88e99", "ItemListed(address,address,uint256,uint64,uint128,uint64,address)", {"seller": p.address, "nftAddress": p.address, "tokenId": p.uint256, "quantity": p.uint64, "pricePerItem": p.uint128, "expirationTime": p.uint64, "paymentToken": p.address}),
    ItemSold: event("0x72d3f914473a393354e6fcd9c3cb7d2eee53924b9b856f9da274e024566292a5", "ItemSold(address,address,address,uint256,uint64,uint128,address)", {"seller": p.address, "buyer": p.address, "nftAddress": p.address, "tokenId": p.uint256, "quantity": p.uint64, "pricePerItem": p.uint128, "paymentToken": p.address}),
    ItemUpdated: event("0xde1951e410d2f4644b8dd23d6b9e5d2e862b417055f42e3939ab16b4635ec6de", "ItemUpdated(address,address,uint256,uint64,uint128,uint64,address)", {"seller": p.address, "nftAddress": p.address, "tokenId": p.uint256, "quantity": p.uint64, "pricePerItem": p.uint128, "expirationTime": p.uint64, "paymentToken": p.address}),
    Paused: event("0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258", "Paused(address)", {"account": p.address}),
    RoleAdminChanged: event("0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff", "RoleAdminChanged(bytes32,bytes32,bytes32)", {"role": indexed(p.bytes32), "previousAdminRole": indexed(p.bytes32), "newAdminRole": indexed(p.bytes32)}),
    RoleGranted: event("0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d", "RoleGranted(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    RoleRevoked: event("0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b", "RoleRevoked(bytes32,address,address)", {"role": indexed(p.bytes32), "account": indexed(p.address), "sender": indexed(p.address)}),
    TokenBidCancelled: event("0xc98088fb062dda614ae7304b89526258370705c2646039e06beff408428a6b9c", "TokenBidCancelled(address,address,uint256)", {"bidder": p.address, "nftAddress": p.address, "tokenId": p.uint256}),
    TokenBidCreatedOrUpdated: event("0xaa16fd3f89fcc221b55be8ebd56c20abf3a580c60a83d5de297e0edf750aeae8", "TokenBidCreatedOrUpdated(address,address,uint256,uint64,uint128,uint64,address)", {"bidder": p.address, "nftAddress": p.address, "tokenId": p.uint256, "quantity": p.uint64, "pricePerItem": p.uint128, "expirationTime": p.uint64, "paymentToken": p.address}),
    Unpaused: event("0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa", "Unpaused(address)", {"account": p.address}),
    UpdateCollectionCreatorFee: event("0x0981a01bfbbc95a5a634f8cea1dfa1f88d95cf914de1df5e4496f6d7623fba47", "UpdateCollectionCreatorFee(address,address,uint256)", {"collection": p.address, "recipient": p.address, "fee": p.uint256}),
    UpdateFeeRecipient: event("0x6632de8ab33c46549f7bb29f647ea0d751157b25fe6a14b1bcc7527cdfbeb79c", "UpdateFeeRecipient(address)", {"feeRecipient": p.address}),
    UpdateFees: event("0x53482196ef67ac615caab1c3eca2c270acbfdcd75e57c5f24c1b98b10c8e6e04", "UpdateFees(uint256,uint256)", {"fee": p.uint256, "feeForCollectionWithCreatorFee": p.uint256}),
}

export const functions = {
    buyItems: fun("0xa07076b2", "buyItems((address,uint256,address,uint64,uint128,address,bool)[])", {"_buyItemParamsBatch": p.array(p.struct({"nftAddress": p.address, "tokenId": p.uint256, "owner": p.address, "quantity": p.uint64, "maxPricePerItem": p.uint128, "paymentToken": p.address, "usingNative": p.bool}))}, ),
    paymentToken: viewFun("0x3013ce29", "paymentToken()", {}, p.address),
    listings: viewFun("0x6bd3a64b", "listings(address,uint256,address)", {"_0": p.address, "_1": p.uint256, "_2": p.address}, {"quantity": p.uint64, "pricePerItem": p.uint128, "expirationTime": p.uint64, "paymentTokenAddress": p.address}),
    feeReceipient: viewFun("0x3740ebb3", "feeReceipient()", {}, p.address),
    MARKETPLACE_ADMIN_ROLE: viewFun("0xb2a4eea0", "MARKETPLACE_ADMIN_ROLE()", {}, p.bytes32),
    collectionToMinPrice: viewFun("0x36a234d4", "collectionToMinPrice(address)", {"_0": p.address}, p.uint256),
    hasRole: viewFun("0x91d14854", "hasRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, p.bool),
    MAX_COLLECTION_FEE: viewFun("0x9858bc9f", "MAX_COLLECTION_FEE()", {}, p.uint256),
    MAX_FEE: viewFun("0xbc063e1a", "MAX_FEE()", {}, p.uint256),
    acceptBids: fun("0x318c4407", "acceptBids((uint8,address,uint256,address,uint64,uint128,address)[])", {"_acceptBidParamsBatch": p.array(p.struct({"bidType": p.uint8, "nftAddress": p.address, "tokenId": p.uint256, "bidder": p.address, "quantity": p.uint64, "pricePerItem": p.uint128, "paymentToken": p.address}))}, ),
    setCollectionCreatorFee: fun("0xd54153aa", "setCollectionCreatorFee(address,(uint32,address))", {"_collectionAddress": p.address, "_collectionCreatorFee": p.struct({"fee": p.uint32, "recipient": p.address})}, ),
    areBidsActive: viewFun("0x083aded7", "areBidsActive()", {}, p.bool),
    grantRole: fun("0x2f2ff15d", "grantRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    pause: fun("0x8456cb59", "pause()", {}, ),
    createOrUpdateCollectionBid: fun("0xc564e3a1", "createOrUpdateCollectionBid(address,uint64,uint128,uint64,address)", {"_nftAddress": p.address, "_quantity": p.uint64, "_pricePerItem": p.uint128, "_expirationTime": p.uint64, "_paymentToken": p.address}, ),
    createOrUpdateListings: fun("0x126080e9", "createOrUpdateListings((address,uint256,uint64,uint128,uint64,address)[])", {"_createOrUpdateListingParamsBatch": p.array(p.struct({"nftAddress": p.address, "tokenId": p.uint256, "quantity": p.uint64, "pricePerItem": p.uint128, "expirationTime": p.uint64, "paymentToken": p.address}))}, ),
    setFees: fun("0x0b78f9c0", "setFees(uint256,uint256)", {"_newFee": p.uint256, "_newFeeForCollectionWithCreatorFee": p.uint256}, ),
    feeForCollectionWithCreatorFee: viewFun("0x6f0531d7", "feeForCollectionWithCreatorFee()", {}, p.uint256),
    collectionCreatorFees: viewFun("0x286f9ad2", "collectionCreatorFees(address)", {"_0": p.address}, {"fee": p.uint32, "recipient": p.address}),
    enableBids: fun("0xea81bdbf", "enableBids()", {}, ),
    createOrUpdateTokenBids: fun("0xd32ac7b8", "createOrUpdateTokenBids((address,uint256,uint64,uint128,uint64,address)[])", {"_createOrUpdateTokenBidParamsBatch": p.array(p.struct({"nftAddress": p.address, "tokenId": p.uint256, "quantity": p.uint64, "pricePerItem": p.uint128, "expirationTime": p.uint64, "paymentToken": p.address}))}, ),
    getRoleMember: viewFun("0x9010d07c", "getRoleMember(bytes32,uint256)", {"role": p.bytes32, "index": p.uint256}, p.address),
    getMinPriceForCollection: viewFun("0xf945d04a", "getMinPriceForCollection(address)", {"_collection": p.address}, p.uint256),
    disableBids: fun("0x5d90a8ac", "disableBids()", {}, ),
    getListing: viewFun("0x47518c16", "getListing(address,uint256,address)", {"_collection": p.address, "_tokenId": p.uint256, "_seller": p.address}, p.struct({"quantity": p.uint64, "pricePerItem": p.uint128, "expirationTime": p.uint64, "paymentTokenAddress": p.address})),
    getCollectionBid: viewFun("0x78e29e93", "getCollectionBid(address,address)", {"_collection": p.address, "_bidder": p.address}, p.struct({"quantity": p.uint64, "pricePerItem": p.uint128, "expirationTime": p.uint64, "paymentTokenAddress": p.address})),
    getRoleMemberCount: viewFun("0xca15c873", "getRoleMemberCount(bytes32)", {"role": p.bytes32}, p.uint256),
    transferTokens: fun("0xee662218", "transferTokens((address,uint256,uint256,address)[])", {"_transferTokenParamsBatch": p.array(p.struct({"nftAddress": p.address, "tokenId": p.uint256, "quantity": p.uint256, "recipient": p.address}))}, ),
    getRoleMembers: viewFun("0xa3246ad3", "getRoleMembers(bytes32)", {"role": p.bytes32}, p.array(p.address)),
    collectionBids: viewFun("0x98803a83", "collectionBids(address,address)", {"_0": p.address, "_1": p.address}, {"quantity": p.uint64, "pricePerItem": p.uint128, "expirationTime": p.uint64, "paymentTokenAddress": p.address}),
    collectionToPaymentToken: viewFun("0x8852e220", "collectionToPaymentToken(address)", {"_0": p.address}, p.address),
    renounceRole: fun("0x36568abe", "renounceRole(bytes32,address)", {"role": p.bytes32, "callerConfirmation": p.address}, ),
    supportsInterface: viewFun("0x01ffc9a7", "supportsInterface(bytes4)", {"interfaceId": p.bytes4}, p.bool),
    tokenBids: viewFun("0xc7cbcb3e", "tokenBids(address,uint256,address)", {"_0": p.address, "_1": p.uint256, "_2": p.address}, {"quantity": p.uint64, "pricePerItem": p.uint128, "expirationTime": p.uint64, "paymentTokenAddress": p.address}),
    initialize: fun("0xb4988fd0", "initialize(uint256,address,address)", {"_initialFee": p.uint256, "_initialFeeRecipient": p.address, "_initialPaymentToken": p.address}, ),
    getPaymentTokenForCollection: viewFun("0x7945e944", "getPaymentTokenForCollection(address)", {"_collection": p.address}, p.address),
    setWnative: fun("0xa15cb6ac", "setWnative(address)", {"_wnativeAddress": p.address}, ),
    setCollectionApprovalStatus: fun("0xbe25c6c6", "setCollectionApprovalStatus(address,uint8,address,uint256)", {"_nft": p.address, "_status": p.uint8, "_paymentToken": p.address, "_minPrice": p.uint256}, ),
    paused: viewFun("0x5c975abb", "paused()", {}, p.bool),
    fee: viewFun("0xddca3f43", "fee()", {}, p.uint256),
    unpause: fun("0x3f4ba83a", "unpause()", {}, ),
    getTokenBid: viewFun("0xe2d4d360", "getTokenBid(address,uint256,address)", {"_collection": p.address, "_tokenId": p.uint256, "_bidder": p.address}, p.struct({"quantity": p.uint64, "pricePerItem": p.uint128, "expirationTime": p.uint64, "paymentTokenAddress": p.address})),
    setFeeRecipient: fun("0xe74b981b", "setFeeRecipient(address)", {"_newFeeRecipient": p.address}, ),
    revokeRole: fun("0xd547741f", "revokeRole(bytes32,address)", {"role": p.bytes32, "account": p.address}, ),
    DEFAULT_ADMIN_ROLE: viewFun("0xa217fddf", "DEFAULT_ADMIN_ROLE()", {}, p.bytes32),
    BASIS_POINTS: viewFun("0xe1f1c4a7", "BASIS_POINTS()", {}, p.uint256),
    getRoleAdmin: viewFun("0x248a9ca3", "getRoleAdmin(bytes32)", {"role": p.bytes32}, p.bytes32),
    cancelListings: fun("0x5238c61a", "cancelListings((address,uint256)[])", {"_cancelListingParamsBatch": p.array(p.struct({"nftAddress": p.address, "tokenId": p.uint256}))}, ),
    collectionApprovals: viewFun("0x3942edc7", "collectionApprovals(address)", {"_0": p.address}, p.uint8),
    cancelBids: fun("0xc8df4658", "cancelBids((uint8,address,uint256)[])", {"_cancelBidParamsBatch": p.array(p.struct({"bidType": p.uint8, "nftAddress": p.address, "tokenId": p.uint256}))}, ),
    wnative: viewFun("0x2cebdeb2", "wnative()", {}, p.address),
}

export class Contract extends ContractBase {

    paymentToken() {
        return this.eth_call(functions.paymentToken, {})
    }

    listings(_0: ListingsParams["_0"], _1: ListingsParams["_1"], _2: ListingsParams["_2"]) {
        return this.eth_call(functions.listings, {_0, _1, _2})
    }

    feeReceipient() {
        return this.eth_call(functions.feeReceipient, {})
    }

    MARKETPLACE_ADMIN_ROLE() {
        return this.eth_call(functions.MARKETPLACE_ADMIN_ROLE, {})
    }

    collectionToMinPrice(_0: CollectionToMinPriceParams["_0"]) {
        return this.eth_call(functions.collectionToMinPrice, {_0})
    }

    hasRole(role: HasRoleParams["role"], account: HasRoleParams["account"]) {
        return this.eth_call(functions.hasRole, {role, account})
    }

    MAX_COLLECTION_FEE() {
        return this.eth_call(functions.MAX_COLLECTION_FEE, {})
    }

    MAX_FEE() {
        return this.eth_call(functions.MAX_FEE, {})
    }

    areBidsActive() {
        return this.eth_call(functions.areBidsActive, {})
    }

    feeForCollectionWithCreatorFee() {
        return this.eth_call(functions.feeForCollectionWithCreatorFee, {})
    }

    collectionCreatorFees(_0: CollectionCreatorFeesParams["_0"]) {
        return this.eth_call(functions.collectionCreatorFees, {_0})
    }

    getRoleMember(role: GetRoleMemberParams["role"], index: GetRoleMemberParams["index"]) {
        return this.eth_call(functions.getRoleMember, {role, index})
    }

    getMinPriceForCollection(_collection: GetMinPriceForCollectionParams["_collection"]) {
        return this.eth_call(functions.getMinPriceForCollection, {_collection})
    }

    getListing(_collection: GetListingParams["_collection"], _tokenId: GetListingParams["_tokenId"], _seller: GetListingParams["_seller"]) {
        return this.eth_call(functions.getListing, {_collection, _tokenId, _seller})
    }

    getCollectionBid(_collection: GetCollectionBidParams["_collection"], _bidder: GetCollectionBidParams["_bidder"]) {
        return this.eth_call(functions.getCollectionBid, {_collection, _bidder})
    }

    getRoleMemberCount(role: GetRoleMemberCountParams["role"]) {
        return this.eth_call(functions.getRoleMemberCount, {role})
    }

    getRoleMembers(role: GetRoleMembersParams["role"]) {
        return this.eth_call(functions.getRoleMembers, {role})
    }

    collectionBids(_0: CollectionBidsParams["_0"], _1: CollectionBidsParams["_1"]) {
        return this.eth_call(functions.collectionBids, {_0, _1})
    }

    collectionToPaymentToken(_0: CollectionToPaymentTokenParams["_0"]) {
        return this.eth_call(functions.collectionToPaymentToken, {_0})
    }

    supportsInterface(interfaceId: SupportsInterfaceParams["interfaceId"]) {
        return this.eth_call(functions.supportsInterface, {interfaceId})
    }

    tokenBids(_0: TokenBidsParams["_0"], _1: TokenBidsParams["_1"], _2: TokenBidsParams["_2"]) {
        return this.eth_call(functions.tokenBids, {_0, _1, _2})
    }

    getPaymentTokenForCollection(_collection: GetPaymentTokenForCollectionParams["_collection"]) {
        return this.eth_call(functions.getPaymentTokenForCollection, {_collection})
    }

    paused() {
        return this.eth_call(functions.paused, {})
    }

    fee() {
        return this.eth_call(functions.fee, {})
    }

    getTokenBid(_collection: GetTokenBidParams["_collection"], _tokenId: GetTokenBidParams["_tokenId"], _bidder: GetTokenBidParams["_bidder"]) {
        return this.eth_call(functions.getTokenBid, {_collection, _tokenId, _bidder})
    }

    DEFAULT_ADMIN_ROLE() {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, {})
    }

    BASIS_POINTS() {
        return this.eth_call(functions.BASIS_POINTS, {})
    }

    getRoleAdmin(role: GetRoleAdminParams["role"]) {
        return this.eth_call(functions.getRoleAdmin, {role})
    }

    collectionApprovals(_0: CollectionApprovalsParams["_0"]) {
        return this.eth_call(functions.collectionApprovals, {_0})
    }

    wnative() {
        return this.eth_call(functions.wnative, {})
    }
}

/// Event types
export type ApprovalStatusUpdatedEventArgs = EParams<typeof events.ApprovalStatusUpdated>
export type BidAcceptedEventArgs = EParams<typeof events.BidAccepted>
export type CollectionBidCancelledEventArgs = EParams<typeof events.CollectionBidCancelled>
export type CollectionBidCreatedOrUpdatedEventArgs = EParams<typeof events.CollectionBidCreatedOrUpdated>
export type InitializedEventArgs = EParams<typeof events.Initialized>
export type ItemCanceledEventArgs = EParams<typeof events.ItemCanceled>
export type ItemListedEventArgs = EParams<typeof events.ItemListed>
export type ItemSoldEventArgs = EParams<typeof events.ItemSold>
export type ItemUpdatedEventArgs = EParams<typeof events.ItemUpdated>
export type PausedEventArgs = EParams<typeof events.Paused>
export type RoleAdminChangedEventArgs = EParams<typeof events.RoleAdminChanged>
export type RoleGrantedEventArgs = EParams<typeof events.RoleGranted>
export type RoleRevokedEventArgs = EParams<typeof events.RoleRevoked>
export type TokenBidCancelledEventArgs = EParams<typeof events.TokenBidCancelled>
export type TokenBidCreatedOrUpdatedEventArgs = EParams<typeof events.TokenBidCreatedOrUpdated>
export type UnpausedEventArgs = EParams<typeof events.Unpaused>
export type UpdateCollectionCreatorFeeEventArgs = EParams<typeof events.UpdateCollectionCreatorFee>
export type UpdateFeeRecipientEventArgs = EParams<typeof events.UpdateFeeRecipient>
export type UpdateFeesEventArgs = EParams<typeof events.UpdateFees>

/// Function types
export type BuyItemsParams = FunctionArguments<typeof functions.buyItems>
export type BuyItemsReturn = FunctionReturn<typeof functions.buyItems>

export type PaymentTokenParams = FunctionArguments<typeof functions.paymentToken>
export type PaymentTokenReturn = FunctionReturn<typeof functions.paymentToken>

export type ListingsParams = FunctionArguments<typeof functions.listings>
export type ListingsReturn = FunctionReturn<typeof functions.listings>

export type FeeReceipientParams = FunctionArguments<typeof functions.feeReceipient>
export type FeeReceipientReturn = FunctionReturn<typeof functions.feeReceipient>

export type MARKETPLACE_ADMIN_ROLEParams = FunctionArguments<typeof functions.MARKETPLACE_ADMIN_ROLE>
export type MARKETPLACE_ADMIN_ROLEReturn = FunctionReturn<typeof functions.MARKETPLACE_ADMIN_ROLE>

export type CollectionToMinPriceParams = FunctionArguments<typeof functions.collectionToMinPrice>
export type CollectionToMinPriceReturn = FunctionReturn<typeof functions.collectionToMinPrice>

export type HasRoleParams = FunctionArguments<typeof functions.hasRole>
export type HasRoleReturn = FunctionReturn<typeof functions.hasRole>

export type MAX_COLLECTION_FEEParams = FunctionArguments<typeof functions.MAX_COLLECTION_FEE>
export type MAX_COLLECTION_FEEReturn = FunctionReturn<typeof functions.MAX_COLLECTION_FEE>

export type MAX_FEEParams = FunctionArguments<typeof functions.MAX_FEE>
export type MAX_FEEReturn = FunctionReturn<typeof functions.MAX_FEE>

export type AcceptBidsParams = FunctionArguments<typeof functions.acceptBids>
export type AcceptBidsReturn = FunctionReturn<typeof functions.acceptBids>

export type SetCollectionCreatorFeeParams = FunctionArguments<typeof functions.setCollectionCreatorFee>
export type SetCollectionCreatorFeeReturn = FunctionReturn<typeof functions.setCollectionCreatorFee>

export type AreBidsActiveParams = FunctionArguments<typeof functions.areBidsActive>
export type AreBidsActiveReturn = FunctionReturn<typeof functions.areBidsActive>

export type GrantRoleParams = FunctionArguments<typeof functions.grantRole>
export type GrantRoleReturn = FunctionReturn<typeof functions.grantRole>

export type PauseParams = FunctionArguments<typeof functions.pause>
export type PauseReturn = FunctionReturn<typeof functions.pause>

export type CreateOrUpdateCollectionBidParams = FunctionArguments<typeof functions.createOrUpdateCollectionBid>
export type CreateOrUpdateCollectionBidReturn = FunctionReturn<typeof functions.createOrUpdateCollectionBid>

export type CreateOrUpdateListingsParams = FunctionArguments<typeof functions.createOrUpdateListings>
export type CreateOrUpdateListingsReturn = FunctionReturn<typeof functions.createOrUpdateListings>

export type SetFeesParams = FunctionArguments<typeof functions.setFees>
export type SetFeesReturn = FunctionReturn<typeof functions.setFees>

export type FeeForCollectionWithCreatorFeeParams = FunctionArguments<typeof functions.feeForCollectionWithCreatorFee>
export type FeeForCollectionWithCreatorFeeReturn = FunctionReturn<typeof functions.feeForCollectionWithCreatorFee>

export type CollectionCreatorFeesParams = FunctionArguments<typeof functions.collectionCreatorFees>
export type CollectionCreatorFeesReturn = FunctionReturn<typeof functions.collectionCreatorFees>

export type EnableBidsParams = FunctionArguments<typeof functions.enableBids>
export type EnableBidsReturn = FunctionReturn<typeof functions.enableBids>

export type CreateOrUpdateTokenBidsParams = FunctionArguments<typeof functions.createOrUpdateTokenBids>
export type CreateOrUpdateTokenBidsReturn = FunctionReturn<typeof functions.createOrUpdateTokenBids>

export type GetRoleMemberParams = FunctionArguments<typeof functions.getRoleMember>
export type GetRoleMemberReturn = FunctionReturn<typeof functions.getRoleMember>

export type GetMinPriceForCollectionParams = FunctionArguments<typeof functions.getMinPriceForCollection>
export type GetMinPriceForCollectionReturn = FunctionReturn<typeof functions.getMinPriceForCollection>

export type DisableBidsParams = FunctionArguments<typeof functions.disableBids>
export type DisableBidsReturn = FunctionReturn<typeof functions.disableBids>

export type GetListingParams = FunctionArguments<typeof functions.getListing>
export type GetListingReturn = FunctionReturn<typeof functions.getListing>

export type GetCollectionBidParams = FunctionArguments<typeof functions.getCollectionBid>
export type GetCollectionBidReturn = FunctionReturn<typeof functions.getCollectionBid>

export type GetRoleMemberCountParams = FunctionArguments<typeof functions.getRoleMemberCount>
export type GetRoleMemberCountReturn = FunctionReturn<typeof functions.getRoleMemberCount>

export type TransferTokensParams = FunctionArguments<typeof functions.transferTokens>
export type TransferTokensReturn = FunctionReturn<typeof functions.transferTokens>

export type GetRoleMembersParams = FunctionArguments<typeof functions.getRoleMembers>
export type GetRoleMembersReturn = FunctionReturn<typeof functions.getRoleMembers>

export type CollectionBidsParams = FunctionArguments<typeof functions.collectionBids>
export type CollectionBidsReturn = FunctionReturn<typeof functions.collectionBids>

export type CollectionToPaymentTokenParams = FunctionArguments<typeof functions.collectionToPaymentToken>
export type CollectionToPaymentTokenReturn = FunctionReturn<typeof functions.collectionToPaymentToken>

export type RenounceRoleParams = FunctionArguments<typeof functions.renounceRole>
export type RenounceRoleReturn = FunctionReturn<typeof functions.renounceRole>

export type SupportsInterfaceParams = FunctionArguments<typeof functions.supportsInterface>
export type SupportsInterfaceReturn = FunctionReturn<typeof functions.supportsInterface>

export type TokenBidsParams = FunctionArguments<typeof functions.tokenBids>
export type TokenBidsReturn = FunctionReturn<typeof functions.tokenBids>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type GetPaymentTokenForCollectionParams = FunctionArguments<typeof functions.getPaymentTokenForCollection>
export type GetPaymentTokenForCollectionReturn = FunctionReturn<typeof functions.getPaymentTokenForCollection>

export type SetWnativeParams = FunctionArguments<typeof functions.setWnative>
export type SetWnativeReturn = FunctionReturn<typeof functions.setWnative>

export type SetCollectionApprovalStatusParams = FunctionArguments<typeof functions.setCollectionApprovalStatus>
export type SetCollectionApprovalStatusReturn = FunctionReturn<typeof functions.setCollectionApprovalStatus>

export type PausedParams = FunctionArguments<typeof functions.paused>
export type PausedReturn = FunctionReturn<typeof functions.paused>

export type FeeParams = FunctionArguments<typeof functions.fee>
export type FeeReturn = FunctionReturn<typeof functions.fee>

export type UnpauseParams = FunctionArguments<typeof functions.unpause>
export type UnpauseReturn = FunctionReturn<typeof functions.unpause>

export type GetTokenBidParams = FunctionArguments<typeof functions.getTokenBid>
export type GetTokenBidReturn = FunctionReturn<typeof functions.getTokenBid>

export type SetFeeRecipientParams = FunctionArguments<typeof functions.setFeeRecipient>
export type SetFeeRecipientReturn = FunctionReturn<typeof functions.setFeeRecipient>

export type RevokeRoleParams = FunctionArguments<typeof functions.revokeRole>
export type RevokeRoleReturn = FunctionReturn<typeof functions.revokeRole>

export type DEFAULT_ADMIN_ROLEParams = FunctionArguments<typeof functions.DEFAULT_ADMIN_ROLE>
export type DEFAULT_ADMIN_ROLEReturn = FunctionReturn<typeof functions.DEFAULT_ADMIN_ROLE>

export type BASIS_POINTSParams = FunctionArguments<typeof functions.BASIS_POINTS>
export type BASIS_POINTSReturn = FunctionReturn<typeof functions.BASIS_POINTS>

export type GetRoleAdminParams = FunctionArguments<typeof functions.getRoleAdmin>
export type GetRoleAdminReturn = FunctionReturn<typeof functions.getRoleAdmin>

export type CancelListingsParams = FunctionArguments<typeof functions.cancelListings>
export type CancelListingsReturn = FunctionReturn<typeof functions.cancelListings>

export type CollectionApprovalsParams = FunctionArguments<typeof functions.collectionApprovals>
export type CollectionApprovalsReturn = FunctionReturn<typeof functions.collectionApprovals>

export type CancelBidsParams = FunctionArguments<typeof functions.cancelBids>
export type CancelBidsReturn = FunctionReturn<typeof functions.cancelBids>

export type WnativeParams = FunctionArguments<typeof functions.wnative>
export type WnativeReturn = FunctionReturn<typeof functions.wnative>

