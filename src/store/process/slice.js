import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'process',
  initialState: {
    processes: [],
    isProcessesLoading: false,
    isProcessCreating: false,
    isProcessDeletingId: '',
    sorts: {
      nameSort: 'noSort',
      dateSort: 'noSort',
      jobsSort: 'noSort',
    },
    jobsSearch: '',
  },
  reducers: {
    getProcessesPending: (state) => {
      state.isProcessesLoading = true
    },
    getProcessesFullfield: (state, { payload }) => {
      state.isProcessesLoading = false
      state.processes = payload.processes
    },
    getProcessesRejected: (state) => {
      state.isProcessesLoading = false
    },
    createProcessPending: (state) => {
      state.isProcessCreating = true
    },
    createProcessFullfield: (state, { payload }) => {
      state.isProcessCreating = false
      state.processes.unshift(payload.process)
    },
    createProcessRejected: (state) => {
      state.isProcessCreating = false
    },
    deleteProcessPending: (state, { payload }) => {
      state.isProcessDeletingId = payload.id
    },
    deleteProcessFullfield: (state, { payload }) => {
      state.processes = state.processes.filter(({ _id }) => _id !== payload.id)
      state.isProcessDeletingId = ''
    },
    deleteProcessRejected: (state) => {
      state.isProcessDeleting = ''
    },
    setSort: (state, { payload }) => {
      state.sorts[payload.type] = payload.value
    },
    setJobsSearch: (state, { payload }) => {
      state.jobsSearch = payload.value
    },
  },
})

export const {
  getProcessesPending,
  getProcessesFullfield,
  getProcessesRejected,
  createProcessPending,
  createProcessFullfield,
  createProcessRejected,
  deleteProcessPending,
  deleteProcessFullfield,
  deleteProcessRejected,
  setSort,
  setJobsSearch,
} = slice.actions
export default slice.reducer
