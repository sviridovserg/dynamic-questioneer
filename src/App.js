import logo from './logo.svg';
import './App.css';
import { QuestionnaireService } from './QuestionairService';
import { Question } from './Question';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      groups:[]
    }
    this.service = new QuestionnaireService();
  }
  componentDidMount() {
    this.service.loadInitialQuestionnaire().then((response) => this.addQuestionGroup(response))
  }
  addQuestionGroup(group) {
    this.setState({
      ...this.state,
      groups: [...this.state.groups, group]
    });
  }
  questionChanged(group, question, answer, newValue) {
    const state = JSON.parse(JSON.stringify(this.state));
    const g = state.groups.find(g => g.id ===group.id);
    const q = g.questions.find(q => q.id === question.id);
    const a = q.answers.find(a => a.id === answer.id );
    a.isSelected = newValue;
    this.setState(state);
    if (a.groupId) {
      this.service.loadQuestionGroup(a.groupId).then((response) => this.addQuestionGroup(response));
    }
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Dynamic Questionnaire Demo
          </p>
        </header>
        <div>
          {
             this.state.groups ? this.state.groups.map(g => (
              <div>
                {g.questions.map(q => <Question id={q.id} type={q.type} question={q.question} answers={q.answers} onChange={(a,  val) => this.questionChanged(g, q, a, val)} />)}
              </div>
            )) : undefined
          }
        </div>
        <div>
          {JSON.stringify(this.state)}
        </div>
      </div>
    );
  }
}

export default App;
