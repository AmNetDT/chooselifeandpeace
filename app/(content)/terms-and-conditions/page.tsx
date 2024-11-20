import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Return Policy for ChooseLifeandPeace Online Shop',
  description:
    'At Choose Life and Peace, we are committed to ensuring your satisfaction with every purchase.',
}

const TermsConditions = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 my-16 md:my-28 px-4 md:px-28">
        <div className="col-span-6">
          <h1 className="text-2xl md:text-4xl text-center pb-6 md:pb-10">
            Terms and Conditions
          </h1>
          <p className="text-base md:text-lg font-bold tracking-widest leading-normal text-left">
            Welcome to ChooseLifeandPeace. By accessing or using our website,
            you agree to comply with and be bound by the following terms and
            conditions. Please read them carefully before making any purchase.
          </p>
          <p className="text-base md:text-lg font-bold tracking-widest leading-normal text-left py-2">
            1. General Information
            <br />
            1.1. These Terms and Conditions govern your use of our website and
            the purchase of products through our online store.
            <br />
            1.2. By using our website, you agree to these terms, as well as our
            Privacy Policy and Return Policy.
          </p>
          <p className="text-base md:text-lg font-bold tracking-widest leading-normal text-left py-2">
            2. Eligibility
            <br />
            2.1. You must be at least 18 years old or have parental/guardian
            consent to use our site and make purchases. 3. Orders and Payments
          </p>
          <p className="text-base md:text-lg font-bold tracking-widest leading-normal text-left py-2">
            3. Orders and Payments
            <br />
            3.1. All orders are subject to product availability and acceptance
            by ChooseLifeandPeace.
            <br />
            3.2. We reserve the right to refuse or cancel any order at our
            discretion.
            <br />
            3.3. Prices listed on our website are in [currency] and are subject
            to change without notice.
            <br />
            3.4. Payment must be made at the time of purchase. We accept list
            payment methods, e.g., credit cards, PayPal, etc..
          </p>
          <p className="text-base md:text-lg font-bold tracking-widest leading-normal text-left py-2">
            4. Shipping and Delivery
            <br />
            4.1. We offer shipping to [list regions/countries]. Shipping fees
            and estimated delivery times are provided at checkout.
            <br />
            4.2. Delivery times are estimates and may vary due to unforeseen
            circumstances.
          </p>
          <p className="text-base md:text-lg font-bold tracking-widest leading-normal text-left py-2">
            5. Returns and Refunds
            <br />
            5.1. Please refer to our Return Policy for details on returning
            items for refunds or exchanges.
          </p>
          <p className="text-base md:text-lg font-bold tracking-widest leading-normal text-left py-2">
            6. Use of Website 6.1. You agree not to misuse our website or engage
            in any fraudulent or illegal activities. 6.2. We reserve the right
            to suspend or terminate access to our website for violations of
            these terms.
          </p>
          <p className="text-base md:text-lg font-bold tracking-widest leading-normal text-left py-2">
            7. Intellectual Property
            <br />
            7.1. All content on this site, including text, images, and logos, is
            the property of ChooseLifeandPeace and is protected by intellectual
            property laws.
            <br />
            7.2. You may not use, reproduce, or distribute our content without
            written permission.
          </p>
          <p className="text-base md:text-lg font-bold tracking-widest leading-normal text-left py-2">
            8. Limitation of Liability
            <br />
            8.1. ChooseLifeandPeace is not responsible for any indirect,
            incidental, or consequential damages arising from your use of our
            website or products.{' '}
          </p>
          <p className="text-base md:text-lg font-bold tracking-widest leading-normal text-left py-2">
            9. Privacy
            <br />
            9.1. Your personal information is collected and processed in
            accordance with our Privacy Policy.{' '}
          </p>
          <p className="text-base md:text-lg font-bold tracking-widest leading-normal text-left py-2">
            10. Changes to Terms and Conditions
            <br />
            10.1. We reserve the right to update or modify these Terms and
            Conditions at any time. Changes will be effective immediately upon
            posting on our website.{' '}
          </p>

          <p className="text-base md:text-lg font-bold tracking-widest leading-normal text-left py-2">
            11. Governing Law
            <br />
            11.1. These Terms and Conditions are governed by the laws ofUnited
            State of America, and any disputes will be resolved in Rhode Island.
          </p>
        </div>
      </div>
    </>
  )
}

export default TermsConditions
