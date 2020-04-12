import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
} from 'native-base';
import {TopNavigationButton} from '../component/headerMenu';

export class HeaderTitle extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>App Name</Title>
          </Body>
          <Right>
            <TopNavigationButton {...this.props} />
          </Right>
        </Header>
      </Container>
    );
  }
}
