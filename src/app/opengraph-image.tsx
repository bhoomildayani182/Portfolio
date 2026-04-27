import { ImageResponse } from 'next/og';

export const alt = 'Bhoomil Dayani - Cloud DevOps Engineer Portfolio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#f6f8fb',
          backgroundImage:
            'linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(128deg, rgba(37,99,235,0.16), transparent 42%), linear-gradient(304deg, rgba(15,118,110,0.13), transparent 48%)',
          backgroundSize: '72px 72px, 72px 72px, auto, auto',
          color: '#111827',
          padding: 70,
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 72,
              height: 72,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(37,99,235,0.32)',
              borderRadius: 12,
              background: '#2563eb',
              color: '#ffffff',
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            BD
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: '#1d4ed8', fontSize: 24, fontWeight: 800, letterSpacing: 4 }}>
              CLOUD DEVOPS ENGINEER
            </div>
            <div style={{ color: '#5f6b7a', fontSize: 24, marginTop: 8 }}>
              AWS | Kubernetes | CI/CD | DevSecOps
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 82, lineHeight: 0.96, fontWeight: 900, letterSpacing: -1 }}>
            Bhoomil Dayani
          </div>
          <div style={{ marginTop: 24, maxWidth: 920, color: '#243244', fontSize: 34, lineHeight: 1.25 }}>
            Building secure, scalable cloud infrastructure and production delivery systems.
          </div>
        </div>

        <div style={{ display: 'flex', gap: 14, color: '#ffffff' }}>
          {['Terraform', 'GitHub Actions', 'Docker', 'Ansible', 'Prometheus'].map((item, index) => (
            <div
              key={item}
              style={{
                padding: '12px 18px',
                borderRadius: 10,
                background: index % 2 === 0 ? '#2563eb' : '#0f766e',
                fontSize: 22,
                fontWeight: 800,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
