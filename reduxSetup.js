const INITIAL_STATE = {
   happy: "ʘ‿ʘ",
   sad: "TnT",
   angry: "⋋_⋌",
   confused: "(@_@)"
};

function faceReducer(state = INITIAL_STATE, action) {
   switch (action.type) {
      case "HAPPY":
         return { ...state, happy: state.happy};
      case "SAD":
         return { ...state, sad: state.sad};
      case "ANGRY":
         return { ...state, angry: state.angry};
      case "CONFUSED":
         return { ...state, confused: state.confused};
      default:
         return state;
   }
}

const store = Redux.createStore(faceReducer);

