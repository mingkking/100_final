import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Fab } from '@mui/material';
import { IconArrowDownRight, IconCurrencyDollar } from '@tabler/icons';
import DashboardCard from '../../../components/shared/DashboardCard';

const MonthlyEarnings = () => {
  // chart color
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;
  const secondarylight = '#f5fcff';
  const errorlight = '#fdede8';

  // chart
  const optionscolumnchart = {
    chart: {
      type: 'area',
      // 그래프 유형을 결정
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      //폰트 스타일 
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 60,
      sparkline: {
        enabled: true,
        // 변동폭의 효과?
      },
      group: 'sparklines',
    },
    stroke: {
      curve: 'straight',
      width: 3,
      // 커브선의 굵기 조절
    },
    fill: {
      colors: [secondarylight],
      type: 'solid',
      opacity: 0.1,
      //그래프 내부에 색 그라데이션?
    },
    markers: {
      size: 5,
      // 그래프 지점별 마크
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  const seriescolumnchart = [
    {
      name: '',
      color: secondary,
      data: [40, 66, 20, 40, 12, 58, 20],
    },
    // 그래프들의 수치 
  ];

  return (
    <DashboardCard
      title="Monthly Earnings"
      action={
        <Fab color="primary" size="medium" sx={{color: '#ffffff'}}>
          <IconCurrencyDollar width={30} />
        </Fab>
        // 달러 표시에 있는 아이콘에 대한 설정
      }
      footer={
        <Chart options={optionscolumnchart} series={seriescolumnchart} type="area" height="60px" />
        // mul에 있는 차트 컴포넌트에 옵션들을 객체화해서 각각의 설정들을 리턴
        // 또 수치들도 각각 옵션에 맞게 설정을 해서 리턴 
      }
    >
      <>
        <Typography variant="h3" fontWeight="700" mt="-20px">
          $6,820
          {/* 그래프에 대한 제목을 가지고 있는 컴포넌트 리턴 */}
        </Typography>
        <Stack direction="row" spacing={1} my={1} alignItems="center">
          <Avatar sx={{ bgcolor: errorlight, width: 27, height: 27 }}>
            <IconArrowDownRight width={20} color="#FA896B" />
            {/* 아이콘에 대한 설정 */}
          </Avatar>
          <Typography variant="subtitle2" fontWeight="600">
            +9%
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            last year
          </Typography>
          
        </Stack>
      </>
    </DashboardCard>
  );
};

export default MonthlyEarnings;
