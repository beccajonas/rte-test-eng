import React, { StrictMode } from "react"
import { Retool } from "@tryretool/custom-component-support"
import App from "./App"

export function richTextEditorV2() {
  const [name, _setName] = Retool.useStateString({
    name: "name",
    label: "other",
    inspector: "text",
    initialValue: "banana"
  })
  return (
    <StrictMode>
      <App setName={_setName} />
    </StrictMode>
  )
}
