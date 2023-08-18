import React, { createContext, useContext, useReducer } from 'react'
import { useActionData } from 'react-router-dom'
const cartStateContext = createContext()
const cartDispatchContext = createContext()
// implementing dipatch functionality
const reducer = (state,action) => {
 switch(action.type){
    case "ADD" :
        return [...state,{id : action.id,name : action.name,img : action.img, price : action.price, qty : action.qty, size : action.size}]
    case "REMOVE":
        let newArr = [...state]
        newArr.splice(action.index, 1)
        return newArr;
    case "DROP":
        let empArray = []
        return empArray
    case "UPDATE":
        let arr = [...state]
        arr.find((food, index) => {
            if (food.id === action.id) {
                console.log(food.qty, parseInt(action.qty), action.price + food.price)
                arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
                }
             return arr
            })
            return arr
        default :
        console.log("error in reducer")
 }
}
// ---------------------------
export const CartProvider = ({children}) => {
    const[state,dispatch] = useReducer(reducer,[])
    return (
       <cartDispatchContext.Provider value = {dispatch}>
        <cartStateContext.Provider value = {state}>
          {children}
        </cartStateContext.Provider>
       </cartDispatchContext.Provider>
  )
}
export const useCart = () => useContext(cartStateContext);
export const useDispatch = () => useContext(cartDispatchContext);
