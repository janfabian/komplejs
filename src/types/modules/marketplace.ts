export type ExecuteMsg = 'list_fixed_token' | 'delist_fixed_token' | 'update_price' | 'buy'

export const ExecuteMsg = {
  LIST_FIXED_TOKEN: 'list_fixed_token' as ExecuteMsg,
  DELIST_FIXED_TOKEN: 'delist_fixed_token' as ExecuteMsg,
  UPDATE_PRICE: 'update_price' as ExecuteMsg,
  BUY: 'buy' as ExecuteMsg
}

export type QueryMsg = 'config' | 'fixed_listing'

export const QueryMsg = {
  CONFIG: 'config' as QueryMsg,
  FIXED_LISTING: 'fixed_listing' as QueryMsg
}

export interface InstantiateMsg {
  admin: string
  native_denom: string
}

export type Listing = 'Fixed' | 'Auction'

export interface ListFixedTokenMsg {
  collection_id: number
  token_id: number
  price: string
}

export interface DelistFixedTokenMsg {
  collection_id: number
  token_id: number
}

export interface UpdatePriceMsg {
  listing_type: Listing
  collection_id: number
  token_id: number
  price: string
}

export interface BuyMsg {
  listing_type: Listing
  collection_id: number
  token_id: number
}
