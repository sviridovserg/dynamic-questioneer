export class QuestionnaireService {
    loadInitialQuestionnaire() {
        return Promise.resolve({
            id: 'g1',
            questions: [
                {
                    id: 'q1',
                    type: 'multiChoice',
                    question: 'What are your completed education?',
                    answers: [
                        { id: 'q1_a1', text: 'grad school' },
                        { id: 'q1_a2', text: 'post-grad school' },
                        { id: 'q1_a3', text: 'bachelor' },
                        { id: 'q1_a4', text: 'masters' }
                    ]
                },
                {
                    id: 'q2',
                    type: 'singleChoice',
                    question: 'What is your sex?',
                    answers: [
                        { id: 'q2_a1', text: 'male' },
                        { id: 'q2_a2', text: 'female' },
                        { id: 'q2_a3', text: 'non-binary', groupId: 'g2' },
                        { id: 'q2_a4', text: 'prefer not to answer' }
                    ]
                }
            ]
        });
    }
    loadQuestionGroup(groupId) {
        return Promise.resolve({
            id: groupId,
            questions: [
                {
                    id: 'q3',
                    type: 'singleChoice',
                    question: 'How much did you struggle during the education?',
                    answers: [
                        { id: 'q3_a1', text: 'not at all' },
                        { id: 'q3_a2', text: 'a little' },
                        { id: 'q3_a3', text: 'significantly' },
                        { id: 'q3_a4', text: 'prefer not to answer' }
                    ]
                }
            ]
        });
    }
}