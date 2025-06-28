export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">About Expense Tracker</h1>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Welcome to Expense Tracker, a simple and intuitive application to help you keep track of your daily
            expenses.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-3">Features</h2>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li>• Add new expenses with description and amount</li>
            <li>• View all your expenses in a clean list format</li>
            <li>• Delete expenses you no longer need</li>
            <li>• Responsive design that works on all devices</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mb-3">How to Use</h2>
          <ol className="text-gray-600 space-y-2">
            <li>1. Navigate to the Home page</li>
            <li>2. Fill in the expense description and amount</li>
            <li>3. Click "Add Expense" to save it</li>
            <li>4. View your expenses in the list below</li>
            <li>5. Click the delete button to remove any expense</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
