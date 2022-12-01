import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        data: [],
        searchTerm: ""
    },
    reducers: {
        addCar(state, action){
            // Assumption
            // action.payload === {name: "", cost: 0}
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        removeCar(state, action){
            // let index = state.data.findIndex((obj, index) => {
            //     if(obj.id === action.payload){
            //         return index;
            //     }
            //     return -1;
            // });
            // if(index !== -1){
            //     state.data.slice(index, 1);
            // }
            const updated = state.data.filter((car) => {
                return car.id !== action.payload // If it is true it includes it
            });
            state.data = updated;
        },
        changeSearchTerm(state, action){
            state.searchTerm = action.payload
        }

    }
})


export const {addCar, removeCar, changeSearchTerm} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;




