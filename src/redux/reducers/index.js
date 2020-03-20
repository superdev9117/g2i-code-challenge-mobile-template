import { createStore } from "redux";
import {questions} from "../../static/data"
import * as actionTypes from "../action/actionTypes"

const initialState = {
    step: 0,
    page: 0,
    questions: questions
}

const root = (state = initialState, action) => {
    var page = 0;
    switch (action.type) {
    case actionTypes.BEGIN_QUIZ:
        return {
            ...state,
            step: 1,
            page: 0
        }
    case actionTypes.ANSWER_TRUE:
        if( state.page < state.questions.length ) {
            state.questions[state.page].answer =  (state.questions[state.page].correct_answer == "True");
        }
        page = state.page + 1;
        if( page < state.questions.length ) {
            return {
                ...state,
                page: state.page + 1
            }
        } else {
            return {
                ...state,
                page: 0,
                step: 2
            }
        }
    case actionTypes.ANSWER_FALSE:
        state.questions[state.page].answer = (state.questions[state.page].incorrect_answers == "True");
        page = state.page + 1;
        if( page < state.questions.length ) {
            return {
                ...state,
                page: state.page + 1
            }
        } else {
            return {
                ...state,
                page: 0,
                step: 2
            }
        }
    case actionTypes.PLAY_AGAIN:
        return {
            ...state,
            page: 0,
            step: 0
        }
                        
    default:
        return state
    }
}
const store = createStore(root);

export default store;
