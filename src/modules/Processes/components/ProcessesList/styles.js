import styled from 'styled-components'
import { Card } from 'antd'

export const StyledCard = styled(Card)`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const Box = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.div`
  font-weight: 700;
  padding-right: 6px;
`

export const TitleValue = styled.div`
  font-style: italic;
`

export const ButtonBox = styled.div`
  margin-left: auto;
  margin-right: 0;
`
