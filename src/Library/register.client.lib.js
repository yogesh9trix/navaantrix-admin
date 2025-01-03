/** @format */

export function validateFormFields(field, value) {
  let error = '';
  switch (field) {
    case 'orgName':
      if (!value) {
        error = 'Organisation Name is required';
      }
      break;
    case 'sourceId':
      if (!value) {
        error = 'Source Id is required';
      } else if (!/^\d+$/.test(value)) {
        error = 'Source Id must be a number';
      }
      break;
    case 'mobileNum':
      if (value && !/^\d{10}$/.test(value)) {
        error = 'Mobile number must be 10 digits';
      }
      break;
    case 'website':
      if (value && !/^https?:\/\/(www\.)?[a-z0-9]+\.[a-z]{2,3}$/.test(value)) {
        error = 'Invalid website';
      }
      break;
    case 'domains':
      if (!value.length) {
        error = 'Atleast one domain is required';
      }
      break;
    default:
      break;
  }
  return error;
}
