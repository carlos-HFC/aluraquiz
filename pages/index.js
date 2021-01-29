import { useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import { Button, Footer, GitHubCorner, Input, Link, QuizBackground, QuizContainer, QuizLogo, Widget } from '../src/components'
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
        <Widget as={motion.section} initial="hidden" animate="show"
          transition={{ duration: 0.5, delay: 0 }}
          variants={{ show: { opacity: 1 }, hidden: { opacity: 0 } }}
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={handleSubmit} autoComplete="off">
              <Input placeholder="Digite o seu nome" name="Nome do usuário" title="Digite o seu nome"
                value={name} onChange={e => setName(e.target.value.trim())}
              />
              <Button type="submit" disabled={!name}>
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget as={motion.section} initial="hidden" animate="show"
          transition={{ duration: 0.5, delay: 0.5 }}
          variants={{ show: { opacity: 1 }, hidden: { opacity: 0 } }}
        >
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <ul>
              {db.external.map((link, i) => {
                const [project, user] = link.replace('https://', '').replace('.vercel.app/', '').split('.')

                return (
                  <li key={i}>
                    <Widget.Topic as={Link} href={`/quiz/${project}___${user}`}>
                      {user}/{project}
                    </Widget.Topic>
                  </li>
                )
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer as={motion.footer} initial="hidden" animate="show"
          transition={{ duration: 0.5, delay: 1 }}
          variants={{ show: { opacity: 1 }, hidden: { opacity: 0 } }}
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/carlos-HFC/aluraquiz" />
    </QuizBackground>
  )
}
