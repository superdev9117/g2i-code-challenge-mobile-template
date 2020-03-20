import React from "react";
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles"
import { connect } from 'react-redux'
import {startQuiz} from '../../redux/action/homeAction'

const Home = ({startQuiz}) => (
    <View style={styles.container}>
        <View style={styles.row3}>
            <Text style={styles.page_title}>Welcome to the</Text>
            <Text style={styles.page_title}>Trivia Challenge!</Text>
        </View>
        <View style={styles.row3}>
            <Text style={styles.page_text}>You will be presented</Text>
            <Text style={styles.page_text}>with 10 True or False</Text>
            <Text style={styles.page_text}>questions.</Text>
        </View>
        <View style={styles.row3}>
            <Text style={styles.page_text }>Can you score 100%?</Text>
        </View>
        <TouchableOpacity
            onPress={startQuiz}
        >
            <Text style={styles.button}>BEGIN</Text>
        </TouchableOpacity>
   </View>
);

Home.propTypes = {
    startQuiz: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({
  startQuiz: () => dispatch(startQuiz()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)