import React from "react";

const Rating = ({ rate, count }: { rate: number; count: number }) => {
  return (
    <>
      <span className="text-(--star-color) flex items-center text-sm font-medium">
        ★ {rate}
        <span className="ml-1 text-(--muted-foreground)">
          ({count} ratings)
        </span>
      </span>
    </>
  );
};

export default Rating;
