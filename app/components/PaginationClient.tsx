"use client";

import { Pagination } from "@nextui-org/pagination";

const PaginationClient = ({
  totalPage,
  initialPage,
}: {
  totalPage: number;
  initialPage: number;
}) => {
  return (
    <Pagination
      isCompact
      showControls
      total={totalPage}
      initialPage={initialPage ? initialPage : 1}
      onChange={(page) => console.log(page)}
    />
  );
};

export default PaginationClient;
