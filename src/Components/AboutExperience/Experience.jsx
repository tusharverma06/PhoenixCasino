import React from 'react'
import Gradient from '../../assets/backgroundGradient.svg'
import Exp1 from '../../assets/Exp1.mp4'
import Exp3 from '../../assets/Exp3.mp4'
import Exp2 from '../../assets/Exp2.mp4'
import ExperienceContainer from './ExperienceContainer'
import SectionContainer from '../Container/SectionContainer'

const Experience = () => {

    const Experiences = [
        {
            title: `Endless Excitement`,
            text: `Lorem ipsum dolor sit amet consectetur. Morbi varius consectetur blandit eu tellus.`,
            vid: Exp1
        },

        {
            title: `Limitless Luck`,
            text: `Lorem ipsum dolor sit amet consectetur. Morbi varius consectetur blandit eu tellus.`,
            vid: Exp2
        },

        {
            title: `Festive Fun`,
            text: `Lorem ipsum dolor sit amet consectetur. Morbi varius consectetur blandit eu tellus.`,
            vid: Exp3
        },

    ]

    return (
        <SectionContainer heading={'About our Golden Experience'} desc={'Lorem ipsum dolor sit amet consectetur. Morbi varius consectetur blandit ut quis eget eu tellus. Quam morbi tempus odio sem in adipiscing consectetur odio lobortis. Enim urna gravida eleifend bibendum arcu nunc.'}>
            <div className="flex flex-wrap items-center justify-center w-full md:justify-start lg:justify-between 3xl:justify-center 3xl:gap-24">
                {Experiences.map(({ title, text, vid }, id) => <ExperienceContainer text={text} title={title} vid={vid} key={id} />)}
            </div>

            {/* gradient right */}
            <div
                style={{
                    borderRadius: `640px`,
                    background: `radial-gradient(50% 50% at 50% 50%, #FFB800 0%, rgba(238, 140, 41, 0.00) 100%)`,
                    filter: `blur(331.8500061035156px)`
                }}
                className='absolute -top-[15%] right-[5%] w-[440px] h-[449px] '>
            </div>

            {/* gradient left */}
            <img
                src={Gradient}
                className='absolute top-[10%] -left-[0%] w-[440px] h-[449px] '>
            </img>
        </SectionContainer>
    )
}

export default Experience