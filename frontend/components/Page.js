import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled from 'styled-components';

const MyButton = styled.button`
  background: darkgreen;
  font-size: ${props => (props.huge ? '100px' : '50px')};

  .poop {
    font-size: 50px;
  }
`;

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <MyButton huge>
          Click Me
          <span className="poop">😅</span>
        </MyButton>
        {this.props.children}
        <MyButton>
          Click Me
          <span className="poop">😅</span>
        </MyButton>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
