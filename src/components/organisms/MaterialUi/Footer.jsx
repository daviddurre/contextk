import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { MyContext } from '../../Context';

const Footer = ({ className }) => (
  <div className={className}>
    <MyContext.Consumer>
      {({ footer }) => (
        <Typography variant="headline" component="h3">
          {footer}
        </Typography>
      )}
    </MyContext.Consumer>
  </div>
);

Footer.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Footer)`
  height: 60px;
  background-color: #afafaf;
  display: flex;
  justify-content: center;
  align-items: center;
`;
