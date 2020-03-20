import React from "react";
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles"
import { connect } from 'react-redux'
import { answerTrue, answerFalse } from "../../redux/action/quizAction"

const Quiz = ({pageNumber, question, answerTrue, answerFalse}) => (
  <View style={styles.container}>
    <View style={styles.row1}>
      <Text style={styles.page_title}>Entertainment: Video Games</Text>
    </View>
    <View style={styles.row3}>
      <View style={styles.box}>
        <View style={styles.box_header}>
          <Text style={styles.category}>{question.category}({question.difficulty})</Text>
        </View>
        <Text style={styles.question}>{question.question}</Text>
      </View>
      <Text style={styles.page_text}>{pageNumber+1} of 10</Text>
      <View style={styles.row_button}>
        <TouchableOpacity onPress={answerFalse}>
          <Text style={styles.button_false}>False</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={answerTrue}>
          <Text style={styles.button_true}>True</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

Quiz.propTypes = {
    pageNumber: PropTypes.number.isRequired,
    question: PropTypes.object.isRequired,
    answerTrue: PropTypes.func.isRequired,
    answerFalse: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    pageNumber: state.page,
    question: state.questions[state.page]
})

const mapDispatchToProps = dispatch => ({
  answerTrue: () => dispatch(answerTrue()),
  answerFalse: () => dispatch(answerFalse()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)