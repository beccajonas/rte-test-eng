import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ChakraProvider } from "@chakra-ui/react"
import Form from "./Form"

type ChildProps = {
  setName: (newValue: string) => void // ✅ expects a string
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 0
    }
  }
})

export default function App({ setName }: ChildProps) {
  return (
    <ChakraProvider>
      <Form setName={setName} />
    </ChakraProvider>
  )
}
