'use strict';
$(function(){

  function mapLoad(lat, lon){
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(lat, lon), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
        };
    // 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);
    // 지도를 클릭한 위치에 표출할 마커입니다
    var marker = new kakao.maps.Marker({
        // 지도 중심좌표에 마커를 생성합니다
        position: map.getCenter()
    });
    // 지도에 마커를 표시합니다
    marker.setMap(map);
  }

  mapLoad(35.8715411, 128.601505);

  // 다른 기관 위치보기 클릭
  $('.link_button').click(function(){
    let locationId = $(this).data('id');
    switch(locationId){
      case 0:
        mapLoad(35.8831742185, 128.589339741);
        break;
      case 1:
        mapLoad(35.8191051097, 128.540435739);
        break;
      case 2:
        mapLoad(35.838945465, 128.5610634152);
        break;
      case 3:
        mapLoad(35.8205991585, 128.4966528419);
        break;
      case 4:
        mapLoad(35.8596741367, 128.5385414899);
        break;
      case 5:
        mapLoad(35.907890, 128.612776);
        break;
      case 6:
        mapLoad(35.8411901326, 128.6129871526);
        break;
      case 7:
        mapLoad(35.8503041593, 128.5386659237);
        break;
      case 8:
        mapLoad(35.8728372285, 128.6248287438);
        break;
      case 9:
        mapLoad(35.835417860871, 128.681785806832);
        break;
    }
  })

});
