import React from 'react'
import Hero from './hero/hero'
import WhyChooseUs from './whyChooseUs'
import Services from './services/services'
import RecentProjects from './recentProjects/recentProjects'
import StatsSection from '../../components/home/statsSection/statsSection'
import Testimonials from '../../components/home/testimonials'

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
        <Testimonials />
      </section>
      <section>
        <StatsSection />
      </section>
    </div>
  )
}

export default Home