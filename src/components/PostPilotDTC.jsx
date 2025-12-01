import React from 'react'
import SectionTitle, { CursiveTitle } from './ui/SectionTitle'
import Button from './ui/Button'
import Container from './common/Container'
import { FaTwitter } from 'react-icons/fa'

const PostPilotDTC = () => {
    const cardsDtc = [
        {id: 1, src: "/images/post-pilot-dtc/image1.jpg", alt: "image1", name: "Jon Tucker", userName: "@JonTuckerUSA", paragraph: "Email is a killer channel, but if you layer in postal mail you can really supercharge results. The team at @getpostpilot will spark ideas for ya."},
        {id: 2, src: "/images/post-pilot-dtc/image2.jpg", alt: "image2", name: "Helen Guo", userName: "@HelenGuo_", paragraph: "Been using PostPilot for years. Good for re-engagement. And you can get creative with your messaging."},
        {id: 3, src: "/images/post-pilot-dtc/image3.jpg", alt: "image3", name: "Nathan Woods", userName: "@HeisNathan", paragraph: "We have done some rad winbacks to 360-720 days since purchase that have rocked. PostPilot team is one of my favs."},
        {id: 4, src: "/images/post-pilot-dtc/image4.jpg", alt: "image4", name: "Chris Lander", userName: "@chris_basis", paragraph: "Another +1 for PostPilot. Have only done winbacks, but it's been wonderful. Their team is also top notch. Super helpful every time we set something up."},
    ]
  return (
    <>
    <SectionTitle className='pt-24 pb-[74px]'>
        PostPilot is 🔥 for <CursiveTitle>DTC</CursiveTitle>
    </SectionTitle>

    <Container>
    <div className='mb-16 flex flex-col md:flex-row justify-around gap-6'>
        {cardsDtc.map(card => (
            <div key={card.id} className='border-2 rounded-2xl px-8 py-8'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-4'>
                        <img className='w-16 h-16 rounded-full' src={card.src} alt={card.alt} />
                        <h3 className=''>{card.name} <br /> <h4>{card.userName}</h4></h3>
                    </div>
                        <FaTwitter >twit</FaTwitter>
                </div>
                <p className='max-w-80 mt-4'>{card.paragraph}</p>
            </div>
        ))}
    </div>
    <div className='flex justify-center'>
        <Button text="TRY IT RISK-FREE" className='items-center text-center mb-24 w-60 md:w-[261px] h-16'></Button>
    </div>
    </Container>

    </>
  )
}

export default PostPilotDTC