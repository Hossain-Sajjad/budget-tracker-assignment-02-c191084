import IncomeList from './IncomeList';
import ExpenseList from './ExpenseList';
import { v4 as uuidv4 } from "uuid";

export default function Listing() {
  const entries = [
    {
      id: uuidv4(),
      type : 'income',
      description : 'Website project',
      value: '10,000'
    },
    {
      id: uuidv4(),
      type : 'income',
      description : 'Salary',
      value: '2,5000.00'
    },
    {
      id: uuidv4(),
      type : 'income',
      description : 'Mobile app project',
      value: '5,000.00'
    },
    {
      id: uuidv4(),
      type : 'expense',
      description : 'Groceries 1',
      value: '2,500.00'
    },
    {
      id: uuidv4(),
      type : 'expense',
      description : 'Electricity Bill',
      value: '2,500.00'
    },
    {
      id: uuidv4(),
      type : 'expense',
      description : 'House rent ',
      value: '2,500.00'
    }
  ]
  return (
    <div className="mx-auto my-8 grid max-w-4xl grid-cols-1 gap-8 px-5 text-sm md:grid-cols-2">
      <IncomeList entries={entries}/>
      <ExpenseList entries={entries}/>
    </div>

  )
}
