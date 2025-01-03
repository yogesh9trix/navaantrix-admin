/** @format */

import axiosInstance from './axios';

function getClientNames() {
  return axiosInstance
    .get('/client_fetch')
    .then((response) => response)
    .catch((error) => error);
}

function sendClientRegisteration(payload) {
  return axiosInstance
    .post('/client_reg', payload)
    .then((response) => response)
    .catch((error) => error);
}

function sendUserRegisteration(payload) {
  return axiosInstance
    .post('/user_reg', payload)
    .then((response) => response)
    .catch((error) => error);
}

function getDomainNames(payload) {
  return axiosInstance
    .post('/domain_fetch', payload)
    .then((response) => response)
    .catch((error) => error);
}

function getBranchNames(payload) {
  return axiosInstance
    .post('/branch_fetch', payload)
    .then((response) => response)
    .catch((error) => error);
}
function getDomainFileNames(payload) {
  return axiosInstance
    .post('/fetch_filename', payload)
    .then((response) => response)
    .catch((error) => error);
}

function getAllClientDetails() {
  return axiosInstance
    .get('/client_info')
    .then((response) => response)
    .catch((error) => error);
}

function getAllUsersInClient(payload) {
  return axiosInstance
    .post('/user_info', payload)
    .then((response) => response)
    .catch((error) => error);
}

const RegisterationService = {
  getClientNames,
  getDomainNames,
  getBranchNames,
  sendClientRegisteration,
  sendUserRegisteration,
  getDomainFileNames,
  getAllClientDetails,
  getAllUsersInClient,
};

export default RegisterationService;
