export enum ChainId {
  ESPACE = 1030,
  ESPACE_TESTNET = 71
}

export const SUPPORTED_CHAINS = [
  ChainId.ESPACE,
  ChainId.ESPACE_TESTNET
] as const
export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  CONFLUX = 'CFX',
}
