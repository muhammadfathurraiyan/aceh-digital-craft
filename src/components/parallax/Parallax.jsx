import About from "../../assets/about.jpg";
import Contact from "../../assets/contact.jpg";
import Portofolio from "../../assets/portofolio.jpg";
import Service from "../../assets/service.jpg";
import {
  FaUserFriends,
  FaImage,
  FaSuitcase,
  FaPaperPlane,
} from "react-icons/fa";

const Parallax = () => {
  return (
    <div className="w-full">
      <div
        id="about"
        style={{ backgroundImage: `url(${About})` }}
        className="relative bg-fixed bg-top bg-no-repeat bg-cover w-full h-screen max-md:bg-right"
      >
        <div className="w-1/2 h-full relative bg-neutral-950/80 max-md:w-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-6xl text-cyan-500">
              <FaUserFriends />
            </div>
            <h1 className="text-neutral-200 font-bold text-2xl mt-8">
              Tentang Kami
            </h1>
            <p className="text-neutral-300 text- text-sm mt-4">
              Aceh Digital Craft merupakan sebuah agensi kreatif yang telah
              beroperasi selama lebih dari 2 tahun. Aceh Digital Craft bergerak
              pada bidang desain dan branding. Bersama Aceh Digital Craft, Anda
              dapat mempercayakan kebutuhan desain dan branding bisnis Anda
              kepada para kami agar membantu Anda tampil lebih profesional dan
              menarik di mata pelanggan. menarik.
            </p>
          </div>
        </div>
      </div>
      <div
        id="portofolio"
        style={{ backgroundImage: `url(${Portofolio})` }}
        className="relative bg-fixed bg-top bg-no-repeat bg-cover w-full h-screen max-md:bg-right"
      >
        <div className="w-1/2 h-full relative bg-neutral-950/80 max-md:w-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-5xl text-cyan-500">
              <FaImage />
            </div>
            <h1 className="text-neutral-200 font-bold text-2xl mt-8">
              Apa Yang Telah Kami Lakukan
            </h1>
            <p className="text-neutral-300 text- text-sm mt-4">
              Kami telah sukses melayani berbagai klien, termasuk UKM,
              perusahaan korporat, dan event. Kami bangga dapat membantu usaha
              Anda dalam memenuhi kebutuhan desain dan branding agar terlihat
              profesional dan memberikan kesan menarik.
            </p>
          </div>
        </div>
      </div>
      <div
        id="service"
        style={{ backgroundImage: `url(${Service})` }}
        className="relative bg-fixed bg-top bg-no-repeat bg-cover w-full h-screen max-md:bg-right"
      >
        <div className="w-1/2 h-full relative bg-neutral-950/80 max-md:w-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-5xl text-cyan-500">
              <FaSuitcase />
            </div>
            <h1 className="text-neutral-200 font-bold text-2xl mt-8">Service</h1>
            <p className="text-neutral-300 text- text-sm mt-4">
              Dengan tim ahli kami yang berpengalaman dalam bidang desain dan
              branding, kami berkomitmen untuk memberikan solusi kreatif dan
              inovatif yang sesuai dengan visi dan identitas merek Anda. Kami
              percaya bahwa desain yang kuat dan branding yang efektif dapat
              memberikan dampak besar pada citra bisnis Anda dan membantu
              meningkatkan daya tarik kepada pelanggan.
            </p>
          </div>
        </div>
      </div>
      <div
        id="contact"
        style={{ backgroundImage: `url(${Contact})` }}
        className="relative bg-fixed bg-top bg-no-repeat bg-cover w-full h-screen max-md:bg-right"
      >
        <div className="w-1/2 h-full relative bg-neutral-950/80 max-md:w-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-5xl text-cyan-500">
              <FaPaperPlane />
            </div>
            <h1 className="text-neutral-200 font-bold text-2xl mt-8">Contact</h1>
            <div className="w-[360px] max-sm:w-[280px] mt-4">
              <p className="text-neutral-300 text- text-sm mb-2">Ceritakan Projek-mu</p>
              <form className="">
                <div className=" relative mb-3 h-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className=" absolute top-0 text-sm left-0 w-full h-full  bg-inherit text-neutral-300 rounded-md outline-none p-4 border-2 border-neutral-950"
                    placeholder="Nama Kamu"
                  />
                </div>
                <div className=" relative mb-3 h-12">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className=" absolute top-0 text-sm left-0 w-full h-full  bg-inherit text-neutral-300 rounded-md outline-none p-4 border-2 border-neutral-950"
                    placeholder="email@example.com"
                  />
                </div>
                <div className=" relative mb-5 h-12">
                  <textarea
                    name="project"
                    id="project"
                    cols="30"
                    rows="10"
                    className=" absolute top-0 text-sm left-0 w-full h-40 resize-none  bg-inherit text-neutral-300 rounded-md outline-none p-4 border-2 ring-black border-neutral-950"
                    placeholder="Mari berdiskusi"
                  />
                </div>
                <button className="inline-flex items-center  bg-cyan-600 duration-300 hover:bg-cyan-700 text-neutral-200 p-[1rem_2rem] rounded-xl font-medium mt-28">
                  Submit
                  <svg
                    className="ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                      fill="rgb(229 229 229)"
                    ></path>
                    <path
                      d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                      fill="rgb(229 229 229)"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
