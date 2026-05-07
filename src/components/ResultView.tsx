import React from 'react';

interface ResultViewProps {
  score: number;
  total: number;
  onRestart: () => void;
}

const ResultView: React.FC<ResultViewProps> = ({ score, total, onRestart }) => {
  return (
    <div className="result-view">
      <h2>クイズ終了！</h2>
      <p className="score-display">
        <strong>{total}</strong> 問中 <strong>{score}</strong> 問正解
      </p>
      <button className="restart-button" onClick={onRestart}>
        トップに戻る
      </button>
    </div>
  );
};

export default ResultView;
