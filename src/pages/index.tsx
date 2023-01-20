import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const products = [
    { name: 'Produto 01', price: 'R$ 100,00', },
    { name: 'Produto 02', price: 'R$ 200,00', },
    { name: 'Produto 03', price: 'R$ 100,00', },
    { name: 'Produto 04', price: 'R$ 300,00', },
    { name: 'Produto 05', price: 'R$ 100,00', },
    { name: 'Produto 06', price: 'R$ 500,00', },
  ]
  return (
    <>
      <Head>
        <title>Crochê da Mika</title>
        <meta name="description" content="Crochê da mika" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-orange-700 min-h-screen">
        <nav className="flex gap-5 bg-orange-600 py-2 items-center justify-around">
          <div className="flex lg:ml-5 text-white">
            Crochê
          </div>
          <ul className="flex flex-row">
            <li className="flex">
              <a className="text-orange-50 px-4 py-2 uppercase border-b-2 border-transparent hover:border-orange-800">
                Produtos A
              </a>
            </li>
            <li className="flex">
              <a className="text-orange-50 px-4 py-2 uppercase border-b-2 border-transparent hover:border-orange-800">
                Produtos B 
              </a>
            </li>
            <li className="flex">
              <a className="text-orange-50 px-4 py-2 uppercase border-b-2 border-transparent hover:border-orange-800">
                Produtos C 
              </a>
            </li>
            <li className="flex">
              <a className="text-orange-50 px-4 py-2 uppercase border-b-2 border-transparent hover:border-orange-800">
                Produtos D 
              </a>
            </li>
          </ul>
          <ul>
          </ul>
        </nav>
        <div className="flex mt-5 container justify-center">
          <div className="grid grid-rows-4">
            {products.map((product, index) => (
              <article key={index} className="col-span-1 bg-white">
                <header className="">
                  {/* <img src="" alt="" /> */}
                </header>
                <main className="">
                  product x 
                </main>
                <footer className="">
                </footer>
              </article>
            ))}
          </div>
        </div>
        <footer>

        </footer>
      </main>
    </>
  )
}
