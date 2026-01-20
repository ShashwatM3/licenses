type Props = {
  onPaste: (text: string) => void
}

export default function PasteZone({ onPaste }: Props) {
  function handlePaste(e: React.ClipboardEvent<HTMLTextAreaElement>) {
    e.preventDefault()
    onPaste(e.clipboardData.getData("text"))
  }

  return (
    <textarea
      onPaste={handlePaste}
      placeholder="Paste rows from Google Sheets here"
      className="w-full h-36 p-3 border rounded"
    />
  )
}
