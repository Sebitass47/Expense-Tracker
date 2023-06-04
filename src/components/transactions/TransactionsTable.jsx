import { useGlobalState } from "../../context/GlobalState"
import TransactionItem from "./TransactionItem"
import DataTable, { createTheme } from 'react-data-table-component';


function TransactionList() {
	const { transactions, deleteTransaction } = useGlobalState()
	// createTheme creates a new theme named solarized that overrides the build in dark theme
	createTheme('Expense Tracker', {
		text: {
			primary: '#FFFFFF',
			secondary: '#7d9191',
		},
		background: {
			default: '#27272a',
		},
		context: {
			background: '#7d9191',
			text: '#FFFFFF',
		},
		divider: {
			default: '#7d9191',
		},
		action: {
			button: 'rgba(0,0,0,.54)',
			hover: 'rgba(0,0,0,.08)',
			disabled: 'rgba(0,0,0,.12)',
		},
		cells: {
			style: {
			  textAlign: 'center', // Centrar el contenido de las celdas
			},
		  }
	}, 'dark');

  
	const columns = [
		{
			name: 'Transaction',
			selector: row => row.description,
		},
		{
			name: 'Amount',
			selector: row => row.amount.toLocaleString('en-US', {
				style: 'currency',
				currency: 'USD'
			}),
			sortable: true
		},
		{
			name: 'Category',
			selector: row => row.category,
			sortable: true
		},
		{
			name: 'Date',
			selector: row => row.date,
			sortable: true
		},
		{
			name: 'Delete',
			cell: row => (
				<button
					onClick={() =>{
						deleteTransaction(row.id)
					}}
					>  
					<span className="basis-1/3">
						<i className="bi bi-trash3-fill text-red-400"></i>
					</span>
				</button>
			)
		}
	]


	return (
		<div>
			<h3
				className="text-slate-300 text-2xl font-bold block mb-3"
			>
				History
			</h3>
			<DataTable
				theme="Expense Tracker"
				columns={columns}
				data={transactions}
				pagination
			/>
		</div>
	)
}

export default TransactionList