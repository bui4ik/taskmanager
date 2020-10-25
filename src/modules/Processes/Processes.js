import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProcessesPending } from 'store/process/slice'
import { isProcessesLoadingSelector } from 'store/process/selectors'
import DefaultLayout from 'layouts/DefaultLayout/DefaultLayout'
import Loader from 'components/atoms/Loader/Loader'
import UtilsSection from './components/UtilsSection/UtilsSection'
import ProcessesList from './components/ProcessesList/ProcessesList'
import { Box } from './styles'

const Processes = () => {
  const dispatch = useDispatch()

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
          <ProcessesList />
        </Box>
      )}
    </DefaultLayout>
  )
}

export default Processes
