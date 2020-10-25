import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Select } from 'antd'
import { createProcessPending, setSort, setJobsSearch } from 'store/process/slice'
import {
  isProcessCreatingSelector,
  sortsSelector,
  jobsSearchSelector,
} from 'store/process/selectors'
import SortIcon from 'components/atoms/SortIcon/SortIcon'
import { Box, StyledSelect, ButtonWrapper, Sorters, Sorter } from './styles'

const { Option } = Select

const UtilsSection = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(isProcessCreatingSelector)
  const sorts = useSelector(sortsSelector)
  const options = useSelector(jobsSearchSelector)

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

  const onSearch = (value) => {
    dispatch(setJobsSearch({ value }))
  }

  return (
    <Box>
      <StyledSelect onSearch={onSearch} showSearch placeholder="Jobs search">
        {options.map(({ name }) => (
          <Option key={name} value={name}>
            {name}
          </Option>
        ))}
      </StyledSelect>
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
