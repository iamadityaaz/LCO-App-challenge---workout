import React from 'react';
import Menu, {MenuItem} from 'react-native-material-menu';
import {Linking, TouchableOpacity} from 'react-native';
import {Icon, Button} from 'native-base';

export class TopNavigationButton extends React.Component {
  _menu = null;

  _about = () => {
    const {navigation} = this.props;
    navigation.navigate('About');
  };

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    return (
      <Menu
        ref={ref => (this._menu = ref)}
        button={
          <TouchableOpacity
            onPress={() => this._menu.show()}
            style={{
              paddingHorizontal: 16,
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="more" style={{color: 'white'}} />
          </TouchableOpacity>
        }>
        <MenuItem
          onPress={() => this._about()}
          textStyle={{color: '#000', fontSize: 16}}>
          About
        </MenuItem>
      </Menu>
    );
  }
}
