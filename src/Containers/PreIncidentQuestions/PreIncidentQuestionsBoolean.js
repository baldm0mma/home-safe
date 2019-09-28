import React from 'react';

export const PreIncidentQuestionsBoolean = ({ question }) => {
  return (
    <article>
      <h3>{`Question ${question.id}`}</h3>
      <p>{question.question}</p>
      <input
        type='radio'
        value='yes'
        name='checked'
        // onChange={}
      />
      Yes
      <input
        type='radio'
        value='no'
        name='checked'
        // onChange={}
      />
      No
    </article>
  );
};
