import React from 'react'
import { useSelector } from 'react-redux'
import { Collapse } from 'antd'
import { processesSelector } from 'store/process/selectors'
import Tasks from 'components/molecules/Tasks/Tasks'
import ProcessHeader from 'components/molecules/ProcessHeader/ProcessHeader'

const { Panel } = Collapse

const ProcessesList = () => {
  const processes = useSelector(processesSelector)

  return (
    <Collapse defaultActiveKey={['1']}>
      {processes.map((process) => (
        <Panel key={process._id} header={<ProcessHeader process={process} />}>
          <Tasks jobs={process.jobs} />
        </Panel>
      ))}
    </Collapse>
  )
}

export default ProcessesList
