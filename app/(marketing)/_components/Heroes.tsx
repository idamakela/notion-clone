import Image from 'next/image'

const Heroes = () => {
  return (
    <div className='flex max-w-5xl flex-col items-center justify-center'>
      <div className='flex items-center'>
        <div className='relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]'>
          <Image
            src='/documents.png'
            fill
            className='object-contain'
            alt='Documents'
          />
        </div>
        <div className='relative h-[400px] w-[400px] hidden md:block'>
          <Image
            src='/reading.png'
            fill
            className='object-contain'
            alt='Reading'
          />
        </div>
      </div>
    </div>
  )
}

export default Heroes
