type Props = {
  total: number
  eligible: number
  excluded: number
}

export default function SummaryBar({ total, eligible, excluded }: Props) {
  return (
    <div className="flex gap-6 text-sm">
      <span>Total pasted: {total}</span>
      <span className="text-green-700">Will upload: {eligible}</span>
      <span className="text-red-700">Excluded: {excluded}</span>
    </div>
  )
}
