"use client";
// import Image from 'next/image';
// import { Carousel, CarouselItem } from './Carousel';

// const items = Array.from({ length: 20 }).map((_, i) => ({
//   id: i,
//   src: `https://picsum.photos/500?idx=${i}`
// }));

// const MainCarousel = () => (
//   <Carousel
//     items={items}
//     renderItem={({ item, isSnapPoint }) => (
//       <CarouselItem key={item.id} isSnapPoint={isSnapPoint}>
//         <Image src={item.src} width="250" height="250" alt="" />
//       </CarouselItem>
//     )}
//   />
// );

// export default MainCarousel;

import React from "react";
import { useSnapCarousel } from "react-snap-carousel";

const styles = {
  root: {},
  scroll: {
    position: "relative",
    display: "flex",
    overflow: "auto",
    scrollSnapType: "x mandatory",
  },
  item: {
    width: "250px",
    height: "250px",
    flexShrink: 0,
  },
  itemSnapPoint: {
    scrollSnapAlign: "start",
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  nextPrevButton: {},
  nextPrevButtonDisabled: { opacity: 0.3 },
  pagination: {
    display: "flex",
  },
  paginationButton: {
    margin: "10px",
  },
  paginationButtonActive: { opacity: 0.3 },
  pageIndicator: {
    display: "flex",
    justifyContent: "center",
  },
};

const MainCarousel = () => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();
  return (
    <>
      <ul
        ref={scrollRef}
        style={{
          position: "relative",
          display: "flex",
          overflow: "auto",
          scrollSnapType: "x mandatory",
          width: "900px",
          overflowX: "hidden",
          backgroundColor: "aqua",
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <li
            key={i}
            style={{
              width: "450px",
              height: "250px",
              flexShrink: 0,
              border: "1px solid red",
              marginRight: "0px",
            }}
          >
            Item {i}
          </li>
        ))}
      </ul>
      <div>
        {activePageIndex + 1} / {pages.length}
      </div>
      <button onClick={() => prev()}>Prev</button>
      <button onClick={() => next()}>Next</button>
      <ol style={{ display: "flex" }}>
        {pages.map((_, i) => (
          <li key={i}>
            <button
              style={i === activePageIndex ? { opacity: 0.5 } : {}}
              onClick={() => goTo(i)}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default MainCarousel;
