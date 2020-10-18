import React from 'react'
import { Box, Task, Title, StyledTag } from './styles'

const tagsColors = {
  successed: 'green',
  running: 'blue',
  failed: 'red',
}

const Tasks = ({ jobs }) => (
  <Box>
    {jobs.map(({ _id, name, status }) => (
      <Task key={_id}>
        <Title>{name}</Title>
        <StyledTag color={tagsColors[status]}>{status}</StyledTag>
      </Task>
    ))}
  </Box>
)

export default Tasks
