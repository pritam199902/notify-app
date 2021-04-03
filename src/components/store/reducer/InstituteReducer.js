// Action
import { GET_INSTITUTE } from '../action/InstituteAction'
// Inital data
import { InstituteData } from '../initData/data'

export const InstituteReducer = ( state = InstituteData, action)=>{
    switch(action.type){
        case GET_INSTITUTE : 
            return state 

        default : 
            return state
    }
}