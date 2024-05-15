"use client";

import { Pagination } from "@nextui-org/pagination";
import { useRouter } from "next/navigation";

const PaginationClient = ({
  totalPage,
  page,
}: {
  totalPage: number;
  page: number;
}) => {
  const router = useRouter();

  const handleOnClick = (e: number) => {
    router.push(`/news/articles?page=${e}&size=10`);
  };
  return (
    <Pagination
      isCompact
      showControls
      total={totalPage}
      page={page}
      onChange={handleOnClick}
    />
  );
};

export default PaginationClient;
