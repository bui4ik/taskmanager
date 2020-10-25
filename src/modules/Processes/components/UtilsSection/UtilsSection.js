import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
import { createProcessPending, setSort } from 'store/process/slice'
import { isProcessCreatingSelector, sortsSelector } from 'store/process/selectors'
import SortIcon from 'components/atoms/SortIcon/SortIcon'
import { Box, ButtonWrapper, Sorters, Sorter } from './styles'

const UtilsSection = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(isProcessCreatingSelector)
  const sorts = useSelector(sortsSelector)

  const onClick = () => {
    dispatch(createProcessPending())
  }

  const values = {
    noSort: 'asc',
    asc: 'desc',
    desc: 'noSort',
  }

  const onSort = (type) => {
    const value = sorts[type]
    const newValue = values[value]
    dispatch(setSort({ type, value: newValue }))
  }

  return (
    <Box>
      <Sorters>
        <Sorter onClick={() => onSort('nameSort')}>
          Sort by name <SortIcon value={sorts.nameSort} />
        </Sorter>
        <Sorter onClick={() => onSort('dateSort')}>
          Sort by date <SortIcon value={sorts.dateSort} />
        </Sorter>
        <Sorter onClick={() => onSort('jobsSort')}>
          Sort by jobs count <SortIcon value={sorts.jobsSort} />
        </Sorter>
      </Sorters>
      <ButtonWrapper>
        <Button type="primary" onClick={onClick} loading={isLoading}>
          Generate process
        </Button>
      </ButtonWrapper>
    </Box>
  )
}

export default UtilsSection
