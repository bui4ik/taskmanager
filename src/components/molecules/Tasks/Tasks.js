import React from 'react'
import StatusTag from 'components/atoms/StatusTag/StatusTag'
import { Box, Task, Title, TagBox } from './styles'

const Tasks = ({ jobs }) => (
  <Box>
    {jobs.map(({ _id, name, status }) => (
      <Task key={_id}>
        <Title>{name}</Title>
        <TagBox>
          <StatusTag status={status} />
        </TagBox>
      </Task>
    ))}
  </Box>
)

export default Tasks
