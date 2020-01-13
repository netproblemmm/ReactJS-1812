export default class Robot {
    constructor () {
        this.name = 'Rob',
        this.hello = { body: 'Привет! чем могу помочь?', user: this.name }
        this.firstAnswer = { body: 'Ваш звонок очень важен для нас!', user: this.name },
        this.simpleAnswer = [
            { body: 'Ваш звонок очень очень важен для нас!', user: this.name },
            { body: 'Все хорошо, мы просто заняты!', user: this.name },
            { body: 'Как только мы разберёмся сразу вам наберём!', user: this.name },
        ],
        this.angryAnswer = [
            { body: 'Полегче! Работаем мы, работаем!', user: this.name },
            { body: 'Спокойнее спокойнее! Все сделаем!', user: this.name },
            { body: 'Что-то не нравится? Тогда идите отсюда!', user: this.name },
        ]
    }

    robAnswers (messages) {
        return messages.filter (message => message.user === this.name)
    }
    
    answer (messages) {

        if (this.robAnswers (messages).length <= 1) {
            return this.firstAnswer
        }

        if (this.userQuestionsAfterRob (messages).length > 2) {
            return this.generateAnswer (this.angryAnswer, messages)
        }

        return this.generateAnswer (this.simpleAnswer, messages)
    }

    generateAnswer (answers, messages) {
        let random

        while (true) {
            random = parseInt (Math.random () * (answers.length - 0) + 0)
            if (messages[messages.length - 1].body !== answers[random].body) {
                return answers[random]
            } 
        }
    }

    userQuestionsAfterRob (messages) {
        let i
        let questions = []

        for (i = messages.length - 1; i > 0; i--) {
            if (messages[i].user === this.name) {
                break;
            }
            questions.push (messages[i])
        }
        return questions
    }
}