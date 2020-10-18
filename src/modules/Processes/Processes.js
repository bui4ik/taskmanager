import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProcessesPending } from 'store/process/slice'
import DefaultLayout from 'layouts/DefaultLayout/DefaultLayout'

const Processes = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProcessesPending())
  }, [dispatch])

  return (
    <DefaultLayout>
      <div>Processes</div>
    </DefaultLayout>
  )
}

export default Processes
