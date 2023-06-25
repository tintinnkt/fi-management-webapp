import React from 'react';
import './topic.css'

function Topic({text}) {
  return (
    <>
      <header className="topic">
        <h2>{text}</h2>
      </header>
    </>
  );
}

export default Topic;
