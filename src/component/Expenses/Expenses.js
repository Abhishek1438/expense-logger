import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

import ExpenseChartData from "./ExpenseChartData";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2022");
    const changeFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.item.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={changeFilterHandler}
            />
            <ExpenseChartData item={filteredExpenses} />
            <ExpensesList item={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
