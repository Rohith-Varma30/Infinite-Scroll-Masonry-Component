import { useNavigate } from "react-router-dom";

export default function MediaCard({ item }) {
  const navigate = useNavigate();

  return (
    <div className="grid-item" onClick={() => navigate(`/g/${item.generation_id}`)} style={{ cursor: "pointer" }}>
      {item.type === "video" ? (
        <video width="100%" controls>
          <source src={item.url} />
        </video>
      ) : (
        <img src={item.url} alt="" style={{ width: "100%", borderRadius: "8px" }} />
      )}
    </div>
  );
}
