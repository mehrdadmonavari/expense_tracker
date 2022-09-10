import { useState } from "react";
import TransAction from "./TransAction";
import TransActionForm from "./TransActionForm";

const OverView = ({ income, expense, addTransAction }) => {
   const [isShow, setIsShow] = useState(false);
   let accordionBtnClass = isShow
      ? "bg-red-100 border-red-500 text-red-500 hover:bg-red-500 hover:shadow-red-400 hover:text-white"
      : "bg-blue-100 border-blue-500 text-blue-500 hover:bg-blue-500 hover:shadow-blue-400 hover:text-white";

   return (
      <section className="w-full flex flex-col justify-center items-center">
         <div className="w-full flex justify-between items-center px-2 mb-6">
            <p className="text-lg text-slate-800">balance: {income - expense}</p>
            <button
               onClick={() => setIsShow((prevIsShow) => !prevIsShow)}
               className={`border rounded-lg px-4 py-2 text-base transition-all duration-200 hover:shadow-lg ${accordionBtnClass}`}>
               {isShow ? "cancel" : "add"}
            </button>
         </div>
         <TransActionForm isShow={isShow} addTransAction={addTransAction} />
         <div className="flex justify-between items-center gap-x-6 w-full">
            <div className="flex flex-auto justify-start items-start border border-gray-300 rounded-lg p-4 shadow-inner text-lg font-medium text-red-500">
               expense: {expense}
            </div>
            <div className="flex flex-auto justify-start items-start border border-gray-300 rounded-lg p-4 shadow-inner text-lg font-medium text-green-500">
               income: {income}
            </div>
         </div>
      </section>
   );
};

export default OverView;
