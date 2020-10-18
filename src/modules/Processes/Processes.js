import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from 'antd'
import { getProcessesPending } from 'store/process/slice'
import { processesSelector, isProcessesLoadingSelector } from 'store/process/selectors'
import DefaultLayout from 'layouts/DefaultLayout/DefaultLayout'
import Loader from 'components/atoms/Loader'
import UtilsSection from './components/UtilsSection/UtilsSection'
import { Box } from './styles'

const Processes = () => {
  const dispatch = useDispatch()
  const processes = useSelector(processesSelector)
  const isLoading = useSelector(isProcessesLoadingSelector)

  useEffect(() => {
    dispatch(getProcessesPending())
  }, [dispatch])

  return (
    <DefaultLayout>
      {isLoading ? (
        <Loader />
      ) : (
        <Box>
          <UtilsSection />
          {processes.map(({ _id, name }) => (
            <Card key={_id}>{name}</Card>
          ))}
        </Box>
      )}
    </DefaultLayout>
  )
}

export default Processes
