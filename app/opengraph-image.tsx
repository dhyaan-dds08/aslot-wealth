import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Aslot Wealth Advisor — Personalised Investment Management';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Link preview card. WhatsApp is this firm's main channel, and a link with no
 * og:image renders as a bare text stub there — so this is generated rather
 * than left to chance.
 *
 * Deliberately no webfont fetch: pulling a font at render time is a runtime
 * dependency that fails silently and ships a broken card. Composition and
 * brand colour carry it instead.
 *
 * Consequence: the built-in font has no ₹ glyph and rendered it as tofu, so
 * this card spells the unit out. The site itself renders ₹ correctly —
 * Cormorant and Plus Jakarta Sans both cover it.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#035127',
          padding: '72px 80px',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: '#F4A608',
              fontWeight: 600,
            }}
          >
            Aslot Wealth Advisor
          </div>

          <div
            style={{
              marginTop: 34,
              fontSize: 68,
              lineHeight: 1.1,
              fontWeight: 500,
              maxWidth: 900,
            }}
          >
            Personalised, Purpose-Driven Portfolios Built for the Long Run
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: 1, background: 'rgba(255,255,255,0.25)' }} />
          <div
            style={{
              marginTop: 28,
              display: 'flex',
              gap: 56,
              fontSize: 28,
              alignItems: 'baseline',
            }}
          >
            <span>INR 75 crore+ AUM</span>
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>250+ clients</span>
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>99% retention</span>
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>Since 1989</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
