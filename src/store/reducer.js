const startingState = loadState();

function loadState() {
    let defaultState = {
        breathRecords: []
    };
    let savedState = JSON.parse(localStorage.getItem('breath-state'));
    if (savedState != null || savedState != undefined) {
        return savedState
    }
    return defaultState
}

export const mapStateToProps = state => {
  return {
      breathRecords: state.breathRecords
  }
};

export const mapDispatchToProps = dispatch => {
    return {
        addBreathRecord: breathRecord => dispatch({
            type: 'ADDBREATHRECORD',
            payload: {
                breathRecord: breathRecord
            }
        })
    }
};

const reducer = (state = startingState, action) => {
  if (action.type === 'ADDBREATHRECORD') {
      let breathRecords = state.breathRecords;
      breathRecords.push(action.payload.breathRecord);
      let newState = {
          ...state,
          breathRecords: breathRecords
      };
      localStorage.setItem('breath-state', JSON.stringify(newState));
      return newState;
  }

  return state;
};

export default reducer;