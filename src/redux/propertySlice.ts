import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Property {
  id: number;
  name: string;
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  type: 'matches' | 'suggestion';
  photo: string;
}

interface PropertyState {
  properties: Property[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PropertyState = {
  properties: [],
  status: 'idle',
  error: null,
};

// Async thunk to fetch properties from local JSON file
export const fetchProperties = createAsyncThunk('property/fetchProperties', async () => {
  const response = await fetch('/properties.json');
  const data = await response.json();
  return data as Property[];
});

const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProperties.fulfilled, (state, action: PayloadAction<Property[]>) => {
        state.status = 'succeeded';
        state.properties = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default propertySlice.reducer;
