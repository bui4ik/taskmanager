import React from 'react'
import styled from 'styled-components'
import { Tag } from 'antd'

const tagsColors = {
  successed: 'green',
  running: 'blue',
  failed: 'red',
}

const StatusTag = ({ status }) => <StyledTag color={tagsColors[status]}>{status}</StyledTag>

export default StatusTag

export const StyledTag = styled(Tag)`
  width: 70px;
  text-align: center;
`
