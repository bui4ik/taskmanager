import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'process',
  initialState: {
    processes: [],
    isProcessesLoading: false,
    isProcessCreating: false,
    isProcessDeletingId: '',
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
} = slice.actions
export default slice.reducer
