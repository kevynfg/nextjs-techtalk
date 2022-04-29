import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Details() {
    const [pokemon, setPokemon] = useState(null)
    const {query: name} = useRouter()
    console.log('query', name.name)

    useEffect(() => {
        async function getDetails() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.name}`)
            const pokemonDetail = await response.json();
            setPokemon(pokemonDetail)
        }
        if (name.name) {
            getDetails();
        }
    },[name.name])

    if (!pokemon) return <div>Loading...</div>

    return (
        <div>
            <Head>
                <title>{pokemon.name}</title>
            </Head>
            <div>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </div>
            <div style={{marginLeft: "2rem"}}>
               <h1 >{pokemon.name}</h1> 
               <Image src={pokemon.sprites.front_default} height={200} width={200} layout="fixed" quality={75}></Image>
               <div>
                    <ul>
                        {pokemon.abilities.map((ability, index) => (
                            <li key={index}>{ability.ability.name}</li>
                        ))}
                    </ul>
               </div>
            </div>
        </div>
    )
}