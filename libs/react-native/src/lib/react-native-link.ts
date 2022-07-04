import type {View as ViewType, Text as TextType} from "react-native";
import React from "react";

interface ReactNativeBaseComponentsMap {
  View:typeof ViewType,
  Text:typeof TextType
}

let m:ReactNativeBaseComponentsMap;

export function initReactNativeLink(map:ReactNativeBaseComponentsMap) {
  m = map;
}

export const View = ((props: ViewType['props']) => {
  return React.createElement(m.View, props);
})

export const Text = ((props: TextType['props']) => {
  return React.createElement(m.Text, props);
})
