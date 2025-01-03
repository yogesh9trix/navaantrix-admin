/** @format */

import { produce } from 'immer';

export function registerClient(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD': {
      const { field, value } = action.payload;
      return produce(state, (draft) => {
        draft[field].value = value;
      });
    }
    case 'UPDATE_ERROR': {
      const { field, error } = action.payload;
      return produce(state, (draft) => {
        draft.error[field].error = error;
      });
    }

    case 'AVAIL_DOMAINS': {
      const { field, value } = action.payload;
      return produce(state, (draft) => {
        draft[field].total = value;
      });
    }
    case 'SELECTED_DOMAINS': {
      const { field, value } = action.payload;
      return produce(state, (draft) => {
        draft[field].selected = value;
      });
    }

    default: {
      console.error('Invalid action type: [regiserClient] ', action.type);
      return state;
    }
  }
}
