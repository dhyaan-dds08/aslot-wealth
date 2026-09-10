export const WHATSAPP_NUMBER = '919328826939';
export const PHONE_DISPLAY = '+91 93288 26939';
export const PHONE_HREF = 'tel:+919328826939';
export const EMAIL = 'info@aslotwealth.in';

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = waLink(
  'Hi, I would like to schedule a consultation with Aslot Wealth Advisor.',
);

export const NAV_LINKS = [
  { href: '/#about', label: 'About Us' },
  { href: '/#process', label: 'Process' },
  { href: '/#stories', label: 'Client Stories' },
  { href: '/#insights', label: 'Insights' },
  { href: '/#contact', label: 'Contact' },
] as const;

export const TRUST_FOOTNOTE =
  'Figures as of Sep 2026. Updated quarterly. Aggregated across distributed products.';

export const DISCLAIMER_MF =
  'Mutual fund investments are subject to market risks. Read all scheme-related documents carefully.';

export const DISCLAIMER_TESTIMONIALS =
  'Client experiences are individual and are not indicative of the results any other investor may achieve. Past performance does not guarantee future results.';

export const DISCLAIMER_MLD =
  'Market-linked debentures carry issuer credit risk. Capital protection applies only at maturity and is subject to the issuer meeting its obligations.';
