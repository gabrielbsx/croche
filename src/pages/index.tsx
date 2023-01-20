import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import CrocheImage from '../assets/images/croche.jpg'
import LogoCroche from '../assets/images/logo-crochet.png'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const products = [
    { name: 'Produto 01', price: 'R$ 100,00', },
    { name: 'Produto 02', price: 'R$ 200,00', },
    { name: 'Produto 03', price: 'R$ 100,00', },
    { name: 'Produto 04', price: 'R$ 300,00', },
    { name: 'Produto 05', price: 'R$ 100,00', },
    { name: 'Produto 06', price: 'R$ 500,00', },
    { name: 'Produto 07', price: 'R$ 500,00', },
    { name: 'Produto 08', price: 'R$ 500,00', },
    { name: 'Produto 09', price: 'R$ 500,00', },
    { name: 'Produto 10', price: 'R$ 500,00', },
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
            <Image src={LogoCroche} alt="" width={120} height={120} />
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
        <div className="mt-5 justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-10 container mx-auto">
          {products.map((product, index) => (
            <div key={index} className="flex justify-center">
              {/* <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-lg shadow-lg"> */}
              <div className="w-full overflow-hidden bg-orange-500">
                <div className="relative pt-5 px-5 flex items-center justify-center">
                  <Image src={CrocheImage} width={100} height={100} alt="" className="relative w-full h-full" />
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">{product.name}</span>
                  <div className="flex justify-between">
                    <span className="block font-semibold text-xl">{product.name}</span>
                    <span className="bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <footer>

        </footer>
      </main>
    </>
  )
}
