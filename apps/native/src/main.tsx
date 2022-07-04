import { AppRegistry, View, Text } from 'react-native';
import App from './app/App';

import {initReactNativeLink} from "@acme/react-native";

initReactNativeLink({
  View,
  Text
})

AppRegistry.registerComponent('Native', () => App);
