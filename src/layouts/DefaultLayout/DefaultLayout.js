import React from 'react'
import { useDispatch } from 'react-redux'
import { Layout } from 'antd'
import { getProcessesPending } from 'store/process/slice'
import { StyledLayout, StyledContent } from './styles'
import useInterval from './useInterval'

const { Header } = Layout

const DefaultLayout = ({ children }) => {
  const dispatch = useDispatch()
  useInterval(() => dispatch(getProcessesPending()), 600000)
  return (
    <StyledLayout>
      <Header />
      <StyledContent>{children}</StyledContent>
    </StyledLayout>
  )
}

export default DefaultLayout
