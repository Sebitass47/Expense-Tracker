import { useState } from "react";
import { useGlobalState } from '../../context/GlobalState'

function TransactionForm() {

	const { addTransaction } = useGlobalState();
	const [description, setDescription] = useState("");
	const [amount, setAmount] = useState(0);
	const [category, setCategory] = useState("Abono")

	const categories = [
		"Quincena", "Abono", "Ahorro", "Tarjeta de crédito", "Deudas", "Hogar", "Salud", "Entretenimiento", "Suscripciones", "Salidas"
	]
	categories.sort()

	const handleSelectChange = (event) => {
		setCategory(event.target.value)
	}

	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	  };
	  
	const onSubmit = (e) => {
		e.preventDefault();
		if (amount != 0 && description.trim() != "") {
			addTransaction({
				id: window.crypto.randomUUID(),
				description,
				category: category,
				date: new Date().toLocaleDateString(undefined, options),
				amount: +amount
			})
			setAmount(0)
			setDescription("")
			setCategory("Abono")
		}
	}
	
	return (
		<div>
			<form onSubmit={onSubmit}>
				<select
					value={category} onChange={handleSelectChange}
					className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
				>
					{categories.map(categorie => {
						return <option key={window.crypto.randomUUID()} value={categorie}>{categorie}</option>
					})
					}
				</select>
				<input
					type="text"
					placeholder="Enter a Description"
					onChange={(e) => setDescription(e.target.value)}
					className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
					value={description}
				/>
				<input
					className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
					type="number"
					step="0.01"
					placeholder="00.00"
					onChange={(e) => setAmount(e.target.value)}
					value={amount}

				/>

				<button
					className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full"
				>

					Add Transaction
				</button>
			</form>
		</div>
	)
}

export default TransactionForm