import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
import { createProcessPending } from 'store/process/slice'
import { isProcessCreatingSelector } from 'store/process/selectors'
import { Box, ButtonWrapper } from './styles'

const UtilsSection = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(isProcessCreatingSelector)

  const onClick = () => {
    dispatch(createProcessPending())
  }

  return (
    <Box>
      <ButtonWrapper>
        <Button type="primary" onClick={onClick} loading={isLoading}>
          Generate process
        </Button>
      </ButtonWrapper>
    </Box>
  )
}

export default UtilsSection
