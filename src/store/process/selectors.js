import { sortByName, sortByDate, sortByJobs } from 'utils/sorters'

export const processesSelector = ({ process }) => {
  const isFiltersSet = Object.keys(process.sorts).some(
    (sorter) => process.sorts[sorter] !== 'noSort',
  )

  if (isFiltersSet) {
    let sortedProcesses
    sortedProcesses = sortByName(process.sorts.nameSort, process.processes)
    sortedProcesses = sortByDate(process.sorts.dateSort, sortedProcesses)
    sortedProcesses = sortByJobs(process.sorts.jobsSort, sortedProcesses)
    return sortedProcesses
  }

  return process.processes
}

export const isProcessesLoadingSelector = ({ process }) => process.isProcessesLoading

export const isProcessCreatingSelector = ({ process }) => process.isProcessCreating

export const isProcessDeletingIdSelector = ({ process }) => process.isProcessDeletingId

export const sortsSelector = ({ process }) => process.sorts

export const jobsSearchSelector = ({ process }) => {
  if (process.jobsSearch) {
    const result = []
    process.processes.map(({ jobs }) => {
      return jobs.map(({ name }) => {
        if (name.includes(process.jobsSearch)) {
          result.push({ name })
        }
        return name
      })
    })
    return result
  }
  return []
}
