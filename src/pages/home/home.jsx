import React from 'react'
import Hero from './hero/hero'
import WhyChooseUs from './whyChooseUs'

const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
          <WhyChooseUs />
      </section>
    </div>
  )
}

export default Home