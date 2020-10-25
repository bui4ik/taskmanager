export const sortByName = (order, value) => {
  if (order === 'asc') {
    return [...value].sort((a, b) => a.name.localeCompare(b.name))
  }
  if (order === 'desc') {
    return [...value].sort((a, b) => a.name.localeCompare(b.name)).reverse()
  }
  return value
}

export const sortByDate = (order, value) => {
  if (order === 'asc') {
    return [...value].sort((a, b) => a.startTime.localeCompare(b.startTime))
  }
  if (order === 'desc') {
    return [...value].sort((a, b) => a.startTime.localeCompare(b.startTime)).reverse()
  }
  return value
}

export const sortByJobs = (order, value) => {
  if (order === 'asc') {
    return [...value].sort((a, b) => a.jobsCount - b.jobsCount)
  }
  if (order === 'desc') {
    return [...value].sort((a, b) => b.jobsCount - a.jobsCount)
  }
  return value
}
