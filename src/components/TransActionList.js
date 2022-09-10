import TransAction from "./TransAction";

const TransActionList = ({ transActions }) => {
   return (
      <div className="w-full flex flex-col justify-center items-center divide-y">
         {transActions.map((transAction) => (
            <TransAction key={transAction.id} transAction={transAction} />
         ))}
      </div>
   );
};

export default TransActionList;
