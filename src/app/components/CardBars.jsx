const CardBars = () => {
  return (
    <div className="card-bar">
      <span className="d-flex align-items-center coin-span">
        <img src={"/images/Coin-bar.svg"} alt="coin" className="mr-2" />
        Place Bet
      </span>
      <span className="win-span">Win 2x</span>
    </div>
  );
};

export default CardBars;
