import { ThemeProvider } from 'styled-components'
import QuizScreen from '../../src/screens/Quiz'

export default function QuizGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen external={dbExterno.questions} bg={dbExterno.bg} />
    </ThemeProvider>
  )
}

export async function getServerSideProps(context) {
  const [project, user] = context.query.id.split('___')

  try {
    const dbExterno = await fetch(`https://${project}.${user}.vercel.app/api/db`)
      .then(res => res.ok && res.json())
      .then(res => res)

    return {
      props: { dbExterno }
    }
  } catch (error) {
    throw new Error(error)
  }
}