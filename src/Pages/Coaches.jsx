import React from 'react'
import Hero from '../components/choaches/Hero'
import CoachingPhilosophy from '../components/choaches/CoachingPhilosophy'
import Achievements from '../components/choaches/Achievements'
import Testimonials from '../components/choaches/Testimonials'
import CoachesList from '../components/choaches/CoachesList'

const Coaches = () => {
  return (
    <div>
   <Hero/>
   <CoachingPhilosophy/>
   <Achievements/>
   <Testimonials/>
   <CoachesList/>
    </div>
  )
}

export default Coaches
