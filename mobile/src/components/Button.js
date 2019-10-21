import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';

function Button({children, style, ...rest}) {
  return (
    <TouchableHighlight style={[styles.container, style]} {...rest}>
      {children}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({});

export default Button;
