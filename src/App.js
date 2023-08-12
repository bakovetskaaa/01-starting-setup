import React from "react";

import Expenses from "./components/Expenses/Expenses";

const App = () => {
    document.getElementById("root");

    const expenses = [
        {   id: 'e1',
            expenseTitle: "Toilet Paper",
            expenseAmount: 94.12,
            expenseDate: new Date(2023, 7, 29)
        },
        {   id: 'e2',
            expenseTitle: "New TV",
            expenseAmount: 799.49,
            expenseDate: new Date(2025, 12, 20)
        },
        {   id: 'e3',
            expenseTitle: "Car Insurance",
            expenseAmount: 294.67,
            expenseDate: new Date(2023, 7, 27)
        },
        {   id: 'e4',
            expenseTitle: "New Desk (Wooden)",
            expenseAmount: 450,
            expenseDate: new Date(2025, 3, 12)
        },

    ];
  return (
    <div>
        <h2>Let's get started!</h2>
        <Expenses items={expenses}/>
    </div>
  );
}

export default App;
