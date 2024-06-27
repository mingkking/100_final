import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import { LineChart } from '@mui/x-charts/LineChart';
import { Grid, Box,Button } from '@mui/material';

const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
<Box>
<Grid container spacing={3}>
  <Grid item lg = {6} xs={12}>
      <DashboardCard title="범인은 한기진">
      <Box
    component="img"
    sx={{
      height: 233,
      width: 350,
      maxHeight: { xs: 233, md: 167 },
      maxWidth: { xs: 350, md: 250 },
      mb: 2  // margin bottom for spacing
    }}
    alt="한기진"
    src="/test.png"  // 이미지 경로를 여기에 입력하세요
  />
        <Typography variant="h3">한기진</Typography>

        <Typography>또 당신이야?</Typography>
        <Button >범인 클릭</Button>
     

      </DashboardCard>
      </Grid>
      <Grid item lg = {6} xs={12}>
      <DashboardCard title="Sample Page">
      <LineChart
  xAxis={[{ data: [1, 2, 3, 5,6, 8, 9,10] }]}
  series={[
    {
      data: [2, 5.5, 2, 8.5,3, 1.5, 9,5],
    },
  ]}
  width={250}
  height={150}
/>
      </DashboardCard>

      </Grid>
      </Grid>
      </Box>
   
    </PageContainer>
    
  );
};

export default SamplePage;
