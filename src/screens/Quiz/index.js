import { useEffect, useState } from 'react'

import { Alternative, Button, GitHubCorner, QuizBackground, QuizContainer, QuizLogo, Widget } from '../../components'

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

function Result({ result }) {
  const acertos = result.filter(res => res).length

  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
      <Widget.Content>
        <p>
          Você acertou {acertos} perguntas
        </p>
        <ul>
          {result.map((res, i) => (
            <li key={i}>
              #0{i + 1} Resultado: {' '}
              {res ? 'Acertou' : 'Errou'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  )
}

function QuestionWidget({ addResult, index, onSubmit, question, total }) {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined)
  const [submit, setSubmit] = useState(false)

  const correct = selectedAlternative === question.answer
  const status = correct ? "SUCCESS" : "ERROR"

  function handleSubmit(e) {
    e.preventDefault()

    setSubmit(true)
    addResult(selectedAlternative === question.answer)

    setTimeout(() => {
      onSubmit()
      setSubmit(false)
      setSelectedAlternative(undefined)
    }, 1000);
  }

  return (
    <Widget>
      <Widget.Header>
        <h3>Pergunta {index + 1} de {total}</h3>
      </Widget.Header>
      <img src={question.image} alt="Descrição" style={{ width: "100%", height: 150, objectFit: "cover" }} />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <Alternative onSubmit={handleSubmit}>
          {question.alternatives.map((alternative, i) => (
            <Widget.Topic key={i} as="label" htmlFor={`alternative${i}`} data-selected={selectedAlternative === i} data-status={submit && status}>
              <input type="radio" name="Alternativas" id={`alternative${i}`}
                onChange={() => setSelectedAlternative(i)}
                style={{ display: "none" }}
              />
              {alternative}
            </Widget.Topic>
          ))}
          <Button type="submit" disabled={selectedAlternative === undefined}>
            Confirmar
          </Button>
        </Alternative>
      </Widget.Content>
    </Widget>
  )
}

export default function Quiz({ bg, external }) {
  const [screen, setScreen] = useState('LOADING')
  const [index, setIndex] = useState(0)
  const [result, setResult] = useState([])

  const question = external[index]

  useEffect(() => {
    setTimeout(() => setScreen('QUIZ'), 1000)
  }, [])

  function handleSubmit() {
    if (index + 1 < external.length) setIndex(index + 1)
    else setScreen('RESULT')
  }

  function addResult(result) {
    setResult(res => [...res, result])
  }

  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <QuizLogo />
        {screen === 'LOADING' && <Loading />}
        {screen === 'QUIZ' && <QuestionWidget onSubmit={handleSubmit} question={question} total={external.length} index={index} addResult={addResult} />}
        {screen === 'RESULT' && <Result result={result} />}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/carlos-HFC/aluraquiz" />
    </QuizBackground>
  )
}
