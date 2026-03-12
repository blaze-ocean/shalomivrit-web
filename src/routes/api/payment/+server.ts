import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import crypto from 'crypto';

function md5(str: string): string {
  return crypto.createHash('md5').update(str).digest('hex');
}

export const GET: RequestHandler = async ({ url, platform }) => {
  const email = url.searchParams.get('Email');
  const description = url.searchParams.get('Description');
  const outSumParam = url.searchParams.get('OutSum');

  if (!email || !description || !outSumParam) {
    throw redirect(303, '/payment?error=missing_params');
  }

  // Get environment variables from platform env (Cloudflare)
  const merchantLogin = platform?.env?.ROBOKASSA_MERCHANT_LOGIN || '';
  const password1 = platform?.env?.ROBOKASSA_PASSWORD1 || '';
  const culture = 'ru';

  if (!merchantLogin || !password1) {
    console.error('Missing Robokassa credentials in environment variables');
    throw redirect(303, '/payment?error=config_error');
  }
  
  // Add 3% commission
  const outSum = (parseFloat(outSumParam) * 1.03).toFixed(2);

  // Calculate signature: MD5(MerchantLogin:OutSum::Password1)
  const signatureString = `${merchantLogin}:${outSum}::${password1}`;
  const signatureValue = md5(signatureString);

  // Debug logging
  console.log('Payment request:', {
    merchantLogin,
    outSum,
    description,
    email,
    signatureString,
    signatureValue
  });

  // Build Robokassa URL
  const robokassaParams = new URLSearchParams({
    MerchantLogin: merchantLogin,
    OutSum: outSum,
    Description: description,
    Email: email,
    Culture: culture,
    SignatureValue: signatureValue
  });

  const robokassaUrl = `https://auth.robokassa.ru/Merchant/Index.aspx?${robokassaParams.toString()}`;
  
  console.log('Redirecting to:', robokassaUrl);

  throw redirect(303, robokassaUrl);
};
