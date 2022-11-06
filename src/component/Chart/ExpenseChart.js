import React from "react";
import "./ExpenseChart.css";

import ExpenseChartBar from "./ExpenseChartBar";

const ExpenseChart = (props) => {
    const dataPointValues = props.datapoints.map((month) => month.value);

    const maxValue = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.datapoints.map((datapoint) => (
                <ExpenseChartBar
                    key={datapoint.label}
                    value={datapoint.value}
                    label={datapoint.label}
                    maxValue={maxValue}
                />
            ))}
        </div>
    );
};

export default ExpenseChart;
