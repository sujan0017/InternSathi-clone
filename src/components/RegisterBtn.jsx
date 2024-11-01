// import { useState } from "react";
// import { GoTriangleDown } from "react-icons/go";
// import { Link } from "react-router-dom";

// function RegisterBtn() {
//   const [registerModal, setRegisterModal] = useState(false);

//   return (
//     <div className="flex gap-5 justify-center items-center">
//       <Link className="text-white font-semibold hover:text-[#EE2f2f]">
//         Login
//       </Link>

//       <div className="relative flex justify-end ">
//         <button
//           onClick={() => setRegisterModal(!registerModal)}
//           className="font-semibold px-3 py-[4px] bg-[#EE2f2f] rounded-lg flex gap-1 justify-center items-center text-white"
//         >
//           Register <GoTriangleDown />
//         </button>
//         {registerModal ? (
//           <div
//             onMouseEnter={() => setRegisterModal(true)}
//             onMouseLeave={() => setRegisterModal(false)}
//             className="w-48 p-2 bg-slate-100 absolute top-10 rounded-lg flex flex-col gap-2  opacity-[95%]"
//           >
//             <Link>Register as a candidate</Link>
//             <Link>Register as recruiter</Link>
//             <Link>Register as a institute</Link>
//           </div>
//         ) : (
//           <></>
//         )}
//       </div>
//     </div>
//   );
// }

// export default RegisterBtn;
