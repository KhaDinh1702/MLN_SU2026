"use client";

import React, { useRef } from "react";
import { useSpring, animated, to } from "@react-spring/web";

const calc = (x: number, y: number, rect: DOMRect) => [
  -(y - rect.top - rect.height / 2) / 20,
  (x - rect.left - rect.width / 2) / 20,
  1.05,
];

const trans = (x: number, y: number, s: number) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

interface SpringInteractiveCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function SpringInteractiveCard({
  children,
  className = "",
}: SpringInteractiveCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [props, api] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 400, friction: 30 },
  }));

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    api.start({ xys: calc(e.clientX, e.clientY, rect) });
  };

  const handleMouseLeave = () => {
    api.start({ xys: [0, 0, 1] });
  };

  return (
    <animated.div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: to(props.xys as any, trans as any),
        willChange: "transform",
      }}
    >
      {children}
    </animated.div>
  );
}
