export const fetchContent = async ({ pageParam = 0 }) => {
  await new Promise((res) => setTimeout(res, 1000)); 
  const limit = 20;
  const start = pageParam;
  const end = pageParam + limit;

  
  const data = Array.from({ length: limit }).map((_, i) => {
    const id = start + i + 1;
    return {
      id,
      type: id % 4 === 0 ? "video" : "image",
      url: `https://picsum.photos/id/${(id % 100) + 1}/500/300`, 
      generation_id: `gen-${id}`,
    };
  });

  return { data, nextOffset: end };
};
