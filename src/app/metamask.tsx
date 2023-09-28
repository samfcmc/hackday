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
      <Button variant='outlined' onClick={onDisconnect}>Disconnect</Button>
    )
  }
  return (
    <Button variant='outlined' onClick={onConnect}>Connect</Button>
  )
}
