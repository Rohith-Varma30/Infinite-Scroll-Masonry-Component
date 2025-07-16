import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchContent } from "../api-fetch/fetchContent";

export default function Generation() {
  const { generation_id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["generation", generation_id],
    queryFn: async () => {
      const result = await fetchContent({ pageParam: 0 });
      return result.data.find((item) => item.generation_id === generation_id);
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>Generation: {generation_id}</h2>
      {data?.type === "video" ? (
        <video width="100%" controls>
          <source src={data.url} />
        </video>
      ) : (
        <img src={data.url} width="100%" alt="" />
      )}
    </div>
  );
}
