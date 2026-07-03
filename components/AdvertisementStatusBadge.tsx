interface Props  {
    active: boolean;
}

export default function AdvertisementsStatusBadge({active}: Props) {
    return (
        <span className={`
            px-3 py-1 rounded-full text-sm font-semibold 
            ${
                active
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-700"
            }
            `}
        >
            {active ? "Active" : "Inactive"}
        </span>
    )
}