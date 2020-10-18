import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
import { isProcessDeletingIdSelector } from 'store/process/selectors'
import { deleteProcessPending } from 'store/process/slice'
import { Box, ButtonBox, Title, TitleValue } from './styles'

const ProcessHeader = ({ process: { _id, name } }) => {
  const dispatch = useDispatch()
  const isLoadingId = useSelector(isProcessDeletingIdSelector)

  const onClick = () => {
    dispatch(deleteProcessPending({ id: _id }))
  }
  return (
    <Box>
      <Title>Title: </Title>
      <TitleValue>{name}</TitleValue>
      <ButtonBox>
        <Button type="danger" onClick={onClick} size="small" loading={_id === isLoadingId}>
          Delete process
        </Button>
      </ButtonBox>
    </Box>
  )
}

export default ProcessHeader
