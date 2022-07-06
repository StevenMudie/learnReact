import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const savedExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm savedExpenseData={savedExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
