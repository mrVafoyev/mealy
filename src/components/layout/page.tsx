import React from 'react'
import Header from '../header/page'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'

export const LayOutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space between;
  width: 100vw;
  margin-top: 45px;
`

export default function LayOut() {
  return (
    <LayOutContainer>
      <Header />
    </LayOutContainer>

  )
}
