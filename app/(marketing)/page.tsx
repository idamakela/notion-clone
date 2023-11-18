import Footer from './_components/Footer'
import Heading from './_components/Heading'
import Heroes from './_components/Heroes'

const MarketingPage = () => {
  return (
    <div className='flex min-h-full flex-col'>
      <div className='flex flex-1 flex-col items-center justify-center gap-y-8 text-center md:justify-start px-6 py-10'>
        <Heading />
        <Heroes />
      </div>
      <Footer/>
    </div>
  )
}

export default MarketingPage
