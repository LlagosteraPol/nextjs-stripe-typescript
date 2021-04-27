import type { NextApiRequest, NextApiResponse } from 'next'
/*
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27'
});
*/
import Stripe from 'stripe';
const stripe = new Stripe(

'sk_test_51IkSkJGC3BvbM9DfrNkzy3hBQSdkHrMyDL8tdjvERVuAClzSaHPUzdVjVZ5R3W8jngJaHdH1HOUY2pl3wmp3Nrej00hwznyiOk'
, {
  apiVersion: '2020-08-27'
});

export default async(req: NextApiRequest, res: NextApiResponse) => {
  const {id} = req.query;
  const session = await stripe.checkout.sessions.retrieve(id as string, {expand:['payment_intent']})
  res.status(200).json({ session })
}
