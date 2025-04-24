import { BaseInfo } from "@/Data/data";
import Image from "next/image";
import React from "react";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className="w-full pt-[4vh] md:pt-[6vh] h-full overflow-hidden"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <div className="flex justify-center flex-col w-4/5 h-auto pt-12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div>
            <h1
              data-aos="fade-down"
              data-aos-delay="100"
              className="text-2xl md:text-3xl lg:text-4xl my-5 font-semibold t"
              style={{ color: "var(--text-secondary)" }}
            >
              Hi There 👋🏼 <br /> Sou <strong>{BaseInfo.name}.</strong>
            </h1>

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem]"
              style={{ color: "var(--text-primary)" }}
            >
              {BaseInfo.position}
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-6 text-sm md:text-base"
              style={{ color: "var(--text-secondary)" }}
            >
              {BaseInfo.description}
            </p>

            <a href="/curriculo-wander-europass.pdf" download>
              <button
                data-aos="zoom-down"
                data-aos-delay="2000"
                className="md:px-8 md:py-2.5 px-6 py-1.5 font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg my-8 flex items-center space-x-2"
                style={{
                  backgroundColor: "var(--button-bg)",
                  color: "var(--text-primary)",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--button-bg-hover)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--button-bg)")
                }
              >
                <span>Download CV</span>
                <FaDownload />
              </button>
            </a>
          </div>

          {/* Image Content */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="m-auto p-auto w-[18.75rem] h-[18.75rem] md:w-[400px] md:h-[380px] md:flex lg:block rounded-[3rem] overflow-hidden"
            style={{ border: "3.5px solid var(--border-color)" }}
          >
            <Image
              src="/images/minha-foto.png"
              alt={BaseInfo.name}
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
