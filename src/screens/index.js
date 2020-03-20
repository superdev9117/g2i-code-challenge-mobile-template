import React from 'react';
import PropTypes from 'prop-types'
import { View } from 'react-native';
import Home from './home';
import Quiz from './quiz';
import Result from './result';
import styles from './home/styles';
import { connect } from 'react-redux'

function Root({step}) {
  return (
      <View style={styles.container}>
          {
              step === 0 ? (
                <Home></Home>
              ) : step === 1 ? (
                <Quiz></Quiz>
              ) : (
                <Result></Result>
              )
          }
      </View>
  );
}

Root.propTypes = {
    step: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    step: state.step
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Root)