import { useGlobalState } from "../context/GlobalState"

function Balance() {
    const {transactions} = useGlobalState();
    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0)
  return (
    <div className="flex justify-between items-center mb-3">
      <h3 className="text-2xl font-bold">Total</h3>
      <h1 className="text-2xl">
        ${total}
      </h1>
    </div>
  )
}

export default Balance