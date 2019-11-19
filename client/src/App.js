import React from 'react';
import logo from './NewVisions_Primary_RGB.jpg';
import './App.css';

import { students, groupByGrade, findLowestAverages } from './data/students';

import StudentsList from './components/StudentsList';

class App extends React.Component {
  state = {
    students: students,
    studentsByGrade: [],
    studentsWithLowestAvg: []
  };

  componentDidMount() {
    let studentsByGrade = groupByGrade(this.state.students);
    this.setState({
      studentsByGrade
    });
  }

  handleGetAvg(e) {
    const studentsWithLowestAvg = findLowestAverages(
      this.state.studentsByGrade
    );
    this.setState(prevState => ({
      ...prevState.studentsWithLowestAvg,
      studentsWithLowestAvg
    }));
  }

  renderStudentsByGrade = () => {
    return (
      <div>
        <h1>Students Sorted by Grade</h1>
        {this.state.studentsByGrade.map(grade => {
          return (
            <div key={grade.name}>
              {grade.map(student => {
                return (
                  <div key={student.name}>
                    <h3>{student.name}</h3>
                    <h3>Grade: {student.grade}</h3>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  renderAvg = () => {
    return (
      <div>
        <h1>Students with the lowest average by grade</h1>
        {this.state.studentsWithLowestAvg.map(student => {
          return (
            <div>
              <h3>{student.name}</h3>
              <h4>Grade:{student.grade}</h4>
              <h4>Average: {student.average}</h4>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        <h1>Original Student Data</h1>
        <StudentsList students={this.state.students} className="card-list" />

        {this.state.studentsByGrade !== null && this.renderStudentsByGrade()}
        <button onClick={() => this.handleGetAvg(this.state.studentsByGrade)}>
          Get Lowest Avg
        </button>
        {this.state.studentsWithLowestAvg !== null && this.renderAvg()}
      </div>
    );
  }
}

export default App;
