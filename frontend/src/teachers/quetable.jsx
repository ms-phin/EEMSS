// import React from 'react';
// import { useLocation, useParams } from 'react-router-dom';

// const QuestionTable = ({ questions }) => {

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Question Number</th>
//           <th>Question</th>
//           <th>Option 1</th>
//           <th>Option 2</th>
//           <th>Option 3</th>
//           <th>Option 4</th>
//           <th>Answer</th>
//         </tr>
//       </thead>
//       <tbody>
//         {questions?.map((question, index) => (
//           <tr key={index}>
//             <td>{index + 1}</td>
//             <td>{question.question.text}</td>
//             {question.options.map((option, index) => (
//               <td key={index}>
//                 {option.isImage ? (
//                   <img src={option.text} alt={`Option ${index + 2}`} />
//                 ) : (
//                   <p>{option.text}</p>
//                 )}
//               </td>
//             ))}
//             <td>{question.options[parseInt(question.correctAnswer.charAt(6)) - 1].text}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default QuestionTable;










import React from 'react';

const QuestionTable = ({ questions }) => {
  return (
    <div>
      <h2>Added Questions</h2>
      {questions.length === 0 ? (
        <p>No questions added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Question Number</th>
              <th>Question</th>
              <th>Option 1</th>
              <th>Option 2</th>
              <th>Option 3</th>
              <th>Option 4</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{question.questionText}</td>
                {question.options && question.options.length > 0 ? (
                  question.options.map((option, index) => (
                    <td key={index}>
                      {option.isImage ? (
                        <img src={option.text} alt={`Option ${index + 2}`} />
                      ) : (
                        <p>{option.text}</p>
                      )}
                    </td>
                  ))
                ) : (
                  <td colSpan="4">No options available</td>
                )}
                <td>{question.options && question.options.length > 0 ? question.options[question.correctAnswerIndex].text : ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default QuestionTable;