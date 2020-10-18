import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'process',
  initialState: {
    processes: [],
    isProcessesLoading: false,
    isProcessCreating: false,
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
  },
})

export const {
  getProcessesPending,
  getProcessesFullfield,
  getProcessesRejected,
  createProcessPending,
  createProcessFullfield,
  createProcessRejected,
} = slice.actions
export default slice.reducer
