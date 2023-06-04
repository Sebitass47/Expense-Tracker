import React from 'react'
import { GlobalProvider } from './context/GlobalState'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionsTable'
import ExpenseChart from './components/ExpenseChart'


function App() {
	return (
		<GlobalProvider>
			<div className='bg-zinc-900 text-white min-h-screen flex justify-center items-center'>
				<div className='container mx-auto  2xl:w-3/6 md:w-4/6 sm:w-full'>
					<div className='bg-zinc-800 p-10 rounded-lg'>
						<div className='flex gap-x-2 min-[300px]:flex-col sm:flex-row md:flex-row lg:flex-row'>
							<div className='flex-1'>
								<IncomeExpenses />
								<Balance />
								<TransactionForm />
							</div>
							<div className='flex-1'>
								<ExpenseChart/>
							</div>
						</div>
						<TransactionList/>
					</div>
				</div>
			</div>
		</GlobalProvider>
	)
}

export default App