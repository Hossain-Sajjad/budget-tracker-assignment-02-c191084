export default function ExpenseList({entries}) {
    const expenseEntries = entries.filter((entry) => entry.type === "expense");

  return (
    <div>
    <h2 className="border-b pb-2 font-medium text-red-600">Expense</h2>

    {/* <!-- <p className="py-2.5 text-gray-600">There are no expenses.</p> --> */}

    <ul id="expense-list" className="divide-y">
    {
            expenseEntries.map((entry) => {
                return (
                <li className="py-2.5" key={entry.id}>
                <div className="group flex justify-between gap-2 text-sm">
                  <span>{entry.description}</span>
        
                  <div>
                    <span className="text-red-600">{entry.value}</span>
                    <span
                      className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block"
                    >
                      Delete
                    </span>
                  </div>
                </div>
              </li>
                )
             })}
    </ul>
  </div>
  )
}
