function PostNewInternship() {
  return (
    <div className="bg-secondaryBg h-full w-full">
      <h3 className="text-xl font-semibold text-center">
        Create an Internship Post
      </h3>

      <div className="bg-white rounded-md p-7">
        <h5 className="font-semibold">Basic Details</h5>

        <form className="">
          <div className="flex flex-col gap-2 mt-5 ">
            <label className="text-sm">
              Internship Title
            </label>
            <input placeholder="eg.Web developer intern" type="text" className="p-3 text-sm border-2 rounded-md" />
          </div>
          <div className="w-full grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-2 mt-5 ">
            <label className="text-sm">
              City<span className="text-red-500">*</span>
            </label>
            <input placeholder="eg.Kathmandu" type="text" className="p-3 text-sm border-2 rounded-md" />
          </div> <div className="flex flex-col gap-2 mt-5 ">
            <label className="text-sm">
              Internship Title<span className="text-red-500">*</span>
            </label>
            <input placeholder="eg.Web developer intern" type="text" className="p-3 text-sm border-2 rounded-md" />
          </div>
          </div>
        </form>

      </div>
    </div>
  );
}

export default PostNewInternship;
