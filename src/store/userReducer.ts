import { LOGIN } from "./types"

export interface Params  {
    type: string
    payload: unknown
  }

const initalState = {
    isSingdIn : false,
    userName:"Conan",
}


export default(state = initalState,{type,payload}:Params) =>{

    switch(type){
        case LOGIN:
            return {...state,isSingdIn: payload}

    }

    return state
}