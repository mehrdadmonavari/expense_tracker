import { useEffect, useState } from "react";

const TransActionForm = ({ isShow, addTransAction }) => {
   const [formValues, setFormValues] = useState({
      type: "expense",
      amount: 0,
      description: "",
   });

   const [accordion, setAccordion] = useState({
      container: "h-0",
      inner: "h-0",
   });

   const changeHandler = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
   };

   const submitHandler = (e) => {
      e.preventDefault();
      addTransAction(formValues);
   };

   useEffect(() => {
      setAccordion(
         isShow
            ? {
                 container: "h-[188px]",
                 inner: "h-full",
              }
            : {
                 container: "h-0",
                 inner: "h-0",
              }
      );
      return () => {
         setAccordion({
            container: "h-0",
            inner: "h-0",
         });
      };
   }, [isShow]);

   return (
      <div
         className={`relative w-full transition-all duration-300 ${accordion.container}`}>
         <form
            onSubmit={submitHandler}
            className={`w-full flex flex-col justify-start items-start gap-y-4 px-2 transition-all duration-300 absolute top-0 overflow-hidden ${accordion.inner}`}>
            <div className="w-full flex justify-center items-center gap-x-4">
               <div className="flex flex-col flex-auto justify-center items-start gap-y-1">
                  <label className="text-base text-slate-800">amount:</label>
                  <input
                     onChange={changeHandler}
                     type="number"
                     name="amount"
                     value={formValues.amount}
                     className="w-full bg-white border border-gray-600 rounded-md px-4 py-1 transition-shadow duration-200 focus:bg-gray-50 focus:outline-none focus:shadow-md shadow-gray-400"
                  />
               </div>
               <div className="flex flex-col flex-auto justify-center items-start gap-y-1">
                  <label className="text-base text-slate-800">description:</label>
                  <input
                     onChange={changeHandler}
                     type="text"
                     name="description"
                     value={formValues.description}
                     className="w-full bg-white border border-gray-600 rounded-md px-4 py-1 transition-shadow duration-200 focus:bg-gray-50 focus:outline-none focus:shadow-md shadow-gray-400"
                  />
               </div>
            </div>
            <div className="flex justify-center items-center gap-x-4">
               <div className="flex justify-center items-center gap-x-1">
                  <input
                     onChange={changeHandler}
                     type="radio"
                     value="expense"
                     name="type"
                     id="expense"
                     autoComplete="off"
                     checked={formValues.type === "expense"}
                  />
                  <label htmlFor="expense" className="pb-1">
                     Expense
                  </label>
               </div>
               <div className="flex justify-center items-center gap-x-1">
                  <input
                     onChange={changeHandler}
                     type="radio"
                     value="income"
                     name="type"
                     id="income"
                     autoComplete="off"
                     checked={formValues.type === "income"}
                  />
                  <label htmlFor="income" className="pb-1">
                     Income
                  </label>
               </div>
            </div>
            <button
               type="submit"
               className="bg-violet-100 border border-violet-600 rounded-lg px-4 py-2 text-base text-violet-600 transition-all duration-200 hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-400 hover:text-violet-100">
               add TransAction
            </button>
         </form>
      </div>
   );
};

export default TransActionForm;
