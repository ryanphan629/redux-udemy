import styled from 'styled-components'

const FeedsContainer = styled.div`
  display: block;
  height: 100%;
  color: black;
  font-size: 24px;
  padding: 15px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
`

export { FeedsContainer, GridContainer }