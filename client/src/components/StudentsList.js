import React from 'react';
import Card from './Card';

const StudentsList = props => {
  return (
    <div>
      {props.students.map(student => {
        return <Card key={student.name} student={student}></Card>;
      })}
    </div>
  );
};

export default StudentsList;
