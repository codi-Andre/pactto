interface ColorPickerProps {
  label: string
  color: string
  setColor: (color: string) => void
}

export function ColorPicker({ color, label, setColor }: ColorPickerProps) {
  return (
    <label className="relative bg-secondary-800 text-white">
      <input
        className="peer w-32 min-w-0 rounded-md border border-white/50 bg-transparent
         px-3 py-4 caret-accent-blue outline-none ring-accent-blue
          invalid:border-accent-red hover:border-white focus:border-accent-blue focus:outline-none focus:ring-1
           focus:ring-inset active:border-accent-blue"
        type="text"
        pattern="#([A-Fa-f0-9]{6})"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <span className="absolute bottom-12 left-2 bg-secondary-800 px-2 text-xs peer-invalid:text-accent-red">
        {label}
      </span>
      <input
        className="absolute right-2 top-5 h-5 w-5 rounded-full border-none outline-none hover:cursor-pointer focus:outline-none"
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </label>
  )
}
