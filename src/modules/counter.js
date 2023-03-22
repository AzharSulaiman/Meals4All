export const CURRENT_NAV = 'counter/CURRENT_NAV'

const initialState = {
  currentNav: '/',
}

export default (state = initialState, action) => {
  switch (action.type) {
   

      case CURRENT_NAV:
      return {
        ...state,
        currentNav: action.value
      }


    default:
      return state
  }
}



export const currentNavigation = (value) => {
  return dispatch => {
    dispatch({
      type: CURRENT_NAV,
      value
    })

  }
  
}





