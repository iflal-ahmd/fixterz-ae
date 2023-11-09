import { ReactElement } from 'react'
import Header from "./Header";
import Footer from "./Footer";
import Head from 'next/head'

import { Manrope } from '@next/font/google'
const font = Manrope({preload: false, subsets: ['latin'], weight: [ '200', '300', '400', '600', '700', '800'], style: ['normal']})
type Props = {
    children: ReactElement
}

const Layout = ({ children}:Props) => {
    return (
        <>
            <Head>
                <title>Fixterz | Highly trained Handyman Services</title>
                <meta name="description" content="We have years of experience and a solid reputation so you can rest assured that you,
                                    your home and your furniture are in safe, reliable hands. so we can fix/assemble your
                                    home/furniture quickly and correctly." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className={`${font.className} max-w-screen-2xl mx-auto bg-white dark:bg-gray-800`}>
                <Header/>
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
