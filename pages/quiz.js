import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { Button, Footer, GitHubCorner, Input, QuizBackground, QuizContainer, QuizLogo, Widget } from '../src/components'
import db from '../db.json'

function Loading() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
      <Widget.Content>
        Carregando...
      </Widget.Content>
    </Widget>
  )
}

function QuestionWidget({ index, onSubmit, question, total }) {
  return (
    <Widget>
      <Widget.Header>
        <h3>Pergunta {index + 1} de {total}</h3>
      </Widget.Header>
      <img src={question.image} alt="Descrição" style={{ width: "100%", height: 150, objectFit: "cover" }} />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <form onSubmit={onSubmit}>
          {question.alternatives.map((alternative, i) => (
            <Widget.Topic key={i} as="label" htmlFor={`alternative${i}`}>
              <input type="radio" name="Alternativas" id={`alternative${i}`} /* style={{ display: "none" }} */ />
              {alternative}
            </Widget.Topic>
          ))}
          <Button type="submit">
            Confirmar
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  )
}

export default function Quiz() {
  const [screen, setScreen] = useState('LOADING')
  const [index, setIndex] = useState(0)

  const question = db.questions[index]

  useEffect(() => {
    setTimeout(() => setScreen('QUIZ'), 1000)
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    if (index + 1 < db.questions.length) setIndex(index + 1)
    else setScreen('RESULT')
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screen === 'LOADING' && <Loading />}
        {screen === 'QUIZ' && <QuestionWidget onSubmit={handleSubmit} question={question} total={db.questions.length} index={index} />}
        {screen === 'RESULT' && "Topperson"}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/carlos-HFC/aluraquiz" />
    </QuizBackground>
  )
}
