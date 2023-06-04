import {VictoryPie, VictoryLabel} from 'victory'
import { useGlobalState } from '../context/GlobalState'

function ExpenseChart() {

    const {transactions} = useGlobalState()

    let totalIncome = transactions.filter((transaction) => transaction.amount > 0).reduce((acc, transaction) => (acc += transaction.amount), 0)

    let totalExpense = transactions.filter((transaction) => transaction.amount < 0).reduce((acc, transaction) => (acc += transaction.amount), 0) * -1

    const totalExpensePercentage = Math.round((totalExpense / totalIncome) *100)
    
    const totalIncomePercentage = 100 - totalExpensePercentage
  return ( 
    totalIncome != 0 ? (
        <VictoryPie
            colorScale={["#e74c3c", "#2ecc71"]}
            data={[
                {x: "Expenses", y: totalExpensePercentage, label: "Expenses: " + totalExpensePercentage + "%"},
                {x: "Incomes", y: totalIncomePercentage, label: "Incomes: " + totalIncomePercentage + "%"}
            ]}
            labelRadius={({ innerRadius }) => innerRadius + 50 }
            style={{ labels: { fill: "white", fontSize: 20, fontWeight: "bold" } }}
        />)
    : 
    (
    <div className='flex justify-center items-center w-full h-full pr-2' >
        <h1 className='text-center text-xl font-bold text-gray-500'>No information to generate the chart.</h1>
    </div>
    )
  )
}

export default ExpenseChart