import { ChainId, ERC20Token, WBNB, WETH9 } from '@pancakeswap/sdk'
import { BUSD_TESTNET, CAKE_TESTNET, CAKE_ZKSYNC } from './common'

export const zksyncTestnetTokens = {
  weth: WETH9[ChainId.ZKSYNC_TESTNET],
  cake: CAKE_ZKSYNC,
  usdc: new ERC20Token(
    ChainId.ZKSYNC_TESTNET,
    '0xBA2BE328FDB92268cf673F58Af9bc41FFb2b718F',
    18,
    'USDC',
    'USD Coin',
  ),
  usdt: new ERC20Token(ChainId.ZKSYNC_TESTNET, '0xfcEd12dEbc831D3a84931c63687C395837D42c2B', 18, 'USDT', 'Tether USD'),
}
