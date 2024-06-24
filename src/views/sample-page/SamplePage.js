import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">

      <DashboardCard title="Sample Page">
        <Typography>This is a sample page233442</Typography>

        <Typography>이거슨샘플ㅋzz</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;
