import Hero from './components/Hero'
import Features from './components/Features'
import Cta from './components/Cta'
// import Footer from './components/Footer'
import Signin from './Signin'

import Dialog from './components/Dialog'

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Dialog />
      <Features/>
      <Cta/>
      {/* <Signin/> */}
    </div>
  )
}