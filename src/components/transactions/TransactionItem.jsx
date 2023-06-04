import { useGlobalState } from "../../context/GlobalState"


function TransactionItem({transaction}) {
   
    let colorTransaction = transaction.amount > 0 ? 'text-green-500': "text-white"
  return (
    <tr
        className={`bg-zinc-600 ${colorTransaction} px-3 py-1 rounded-lg mb-2 w-full`}
        key={transaction.id}
    >
        <th className="text-sm basis-1/3">{transaction.description}</th>
        <th className="basis-1/3">{transaction.amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })}
        </th>
        <th>{transaction.category}</th>
        <th>
            <button
                onClick={() =>{
                    deleteTransaction(transaction.id)
                }}
                >  
                <span className="basis-1/3">
                    <i className="bi bi-trash3-fill text-red-400"></i>
                </span>
            </button>
        </th>
    </tr>
  )
}

export default TransactionItem