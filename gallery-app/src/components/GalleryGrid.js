import MediaCard from "./MediaCard";
import SkeletonCard from "./SkeletonCard";

export default function GalleryGrid({ items, isLoading }) {
  return (
    <div className="grid">
      {items.map((item) => (
        <MediaCard key={item.id} item={item} />
      ))}
      {isLoading &&
        Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
    </div>
  );
}
