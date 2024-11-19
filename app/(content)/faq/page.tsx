import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Return Policy for ChooseLifeandPeace Online Shop',
  description:
    'At Choose Life and Peace, we are committed to ensuring your satisfaction with every purchase.',
  // other metadata
}

const Faq = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-4 my-28">
        <div className="col-start-1 col-end-7 ... px-28">
          <h1 className="text-4xl text-center pb-10">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-lg font-bold tracking-widest leading-normal text-left">
            Welcome to the ChooseLifeandPeace FAQ page! Below are answers to
            some of the most common questions. If you can’t find what you’re
            looking for, feel free to contact us.
          </p>

          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-2 ... bg-gray-200 my-10 px-8">
              <h1 className="text-3xl text-center py-10">
                1. What payment methods do you accept?
              </h1>
              <p className="text-lg font-bold tracking-widest leading-normal text-left mb-8">
                We accept a variety of payment options, including:
              </p>
            </div>

            <div className="row-span-2 col-span-2 ... border-4  my-10 px-8">
              <div className="flex items-baseline ...">
                <div className="pt-10 pb-10 ...">
                  <ol className="list-decimal ">
                    <li>Credit/Debit Cards (Visa, MasterCard, etc.)</li>
                    <li>PayPal</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq
