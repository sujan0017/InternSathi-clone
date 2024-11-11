import UserChoose from "../components/home/UserChoose";
import HomeContact from "../components/home/HomeContact";
import { HiShoppingBag } from "react-icons/hi";
import { BsFillBuildingsFill, BsPeopleFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";

function AboutUs() {
  return (
    <section className="pt-[64px]  ">
      <div className="px-5 2xl:px-[142px] bg-secondary min-h-[500px] flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-bold text-white text-center">
          About Internsathi
        </h1>
        <p className="text-white  text-center">
          We've helped over 2,500 Freshers to get into the most popular
          internships.
        </p>
      </div>

      <div className="px-5 2xl:px-[142px] flex flex-col items-center mt-16">
        <div className="grid sm:grid-cols-2 gap-6 item-start ">
          <div className="flex flex-col gap-3">
            <p className="text-secondary capitalize">WHO WE ARE</p>
            <h4 className="text-3xl font-medium">
              We're a highly skilled and professionals team.
            </h4>
            <p className="text-sm text-fontColor mt-2">
              InternSathi is a vibrant platform dedicated to empowering and
              guiding interns on their journey towards professional success. We
              understand the pivotal role internships play in shaping careers,
              and we are committed to providing comprehensive resources and
              support to interns across diverse fields and industries.
            </p>
            <p className="text-sm text-fontColor">
              We believe in connecting talent with opportunity, ensuring that
              every individual finds meaningful work, and every employer
              discovers exceptional talent. With a passion for excellence, we
              strive to make the job market accessible, transparent, and
              rewarding for all. Join us on this journey as we shape the future
              of employment.
            </p>
          </div>
          <div className="w-full h-full grid grid-cols-2  gap-4">
            <div className="flex h-full w-full flex-col gap-4">
              <div className="w-full h-full">
                <img
                  className="bg-center bg-cover full h-full"
                  src="https://internsathi.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1603201667230-bd139210db18%3Fq%3D80%26w%3D2088%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=640&q=75"
                  alt=""
                  width="400"
                  height="400"
                />
              </div>
              <div className="w-full h-full">
                <img
                  className="bg-center bg-cover full h-full"
                  src="https://internsathi.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1543269665-bd1bc9e6f296%3Fq%3D80%26w%3D2070%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=640&q=75"
                  alt=""
                  width="400"
                  height="400"
                />
              </div>
            </div>
            <div className="w-full h-full">
              <img
                className="bg-center bg-cover full h-full"
                src="https://internsathi.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1521737711867-e3b97375f902%3Fq%3D80%26w%3D1974%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=640&q=75"
                alt=""
                width="400"
                height="400"
              />
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
          <AboutUsCart
            heading={"105+"}
            info={"Live Internship & Jobs"}
            icon={<HiShoppingBag className="text-secondary text-3xl" />}
          />
          <AboutUsCart
            heading={"435+"}
            info={"Companies"}
            icon={<BsFillBuildingsFill className="text-secondary text-3xl" />}
          />
          <AboutUsCart
            heading={"11700+"}
            info={"Candidates"}
            icon={<BsPeopleFill className="text-secondary text-3xl" />}
          />
          <AboutUsCart
            heading={"20+"}
            info={"Training Institutes"}
            icon={<FaChalkboardTeacher className="text-secondary text-3xl" />}
          />
        </div>
      </div>

      <div className="px-5 2xl:px-[142px] grid grid-cols-1 md:grid-cols-2 mt-16">
        <div className="flex justify-center items-center">
          <img
            src="https://internsathi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmission.43c60137.png&w=640&q=75"
            alt=""
            className="bg-cover bg-center"
            width={430}
            height={400}
          />
        </div>
        <div className="flex flex-col items-start gap-3">
          <p className="text-secondary capitalize">OUR MISSION</p>
          <h4 className="text-3xl font-medium">
            We're a highly skilled and professionals team.
          </h4>
          <p className="text-sm text-fontColor mt-2">
            InternSathi is a vibrant platform dedicated to empowering and
            guiding interns on their journey towards professional success. We
            understand the pivotal role internships play in shaping careers, and
            we are committed to providing comprehensive resources and support to
            interns across diverse fields and industries.
          </p>
          <p className="text-sm text-fontColor">
            We believe in connecting talent with opportunity, ensuring that
            every individual finds meaningful work, and every employer discovers
            exceptional talent. With a passion for excellence, we strive to make
            the job market accessible, transparent, and rewarding for all. Join
            us on this journey as we shape the future of employment.
          </p>
          <div>
            <h3 className="font-medium">Our Brands</h3>
            <div>
              <div>
                <img
                  src="https://internsathi.com/_next/image?url=%2Ftalentsathi.png&w=256&q=75"
                  alt=""
                  className="w-36"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 2xl:px-[142px] mt-16 bg-secondaryBg py-10">
        <h1 className="text-black text-3xl font-bold text-center">
          Why choose <span className="text-secondary">Internsathi</span>
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 w-full mt-10 ">
          <AboutUsWhyCart
            heading={"Access to Top Talent"}
            info={
              "InternSathi attracts a diverse pool of ambitious and talented interns from leading educational institutions across various disciplines."
            }
            img={`https://internsathi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwhyImage1.0e92c5ad.png&w=96&q=75`}
          />
          <AboutUsWhyCart
            heading={"Access to Top Talent"}
            info={
              "InternSathi attracts a diverse pool of ambitious and talented interns from leading educational institutions across various disciplines."
            }
            img={`https://internsathi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwhyImage2.76ed61eb.png&w=96&q=75`}
          />
          <AboutUsWhyCart
            heading={"Access to Top Talent"}
            info={
              "InternSathi attracts a diverse pool of ambitious and talented interns from leading educational institutions across various disciplines."
            }
            img={`https://internsathi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FwhyImage3.dbb17bfa.png&w=96&q=75`}
          />
        </div>
      </div>

      <HomeContact />
      <UserChoose />
    </section>
  );
}

export default AboutUs;

export function AboutUsCart({ heading, info, icon }) {
  return (
    <div className=" flex items-center gap-2">
      <div className=" bg-secondary bg-opacity-15 flex justify-center items-center  min-w-20 min-h-20 rounded-full ">
        {icon}
      </div>
      <div>
        <h5 className="font-bold text-xl">{heading}</h5>
        <p className="text-fontColor">{info}</p>
      </div>
    </div>
  );
}
export function AboutUsWhyCart({ heading, info, img }) {
  return (
    <div className=" flex flex-col items-center gap-2">
      <div className=" ">
        <img src={img} alt="" width={73} height={72} />
      </div>
      <h5 className="font-bold text-xl text-center">{heading}</h5>
      <p className="text-fontColor text-center">{info}</p>
    </div>
  );
}
