"use client";
import { useEffect, useState } from "react";
import CardBars from "@components/CardBars"; // Assuming you have set up your import aliases correctly
import Cards from "@components/Cards"; // Adjust the path based on your project structure
import Layout from "@components/Layout";
import Table from "@components/Table";
import BetAmount from "@components/BetAmount";
import more from "@public/images/more.svg";

let seq = 0;
let seqs = 1;
const Home = () => {
  const [number, setNumber] = useState(550);
  const [hide, setHide] = useState(false);
  const [counter, setCounter] = useState(12.45);
  const [list, setList] = useState([]);
  const [lists, setLists] = useState([]);
  const [listed, setListed] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (number != 550) {
      } else {
        const newList = [
          ...list,
          { id: seq + Math.floor(Math.random() * 6) + 1 },
        ];
        newList?.sort((a, b) => b.id - a.id);
        setList(newList);

        const newLists = [
          ...lists,
          { id: seq + Math.floor(Math.random() * 5) + 1 },
        ];
        newLists?.sort((a, b) => b.id - a.id);
        setLists(newLists);

        setListed([...listed, { id: seq + Math.floor(Math.random() * 5) + 1 }]);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [list, number]);
  const maxLimit = 70000; // Set a max limit to prevent indefinite increase
  const updateInterval = 50;
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter <= 0) {
          setHide(true);
          setNumber((prevNumber) => {
            const nextNumber = prevNumber * 1.01;
            return nextNumber > maxLimit ? nextNumber / 1.4 : nextNumber;
          });
          setDisabled(false);
          return 0;
        } else {
          setDisabled(true);
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
        setList([]);
        setListed([]);
        setLists([]);

        setNumber(550);
        setCounter(12.45);
      }
    }, 11450); // 12.45 seconds

    return () => clearTimeout(timeout);
  }, [counter]);

  return (
    <Layout>
      <div className="details-wrapper">
        <div className="detail-box">
          <div className="row align-items-center mb-4">
            <div className="col-md-8 col-6">
              <p className="title text-uppercase mb-0">Roulette</p>
            </div>
            <div className="col-md-4 col-6 text-right ">
              <img src={"/images/soundon.svg"} />{" "}
              <span className="sound-text">Sound on</span>
            </div>
          </div>
          <div
            className="roll d-flex align-items-center position-relative mb-4"
            style={{
              transition: "background-position 0.8s ease",
              backgroundPosition: `${number}px center`,
            }}
          >
            {!hide ? (
              <div className="d-flex position-relative w-100 justify-content-center flex-column align-items-center">
                <div className="rolling">ROLLING</div>
                <div className="count">
                  {counter.toFixed(2) < 0 ? 0 : counter.toFixed(2)}
                </div>
              </div>
            ) : (
              <div
                className="bar m-auto"
                style={{ height: "100%", width: "2px", background: "red" }}
              ></div>
            )}
            {!hide && <div className="mask position-absolute z-3 "></div>}
          </div>

          <BetAmount />

          <div className="card-wrapper flex-md-wrap card-wrapper-padding">
            <div className="card-container mb-lg-0 mb-5">
              <CardBars
                image="/images/Coin1.svg"
                text="Win 2x"
                number={number}
              />
              <Cards list={lists} id="first" number={number} />
            </div>
            <div className="card-container mb-lg-0 mb-5">
              <CardBars
                image="/images/Coin2.svg"
                text="Win 14x"
                number={number}
              />
              <Cards list={list} id="second" number={number} />
            </div>
            <div className="card-container mb-lg-0 mb-5">
              <CardBars
                image="/images/Coin3.svg"
                text="Win 2x"
                number={number}
              />
              <Cards list={listed} id="third" number={number} />
            </div>
          </div>
        </div>
        <Table />
      </div>
    </Layout>
  );
};

export default Home;
