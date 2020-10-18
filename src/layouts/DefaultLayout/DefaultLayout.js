import React from 'react'
import { Layout } from 'antd'
import { StyledLayout, StyledContent } from './styles'

const { Header } = Layout

const DefaultLayout = ({ children }) => (
  <StyledLayout>
    <Header />
    <StyledContent>{children}</StyledContent>
  </StyledLayout>
)

export default DefaultLayout
