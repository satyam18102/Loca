import { Heading, Spinner, VStack } from "@chakra-ui/react"
import './Loader.css'

export default function Loader() {
  return (
    <VStack colorPalette="teal" className="center">
      <Spinner color="colorPalette.600" className="loader" />
      <Heading color="colorPalette.600" size='3xl'>Loading...</Heading>
    </VStack>
  )
}
