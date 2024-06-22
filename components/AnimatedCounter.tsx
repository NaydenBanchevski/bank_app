"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <p className="total-balance-amount flex-center gap-2">
        <CountUp
          decimal=","
          prefix="$"
          duration={1.25}
          decimals={2}
          end={amount}
        />
      </p>
    </div>
  );
};

export default AnimatedCounter;
