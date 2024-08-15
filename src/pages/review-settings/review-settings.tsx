import { DashBoardHeader } from "@/components/dashboard-header/dashboard-header"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/check-box"
import { ColorPicker } from "@/components/ui/color-picker"
import { Select } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

export function ReviewSettings() {
  const [brushSize, setBrushSize] = useState<[number]>([3])
  const [color1, setColor1] = useState("#ff0000")
  const [color2, setColor2] = useState("#00ff00")
  const [color3, setColor3] = useState("#ffffff")
  const [color4, setColor4] = useState("#000000")

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2">
      <DashBoardHeader title="Review settings">
        <div className="flex justify-center gap-3 sm:mx-8 sm:justify-end">
          <Button variant="muted">reset changes</Button>
          <Button disabled>save changes</Button>
        </div>
      </DashBoardHeader>

      <form className="col-span-2 m-4 sm:mx-8">
        <fieldset>
          <Checkbox label="Show logo" />
          <Checkbox label="Start with microphone enabled" />
          <Checkbox label="Start with camera enabled" />
          <Checkbox label="Videos loaded start muted" />
          <Checkbox label="Notes disappear after 1 second" />
          <Checkbox label="Trackpad: pinch to zoom" />
          <Checkbox label="Trackpad: reposition with 2-finger swipe" />
        </fieldset>

        <fieldset className="mt-8 flex flex-col">
          <div className="flex items-center gap-6">
            <span>Brush size for tools</span>
            <Slider
              label="Brush size for tools"
              max={7}
              min={1}
              range={brushSize}
              setRange={setBrushSize}
            />
          </div>

          <span className="mb-3 mt-12">Note color options</span>
          <div className="flex flex-wrap gap-3">
            <ColorPicker label="Color 1" color={color1} setColor={setColor1} />
            <ColorPicker label="Color 2" color={color2} setColor={setColor2} />
            <ColorPicker label="Color 3" color={color3} setColor={setColor3} />
            <ColorPicker label="Color 4" color={color4} setColor={setColor4} />
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            <label className="flex flex-col gap-2" htmlFor="Camera">
              Camera
              <Select list={[" "]} />
            </label>
            <label className="flex flex-col gap-2" htmlFor="Microphone">
              Microphone
              <Select id="Microphone" list={[" "]} flex1 />
            </label>
            <label className="flex flex-col gap-2" htmlFor="Microphone">
              Speakers
              <Select id="Microphone" list={[" "]} flex1 />
            </label>
          </div>
        </fieldset>
      </form>
    </section>
  )
}
