import { FaPhone } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function HomeContact() {
  return (
    <section className="py-16 px-5 2xl:px-[142px]">
      <h5 className="text-3xl font-bold">Contact our Varioud Department</h5>
      <p className="text-fontColor">You can contact our various department.</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        <HomeContactCart
          title={`Sales`}
          mail={`contact@internsathi.com`}
          contactNumber={`+977 982-000000`}
        />
        <HomeContactCart
          title={`Sales`}
          mail={`contact@internsathi.com`}
          contactNumber={`+977 982-000000`}
        />
        <HomeContactCart
          title={`Sales`}
          mail={`contact@internsathi.com`}
          contactNumber={`+977 982-000000`}
        />
      </div>
    </section>
  );
}

export default HomeContact;

export function HomeContactCart({ title, contactNumber, mail }) {
  return (
    <div className="p-6 bg-secondaryBg rounded-xl">
      <h6 className="text-lg font-semibold">{title}</h6>
      <a href={`tel:${contactNumber}`} className="flex items-center gap-2 text-primary hover:underline mt-3">
        <FaPhone />
        {contactNumber}
      </a>
      <a href={`mailto:${mail}`} className="flex items-center gap-2 text-primary hover:underline">
        <MdMail />
        {mail}
      </a>
    </div>
  );
}
