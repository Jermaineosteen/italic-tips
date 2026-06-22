export default function CategoryBadge({category}: {category: string}) {
    return (
        <span
            className="text-xs px-2 py-1 rounded-full bg-blue-100"
        >
            {category}
        </span>
    )
}