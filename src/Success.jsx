import { QrCode } from "@chakra-ui/react"

export default function Success(id){
  return (
    <QrCode.Root value="Hello World">
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
    </QrCode.Root>
  )
}
