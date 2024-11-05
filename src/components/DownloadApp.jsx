import { IoLogoGooglePlaystore } from "react-icons/io5";

function DownloadApp() {
  return (
    <section className="pt-16 px-5 2xl:px-[142px] ">
      <div className="grid md:grid-cols-2 ">
        <div className="flex flex-col item-first justify-center gap-4">
          <h3 className="text-3xl font-bold">Download Our Mobile App.</h3>
          <p>Build a Perfect Resumes & Apply Internship</p>
          <div>
            <button className="px-4 py-3 flex justify-center items-center gap-2 bg-black rounded-xl">
              <IoLogoGooglePlaystore className="text-3xl font-bold text-white" />{" "}
              <h5 className="text-white text-sm font-light flex flex-col items-start ">
                GET IT ON{" "}
                <span className="text-white font-semibold text-lg mt-[-5px]">
                  Google Play
                </span>
              </h5>
            </button>
          </div>
        </div>
        <div>
          <img src="https://internsathi.com/mobile-app.svg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
