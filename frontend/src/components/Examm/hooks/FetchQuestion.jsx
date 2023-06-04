import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import dummydata, { answers } from "../database/dummydata";

/** redux actions */

import * as Action from '../redux/question_reducer'
import moveNextAction from "../redux/question_reducer";
import movePrevAction from "../redux/question_reducer";
/** fetch question hook to fetch data and set value to store */
export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null });

    useEffect(() => {

        setGetData(prev => ({ ...prev, isLoading: true }));

        (async () => {
            try {
                let question = await dummydata;
                if (question.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading: false }));
                    setGetData(prev => ({ ...prev, apiData: { question, answers } }));

                    /** dispatch an action */
                    dispatch(Action.startExamAction({ question, answers }))

                }
                else {
                    throw new Error("No Question Available");
                }
            }
            catch (error) {
                setGetData(prev => ({ ...prev, isLoading: false }));
                setGetData(prev => ({ ...prev, serverError: error }));
            }
        })();
    }, [dispatch]
    );
    return [getData, setGetData];

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







// import { useEffect, useState } from "react"
// import { useDispatch } from "react-redux";
// // import dummydata, { answers } from "../database/dummydata";

// /** redux actions */

// import * as Action from '../redux/question_reducer'
// import moveNextAction from "../redux/question_reducer";
// import movePrevAction from "../redux/question_reducer";

/** fetch question hook to fetch data and set value to store */
// export const useFetchQuestion = () => {
//     const dispatch = useDispatch();
//     const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null });

//     useEffect(() => {

//         setGetData(prev => ({ ...prev, isLoading: true }));

//         (async () => {
//             try {
//                 let question = await axios.get('http://localhost:5000/api/active-exams');
//                 if (question.length > 0) {
//                     setGetData(prev => ({ ...prev, isLoading: false }));
//                     setGetData(prev => ({ ...prev, apiData: { question: question.data, answers: answers } }));

//                     /** dispatch an action */
//                     dispatch(Action.startExamAction({ question: question.data, answers: answers }))

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

// export const MoveNextQuestion = () => async (dispatch) => {
//     try {
//         dispatch(Action.moveNextAction()); /** increase quest by 1 */
//     } catch (error) {
//         console.log(error)
//     }
// }
// export const movePrevQuestion = () => async (dispatch) => {
//     try {
//         dispatch(Action.movePrevAction()); /** increase quest by 1 */
//     } catch (error) {
//         console.log(error)
//     }
// }
