/** @format */

export const isEmpty = (value) => {
  if (value === undefined || value === null) {
    return true;
  }
  if (value && value.trim().length > 0) {
    return false;
  } else {
    return true;
  }
};

export const isNumber = (value) => {
  return isNaN(value.trim()) ? false : true;
};

export const Validate = {
  isEmpty: function (value) {
    if (value === undefined || value === null) {
      return true;
    }
    if (value && value.trim().length > 0) {
      return false;
    } else {
      return true;
    }
  },
  isNumber: function (value) {
    return isNaN(value.trim()) ? false : true;
  },
};
