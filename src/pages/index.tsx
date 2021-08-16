import { GetStaticProps } from 'next';

import styles from '../styles/home.module.scss';

import Head from 'next/head';

import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string,
    amount: number,
  }
}

export default function Home({ product }: HomeProps) {

  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publication <br />
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId}/>
        </section>

        <img src="/images/avatar.svg" alt="Girl Code" />
      </main>
    </>
  )
}

//  ## Maneiras de se fazer uma chamada no next
//  Client-side
//  Server-side
//  Static site generation

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JMbsbB69yUvdklLue0p4QRS', {
    expand: ['product'] // para pegar informações do produto utilize um price.product.<informações do produto estarão aqui>
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24, // 24 horas
  }
}
