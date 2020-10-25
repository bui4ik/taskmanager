import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
import dayjs from 'dayjs'
import { isProcessDeletingIdSelector } from 'store/process/selectors'
import { deleteProcessPending } from 'store/process/slice'
import StatusTag from 'components/atoms/StatusTag/StatusTag'
import { Box, Title, TitleValue, Text, ButtonBox } from './styles'

const ProcessHeader = ({ process: { _id, name, jobs, startTime, jobsCount } }) => {
  const dispatch = useDispatch()
  const isLoadingId = useSelector(isProcessDeletingIdSelector)

  const onClick = () => {
    dispatch(deleteProcessPending({ id: _id }))
  }

  const getStatus = () => {
    if (jobs.every(({ status }) => status === 'successed')) {
      return 'successed'
    }
    if (jobs.some(({ status }) => status === 'running')) {
      return 'running'
    }
    if (jobs.some(({ status }) => status === 'failed')) {
      return 'failed'
    }
  }

  return (
    <Box>
      <Title>Title: </Title>
      <TitleValue>{name}</TitleValue>
      <Text>{dayjs(startTime).format('MM-DD-HH:mm:ss')}</Text>
      <Text>Jobs count: {jobsCount}</Text>
      <StatusTag status={getStatus()} />
      <ButtonBox>
        <Button type="danger" onClick={onClick} size="small" loading={_id === isLoadingId}>
          Delete process
        </Button>
      </ButtonBox>
    </Box>
  )
}

export default ProcessHeader
