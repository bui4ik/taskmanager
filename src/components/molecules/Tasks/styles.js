import styled from 'styled-components'

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

export const TagBox = styled.div`
  margin-left: auto;
  margin-right: 0;
`
