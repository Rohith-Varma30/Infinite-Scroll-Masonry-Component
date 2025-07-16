import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchContent } from "../api-fetch/fetchContent";
import GalleryGrid from "../components/GalleryGrid";

export default function Gallery() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["gallery"],
    queryFn: fetchContent,
    getNextPageParam: (lastPage) =>
      lastPage.data.length ? lastPage.nextOffset : undefined,
  });

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const items = data?.pages.flatMap((page) => page.data) || [];

  return (
    <>
      <h1>Gallery</h1>
      <GalleryGrid items={items} isLoading={isLoading || isFetchingNextPage} />
    </>
  );
}
