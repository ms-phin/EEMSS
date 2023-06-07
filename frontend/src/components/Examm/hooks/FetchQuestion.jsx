// import { useEffect, useState } from "react"
// import { useDispatch } from "react-redux";
// import dummydata, { answers } from "../database/dummydata";

// /** redux actions */

// import * as Action from '../redux/question_reducer'
// import moveNextAction from "../redux/question_reducer";
// import movePrevAction from "../redux/question_reducer";
// /** fetch question hook to fetch data and set value to store */
// export const useFetchQuestion = () => {
//     const dispatch = useDispatch();
//     const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null });

//     useEffect(() => {

//         setGetData(prev => ({ ...prev, isLoading: true }));

//         (async () => {
//             try {
//                 let question = await dummydata;
//                 if (question.length > 0) {
//                     setGetData(prev => ({ ...prev, isLoading: false }));
//                     setGetData(prev => ({ ...prev, apiData: { question, answers } }));

//                     /** dispatch an action */
//                     dispatch(Action.startExamAction({ question, answers }))

//                 }
//                 else {
//                     throw new Error("No Question Available");
//                 }
//             }
//             catch (error) {
//                 setGetData(prev => ({ ...prev, isLoading: false }));
//                 setGetData(prev => ({ ...prev, serverError: error }));
//             }
//         })();
//     }, [dispatch]
//     );
//     return [getData, setGetData];

// }

// export const useFetchQuestion = () => {
//     const dispatch = useDispatch();
//     const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null });

//     useEffect(() => {
//         setGetData(prev => ({ ...prev, isLoading: true }));

//         axios.get('http://localhost:5000/api/active-exams')
//             .then((response) => {
//                 console.log(response.data);
//                 if (response.data.length > 0) {
//                     setGetData(prev => ({ ...prev, isLoading: false }));
//                     setGetData(prev => ({ ...prev, apiData: { question: response.data, answers: [] } }));
//                     dispatch(Action.startExamAction({ question: response.data, answers: [] }));
//                 } else {
//                     throw new Error("No Question Available");
//                 }
//             })
//             .catch((error) => {
//                 setGetData(prev => ({ ...prev, isLoading: false }));
//                 setGetData(prev => ({ ...prev, serverError: error }));

//             });

//     }, [dispatch]);

//     return [getData, setGetData];question?.questionText
// }
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import axios from "axios";
import * as Action from '../redux/question_reducer'

export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null });
    const [question, setQuestion] = useState([]);

    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading: true }));

        axios.get('http://localhost:5000/api/active-exams')
            .then((response) => {
                console.log(response.data);
                console.log("question._id", response.data[0]._id)
                console.log("question._id", response.data[0].questionText)
                if (response.data.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading: false }));
                    setGetData(prev => ({ ...prev, apiData: { question: response.data, answers: [] } }));
                    setQuestion(response.data); // Set the question state to the API data
                    dispatch(Action.startExamAction({ question: response.data, answers: [] }));
                } else {
                    throw new Error("No Question Available");
                }
            })
            .catch((error) => {
                setGetData(prev => ({ ...prev, isLoading: false }));
                setGetData(prev => ({ ...prev, serverError: error }));

            });

    }, [dispatch]);

    return [getData, setGetData, question, setQuestion];
}

export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction()); /** increase quest by 1 */
    } catch (error) {
        console.log(error)
    }
}
export const movePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction()); /** increase quest by 1 */
    } catch (error) {
        console.log(error)
    }
}

// axios.get("http://localhost:5000/api/active-exams").then(response => {
//     console.log(response.data);
// })