const Table = () => {
	return (
		<div className="detail-box mt-4">
			<div className="row">
				<div className="col-8">
					<p className="title">Daily Roulette Race</p>
				</div>
				<div className="col-4 text-right ">
					<p className="end-text">Ends in 5h 23 min 11 sec</p>
				</div>
			</div>
			<div className="card-wrapper-table flex-md-wrap mw-100">
				<div className="table-responsive">
					<table className="table">
						<tr>
							<th>Game</th>
							<th>Time</th>
							<th>Bet Amount</th>
							<th>Multiplayer</th>
							<th>Payout</th>
						</tr>
						<tr>
							<td>Arsenal (Alicia) - Chelsea (July)</td>
							<td>00:23</td>
							<td>0.46278200</td>
							<td>1,01</td>
							<td className="success">0.47378200</td>
						</tr>
						<tr>
							<td>Arsenal (Alicia) - Chelsea (July)</td>
							<td className="time">00:23</td>
							<td>0.46278200</td>
							<td className="multi">1,01</td>
							<td className="red">0.47378200</td>
						</tr>
						<tr>
							<td>Arsenal (Alicia) - Chelsea (July)</td>
							<td>00:23</td>
							<td>0.46278200</td>
							<td>1,01</td>
							<td className="success">0.47378200</td>
						</tr>
						<tr>
							<td>Arsenal (Alicia) - Chelsea (July)</td>
							<td>00:23</td>
							<td>0.46278200</td>
							<td>1,01</td>
							<td className="success">0.47378200</td>
						</tr>
						<tr>
							<td>Arsenal (Alicia) - Chelsea (July)</td>
							<td>00:23</td>
							<td>0.46278200</td>
							<td>1,01</td>
							<td className="success">0.47378200</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Table;
