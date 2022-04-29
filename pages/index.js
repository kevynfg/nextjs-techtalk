import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export async function getServerSideProps() {
    const response = await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json')
    const pokemonsResult = await response.json()
    return {
      props: {
        pokemon: pokemonsResult.slice(0,20)
      }
    }
}

export default function Home({pokemon}) {

  if (!pokemon) return <div>Loading...</div>
  return (
    <div>
      <Head>
         <title>Pokemon List</title>
      </Head>
      <h2>Pokemon List</h2>
      <ul className={styles.container}>
        {pokemon.map(({name, image}) => (
          <li key={name}>
            <Link href={`/pokemon/${String(name).toLowerCase()}`}>
              {name}
            </Link>
            <Image src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${image}`}
            width={100} height={100} alt={`Pokemon ${name}`}></Image>
          </li>
        ))}
      </ul>
    </div>
  )
}
