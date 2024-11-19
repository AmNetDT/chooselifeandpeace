import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Personal Journey of Faith',
  description:
    'For Sophia, the founder of ChooseLifeandPeace, this brand is deeply personal.',
  // other metadata
}

const CustomerSupport = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-4 my-28">
        <div className="col-start-1 col-end-7 ... px-28">
          <h1 className="text-4xl text-center pb-10">Customer Support</h1>
          <p className="text-lg font-bold tracking-widest leading-normal text-center">
            At ChooseLifeandPeace, we prioritize providing exceptional customer
            service. If you have any questions, concerns, or need assistance
            with your order, our support team is here to help.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 py-24">
        <div className="col-span-2 ... mr-8 p-8 border-l-zinc-700 border-y-4">
          <h1 className="text-4xl text-left pb-10">How to Contact Us</h1>

          <ul className="list-decimal">
            <li>Email: support@chooselifeandpeace.com</li>
            <li>
              Phone: Insert Phone Number (Available: [e.g., Monday to Friday, 9
              AM – 5 PM EST])
            </li>
            <li>
              Live Chat: Visit our website and click on the Chat with Us button
              for real-time assistance.
            </li>
            <li>
              Contact Form: Fill out the form on our Contact Us page, and we’ll
              get back to you within 24-48 hours.
            </li>
          </ul>
          <p className="text-lg mt-16 font-bold tracking-widest leading-normal text-center">
            We’re committed to ensuring a smooth and enjoyable shopping
            experience. Don’t hesitate to reach out!
          </p>
        </div>
        <div className="... p-8 border-l-zinc-700 border-x-4">
          <h1 className="text-4xl text-left pb-10">
            Common Customer Support Topics
          </h1>

          <ul className="list-decimal">
            <li>
              Returns & Refunds: For help with returns, exchanges, or refund
              requests, refer to our Return Policy or contact our support team.
            </li>
            <li>
              Product Information: Have questions about a specific product? Let
              us know, and we’ll provide detailed information.
            </li>
            <li>
              Account Assistance: Need help with logging in, updating your
              account information, or resetting your password? We’re here to
              assist.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default CustomerSupport
