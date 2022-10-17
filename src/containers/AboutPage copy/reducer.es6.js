import * as types from '../../lib/actionTypes.es6';

export const initialState = {
  quote: null,
  errors: null,
  loader: false,
  groupProducts: null,
  claimCallback: null,
  claimCallbackError: null,
  claimCallbackLoader: false,

};

export default function britamQuoteReducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_QUOTE_IN_STATE_REQUEST':
      return { ...state, quote: action.payload };

    case types.GET_GROUP_PRODUCTS_REQUEST:
      return { ...state, loading: true, errors: null, groupProducts: null };

    case types.GET_GROUP_PRODUCTS_SUCCESS:
      return { ...state, loading: true, groupProducts: action.payload };

    case types.GET_GROUP_PRODUCTS_FAILURE:
      return { ...state, loading: true, errors: action.payload };

    case types.CREATE_GROUP_CLAIM_CALLBACK_REQUEST:
      return { ...state, claimCallbackLoader: true, claimCallbackError: null, claimCallback: null };

    case types.CREATE_GROUP_CLAIM_CALLBACK_SUCCESS:
      return { ...state, claimCallbackLoader: false, claimCallback: 'Call back request saved' };

    case types.CREATE_GROUP_CLAIM_CALLBACK_FAILURE:
      return { ...state, claimCallbackLoader: false, claimCallbackError: action.payload };
    
    case types.RESET_CREATE_GROUP_CLAIM_CALLBACK:
      return { ...state,   claimCallback: null, claimCallbackError: null, claimCallbackLoader: false, };

    default:
      return state;
  }
}
