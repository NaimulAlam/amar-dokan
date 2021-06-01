const initialState = {
  // readingList: [],
  // discoverList: [],
  // finishedList: [],
  userDetails:{},

  

};
const reducerShop = (state = initialState, action) => {
  switch (action.type) {
    // case "ADD_TO_READING_LIST":
    //   return {
    //     ...state,
    //     readingList: [...state.readingList, action.payload],
    //   };

    case "USER_LOGIN":
      return{
        ...state,
        userDetails: action.payload
      }

    default:
      return state;
  }
};

export default reducerShop;
