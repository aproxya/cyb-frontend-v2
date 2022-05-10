import React, { useState } from 'react'

// library imports.
import styled from 'styled-components'
// ----------------

// component imports.
import Splash from './components/splash'
// ------------------

// styled components.
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`
// ------------------



const Application = () => {
  return (
    <AppContainer>
      <Splash />
    </AppContainer>
  )
}

export default Application
