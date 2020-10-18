import styled from 'styled-components'
import { Tag } from 'antd'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`

export const Task = styled.div`
  display: flex;

  &:not(:last-child) {
    padding-bottom: 10px;
  }
`

export const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
`

export const StyledTag = styled(Tag)`
  margin-left: auto;
  margin-right: 0;
  width: 70px;
  text-align: center;
`
