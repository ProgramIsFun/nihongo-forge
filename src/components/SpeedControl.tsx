import './SpeedControl.css'

interface SpeedControlProps {
  value: number
  onChange: (rate: number) => void
}

const speeds = [
  { label: '0.5x', value: 0.5 },
  { label: '0.75x', value: 0.75 },
  { label: '1x', value: 1 },
  { label: '1.25x', value: 1.25 },
]

export function SpeedControl({ value, onChange }: SpeedControlProps) {
  return (
    <div className="speed-control">
      <span className="speed-label">Speed</span>
      <div className="speed-options">
        {speeds.map((s) => (
          <button
            key={s.value}
            className={`speed-btn ${value === s.value ? 'active' : ''}`}
            onClick={() => onChange(s.value)}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  )
}
