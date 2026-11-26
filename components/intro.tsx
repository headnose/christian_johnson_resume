import Image from 'next/image'
import authorImage from '@/public/images/authors/profile.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hi, I&#39;m Christian.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a Java full-stack developer near Asheville, North Carolina,
          working with Spring Boot, microservices, and SQL. Right now I&#39;m
          building a loan settlement platform: four Spring Boot microservices
          with Kafka, Redis, MongoDB, MySQL, and Docker, load-tested with k6
          and monitored with Prometheus, Grafana, and ELK. Before that, I
          built two microservice apps in Beaconfire&#39;s training program and
          shipped two iOS apps to the App Store.
          Earlier, I spent six years in production labs (kombucha
          quality testing and mycology), which is where I learned to care
          about testing, documentation, and getting the details right.
        </p>
        <p className='mt-3 font-light text-muted-foreground'>
          Open to backend and full-stack roles, remote or on-site.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg'
          src={authorImage}
          alt='Christian Johnson'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
