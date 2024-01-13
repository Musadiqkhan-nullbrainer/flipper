"use client";
import { useEffect, useState } from "react";
import CardBars from "@components/CardBars"; // Assuming you have set up your import aliases correctly
import Cards from "@components/Cards"; // Adjust the path based on your project structure
import Layout from "@components/Layout";
import Table from "@components/Table";
import BetAmount from "@components/BetAmount";

const Home = () => {
  const [number, setNumber] = useState(550);
  const [hide, setHide] = useState(false);
  const [counter, setCounter] = useState(12.45);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter <= 0) {
          setHide(true);
          setNumber((prevNumber) => prevNumber * 1.05);
          return 0;
        }
        setHide(false);
        return prevCounter - 0.1;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (counter <= 0) {
        setNumber(550);
        setCounter(12.45);
      }
    }, 12450); // 12.45 seconds

    return () => clearTimeout(timeout);
  }, [counter]);

  return (
    <Layout>
      <div className="details-wrapper">
        <div className="detail-box">
          <div className="row">
            <div className="col-8">
              <p className="title text-uppercase">Roulette</p>
            </div>
            <div className="col-4 text-right ">
              <img src={"/images/soundon.svg"} />{" "}
              <span className="sound-text">Sound on</span>
            </div>
          </div>
          <div
            className="roll d-flex align-items-center position-relative mb-4"
            style={{
              transition: "none",
              backgroundPosition: `${number}px center`,
            }}
          >
            {!hide && (
              <div className="d-flex position-relative w-100 justify-content-center flex-column align-items-center">
                <div className="rolling">ROLLING</div>
                <div className="count">{counter.toFixed(2)}</div>
              </div>
            )}
            {!hide && <div className="mask position-absolute z-3 "></div>}
          </div>

          <BetAmount />

          <div className="card-wrapper flex-md-wrap card-wrapper-padding">
            <div className="card-container mb-lg-0 mb-5">
              <CardBars />
              <Cards />
            </div>
            <div className="card-container mb-lg-0 mb-5">
              <CardBars />
              <Cards count={true} />
            </div>
            <div className="card-container mb-lg-0 mb-5">
              <CardBars />
              <Cards />
            </div>
          </div>
        </div>
        <Table />
      </div>
    </Layout>
  );
};

export default Home;
