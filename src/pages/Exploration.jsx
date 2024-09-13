import React from 'react'
import ExplorationBanner from '../exploration/banner/ExplorationBanner'
import CarrerTools from '../exploration/carrer_tools/CarrerTools'
import DedicatedCarrer from '../exploration/dedicated carrer coach/DedicatedCarrer'
import AboutApp from '../exploration/about app and carrer/AboutApp'
import VirtualSimulator from '../exploration/virtual simulation/VirtualSimulator'

const Exploration = () => {
  return (
    <div>
        <ExplorationBanner/>  
        <CarrerTools/>  
        <VirtualSimulator/>
        <AboutApp/>
        <DedicatedCarrer/>
    </div>
  )
}

export default Exploration