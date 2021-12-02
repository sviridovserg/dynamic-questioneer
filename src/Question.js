import React from "react";
import { Card, Form } from "react-bootstrap";

class MultiChoiceQuestion extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.question}</h3>
                <Form.Group>
                {
                    this.props.answers.map(a => <Form.Check
                        type="checkbox"
                        label={a.text}
                        value={a.isSelected}
                        onChange={(evt) => this.props.onChange(a, evt.target.checked)}
                      />)
                }
                </Form.Group>
            </div>
        );
    }
}

class SingleChoiceQuestion extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.question}</h3>
                <Form.Group>
                {
                    this.props.answers.map(a => <Form.Check
                        type="radio"
                        label={a.text}
                        value={a.isSelected}
                        name={this.props.id}
                        onChange={(evt) => this.props.onChange(a, evt.target.checked)}
                      />)
                }
                </Form.Group>
            </div>
        );
    }
}

export class Question extends React.Component {
    render() {
        let question = undefined;
        if (this.props.type === 'singleChoice') {
            question = (<SingleChoiceQuestion id={this.props.id} question={this.props.question} answers={this.props.answers} onChange={this.props.onChange} />)
        } else if (this.props.type === 'multiChoice') {
            question = (<MultiChoiceQuestion id={this.props.id} question={this.props.question} answers={this.props.answers} onChange={this.props.onChange} />)
        } else {
            question = `Question type [${this.props.type}] does not have corresponding control implemented`
        }
        return (
            <Card>
                <Card.Body>{question}</Card.Body>
            </Card>
        );
    }
}