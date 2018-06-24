import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const MyContext = React.createContext();

class MyProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footer: 'Footer',
    };
  }

  render() {
    return (
      <MyContext.Provider value={{ footer: this.state.footer }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
