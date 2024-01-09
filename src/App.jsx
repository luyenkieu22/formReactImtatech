import { useState } from "react";
import Button from "./components/Button";

import Essay from "./components/Essay";
import Topic from "./components/Topic";
function App() {
  const [currentChoice, setCurrentChoice] = useState("topic");

  const handleSelectChoicEssay = () => {
    setCurrentChoice("essay");
  };
  const handleSelectChoicTopic = () => {
    setCurrentChoice("topic");
  };
  return (
    <>
      <div className="sm:w-full flex justify-center">
        <div className="w-[932px] mt-10 flex flex-col px-[4.1%] ">
          <div className="flex xs:flex-col sm:flex-row  xs:w-100 justify-between sm:gap-5 xs:gap-2">
            <Button
              type={currentChoice === "topic" ? "active" : "outline"}
              handleClick={handleSelectChoicTopic}
              className={`sm:w-1/2 xs:w-100 xs:py-2`}
            >
              Writing Topic
            </Button>
            <Button
              type={currentChoice === "essay" ? "active" : "outline"}
              handleClick={handleSelectChoicEssay}
              className={` sm:w-1/2 xs:w-100 xs:py-2`}
            >
              From Your Essay
            </Button>
          </div>
          {currentChoice === "essay" ? <Essay /> : <Topic />}
        </div>
      </div>
    </>
  );
}

export default App;
