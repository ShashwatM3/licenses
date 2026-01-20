import { RawRow } from "./parser"

export function isEligible(row: RawRow): boolean {
  if (!row.email) return false
  if (!row.status) return true

  const s = row.status.toLowerCase()
  if (s.includes("already")) return false
  if (s.includes("resent")) return false

  return true
}
