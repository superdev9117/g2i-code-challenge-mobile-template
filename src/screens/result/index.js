import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import {AntDesign} from "react-native-vector-icons"
// import { AntDesign } from "@expo/vector-icons'";
import styles from "./styles"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { playAgain } from '../../redux/action/resultAction'

const render = ({ item }) => {
  
  return(
  <React.Fragment>
      {
        item.answer === true ? (
          <View  style={styles.row_item}>
            <AntDesign name="checkcircle" size={32} color="green" />
            <Text style={styles.row_text_true}>{item.question}</Text>
          </View>
        ) : (
          <View  style={styles.row_item}>
            <AntDesign name="closecircle" size={32} color="gray" />
            <Text style={styles.row_text_false}>{item.question}</Text>
          </View>
          )
      }
  </React.Fragment>
)};

const Result = ({questions, playAgain}) => {
  var score = 0;
  for( var i = 0; i < questions.length; i++ ) {
    if( questions[i].answer ) {
      score += 1;
    }
  }

  return (
  <View style={styles.container}>
    <Text style={styles.page_title}>You scored</Text>
    <Text style={styles.page_title}>{score}/10</Text>
    <FlatList style={styles.table}
      data={questions}
      renderItem={render}
      keyExtractor={(item, index) => index.toString()}
    />
    <TouchableOpacity onPress={playAgain}>
      <Text style={styles.button}>PLAY AGAIN?</Text>
    </TouchableOpacity>
  </View>
)};

Result.propTypes = {
  questions: PropTypes.array.isRequired,
  playAgain: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  questions: state.questions
})

const mapDispatchToProps = dispatch => ({
  playAgain: () => dispatch(playAgain())
})

export default connect(mapStateToProps, mapDispatchToProps)(Result)
