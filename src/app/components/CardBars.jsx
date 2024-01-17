const CardBars = ({ image, text }) => {
  return (
    <div className="card-bar">
      <span className="d-flex align-items-center coin-span">
        <img src={image} alt="coin" className="mr-2" />
        Place Bet
      </span>
      <span className="win-span">{text}</span>
    </div>
  );
};

export default CardBars;
