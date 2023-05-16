import { database } from '@/config/firebase' // Import the firebase instance
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { collection, getDocs } from 'firebase/firestore'

const COLLECTION_NAME = 'foods'

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await getDocs(collection(database, COLLECTION_NAME))
  return response // Return the retrieved data
})

const dataSlice = createSlice({
  name: 'foods',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    // Handle the async thunk action
    builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<any>) => {
      return action.payload // Update the state with the fetched data
    })
  }
})

export const { actions } = dataSlice
export default dataSlice.reducer