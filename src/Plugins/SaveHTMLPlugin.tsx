import React from "react"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { $generateHtmlFromNodes } from "@lexical/html"
import { Button } from "@chakra-ui/react"
import { Retool } from "@tryretool/custom-component-support"

const SaveHtmlPlugin: React.FC = () => {
  const [editor] = useLexicalComposerContext()

  // Retool state to hold the HTML content
  const [textHtml, setTextHtml] = Retool.useStateString({ name: "textContent" })

  const saveHtml = () => {
    editor.getEditorState().read(() => {
      const htmlString = $generateHtmlFromNodes(editor)
      console.log("Editor HTML:", htmlString)
      setTextHtml(htmlString) // Set it into Retool state
    })
  }

  return (
    <>
      <Button colorScheme="blue" size="xs" onClick={saveHtml}>
        Save as HTML
      </Button>
    </>
  )
}
export default SaveHtmlPlugin
