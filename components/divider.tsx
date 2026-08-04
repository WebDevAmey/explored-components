const dots = [
  { color: "#E9573F", label: "Red" },
  { color: "#F0BF2E", label: "Yellow" },
  { color: "#4E964E", label: "Green" },
];

export default function Divider() {
  return (
    <div
      className="flex gap-2 items-center justify-center py-4 w-full"
      aria-hidden="true"
    >
      {dots.map((dot) => (
        <span
          key={dot.label}
          className="relative shrink-0 size-2 rounded-full"
          style={{ backgroundColor: dot.color }}
        />
      ))}
    </div>
  );
}
