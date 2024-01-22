const CardBars = ({ image, text, number }) => {
  return (
    <div className={number != 550 ? "disabled card-bar" : "card-bar"}>
      <span className="d-flex align-items-center coin-span">
        <img src={image} alt="coin" className="mr-2" />
        Place Bet
      </span>
      <span className="win-span">{text}</span>
    </div>
  );
};

export default CardBars;
