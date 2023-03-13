import { Link } from '../Link.jsx'

export default function AboutPage() {
  return (
    <>
      <h1>Sobre Nosotros</h1>
      <img
        src='https://res.cloudinary.com/practicaldev/image/fetch/s--AcVXtj-J--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://joeschmoe.io/api/v1/male/jon'
        alt=''
      />
      <p>Esta es una página de ejemplo para crear un React Router desde cero</p>
      <Link to='/'>Ir a la página de inicio</Link>
    </>
  )
}
