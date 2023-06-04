import React, { useEffect, useState } from 'react'
import dummydata from './database/dummydata'
import { useDispatch, useSelector } from 'react-redux'
import { useFetchQuestion  } from './hooks/FetchQuestion'
import {updateResultAction} from './redux/result_reducer'
import { updateResult } from './hooks/setResult'

export default function Questions({onChecked}) {
  const [checked, setChecked] = useState(false)
  const [question, setQuestion] = useState({})
  const [{ isLoading, apiData, serverError}] = useFetchQuestion() 
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  useSelector(state => console.log(state))
  const questions = useSelector(state => state.questions.queue[state.questions.trace])
  const {trace} = useSelector(state => state.questions)
  const result = useSelector(state => state.result.result)
  const { queue} = useSelector(state => state.questions);
   
// useEffect(() => { 
//     // console.log(isLoading)
//     // console.log(apiData)
//     // console.log(serverError)
//     // console.log(trace)

//     // console.log(state)
//     // console.log(question)

//     console.log(dummydata)
//     setQuestion(dummydata[0])
//   }, [])
useEffect(() => {
   dispatch(updateResult({trace, checked}))
   setQuestion(dummydata[trace]);
}, [ checked, trace, dummydata]);

  function onSelect(i){
          onChecked(i)
          setChecked(i)
          dispatch(updateResult({trace, checked}))
        }

     if(isLoading) return <h3 className='text-light'>isLoading</h3>
     if(serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>
    

  return (
    <div className='questions'>
      <h2 className='text-light'>{question?.question}</h2>

      <ul key={question?.id}>
        {
          question?.options?.map((q, i) => (
            <li key={i}>
              <input 
                type="radio"
                value={false}
                name="options"
                id={`q${i}-option`}
                onChange={() => onSelect(i)}
              />
                  <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                  <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
 
// import React, {useEffect, useState} from 'react'
// import dummydata from '../database/dummydata'
// import question from '../database/dummydata'
// import options from '../database/dummydata'
// import { useDispatch, useSelector } from 'react-redux'

// export default function Questions() {
//   const [questions, checked, setChecked] = useState()

//   useEffect(() => { 
//         console.log(dummydata)
//    })

//     function onSelect(){
//         // setChecked(true)
//         console.log('radio button change')
//     }

//   return (
//     <div className='questions'>
//        <h2 className='text-light'>{question.question}</h2>

//         <ul key={question.id}>
//             {
//           question.options.map((q, i) => (
//                     <li key={i}>
//                         <input 
//                             type="radio"
//                             value={false}
//                             name="options"
//                             id={`q${i}-option`}
//                             onChange={() => onSelect(i)}
//                         />

//                         <label className='text-primary' htmlFor={`q${i}-option`}>{q.key}</label>
//                         <div className="check checked"></div>
//                     </li>
//                  ))
//              }
//      </ul>
//      </div>
//       )
// }


