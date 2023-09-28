'use client';

import Button from '@mui/material/Button'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export default function Metamask() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  const onConnect = () => {
    connect()
  }

  const onDisconnect = () => {
    disconnect()
  }

  console.log('TEST', { isConnected, address })

  if (isConnected && address) {
    return (
        <div className='flex flex-row gap-2 items-center'>
            <span>{address}</span>
            <Button variant='outlined' onClick={onDisconnect}>Disconnect</Button>
        </div>
    )
  }
  return (
    <Button variant='outlined' onClick={onConnect}>Connect</Button>
  )
}
