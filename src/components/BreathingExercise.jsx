import React, { useState, useEffect, useRef } from "react";

const BreathingExercise = () => {
  const [phase, setPhase] = useState("Breathe In");
  const [scale, setScale] = useState("scale-100");
  const [isPaused, setIsPaused] = useState(false);

  const timeoutRef = useRef(null);
  const countRef = useRef(0);

  useEffect(() => {
    const steps = [
      { phase: "Breathe In", duration: 4000, scaleAnimated: true },
      { phase: "Hold", duration: 2000, scaleAnimated: false },
      { phase: "Breathe Out", duration: 4000, scaleAnimated: true },
      { phase: "Hold", duration: 2000, scaleAnimated: false },
    ];

    const loop = () => {
      if (isPaused) return;

      const step = steps[countRef.current % steps.length];
      setPhase(step.phase);

      // Animate scale only during Breathe In and Breathe Out
      if (step.scaleAnimated) {
        // Animate zoom in and out continuously during breathing
        setScale("scale-125");
        setTimeout(() => {
          setScale("scale-100");
        }, step.duration / 2);
      } else {
        // Hold phase: steady scale
        setScale("scale-100");
      }

      timeoutRef.current = setTimeout(() => {
        countRef.current++;
        loop();
      }, step.duration);
    };

    loop();

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [isPaused]);

  return (
    <div className="text-center mt-10">
      <h2 className="text-xl font-semibold mb-2">Breathing Exercise</h2>
      <p className="italic mb-6">
        Follow the rhythm: inhale... hold... exhale... hold
        <br />
        <span>And breathe deeply</span>
      </p>
      <div className="flex justify-center items-center h-64 relative">
        {/* Outer Ring */}
        <div className="w-52 h-52 rounded-full border-4 border-blue-400 absolute"></div>
        {/* Inner Circle */}
        <div
          className={`w-40 h-40 rounded-full bg-blue-400 transition-transform duration-2000 ease-in-out ${scale}`}
          style={{ zIndex: 10 }}
        ></div>
      </div>
      <p className="text-lg font-medium mt-6">{phase}</p>

      <div className="mt-4 space-x-4">
        <button
          onClick={() => setIsPaused(true)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isPaused}
        >
          Pause
        </button>
        <button
          onClick={() => setIsPaused(false)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!isPaused}
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default BreathingExercise;
