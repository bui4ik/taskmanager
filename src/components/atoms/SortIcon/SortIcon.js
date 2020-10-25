import React from 'react'
import styled from 'styled-components'
import { DownOutlined, UpOutlined, CloseOutlined } from '@ant-design/icons'

const icons = {
  noSort: <DownOutlined />,
  asc: <UpOutlined />,
  desc: <CloseOutlined />,
}

const SortIcon = ({ value }) => {
  return <Box>{icons[value]}</Box>
}

export default SortIcon

const Box = styled.div`
  padding: 0 5px;
`
