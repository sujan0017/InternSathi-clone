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
    </div>
  );
}

export default RecruiterCreditUsage;
