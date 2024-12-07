import { IoIosArrowForward } from "react-icons/io";
import { RecruiterCreditHeader } from "./RecruiterCredit";

function RecruiterCreditUsage() {
  return (
    <div>
      <RecruiterCreditHeader
        title={"Credit Usage"}
        icon={<IoIosArrowForward className="text-fontColor" />}
        textColor="fontColor"
        newLink={"Credit Usage"}
      />
      <table className="w-full">
        <thead className="bg-fontColor bg-opacity-30  ">
          <tr className="border-b w-full">
            <th className="h-12 px-4 text-center align-middle  text-sm font-normal  ">
              Used For
            </th>
            <th className="h-12 px-4 text-center align-middle  text-sm font-normal ">
              Credit Amount
            </th>
            <th className="h-12 px-4 text-center align-middle  text-sm font-normal ">
              Created At
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-4 text-sm text-center">demo purpose</td>
            <td className="p-4 text-sm text-center">Rs. 1524</td>
            <td className="p-4 text-sm text-center">1990-02-26</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RecruiterCreditUsage;
