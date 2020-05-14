import React from 'react';

const Score = props => (
<div
    className="gameScore">
        <h4 className="score">Your Score{props.total}</h4>
        <h4 className="status">{props.status}</h4>
</div>
);


export default Score;