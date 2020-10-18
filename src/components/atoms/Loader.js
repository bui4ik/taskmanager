import React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd'

const Loader = () => <StyledSpin size="large" />

export default Loader

const StyledSpin = styled(Spin)`
  width: 100%;
  justify-self: center;
  align-self: center;
`
