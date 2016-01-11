var jQuery = require('jquery');

var HOST_NAME = 'http://localhost:8383';

var API_ENDPOINTS = {
  SIGN_UP: '/FreeArch/users',
  CREATE_ARCHAEOLOGIST: '/FreeArch/archaeologists',
  LOG_IN: '/FreeArch/users/authenticate'
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

function createArchaeologistProfile(first_name, last_name, date_of_birth, address, city, postcode, home_phone_number, mobile_phone_number, experience, specialism, cscs_card, description, handleResponse) {
  var data = {
    first_name: first_name,
    last_name: last_name,
    date_of_birth: date_of_birth,
    address: address,
    city: city,
    postcode: postcode,
    home_phone_number: home_phone_number,
    mobile_phone_number: mobile_phone_number,
    experience: experience,
    specialism: specialism,
    cscs_card: cscs_card,
    description: description
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

module.exports = {
  signIn: signIn,
  createArchaeologistProfile: createArchaeologistProfile,
  signUp: signUp
};
