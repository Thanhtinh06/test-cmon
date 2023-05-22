import React from 'react'
import { useSelector } from 'react-redux'
import PlayerCard from './PlayerCard'

const PlayerTable = () => {
  const {playerArray} = useSelector(state => state.managePlayer)
  const renderTable = () => {
    return playerArray.map((player) => {
      return <PlayerCard key={player.id} value={player}/>
    })
  }
  return (
    <div className="grid grid-cols-3 gap-6">
      {renderTable()}
    </div>
  )
}

export default PlayerTable