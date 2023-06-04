import { useGlobalState } from "../context/GlobalState"

function IncomeExpenses() {

    const { transactions, restart } = useGlobalState()
    const amounts = transactions.map(transaction => transaction.amount)
    const income = amounts.filter(amount => amount > 0).reduce((acc, item) => (acc += item), 0)
    const expense = amounts.filter(amount => amount < 0).reduce((acc, item) => (acc += item), 0) * -1


	const onClick = () => {
		restart();
	}


    return (
        <>
            <h1 className='text-4xl font-bold mb-3 text-center'>Expense Tracker</h1>
            <button 
                className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full" 
                onClick={onClick}
            >
                New Month
            </button>
            <div className="flex justify-between my-2">
                <h4 className="text-lg font-bold">Income</h4>
                <h4 className="text-lg">{income.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                })}
                </h4>
            </div>
            <div className="flex justify-between my-2">
                <h4 className="text-lg font-bold">Expense</h4>
                <h4 className="text-lg">{expense.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                })}</h4>
            </div>
        </>
    )
}

export default IncomeExpenses