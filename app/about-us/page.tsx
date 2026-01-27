import Image from "next/image";
import homelander from "../../public/homelander.jpg";
export default function AboutUsPage() {
  return (
    <div>
      <section className="min-h-screen bg-primary text-white py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-5/12 flex justify-center h-full md:justify-end">
          <Image
            src={homelander}
            alt="About Me"
            className="w-72 h-96 md:w-80 lg:w-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-7/12 text-center md:text-left relative">
          <div className="absolute left-[40%] -top-6 md:-left-16  lg:top-0 md:top-6 rotate-0 md:rotate-[-90deg] text-sm tracking-widest">
            <div className="flex items-center justify-center gap-2">
              <div className="w-16 h-[2px] bg-white"></div>
              <p>MORE ABOUT</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 pl-10">
            A Passionate <p className="text-red-500">Software Developer</p>
          </h2>

          <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
            I’m{" "}
            <span className="text-xl font-bold  underline text-amber-400">
              Taing Sengkim
            </span>
            , a passionate Software Developer with expertise in Vue.js, Laravel,
            & modern web technologies. I specialize in building user-friendly
            applications that solve real-world problems. With a deep
            understanding of frontend development, state management, and API
            integration, I can bring your ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#"
              className="bg-tertiary text-white font-semibold py-2 px-4 rounded-lg hover:bg-tertiary/80 text-center"
            >
              See Projects
            </a>
            <a
              href="#"
              className="border border-tertiary text-white font-semibold py-2 px-4 rounded-lg hover:bg-tertiary/10 text-center"
            >
              More Details
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
