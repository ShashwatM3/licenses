import PasteWorkspace from "@/components/PasteWorkspace"

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">
        ArcGIS License CSV Converter
      </h1>
      <PasteWorkspace />
    </main>
  )
}
