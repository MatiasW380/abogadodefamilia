// Emblema: balanza con flecha central rodeada de laureles (en línea con el logo del estudio).
const CX = 50;
const CY = 52;
const R = 39;

function punto(grados, r = R) {
  const t = (grados * Math.PI) / 180;
  return [CX + r * Math.cos(t), CY + r * Math.sin(t)];
}

// Hojas sobre el lado izquierdo (de abajo hacia arriba); el derecho es un espejo.
const HOJAS = Array.from({ length: 8 }, (_, i) => {
  const ang = 122 + i * 16;
  const [xo, yo] = punto(ang, R + 4);
  const [xi, yi] = punto(ang + 6, R - 4);
  return [
    { x: xo, y: yo, rot: ang + 90 - 28 },
    { x: xi, y: yi, rot: ang + 90 + 28 },
  ];
}).flat();

const [x0, y0] = punto(118);
const [x1, y1] = punto(250);

export default function Emblema({ size = 48, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      {[false, true].map((espejo) => (
        <g key={String(espejo)} transform={espejo ? 'translate(100 0) scale(-1 1)' : undefined}>
          <path d={`M${x0} ${y0} A ${R} ${R} 0 0 1 ${x1} ${y1}`} strokeWidth="1.4" />
          {HOJAS.map((h, i) => (
            <ellipse
              key={i}
              cx={h.x}
              cy={h.y}
              rx="2.4"
              ry="5.6"
              transform={`rotate(${h.rot} ${h.x} ${h.y})`}
              fill="currentColor"
              stroke="none"
            />
          ))}
        </g>
      ))}
      <g strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 24 V76" />
        <path d="M45.5 30 L50 24 L54.5 30" />
        <path d="M33 38 H67" />
        <path d="M43 76 H57" />
        <path d="M33 38 L26.5 54 M33 38 L39.5 54" strokeWidth="1.4" />
        <path d="M67 38 L60.5 54 M67 38 L73.5 54" strokeWidth="1.4" />
        <path d="M25 54 Q33 62 41 54 Z" fill="currentColor" />
        <path d="M59 54 Q67 62 75 54 Z" fill="currentColor" />
      </g>
    </svg>
  );
}
