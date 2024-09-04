import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CheckoutFormValues } from '../../types';

const initialState: CheckoutFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  requestSuccess: false,
}

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    updateCustomer: (state, action: PayloadAction<CheckoutFormValues>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email
    },
    setRequestSuccess: (state, action: PayloadAction<boolean>) => {
      state.requestSuccess = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { updateCustomer, setRequestSuccess } = customerSlice.actions

export default customerSlice.reducer