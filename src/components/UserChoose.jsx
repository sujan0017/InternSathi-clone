function UserChoose() {
  return (
    <section className="grid px-5 2xl:px-[142px] md:grid-cols-2 py-10 gap-5">
      <UserChooseCart
        title={"Product Candidate"}
        description={`Unlock endless opportunities and connect with top employers. Let your
          skills shine and land your dream job.`}
        btn={"Upload Your CV"}
        imgLink={`https://internsathi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fforcandidate.c999aecb.jpeg&w=1920&q=75`}
      />
      <UserChooseCart
        title={"For Employer or Company"}
        description={`Access a pool of skilled candidates and streamline your hiring process. Find the best talent for your company's success`}
        btn={"Start hiring"}
        imgLink={`https://internsathi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fforemployer.bc264fc6.jpeg&w=1920&q=75`}
        textColor="white"
      />
      
    </section>
  );
}
// eslint-disable-next-line react/prop-types
export function UserChooseCart({ title, description, btn, imgLink, textColor='black'}) {
  return (
    <div className="flex flex-col justify-start items-center rounded-3xl relative p-4 overflow-hidden">
      <div className="w-full absolute top-0 bottom-0">
        <img
          src={imgLink}
          width={1296}
          height={580}
          alt="Product Candidate"
          className="bg-center object-cover w-full h-full"
        />
      </div>
      <div className="z-10  p-4 rounded-lg flex flex-col gap-3">
        <h2 className={`text-${textColor} text-2xl font-bold` }>{title}</h2>
        <p className={`text-${textColor} text-sm pr-40`}>{description}</p>
        <div>
          <button className="bg-white text-secondaryDark rounded-lg py-2 px-4 mt-3">
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserChoose;
