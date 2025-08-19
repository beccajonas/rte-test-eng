import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { RichTextEditor } from './RichTextEditor'

export default function Form() {
  const [value, setValue] = useState('')

  return (
    <Box p={2}>
      <RichTextEditor
        placeholder="Type here"
        name="text"
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </Box>
  )
}
