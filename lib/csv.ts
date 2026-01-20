export function generateCsv(emails: string[]): string {
  const header = "Email,Role,User type"
  const rows = emails.map(
    e => `${e},CPE Coursera Student,Professional Plus`
  )
  return [header, ...rows].join("\n")
}

export function downloadCsv(csv: string) {
  const blob = new Blob([csv], { type: "text/csv" })
  const url = URL.createObjectURL(blob)

  const a = document.createElement("a")
  a.href = url
  a.download = "arcgis_users.csv"
  a.click()

  URL.revokeObjectURL(url)
}
