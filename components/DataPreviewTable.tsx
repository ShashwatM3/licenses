import { RawRow } from "@/lib/parser"
import { isEligible } from "@/lib/eligibility"

export default function DataPreviewTable({ rows }: { rows: RawRow[] }) {
  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Eligible</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => {
          const ok = isEligible(r)
          return (
            <tr key={i} className={ok ? "bg-green-50" : "bg-red-50"}>
              <td className="border p-2">{r.name}</td>
              <td className="border p-2">{r.email}</td>
              <td className="border p-2">{r.status ?? ""}</td>
              <td className="border p-2">{ok ? "✅" : "❌"}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
