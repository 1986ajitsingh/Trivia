import React, { PureComponent } from 'react';
import {
  View,
  Modal,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

// Custom files
import * as StyleUtils from '../Utils/StyleUtils';

class Loader extends PureComponent {
  render() {
    return (
      <Modal
        transparent
        animationType="none"
        visible={this.props.loading}
      >
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator
              size="large"
              animating={this.props.loading}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: StyleUtils.LOADER_BACKGROUBD_COLOR,
  },
  activityIndicatorWrapper: {
    backgroundColor: StyleUtils.DARK_SHADE_COLOR,
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Loader;
