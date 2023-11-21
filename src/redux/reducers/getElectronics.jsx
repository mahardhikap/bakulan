const initialState = {
    data: null,
    errorMessage:'',
    isLoading: false,
    isError:false
}

const getElectronics = (state=initialState,action) => {
    if(action.type === 'GET_ELECTRONICS_PENDING'){
        return{
            ...state,
            isLoading: true,
        }
    } else if(action.type === 'GET_ELECTRONICS_SUCCESS'){
        return{
            ...state,
            data: action.payload,
            isLoading:false,
            errorMessage:'',
            isError:false
        }
    } else if(action.type === 'GET_ELECTRONICS_FAILED'){
        return{
            ...state,
            data:null,
            errorMessage:action.payload,
            isLoading:false,
            isError:true
        }
    } else {
        return state
    }
}

export default getElectronics