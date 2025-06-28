import { useState, useEffect } from "react"
import AddExpenseForm from "../add-expense-form"
import ExpenseList from "../expense-list"
const BASE_URL = import.meta.env.VITE_API_URL

interface Expense {
  _id: number
  description: string
  amount: number
  createdAt: string
}

export default function HomePage() {
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [loading, setLoading] = useState(true)

  const fetchExpenses = async () => {
  setLoading(true)
  try {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error('Failed to fetch expenses');
  const data = await response.json();
  setExpenses(data);
  console.log("Fetched expenses:", data);
  return data;
  } catch (error) {
    console.error("Error fetching expenses:", error)
  } finally {
    setLoading(false)
  }
};

  const handleAddExpense = async (description: string, amount: number) => {
    try {
      const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description, amount }),
      })

      if (response.ok) {
        await fetchExpenses() // Refresh the list
      }
    } catch (error) {
      console.error("Failed to add expense:", error)
    }
  }

  const handleDeleteExpense = async (id: number) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        await fetchExpenses() // Refresh the list
      }
    } catch (error) {
      console.error("Failed to delete expense:", error)
    }
  }

  useEffect(() => {
    fetchExpenses()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="text-gray-600">Loading expenses...</div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Expense Tracker</h1>

      <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Expense</h2>
        <AddExpenseForm onAddExpense={handleAddExpense} />
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Expenses ({expenses.length})</h2>
        <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
      </div>
    </div>
  )
}