import { Link } from "react-router-dom";

const JobDescription = () => {
  return (

 
      <div className="bg-white flex flex-col items-start justify-center gap-7 mt-2 ">
             {/* Job Title and Company */}
        <div>
          <h1 className="text-2xl font-medium text-gray-900 mb-4">
            Management Trainee
          </h1>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Location:</span> Lazimpat and
            Pepsicola, Kathmandu, Nepal
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Company:</span> Col (Subsidiary of
            Niraksa Company Pvt Ltd)
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Type:</span>: Full-Time
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Tenure:</span> 6 Months (L3 Module
            of the Organizational Plan)
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Remuneration:</span> Rs 60,000
            (before tax) for 6 months
          </p>
        </div>

        {/* About Us */}
        <div className="">
          <h2 className="text-xl font-bold text-gray-800 mb-2">About Us</h2>
          <p className="text-gray-600 text-sm">
            Col is an innovative startup and a subsidiary of Niraksa Company Pvt
            Ltd, specializing in technology, lifestyle, content & media,
            management, and venture capital services. We are dedicated to
            nurturing talent and fostering the next generation of leaders in our
            industry. Our dynamic environment encourages creativity,
            collaboration, and personal growth.
          </p>
        </div>

        {/* Job Overview */}
        <div className="">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Job Overview</h2>
          <p className="text-gray-600 text-sm">
            We are seeking highly motivated and dynamic individuals to join our
            team as Management Trainees. This 6-month program is designed to
            equip you with the necessary skills and knowledge to excel in
            various managerial roles, including Executive Assistants, Managers,
            and CEOs. You will gain hands-on experience across multiple
            departments and projects, focusing on our tech products, B2B
            services, and B2C services, fostering a comprehensive understanding
            of our business operations.
          </p>
        </div>

        {/* Key Responsibilities */}
        <div className="">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Key Responsibilities
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
            <li>
              <span className="font-semibold">Rotational Training:</span>{" "}
              Participate in a structured training program across various
              departments, including tech products, B2B services, B2C services,
              lifestyle, content & media, and venture capital services.
            </li>
            <li>
              <span className="font-semibold">Project Management:</span> Assist
              in planning, executing, and evaluating projects related to tech
              products and services, ensuring alignment with business objectives
              and timelines.
            </li>
            <li>
              <span className="font-semibold">Research & Analysis:</span>{" "}
              Conduct market research and analysis to support strategic
              decision-making, particularly in understanding B2B and B2C market
              trends. Prepare reports and presentations for senior management.
            </li>
            <li>
              <span className="font-semibold">Support Leadership:</span>{" "}
              Collaborate with department heads and executives to streamline
              operations, enhance productivity, and foster a positive work
              environment.
            </li>
            <li>
              <span className="font-semibold">Content Development:</span> Assist
              in creating engaging content for various platforms, including
              social media, blogs, and newsletters, promoting our tech products
              and service offerings.
            </li>
            <li>
              <span className="font-semibold">Client Engagement:</span>{" "}
              Participate in client meetings and presentations, gaining exposure
              to client relationship management and service delivery in both B2B
              and B2C contexts.
            </li>
            <li>
              <span className="font-semibold">Administrative Support:</span>{" "}
              Provide administrative support to executives, including scheduling
              meetings, managing calendars, and organizing events.
            </li>
          </ul>
        </div>

        {/* Qualifications */}
        <div className="">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Qualifications
          </h2>
          <p className="text-gray-600 mb-5 text-sm">
            <span className="font-semibold">Education:</span> Bachelor’s degree
            in Business Administration, Management, Marketing, Communication, or
            a related field. Fresh graduates and candidates with relevant
            internships are encouraged to apply.
          </p>
          <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
            <li>Strong analytical and problem-solving skills.</li>
            <li>Excellent written and verbal communication skills.</li>
            <li>
              Proficient in Microsoft Office Suite (Word, Excel, PowerPoint).
            </li>
            <li>
              Familiarity with digital marketing tools and social media
              platforms is a plus.
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800  mt-4">
            Personal Attributes
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
            <li>Self-motivated, proactive, and eager to learn.</li>
            <li>
              Ability to work collaboratively in a fast-paced environment.
            </li>
            <li>Strong organizational skills with attention to detail.</li>
          </ul>
          <p className="text-gray-600 mt-4">
            <span className="font-medium">Additional Requirement:</span> A valid
            two-wheeler license and access to a two-wheeler are mandatory.
          </p>
        </div>

        {/* Benefits */}
        <div className=" ">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Benefits</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
            <li>
              Competitive salary of Rs 60,000 (before tax) for the 6-month
              tenure.
            </li>
            <li>
              Comprehensive training and mentorship from industry leaders.
            </li>
            <li>
              Opportunities for professional growth and career advancement.
            </li>
            <li>Dynamic and inclusive work culture.</li>
            <li>Flexible working hours and remote work options.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-600 mb-2 mt-5">
            How to Apply
          </h2>
          <p className="text-sm text-gray-600 mt-3">
            If you are excited to start your journey as a MERN Stack Developer,
            send us your resume and a portfolio link to{" "}
            <Link className="font-semibold text-blue-700">
              career@hyteno.com
            </Link>{" "}
            or directly apply from the internsathi.com website. We look forward
            to helping you grow with Hyteno Technology!
          </p>
        </div>

        <div>
          <p className="text-xl font-bold text-gray-800 mb-2 mt-5">
            Requires Skills
          </p>
          <div className="flex item-enter gap-5 mt-4">
            <span className="py-2 px-3 rounded-lg border-2 text-xs bg-gray-200">
              HTML
            </span>
            <span className="py-2 px-3 rounded-lg border-2 text-xs bg-gray-200">
              CSS
            </span>
            <span className="py-2 px-3  rounded-lg border-2 text-xs bg-gray-200">
              javaScript
            </span>
            <span className="py-2 px-3  rounded-lg border-2 text-xs bg-gray-200">
              React
            </span>
          </div>
        </div>

      </div>
  
  )
};

export default JobDescription;
