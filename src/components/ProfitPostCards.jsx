import React from 'react'
import Container from './common/Container'
import SectionTitle, { CursiveTitle } from './ui/SectionTitle'
import Button from './ui/Button'

const ProfitPostCards = () => {
    const profitCards = [
        {id: "1", title: "acquisition & retention", cursiveTitle: "Powerful", paragraph: "Send one-off or triggered campaigns to customers & prospects. Target email leads with MailMatch™.", quoteCard:{cardTitle: "It’s like Klaviyo for direct mail. The results are absolutely insane.", cardParagraph: "Ash Melwani, CMO", cardImage: "/images/profit-post-card/profit-post-card-obvi-image.png"}},
        {id: "2", title: "against iOS updates, jacked-up CPCs & spam folders", cursiveTitle: "Fight back", paragraph: "Deliver your message to all of your customers — for less than the cost of a click.", quoteCard:{cardTitle: "PostPilot is our new weapon against sinking email engagement and rising PPC costs. The results and ROI have been outstanding. It’s now one of our core marketing channels to increase acquisition & LTV.", cardParagraph: "Leah Keith, GM", cardImage: "/images/profit-post-card/profit-post-card-overlander-image.png"}},
        {id: "3", title: "Done for", cursiveTitle: "you", paragraph: "From design & strategy to stamp-licking, our ecom experts help you every step of the way.", quoteCard:{cardTitle: "The team is so knowledgeable and beyond helpful. I’m blown away by their communication, detail, and attentiveness and always feel like they have our best interest in mind. Definitely worth a try.", cardParagraph: "Holly Davies, Marketing Director", cardImage: "/images/profit-post-card/profit-post-card-paragon-image.png"}},
    ]
  return (
    <section className='bg-[#FDF3EA]'>
    <Container>
        <div >
<SectionTitle className='mb-3 pt-[86px]'>
    PostPilot makes it a <CursiveTitle>cinch</CursiveTitle> to <br />
    send personalized, profit- <br />
    generating postcards.
</SectionTitle>

    <div className='flex flex-col'>
{/* 
            {profitCards.map(card => (
                <>
                <div className={card.id % 2 == 0 ? "w-1/2 mt-32 self-end" : "w-1/2 mt-32"}>

                <div className='pb-8'>
                    <CursiveTitle className='text-left'>{card.cursiveTitle}</CursiveTitle>
                    <br />
                    <SectionTitle className='text-left '>{card.title}</SectionTitle>
                </div>
                <p className='pb-12 w-1/2'>{card.paragraph}</p>
                <div className=' px-5 py-5 border-2 w-[516px] border-[#D1C7BE] rounded-xl'>
                    <p>
                        {card.quoteCard.cardTitle}
                    </p>
                    <div className='flex flex-row justify-between mt-4'>
                        <p>
                        {card.quoteCard.cardParagraph}
                        </p>
                        <img className='max-w-[53.38px] max-h-[23.98px]' src={card.quoteCard.cardImage} alt="" />
                    </div>
                </div>
                </div>

                </>
            ))} */}

<div className='pb-20 md:pb-32 px-4 md:px-0'>     
    <SectionTitle className='text-left'>
        <CursiveTitle>
            Powerful <br />
        </CursiveTitle>
        acquisition & <br />
        retention
    </SectionTitle>

    <p className='mt-6 md:mt-8 text-sm md:text-base'>
        Send one-off or triggered campaigns to customers <br className='hidden sm:block' /> 
        & prospects. Target email leads with MailMatch™.
    </p>

    <div className='px-5 py-5 mt-8 md:mt-12 border-2 w-full sm:w-[516px] border-[#D1C7BE] rounded-xl'>
        <p className='text-sm md:text-base'>
            It’s like Klaviyo for direct mail. The results are <br className='hidden sm:block' /> 
            absolutely insane.
        </p>

        <div className='flex flex-row justify-between items-center mt-4'>
            <p className='text-sm'>
                Ash Melwani, CMO
            </p>
            <img
                className='max-w-[45px] sm:max-w-[53.38px] max-h-[23.98px]'
                src="/images/profit-post-card/profit-post-card-obvi-image.png"
                alt=""
            />
        </div>
    </div>
</div>


<div className='pb-20 md:pb-32 self-start md:self-end w-full md:w-fit px-4 md:px-0'>     
    <SectionTitle className='text-left'>
        <CursiveTitle>
            Powerful <br />
        </CursiveTitle>
        acquisition & <br />
        retention
    </SectionTitle>

    <p className='mt-6 md:mt-8 text-sm md:text-base'>
        Send one-off or triggered campaigns to customers <br className='hidden sm:block' /> 
        & prospects. Target email leads with MailMatch™.
    </p>

    <div className='px-5 py-5 mt-8 md:mt-12 border-2 w-full sm:w-[516px] border-[#D1C7BE] rounded-xl'>
        <p className='text-sm md:text-base'>
            It’s like Klaviyo for direct mail. The results are <br className='hidden sm:block' /> 
            absolutely insane.
        </p>

        <div className='flex flex-row justify-between items-center mt-4'>
            <p className='text-sm'>
                Ash Melwani, CMO
            </p>
            <img
                className='max-w-[45px] sm:max-w-[53.38px] max-h-[23.98px]'
                src="/images/profit-post-card/profit-post-card-obvi-image.png"
                alt=""
            />
        </div>
    </div>
</div>


<div className='pb-20 md:pb-32 px-4 md:px-0'>     
    <SectionTitle className='text-left'>
        <CursiveTitle>
            Powerful <br />
        </CursiveTitle>
        acquisition & <br />
        retention
    </SectionTitle>

    <p className='mt-6 md:mt-8 text-sm md:text-base'>
        Send one-off or triggered campaigns to customers <br className='hidden sm:block' /> 
        & prospects. Target email leads with MailMatch™.
    </p>

    <div className='px-5 py-5 mt-8 md:mt-12 border-2 w-full sm:w-[516px] border-[#D1C7BE] rounded-xl'>
        <p className='text-sm md:text-base'>
            It’s like Klaviyo for direct mail. The results are <br className='hidden sm:block' /> 
            absolutely insane.
        </p>

        <div className='flex flex-row justify-between items-center mt-4'>
            <p className='text-sm'>
                Ash Melwani, CMO
            </p>
            <img
                className='max-w-[45px] sm:max-w-[53.38px] max-h-[23.98px]'
                src="/images/profit-post-card/profit-post-card-obvi-image.png"
                alt=""
            />
        </div>
    </div>

    <Button text='Try it RISK-free' className='px-5 mt-8 md:mt-12 w-full sm:w-fit' />
</div>


    </div>
    

        </div>
    </Container>
    </section>
  )
}

export default ProfitPostCards