import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { WebView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: '관리페이지',
    header: null,
  };

  render() {
    return (
      <WebView
        source={{uri: 'http://192.168.10.50'}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
