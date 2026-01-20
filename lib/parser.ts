export type RawRow = {
  name: string
  email: string
  status: string | null
}

export function parsePastedData(raw: string): RawRow[] {
  return raw
    .split("\n")
    .map(l => l.trim())
    .filter(Boolean)
    .map(line => {
      const cells = line.split("\t").map(c => c.trim())
      return {
        name: cells[0] ?? "",
        email: cells[1] ?? "",
        status: cells[2] ?? null,
      }
    })
}
