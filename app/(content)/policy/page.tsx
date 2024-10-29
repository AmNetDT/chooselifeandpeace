import Breadcrumb from '@/components/Common/Breadcrumb'
import Hero from '@/components/Hero/page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'ChooseLifeandPeace.com: A Divine Calling to Inspire, Uplift, and Transform Lives',
  description: 'This is About Page for Startup Nextjs Template',
  // other metadata
}

const Policy = () => {
  return (
    <>
      <Hero />
      <Breadcrumb pageName="Policy Page" description="Coming soon" />
    </>
  )
}

export default Policy
