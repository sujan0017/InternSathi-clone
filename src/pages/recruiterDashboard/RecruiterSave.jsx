
import RecruiterApplicationManage from '../../components/dashboard/RecruiterApplicationManage';
import { IoIosArrowForward } from 'react-icons/io';

function RecruiterSave() {
  return (
    <>
      <RecruiterApplicationManage
        icon={<IoIosArrowForward />}
        textColor="fontColor"
        title={`Saved Applications`}
      />
    </>
  );
}

export default RecruiterSave
