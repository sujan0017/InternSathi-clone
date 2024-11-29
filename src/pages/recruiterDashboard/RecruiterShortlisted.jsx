import { IoIosArrowForward } from "react-icons/io";
import RecruiterApplicationManage from "../../components/dashboard/RecruiterApplicationManage";

function RecruiterShortlisted() {
  return (
    <>
      <RecruiterApplicationManage
        icon={<IoIosArrowForward />}
        textColor="fontColor"
        title={`Shortlisted Applications`}
      />
    </>
  );
}

export default RecruiterShortlisted;
