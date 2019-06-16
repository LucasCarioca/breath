const defaultState = {
    breathRecords: []
};

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

const reducer = (state = defaultState, action) => {
  if (action.type === 'ADDBREATHRECORD') {
      let breathRecords = state.breathRecords;
      breathRecords.push(action.payload.breathRecord);
      return {
          ...state,
          breathRecords: breathRecords
      }
  }

  return state;
};

export default reducer;