import { Trash2 } from "lucide-react"

interface Expense {
  _id: number
  description: string
  amount: number
  createdAt: string
}

interface ExpenseListProps {
  expenses: Expense[]
  onDelete: (_id: number) => Promise<void>
}

export default function ExpenseList({ expenses, onDelete }: ExpenseListProps) {
  if (expenses.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No expenses yet. Add your first expense above!</p>
      </div>
    )
  }

  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <span className="text-sm text-gray-600">Total Expenses</span>
        <span className="text-lg font-semibold text-gray-900">${totalAmount.toFixed(2)}</span>
      </div>

      <div className="space-y-2">
        {expenses.map((expense) => (
          <div
            key={expense._id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex-1">
              <span className="text-gray-900 font-medium">{expense.description}</span>
              <span className="text-gray-600 ml-2">- ${expense.amount.toFixed(2)}</span>
            </div>

            <button
              onClick={() => onDelete(expense._id)}
              className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md transition-colors cursor-pointer"
              title="Delete expense"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
