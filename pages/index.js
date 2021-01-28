import { useState } from 'react'
import { useRouter } from 'next/router'

import { Button, Footer, GitHubCorner, Input, QuizBackground, QuizContainer, QuizLogo, Widget } from '../src/components'
import db from '../db.json'

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
            <form onSubmit={handleSubmit} autoComplete="off">
              <Input placeholder="Digite o seu nome" name="Nome do usuário" title="Digite o seu nome"
                value={name} onChange={e => setName(e.target.value)}
              />
              <Button type="submit" disabled={!name}>
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/carlos-HFC/aluraquiz" />
    </QuizBackground>
  )
}
