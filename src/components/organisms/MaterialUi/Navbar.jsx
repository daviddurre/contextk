import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = ({ className }) => (
  <div className={className}>
    <AppBar position="static">
      <Toolbar>
        <IconButton className="menuButton" color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className="flex">
          Title
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </div>
);

Navbar.propTypes = {
  className: Proptypes.string.isRequired,
};

export default styled(Navbar)`
  background-color: '#ffffff';
  & .flex {
    flex: 1;
  }
  && .menuButton {
    margin-left: -12;
    margin-right: 20;
  }
`;
