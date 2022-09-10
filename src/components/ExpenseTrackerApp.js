import { useEffect, useState } from "react";
import OverView from "./OverView";
import TransActionList from "./TransActionList";

const ExpenseTrackerApp = () => {
   const [expense, setExpense] = useState();
   const [income, setIncom] = useState();
   const [transActions, setTransActions] = useState([
      {
         id: 1659305342741,
         amount: 6000000,
         description: "Receive salary",
         type: "income",
      },
      { id: 1659305419081, amount: 176000, description: "Buy a hoodie", type: "expense" },
      {
         id: 1659305412163,
         amount: 1400000,
         description: "Small project wages",
         type: "income",
      },
      {
         id: 1659305344197,
         amount: 12000,
         description: "having breakfast",
         type: "expense",
      },
      { id: 1659305405949, amount: 20000, description: "eating launch", type: "expense" },
   ]);

   const addTransAction = (transAction) => {
      const addedTransAction = { id: Date.now(), ...transAction };
      setTransActions([...transActions, addedTransAction]);
   };

   useEffect(() => {
      let exp = 0;
      let inc = 0;
      transActions.forEach((transAction) => {
         transAction.type === "expense"
            ? (exp += parseFloat(transAction.amount))
            : (inc += parseFloat(transAction.amount));
      });
      setExpense(exp);
      setIncom(inc);
   }, [transActions]);

   return (
      <section className="bg-white w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 flex flex-col justify-center items-center gap-y-4 border border-gray-300 p-4">
         <OverView expense={expense} income={income} addTransAction={addTransAction} />
         <TransActionList transActions={transActions} />
      </section>
   );
};

export default ExpenseTrackerApp;
