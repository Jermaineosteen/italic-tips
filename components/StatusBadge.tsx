export default function StatusBadge({status,}: {status: string}) {
    const styles = {
        pending:
            "bg-yellow-100 text-yellow-700",
        won:
            "bg-green-100 text-green-700",
        lost:
            "bg-red-100 text-red-700",
        void:
            "bg-gray-100 text-gray-700",
    };

    return (
        <span
            className={`px-3 py-1 rounded-full text-sm ${styles[status as keyof typeof styles]}`}
        >
            {status}
        </span>
    )
}