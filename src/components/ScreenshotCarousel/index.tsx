"use client";

import type { ProjectScreenShot } from "@/types/project";
import { useEffect, useRef, useState } from "react";
import InnerImage from "./InnerImage";
import ControlDots from "@/components/ScreenshotCarousel/ControlDots";
import StepController from "@/components/ScreenshotCarousel/StepController";

interface ScreenshotCarouselProps {
  screenshots: ProjectScreenShot[];
}

const ScreenshotCarousel = ({ screenshots }: ScreenshotCarouselProps) => {
  const [currentActiveImageIndex, setCurrentActiveImageIndex] = useState(0);
  const currentActiveImageIndexRef = useRef(currentActiveImageIndex);

  // 将 index 同步给 ref
  useEffect(() => {
    currentActiveImageIndexRef.current = currentActiveImageIndex;
  }, [currentActiveImageIndex]);

  // 设置增量
  const setDelta = (delta: number) => {
    const intendImageIndex = currentActiveImageIndexRef.current + delta; // 使用 ref 避免一直都是函数初始化时候的值
    if (intendImageIndex < 0) {
      setCurrentActiveImageIndex(intendImageIndex + screenshots.length);
    } else if (intendImageIndex >= screenshots.length) {
      setCurrentActiveImageIndex(intendImageIndex - screenshots.length);
    } else {
      setCurrentActiveImageIndex(intendImageIndex);
    }
  };

  useEffect(() => {
    let carouselInterval: ReturnType<typeof setInterval> | null = null;
    if (screenshots.length > 1) {
      carouselInterval = setInterval(() => {
        setDelta(1);
      }, 5000); // 5 秒换一张
    }

    return () => {
      if (carouselInterval) {
        clearInterval(carouselInterval);
      }
    };
  }, []);

  return (
    <div className="relative w-full rounded-lg overflow-hidden bg-gray-800 group">
      {/*图片*/}
      <div className="relative h-96 lg:h-128">
        {screenshots.map((screenshot, index) => (
          <InnerImage
            key={screenshot.title}
            screenshot={screenshot}
            isActive={currentActiveImageIndex === index}
          />
        ))}
      </div>

      {/*标题*/}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-sm text-white dark:text-gray-800 rounded-lg px-3 py-1 bg-white/30 opacity-0 transition-opacity dark:bg-gray-800/30 group-hover:opacity-100">
        {screenshots[currentActiveImageIndex].title}
      </div>

      {/*切换用的小点点*/}
      <div className="absolute flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {screenshots.map((screenshot, index) => (
          <ControlDots
            key={screenshot.title}
            isActive={index === currentActiveImageIndex}
            activate={() => setCurrentActiveImageIndex(index)}
          />
        ))}
      </div>

      {/*步进切换控制器*/}
      {screenshots.length > 1 && <StepController setDelta={setDelta} />}
    </div>
  );
};

export default ScreenshotCarousel;
