import React from 'react'
import { WorkFlow } from '../../components/workFlow'
import { design, build, evolution } from '../../assets/images'

const OurFlowSection = () => {

    const flow = [
        {
            title:"Design",
            desc:"Designing tomorrow's success, crafting today's impact. We create unforgettable brand stories that resonate with your audience.",
            img:design,
            number:"01",
        },
        {
            title:"Build seamless",
            desc:"Designing tomorrow's success, crafting today's impact. We create unforgettable brand stories that resonate with your audience.",
            img:build,
            number:"02",
        },
        {
            title:"Evolution",
            desc:"Designing tomorrow's success, crafting today's impact. We create unforgettable brand stories that resonate with your audience.",
            img:evolution,
            number:"03",
        },
    ]

  return (
    <div id='flow' className='flex flex-col mobile:gap-24 gap-52'>
    {
        flow.map((data)=><WorkFlow title={data.title} desc={data.desc} img={data.img} number={data.number} />)
    }
    </div>
  )
}

export default OurFlowSection