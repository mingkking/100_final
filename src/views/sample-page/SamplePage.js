import React, { useEffect, useRef, useState } from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';

const SamplePage = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      const container = document.getElementById('map');
      const mapCenter = new window.kakao.maps.LatLng(37.566826, 126.9786567);
      const options = {
        center: mapCenter,
        level: 7,
      };

      mapRef.current = new window.kakao.maps.Map(container, options);

      const zoomControl = new window.kakao.maps.ZoomControl();
      mapRef.current.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

      // 주소-좌표 변환 객체를 생성합니다
      var geocoder = new window.kakao.maps.services.Geocoder();

      // 주소로 좌표를 검색합니다
      geocoder.addressSearch('제주특별자치도 제주시 첨단로 242', function(result, status) {

        // 정상적으로 검색이 완료됐으면 
        if (status === window.kakao.maps.services.Status.OK) {

            var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new window.kakao.maps.Marker({
                map: mapRef.current,
                position: coords
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            var infowindow = new window.kakao.maps.InfoWindow({
                content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
            });
            infowindow.open(mapRef.current, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            mapRef.current.setCenter(coords);
        } 
      }); 


      function getInfo() {
        const center = mapRef.current.getCenter();
        const level = mapRef.current.getLevel();
        const mapTypeId = mapRef.current.getMapTypeId();
        const bounds = mapRef.current.getBounds();
        const swLatLng = bounds.getSouthWest();
        const neLatLng = bounds.getNorthEast();
        const boundsStr = bounds.toString();

        let message = '지도 중심좌표는 위도 ' + center.getLat() + ', <br>';
        message += '경도 ' + center.getLng() + ' 이고 <br>';
        message += '지도 레벨은 ' + level + ' 입니다 <br> <br>';
        message += '지도 타입은 ' + mapTypeId + ' 이고 <br> ';
        message += '지도의 남서쪽 좌표는 ' + swLatLng.getLat() + ', ' + swLatLng.getLng() + ' 이고 <br>';
        message += '북동쪽 좌표는 ' + neLatLng.getLat() + ', ' + neLatLng.getLng() + ' 입니다';

        console.log(message);
      }

      getInfo();
    }
  }, []);

  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="부동산 시세P">
        <Typography>
          <div>
            <div id="map" style={{ width: '100%', height: '100vh' }}></div>
            <div id="maplevel"></div>
          </div>
        </Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;
