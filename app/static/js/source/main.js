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
    //TODO: regex to see if this is an actual zip code
    console.log('ZIP code is ' + zip);
    $.ajax({url:url, type:'POST', data:{zipCode:zip}, success:function(data){
      console.log(data);
    }});
  }

  function makeURL(){
    var url = window.location.origin.replace(/[0-9]{4}/, '4000');
    return url;
  }

})();

