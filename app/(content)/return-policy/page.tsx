import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Return Policy for ChooseLifeandPeace Online Shop',
  description:
    'At Choose Life and Peace, we are committed to ensuring your satisfaction with every purchase.',
  // other metadata
}

const ReturnPolicy = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-4 my-28">
        <div className="col-start-1 col-end-7 ... px-28">
          <h1 className="text-4xl text-center pb-10">
            Return Policy for ChooseLifeandPeace Online Shop
          </h1>
          <p className="text-lg font-bold tracking-widest leading-normal text-left">
            At Choose Life and Peace, we are committed to ensuring your
            satisfaction with every purchase. If you are not completely
            satisfied with your order, we gladly accept returns under the
            following conditions
          </p>
          <ol className="list-decimal p-20">
            <li>
              Eligibility: You may return your item within 7 days of receiving
              your order for a full refund or exchange.
            </li>
            <li>
              Return Condition: Items must be returned in their original
              condition—unused, unwashed, and with all original packaging and
              tags intact.
            </li>
            <li>
              Process: To initiate a return, please contact our customer service
              team at `(`contact email/phone number`)`. They will provide you
              with detailed instructions on how to proceed.
            </li>
            <li>
              Refunds: Once your return is received and inspected, we will
              process your refund within 5-7 business days. Refunds will be
              applied to your original payment method.
            </li>
            <li>
              Exchanges: If you wish to exchange an item, please specify the
              item and size/color you prefer, and we will arrange the exchange
              based on availability.
            </li>
            <li>
              Shipping Fees: Return shipping costs are the responsibility of the
              customer unless the return is due to an error on our part or a
              defective item.
            </li>
            <li>
              Non-Returnable Items: Certain items, such as final sale items,
              gift cards, and personalized products, may not be eligible for
              return or exchange. Please review our full policy on
              non-returnable items for details.
            </li>
          </ol>
          <p className="text-base leading-normal">
            If you have any questions about our return policy or need further
            assistance, our team at ChooseLifeandPeace is here to help!.
            support@chooselifeandpeace.com
          </p>
        </div>
      </div>
    </>
  )
}

export default ReturnPolicy
