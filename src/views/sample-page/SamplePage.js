import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">

      <DashboardCard title="Sample Page">
        <Typography>민기민기22222</Typography>

        <Typography>혜경이의 최종 풀(밀당지려)</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;
