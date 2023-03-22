import { Link } from '../Link.jsx'

const i18n = {
  en: {
    title: 'About Us',
    button: 'Go to home page',
    description: 'This is an example page to create a React Router from scratch'
  },
  es: {
    title: 'Sobre Nosotros',
    button: 'Ir a la página de inicio',
    description:
      'Esta es una página de ejemplo para crear un React Router desde cero'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <img
        src='https://res.cloudinary.com/practicaldev/image/fetch/s--AcVXtj-J--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://joeschmoe.io/api/v1/male/jon'
        alt=''
      />
      <p>{i18n.description}</p>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
