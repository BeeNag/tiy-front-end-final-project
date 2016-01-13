var jQuery = require('jquery');

var HOST_NAME = 'http://localhost:8383';

var API_ENDPOINTS = {
  SIGN_UP: '/FreeArch/users',
  LOG_IN: '/FreeArch/users/authenticate',
  CREATE_ARCHAEOLOGIST: '/FreeArch/archaeologists',
  CREATE_COMPANY: '/FreeArch/companies'
};

function signUp(email, password, handleResponse) {

  var data = {
    email: email,
    password: password
  };

  var request = jQuery.ajax({
    method: 'post',
    url: HOST_NAME + API_ENDPOINTS.SIGN_UP,
    dataType: 'json',
    data: data
  });

  request.fail(function (jqXHR, textStatus, errorThrown) {
    handleResponse(jqXHR, null);
  });

  request.done(function () {
    handleResponse(null, data);
  });
}

function signIn(email, password, handleResponse) {

  var data = {
    email: email,
    password: password
  };

  var request = jQuery.ajax({
    method: 'post',
    url: HOST_NAME + API_ENDPOINTS.LOG_IN,
    dataType: 'json',
    data: data
  });

  request.fail(function (jqXHR, textStatus, errorThrown) {
    handleResponse(jqXHR, null);
  });

  request.done(function (data) {
    handleResponse(null, data);
  });
}

function createArchaeologistProfile(archFormValues, handleResponse) {
  var data = {
    first_name: archFormValues.first_name,
    last_name: archFormValues.last_name,
    date_of_birth: archFormValues.date_of_birth,
    address1: archFormValues.address1,
    address2: archFormValues.address2,
    address3: archFormValues.address3,
    city: archFormValues.city,
    postcode: archFormValues.postcode,
    home_phone_number: archFormValues.home_phone_number,
    mobile_phone_number: archFormValues.mobile_phone_number,
    experience: archFormValues.experience,
    specialism: archFormValues.specialism,
    cscs_card: archFormValues.cscs_card,
    description: archFormValues.description
  };

  var request = jQuery.ajax({
    method: 'post',
    url: HOST_NAME + API_ENDPOINTS.CREATE_ARCHAEOLOGIST,
    dataType: 'json',
    data: data
  });

  request.fail(function (jqXHR, textStatus, errorThrown) {
    handleResponse(jqXHR, null);
  });

  request.done(function () {
    handleResponse(null, data);
  });
}

function createCompanyProfile(companyFormValues, handleResponse) {
  var data = {
    name: companyFormValues.name,
    address1: companyFormValues.address1,
    address2: companyFormValues.address2,
    address3: companyFormValues.address3,
    city: companyFormValues.city,
    postcode: companyFormValues.postcode,
    phone_number: companyFormValues.phone_number,
    url: companyFormValues.url,
    description: companyFormValues.description
  };

  var request = jQuery.ajax({
    method: 'post',
    url: HOST_NAME + API_ENDPOINTS.CREATE_COMPANY,
    dataType: 'json',
    data: data
  });

  request.fail(function (jqXHR, textStatus, errorThrown) {
    handleResponse(jqXHR, null);
  });

  request.done(function () {
    handleResponse(null, data);
  });
}

module.exports = {
  signIn: signIn,
  signUp: signUp,
  createArchaeologistProfile: createArchaeologistProfile,
  createCompanyProfile:createCompanyProfile
};
