import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Body = ({ className }) => (
  <div className={className}>
    <Paper className="paper" elevation={0}>
      <Typography variant="headline" component="h3">
        This is a sheet of paper.
      </Typography>
      <Typography component="p">
        Paper can be used to build surface or other elements for your
        application.
      </Typography>
    </Paper>
  </div>
);

Body.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Body)`
  flex: 1;
  && .paper {
    padding: 15px;
  }
`;
