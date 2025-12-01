import React from 'react'
import Container from './common/Container'
import SectionTitle, { CursiveTitle } from './ui/SectionTitle'

const LatestTrends = () => {
    const trendsCards = [
        {id: 1, src: "/images/latest-trends/low-cost-image.png", alt: "low cost image", title: "3 Low-Cost Campaigns You Must Run to Win BFCM"},
        {id: 2, src: "/images/latest-trends/postcard-marketing-image.png", alt: "low cost image", title: "Postcard Marketing: The Definitive Guide to High ROI "},
        {id: 3, src: "/images/latest-trends/thanks-image.png", alt: "low cost image", title: "The Ultimate Guide to Thank You Notes for Ecommerce"},

    ]
  return (
        <section className='bg-[#F3FAFA]'>

    <Container>
        <SectionTitle className='pt-24 pb-[74px]'>
            Latest trends & <CursiveTitle>insights</CursiveTitle>
        </SectionTitle>

            <div className='flex flex-col md:flex-row justify-around gap-7 pb-24 items-center'>
                {trendsCards.map(card => (
                    <div key={card.id} >
                        <img className='w-[90%] w-[410px] h-[272px]' src={card.src} alt={card.alt} />
                        <SectionTitle className='text-lg md:text-2xl lg:text-[26px] text-left max-w-[357px] mt-5'>{card.title}</SectionTitle>
                    </div>
                ))}
            </div>
    </Container>
        </section>

  )
}

export default LatestTrends