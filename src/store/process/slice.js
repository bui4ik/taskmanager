import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'process',
  initialState: {
    processes: [],
    isProcessesLoading: false,
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
  },
})

export const { getProcessesPending, getProcessesFullfield, getProcessesRejected } = slice.actions
export default slice.reducer
