import React from "react"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { $generateHtmlFromNodes } from "@lexical/html"
import { Button } from "@chakra-ui/react"
import { Retool } from "@tryretool/custom-component-support"

type ChildProps = {
  setName: (newValue: string) => void // ✅ expects a string
}

export default function SaveHtmlPlugin({ setName }: ChildProps) {
  const [editor] = useLexicalComposerContext()

  // Retool state to hold the HTML content
  const [textHtml, setTextHtml] = Retool.useStateString({
    name: "textContent",
    initialValue: "something",
    inspector: "text",
    label: "this thing"
  })

  const saveHtml = () => {
    editor.getEditorState().read(() => {
      const htmlString = $generateHtmlFromNodes(editor)
      console.log("Editor HTML:", htmlString)
      setName(htmlString) // Set it into Retool state
    })
  }

  return (
    <>
      <Button colorScheme="blue" size="xs" onClick={saveHtml}>
        Save
      </Button>
    </>
  )
}
