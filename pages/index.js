import React, { useState } from 'react';
import InputField from '../components/InputField';
import SliderInput from '../components/SliderInput';
import CalculateButton from '../components/CalculateButton';
import ResetButton from '../components/ResetButton';
import Result from '../components/Result';
import { calculateTime } from '@/utils/calculations';
import IconClockFill from "@/components/Clock";

const Home = () => {
  const [storyPoint, setStoryPoint] = useState(3);
  const [walkthroughTime, setWalkthroughTime] = useState(5);
  const [codingTime, setCodingTime] = useState(0);
  const [miscTime, setMiscTime] = useState(5);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const output = calculateTime(storyPoint, walkthroughTime, codingTime, miscTime);
    setResult(output);
  };

  const handleReset = () => {
    setStoryPoint(3);
    setWalkthroughTime(5);
    setCodingTime(0);
    setMiscTime(5);
    setResult(null);
  };

  return (
      <div className="bg-gray-900 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto p-4">
          <div className="flex flex-col justify-center gap-4 items-center">
            <IconClockFill width="3rem" height="3rem" />
            <h1 className="text-3xl mb-4 text-center">Work Time Estimation</h1>
          </div>
          <div className="flex flex-col gap-4">
            <SliderInput label="Story Point" value={storyPoint} onChange={(e) => setStoryPoint(e.target.value)} />
            <div className="flex flex-col gap-4 md:flex-row">
              <InputField label="Walk through Time (min)" value={walkthroughTime} onChange={(e) => setWalkthroughTime(e.target.value)} />
              <InputField label="Coding Time (min)" value={codingTime} onChange={(e) => setCodingTime(e.target.value)} />
              <InputField label="Misc Time (min)" value={miscTime} onChange={(e) => setMiscTime(e.target.value)} />
            </div>
          </div>
          <div className="mt-4 text-center">
            <div className="flex justify-center space-x-2">
              <CalculateButton onClick={handleCalculate} />
              <ResetButton onClick={handleReset} />
            </div>
            {result !== null && <Result result={result} />}
          </div>
        </div>
      </div>
  );
};

export default Home;
