'use client';

import { WagmiConfig, createConfig, mainnet } from 'wagmi'
import { createPublicClient, http } from 'viem'

const config = createConfig({
    autoConnect: true,
    publicClient: createPublicClient({
      chain: mainnet,
      transport: http()
    }),
  })
   
export default function Wrapper({ children }: { children: React.ReactNode }) {
    return (
        <WagmiConfig config={config}>
            {children}
        </WagmiConfig>
    )
}