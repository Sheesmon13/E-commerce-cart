import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items : [],
};

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducer: {
        addToCart:(state, action) =>{
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );
            if(existingItem){
                existingItem.quantity += 1;
            }else{
                state.item.push({...action.payload, quantity: 1})
            }
        }
    }
});

export const {addtoCart} = cartSlice.action
export default cartSlice.reducer;