import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

import Navbar from '../components/organisms/MaterialUi/Navbar';
import Body from '../components/organisms/MaterialUi/Body';
import Footer from '../components/organisms/MaterialUi/Footer';

const MaterialUi = ({ className }) => (
  <div className={className}>
    <Navbar />
    <Body />
    <Footer />
  </div>
);

MaterialUi.propTypes = {
  className: Proptypes.string.isRequired,
};

export default styled(MaterialUi)`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
