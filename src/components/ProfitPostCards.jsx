import React from 'react'
import Container from './common/Container'
import SectionTitle, { CursiveTitle } from './ui/SectionTitle'
import Button from './ui/Button'

const ProfitPostCards = () => {
    const profitCards = [
        {id: "1", title: "acquisition & retention", cursiveTitle: "Powerful", paragraph: "Send one-off or triggered campaigns to customers & prospects. Target email leads with MailMatch™.", quoteCard:{cardTitle: "It’s like Klaviyo for direct mail. The results are absolutely insane.", cardParagraph: "Ash Melwani, CMO", cardImage: ""}},
        {id: "2", title: "against iOS updates, jacked-up CPCs & spam folders", cursiveTitle: "Fight back", paragraph: "Deliver your message to all of your customers — for less than the cost of a click.", quoteCard:{cardTitle: "PostPilot is our new weapon against sinking email engagement and rising PPC costs. The results and ROI have been outstanding. It’s now one of our core marketing channels to increase acquisition & LTV.", cardParagraph: "Leah Keith, GM", cardImage: ""}},
        {id: "3", title: "Done for", cursiveTitle: "you", paragraph: "From design & strategy to stamp-licking, our ecom experts help you every step of the way.", quoteCard:{cardTitle: "The team is so knowledgeable and beyond helpful. I’m blown away by their communication, detail, and attentiveness and always feel like they have our best interest in mind. Definitely worth a try.", cardParagraph: "Holly Davies, Marketing Director", cardImage: ""}},
    ]
  return (
    <section className='bg-[#FDF3EA]'>
    <Container>
        <div >
<SectionTitle className='mb-52 pt-[86px]'>
    PostPilot makes it a <CursiveTitle>cinch</CursiveTitle> to <br />
    send personalized, profit- <br />
    generating postcards.
</SectionTitle>

    <div className='flex flex-col'>

            <div className='pb-32'>     
                <SectionTitle className='text-left'>
                    <CursiveTitle>
                        Powerful <br />
                    </CursiveTitle>
                    acquisition & <br />
                    retention
                </SectionTitle>
                <p className='mt-8'>
                    Send one-off or triggered campaigns to customers <br /> 
                    & prospects. Target email leads with MailMatch™.
                </p>
                <div className='px-5 py-5 mt-12 border-2 w-[516px] border-[#D1C7BE] rounded-xl'>
                    <p>
                        It’s like Klaviyo for direct mail. The results are <br /> 
                        absolutely insane.
                    </p>
                    <div className='flex flex-row justify-between mt-4'>
                        <p>
                            Ash Melwani, CMO
                        </p>
                        <img className='max-w-[53.38px] max-h-[23.98px]' src="/images/profit-post-card/profit-post-card-obvi-image.png" alt="" />
                    </div>
                </div>
            </div>


            <div className='pb-32 self-end w-fit '>     
                <SectionTitle className='text-left'>
                    <CursiveTitle>
                        Powerful <br />
                    </CursiveTitle>
                    acquisition & <br />
                    retention
                </SectionTitle>
                <p className='mt-8'>
                    Send one-off or triggered campaigns to customers <br /> 
                    & prospects. Target email leads with MailMatch™.
                </p>
                <div className='px-5 py-5 mt-12 border-2 w-[516px] border-[#D1C7BE] rounded-xl'>
                    <p>
                        It’s like Klaviyo for direct mail. The results are <br /> 
                        absolutely insane.
                    </p>
                    <div className='flex flex-row justify-between mt-4'>
                        <p>
                            Ash Melwani, CMO
                        </p>
                        <img className='max-w-[53.38px] max-h-[23.98px]' src="/images/profit-post-card/profit-post-card-obvi-image.png" alt="" />
                    </div>
                </div>
            </div>

                       
            <div className='pb-32'>     
                <SectionTitle className='text-left'>
                    <CursiveTitle>
                        Powerful <br />
                    </CursiveTitle>
                    acquisition & <br />
                    retention
                </SectionTitle>
                <p className='mt-8'>
                    Send one-off or triggered campaigns to customers <br /> 
                    & prospects. Target email leads with MailMatch™.
                </p>
                <div className='px-5 py-5 mt-12 border-2 w-[516px] border-[#D1C7BE] rounded-xl'>
                    <p>
                        It’s like Klaviyo for direct mail. The results are <br /> 
                        absolutely insane.
                    </p>
                    <div className='flex flex-row justify-between mt-4'>
                        <p>
                            Ash Melwani, CMO
                        </p>
                        <img className='max-w-[53.38px] max-h-[23.98px]' src="/images/profit-post-card/profit-post-card-obvi-image.png" alt="" />
                    </div>
                </div>
        <Button text='Try it RISK-free' className='mt-12'></Button>

            </div>

    </div>
    

        </div>
    </Container>
    </section>
  )
}

export default ProfitPostCards