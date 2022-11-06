import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    if (props.item.length === 0) {
        return <h3 className="expenses-list__fallback">No Expenses found!</h3>;
    }

    return (
        <ul className="expenses-list">
            {props.item.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;
