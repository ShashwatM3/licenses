export default function UploadPreviewTable({
  emails,
}: {
  emails: string[]
}) {
  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th className="border p-2">Email</th>
          <th className="border p-2">Role</th>
          <th className="border p-2">User type</th>
        </tr>
      </thead>
      <tbody>
        {emails.map((email, i) => (
          <tr key={i}>
            <td className="border p-2">{email}</td>
            <td className="border p-2">CPE Coursera Student</td>
            <td className="border p-2">Professional Plus</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
