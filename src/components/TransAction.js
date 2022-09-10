const TransAction = ({ transAction }) => {
   const { id, amount, description, type } = transAction;
   const iconLabel =
      type === "expense" ? (
         <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 stroke-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M16 17l-4 4m0 0l-4-4m4 4V3"
            />
         </svg>
      ) : (
         <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 stroke-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M8 7l4-4m0 0l4 4m-4-4v18"
            />
         </svg>
      );
   return (
      <div className="w-full flex flex-col justify-center items-start py-1">
         <div className="w-full flex justify-start items-center">
            <span className="text-xl text-gray-800 mr-4">{amount}</span>
            <span>{iconLabel}</span>
         </div>
         <div className="text-gray-400">{description}</div>
      </div>
   );
};

export default TransAction;
