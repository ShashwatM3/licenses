"use client"

import { useState } from "react"
import PasteZone from "./PasteZone"
import DataPreviewTable from "./DataPreviewTable"
import UploadPreviewTable from "./UploadPreviewTable"
import SummaryBar from "./SummaryBar"

import { parsePastedData, RawRow } from "@/lib/parser"
import { isEligible } from "@/lib/eligibility"
import { generateCsv, downloadCsv } from "@/lib/csv"

export default function PasteWorkspace() {
  const [rows, setRows] = useState<RawRow[]>([])

  function handlePaste(text: string) {
    const parsed = parsePastedData(text)
    setRows(parsed)
  }

  const eligible = rows.filter(isEligible)

  function handleConvert() {
    const csv = generateCsv(eligible.map(r => r.email))
    downloadCsv(csv)
  }

  return (
    <div className="space-y-6">
      <PasteZone onPaste={handlePaste} />

      {rows.length > 0 && (
        <>
          <SummaryBar
            total={rows.length}
            eligible={eligible.length}
            excluded={rows.length - eligible.length}
          />

          <DataPreviewTable rows={rows} />

          <br/>
          <h1 className="text-4xl">
            READY-TO-UPLOAD DATA
          </h1>
          <UploadPreviewTable emails={eligible.map(r => r.email)} />

          <button
            onClick={handleConvert}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Convert → Download CSV
          </button>
        </>
      )}
    </div>
  )
}
