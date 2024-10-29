import Breadcrumb from '@/components/Common/Breadcrumb'
import Hero from '@/components/Hero/page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'ChooseLifeandPeace.com: A Divine Calling to Inspire, Uplift, and Transform Lives',
  description: 'This is About Page for Startup Nextjs Template',
  // other metadata
}

const AboutPage = () => {
  return (
    <>
      <Hero />
      <Breadcrumb
        pageName="About ChooseLifeandPeace.com"
        description="A Divine Calling to Inspire, Uplift, and Transform Lives
Founded by Sophia E. Aigbodion, ChooseLifeandPeace.com is not just a brand, but the embodiment of a divine calling that began in 2023. Born from a deep spiritual awakening, the mission of ChooseLifeandPeace is to create more than just Christian apparel; it is to build a movement that reaches deep into the hearts and souls of people, offering them hope, comfort, and salvation through the message of Christ. We believe that clothing can be a powerful medium, and every piece we design is crafted with purpose—to inspire, uplift, and guide individuals toward the eternal truth found in Jesus Christ."
      />
      <Breadcrumb
        pageName="Our Mission"
        description="Our mission is rooted in the belief that God's unconditional love has the power to transform lives. In a world often filled with despair, uncertainty, and darkness, ChooseLifeandPeace seeks to be a shining beacon of hope, helping individuals draw nearer to God and discover the joy, peace, and life that is promised in His Word. Our apparel serves as a daily reminder to wear your faith boldly, to carry the light of Christ wherever you go, and to share His message of salvation with those who need it most.
        At the heart of our brand is the conviction that Jesus came so we may have life, and have it more abundantly. We believe that life in Christ is filled with hope, joy, and peace, and we are committed to spreading this message to as many people as possible. Each item in our collection is more than just clothing—it is a reflection of our faith, our purpose, and our dedication to bringing others closer to God. Whether it’s a T-shirt with a powerful scripture, a hoodie with an inspiring message, or an accessory that symbolizes hope, we aim to create products that remind our customers of God’s unwavering love.
        In a world where many are struggling with feelings of hopelessness and despair, ChooseLifeandPeace stands firm in the belief that God is nearer than we often realize, and that He is the source of all healing and restoration. We reject the lie that self-hatred and despair come from God, and we remind our community that each of us is a unique reflection of His glory. Through our faith in Jesus, we find the strength to overcome darkness, and through His love, we discover the true meaning of life."
      />

      <Breadcrumb
        pageName="Our Vision for the Future"
        description="As we continue to grow, our vision for ChooseLifeandPeace remains steadfast: to be a source of hope and inspiration for people of all walks of life. We are passionate about spreading the message of Christ through every avenue we can, using our apparel as a platform to start conversations about faith, hope, and the love of God. Our ultimate goal is to save souls—to guide people toward a relationship with Jesus and to remind them that in Him, they can find the answers to life’s most difficult questions.
We envision a world where our clothing serves as a testament to God’s love and a reminder that no matter how far someone may feel from God, He is always reaching out to them. We want our customers to feel a sense of purpose when they wear our designs—to know that they are part of a larger mission to spread the gospel and to reflect the love of Christ in everything they do."
      />
    </>
  )
}

export default AboutPage
