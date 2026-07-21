import AdminSectionSkeleton from "@/components/skeletons/AdminSectionSkeleton";

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">

      {Array.from({ length: 6 }).map((_, i) => (

        <AdminSectionSkeleton key={i} />

      ))}

    </div>
  );
}