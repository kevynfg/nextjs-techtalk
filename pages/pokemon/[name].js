import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export async function getServerSideProps(context) {
    context.res.setHeader('Cache-Control', 's-maxage=10', 'stale-while-revalidate')
    // console.log('context', context)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.params.name}`)
    const pokemonDetail = await response.json();
    return {
        props: {
            pokemon: pokemonDetail
        }
    }
}

export default function Details({pokemon}) {

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