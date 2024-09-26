import Image from 'next/image'
import authorImage from '@/public/images/authors/profile.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hello!</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a software engineer based in Asheville, North Carolina.
          I&#39;m passionate about bringing ideas to life and solving complex
          problems.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg'
          src={authorImage}
          alt='Christian Johnson'
          width={178}
          height={178}
          priority
        />
      </div>
    </section>
  )
}
