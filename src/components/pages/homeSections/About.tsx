"use client";
import { FC } from "react";
import scss from "./About.module.scss";
import card from "@/assets/image/Component 41.png";
import Image from "next/image";
import img from "@/assets/image/Frame 71.svg";
import mage from "@/assets/image/Frame 71 (1).svg";
import ling from "@/assets/image/Frame 71 (2).svg";
import leem from "@/assets/image/Frame 71 (3).svg";

const About: FC = () => {
  return (
    <section className={scss.About}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.about}>
            <h1>
              This is Why We Are <br />
              Best From Others
            </h1>

            <p>
              We provide full support at all stages of preparation, including
              assistance in filing documents and preparing for an interview.
              Contact us and start your journey to higher education abroad!
            </p>
            <Image src={card} alt="card" />
          </div>
          <div className={scss.sign}>
            <div className={scss.ligh}>
              <Image src={img} alt="img" />
              <h3>1000+ Partners</h3>
              <p>
                Over 1000+ Partners Worldwide Enter The Best Universities In The
                World
              </p>
            </div>
            <div className={scss.ligh}>
              <Image src={mage} alt="img" />
              <h3>Experts</h3>
              <p>We Are Experts In Our Field. Help You Reach New Heights</p>
            </div>
            <div className={scss.ligh}>
              <Image src={ling} alt="img" />
              <h3>Time</h3>
              <p>
                We will help you save your time and nerves when applying to the
                best university.
              </p>
            </div>
            <div className={scss.ligh}>
              <Image src={leem} alt="img" />
              <h3>Affordable prices</h3>
              <p>
                Reasonable Prices Will Always Please You. Sign Up Uor A
                Consultation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
