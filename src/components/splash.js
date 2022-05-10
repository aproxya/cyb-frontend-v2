import React from 'react'

// library imports.
import styled from 'styled-components'
// ----------------

// file imports.
import BGGIF from './../assets/cyberpunk.gif'
// ------------

// styled components.
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: url(${BGGIF});
  background-size: 100% 100%;
`
// -----------------

const Splash = () => {
  return (
    <Container>
    hello
    </Container>
  )
}

export default Splash
