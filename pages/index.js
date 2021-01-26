import styled from 'styled-components'
import { useRouter } from 'next/router'

import { Footer, GitHubCorner, QuizBackground, QuizLogo, Widget } from '../src/components'
import db from '../db.json'
import { useState } from 'react'

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  const router = useRouter()
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    router.push(`/quiz?name=${name}`)
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <form onSubmit={handleSubmit}>
              <input placeholder="Nome"
                value={name} onChange={e => setName(e.target.value)}
              />
              <button type="submit" disabled={!name}>
                Jogar
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/carlos-HFC/aluraquiz" />
    </QuizBackground>
  )
}
