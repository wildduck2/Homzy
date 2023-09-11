import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { Value } from './value/Value'
import { Residence } from './residence/Residence'
import { Banner } from './banner/Banner'
import { Contact } from './contact/Contact'
import { GetStart } from './getStart/GetStart'
import { Hero } from './hero/Hero'
import { Loader } from '../../components/loader'

export const Home = () => {
    return (
        <>
            <Loader />
            <Header />
            <main>
                <Hero />
                <Banner />
                <Residence />
                <Value />
                <Contact />
                <GetStart />
            </main>
            <Footer />
        </>
    )
}
