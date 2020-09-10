import React, { useEffect, useState } from "react";

const DadJoke = () => {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    fetch("https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1")
      .then((response) => response.json())
      .then((json) => setJoke(json.data.children[0].data));
  }, []);

  return (
    <div className="DadJoke">
      <p>{joke.title}</p>
      <p>{joke.selftext}</p>
    </div>
  );
};

export default DadJoke;
