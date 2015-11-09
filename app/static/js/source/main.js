/* jshint camelcase:false */
(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#get-weather').click(getWeather);
  }

  function getWeather(){
    var url = makeURL();
    url +='/getWeather';
    var zip = $('#ZIP').val();
    zip = zip.match(/[0-9]{5}/);
    if (zip === null){
      $('#ZIP').val('');
      alert('Please enter a valid ZIP code.');
    } else {
      $.ajax({url:url, type:'POST', data:{zipCode:zip}, success:function(data){
        handleData(data.body);
      }});
    }
  }

  function handleData(data){
    data = JSON.parse(data);
    var forecastLine = 'Current conditions in ' + data.current_observation.display_location.full + ': ' + data.current_observation.weather + ', with a temperature of ' + data.current_observation.temperature_string;
    $('#forecasts').text(forecastLine);
  }

  function makeURL(){
    var url = window.location.origin.replace(/[0-9]{4}/, '4000');
    return url;
  }

})();

