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

     

      function getInfo() {
        const center = mapRef.current.getCenter();
        const level = mapRef.current.getLevel();
        const mapTypeId = mapRef.current.getMapTypeId();
        const bounds = mapRef.current.getBounds();
        const swLatLng = bounds.getSouthWest();
        const neLatLng = bounds.getNorthEast();

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
