
const TotalCredit = ({creditHours}) => {
    return (
        <div className="px-3">
           
           <h3 className="text-2xl font-semibold text-blue-600 pb-3">Total Credit Hour : {creditHours}</h3>
           <hr  className="mb-3 border-teal-500"/>
        </div>
    );
};

export default TotalCredit;