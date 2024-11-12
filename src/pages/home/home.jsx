import React from 'react'
import Hero from './hero/hero'
import WhyChooseUs from './whyChooseUs'
import Services from './services/services'
import RecentProjects from './recentProjects/recentProjects'

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

      <section>
        <RecentProjects />
      </section>
    </div>
  )
}

export default Home