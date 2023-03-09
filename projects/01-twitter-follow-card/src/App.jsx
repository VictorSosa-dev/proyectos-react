import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const user = [
  {
    name: 'Victor Sosa',
    userName: 'victorsosa-dev',
    isFollowing: false
  },
  {
    name: 'Miguel Ángel Durán',
    userName: 'midudev',
    isFollowing: false
  },
  {
    name: 'David',
    userName: 'david',
    isFollowing: false
  }
]

export function App() {
  const formatName = (userName) => `@${userName}`

  return (
    <section className='App'>
      {user.map(({ name, userName, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          formatName={formatName}
          userName={userName}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  )
}
