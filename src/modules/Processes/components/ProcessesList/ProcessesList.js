import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
import { processesSelector, isProcessDeletingIdSelector } from 'store/process/selectors'
import { deleteProcessPending } from 'store/process/slice'
import { StyledCard, Box, Title, TitleValue, ButtonBox } from './styles'

const ProcessesList = () => {
  const dispatch = useDispatch()
  const processes = useSelector(processesSelector)
  const isLoadingId = useSelector(isProcessDeletingIdSelector)

  const onClick = (id) => {
    dispatch(deleteProcessPending({ id }))
  }

  return (
    <div>
      {processes.map(({ _id, name }) => (
        <StyledCard key={_id}>
          <Box>
            <Title>Title: </Title>
            <TitleValue>{name}</TitleValue>
            <ButtonBox>
              <Button
                type="danger"
                onClick={() => onClick(_id)}
                size="small"
                loading={_id === isLoadingId}
              >
                Delete process
              </Button>
            </ButtonBox>
          </Box>
        </StyledCard>
      ))}
    </div>
  )
}

export default ProcessesList
