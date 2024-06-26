import React from 'react';
import Menuitems from '../sidebar/MenuItems';
import { Box, List, AppBar, Toolbar, styled, Stack, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import NavItem from '../sidebar/NavItem';
import NavGroup from '../sidebar/NavGroup/NavGroup';

// components
import Profile from './Profile';
import { IconMenu } from '@tabler/icons';
import { useLocation } from 'react-router';

const Header = (props) => {

  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpointfs.down('lg'));


  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
    justifyContent: 'center', // 가운데 정렬로 변경
  }));

  const { pathname } = useLocation();
        const pathDirect = pathname;

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <Box/>
            {Menuitems.map((item) => {
              // {/********SubHeader**********/}
              if (item.subheader) {
                return <NavGroup item={item} key={item.subheader} />;

                // {/********If Sub Menu**********/}
                /* eslint no-else-return: "off" */
              } else {
                return (
                  <NavItem item={item} key={item.id} pathDirect={pathDirect} />
                );
              }
            })}
        <Stack spacing={1} direction="row" alignItems="center">
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
