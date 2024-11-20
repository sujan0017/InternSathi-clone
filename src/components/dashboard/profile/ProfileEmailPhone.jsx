function ProfileEmailPhone() {
  return (
    <div className=" w-full rounded-md flex-1 mt-5   ">
      <div className="bg-white border rounded-md p-7 flex flex-col">
        <h3 className="font-medium text-xl">Email and Phone</h3>
        <p className="text-fontColor text-sm ">
          Update and verify your Email and Phone
        </p>
        <form action="">
          <div className="flex flex-col gap-1 mt-5 ">
            <label className="text-sm">
              Email address<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-5">
              <input
                type="email"
                placeholder="eg.admain@gmail.com"
                className="p-3 text-sm border-2 rounded-md w-1/2"
              />
              <div className="">
                <button className="bg-secondary text-white px-7 py-3 font-normal rounded-md">
                  Save
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-5 ">
            <label className="text-sm">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-5">
              <input
                type="number"
                placeholder="eg.9800000000"
                className="p-3 text-sm border-2 rounded-md w-1/2"
              />
              <div className="">
                <button className="bg-secondary text-white px-7 py-3 font-normal rounded-md">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileEmailPhone;
