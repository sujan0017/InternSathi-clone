import AskQuestion from "../components/home/AskQuestion";
import { IoMail } from "react-icons/io5";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";

function ContactUs() {
  return (
    <>
      <section className=" pt-[64px]">
        <div className=" px-5 2xl:px-[142px] bg-secondary min-h-[500px] flex flex-col items-center justify-center gap-2">
          <h1 className="text-4xl font-bold text-white text-center">
          Contact Us
          </h1>
          <p className="text-white  text-center">
          Have questions, feedback, or need assistance? Reach out to InternSathi's dedicated team. Contact us today!
          </p>
        </div>
      </section>

      <section className=" px-5 2xl:px-[142px]  mt-10  ">
        <div className="p-8 md:p-10 xl:p-16 grid md:grid-cols-2 gap-10 bg-secondaryBg  rounded-md">
          <form className="flex  flex-col gap-5 ">
            <div className="flex flex-col gap-1 mt-1 ">
              <label className="text-sm">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter you full Name"
                className="p-3 text-sm border-2 rounded-md"
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-1 mt-1 ">
                <label className="text-sm">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter you email address"
                  className="p-3 text-sm border-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-1 mt-1 ">
                <label className="text-sm">
                  Phone<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter you phone number"
                  className="p-3 text-sm border-2 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-1 ">
              <label className="text-sm">
                Subject<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="p-3 text-sm border-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1 mt-1 ">
              <label className="text-sm">
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                type="text"
                placeholder="Enter you full Name"
                className="p-3 text-sm border-2 rounded-md w-full h-52"
              />
            </div>
            <div className="flex gap-1 flex-col mt-1 ">
              <label className="text-sm">
                Attachment<span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                className="px-3 py-[7px] text-sm border-2 rounded-md w-full bg-white"
              />
            </div>

            <p className="text-fontColor text-xs">
              We will get back to you within 24 hours. Thank you for your
              patience.
            </p>

            <div className="self-end">
              <button className="py-2 px-4 bg-secondary text-white rounded-md">
                Submit
              </button>
            </div>
          </form>
          <div className="w-full h-full  ">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0359715679087!2d85.32911727457552!3d27.68528307619521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197a8936969b%3A0xdc98395411032da!2sInternSathi!5e0!3m2!1sen!2snp!4v1731316894248!5m2!1sen!2snp"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="bg-secondaryBg p-[64px] grid grid-cols-1 md:grid-cols-3 gap-10 px-5 2xl:px-[142px] my-10 ">
        <div className="border-2 rounded-sm flex flex-col items-center justify-center gap-3 p-7">
          <IoMail className="text-secondary text-3xl" />
          <a
            href={`mailto:${"contact@internsathi.com"}`}
            className="hover:underline hover:text-secondary"
          >
            contact@internsathi.com
          </a>
        </div>

        <div className="border-2 rounded-sm flex flex-col items-center justify-center gap-3 p-7">
          <FaPhoneFlip className="text-secondary text-3xl" />
          <a
            href={`tel:${`+977 980-2346002`}`}
            className="hover:underline hover:text-secondary"
          >
            +977 980-2346002
          </a>
        </div>

        <div className="border-2 rounded-sm flex flex-col items-center justify-center gap-3 p-7">
          <FaLocationDot className="text-secondary text-3xl" />
          <p className="">Kathmandu, Nepal</p>
        </div>
      </section>

      <AskQuestion
        firstTitle="How can I apply for an internship through InternSathi?"
        firstDescription={`To apply for an internship through InternSathi, simply visit our website and create an account. Once logged in, you can browse through available internship opportunities and apply directly to those that interest you. Make sure to complete your profile with accurate information to enhance your chances of securing an internship.`}

        secondTitle={`I'm experiencing technical issues on the website. How can I get assistance?`}
        secondDescription={`If you encounter any technical difficulties while using our website, please reach out to our customer support team by filling out the contact form below or sending an email to contact@internsathi.com. Our team will promptly assist you in resolving any issues you may be facing.`}

        thirdTitle={`Can I get guidance on writing my resume or preparing for interviews through InternSathi?`}
        thirdDescription={`Absolutely! InternSathi offers resources and guidance to help you craft an impressive resume and prepare for interviews. You can access articles, tips, and even webinars on our website's blog section. Additionally, we may offer personalized assistance through workshops or one-on-one coaching sessions, depending on availability. Feel free to reach out to us for more information on these resources.`}

        fourthTitle={`I'm an employer interested in posting internship opportunities on InternSathi. How can I do that?`}
        fourthDescription={`If you're an employer looking to hire interns, we'd be delighted to help you connect with talented candidates through our platform. Please visit our employer section on the website and fill out the form to post your internship opportunities. Alternatively, you can email us at contact@internsathi.com, and one of our representatives will get in touch with you to discuss your requirements and guide you through the process of posting internships on InternSathi.`}
      />
    </>
  );
}

export default ContactUs;

export function ContactUsCart({ icon, description }) {
  return (
    <div className="border-2 rounded-sm flex flex-col items-center justify-center gap-3 p-7">
      {icon}
      <p className="hover:underline hover:text-secondary">{description}</p>
    </div>
  );
}
