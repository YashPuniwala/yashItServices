import React from 'react'
import Hero from './hero/hero'
import WhyChooseUs from './whyChooseUs'
import Services from './services/services'
import RecentProjects from './recentProjects/recentProjects'
import StatsSection from '../../components/home/statsSection/statsSection'

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
      <section>
        <StatsSection />
      </section>
    </div>
  )
}

export default Home