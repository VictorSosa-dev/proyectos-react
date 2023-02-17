import { useState } from 'react'
import './App.css'
import {TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  const formatName = (userName) => `@${userName}`

  return (
    <section className='App'>
      <TwitterFollowCard formatName={formatName} userName='victorsosa-dev'>
        <strong>Victor Sosa</strong>
      </TwitterFollowCard>


      <TwitterFollowCard formatName={formatName} userName='midudev' >
        <strong>Miguel Ángel Durán</strong>
      </TwitterFollowCard> 

    </section>
  )
}
