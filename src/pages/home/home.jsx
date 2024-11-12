import React from 'react'
import Hero from './hero/hero'
import WhyChooseUs from './whyChooseUs'
import Services from './services/services'

const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
          <WhyChooseUs />
      </section>
      <section>
        <Services />
      </section>
    </div>
  )
}

export default Home