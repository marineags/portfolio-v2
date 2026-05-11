type ScribbleProps = {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  rotation?: number;
};

function Scribble({
  width = 120,
  height = 70,
  color = "#ff5a00",
  strokeWidth = 4,
  rotation = -8,
}: ScribbleProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 70"
      style={{ transform: `rotate(${rotation}deg)` }}
      fill="none"
    >
      <path
        d="M20 35C22 10 75 5 100 28C125 55 62 75 25 52C-5 34 45 12 92 20C130 27 99 63 48 60"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Scribble;