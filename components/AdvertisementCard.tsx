import Image from "next/image";

import { deleteAdvertisement, toggleAdvertisement } from "@/app/actions/advertisement";

type Advertisement = {
    id: string;
    title: string;
    image_url: string;
    target_url: string;
    position: string;
    priority: number;
    active: boolean;
}

interface Props {
    advertisement: Advertisement;
}

export default function AdvertisementCard({advertisement}: Props) {
    return (
        <div className="rounded-3xl bg-white border shadow-sm overflow-hidden">
            <Image
                src={advertisement.image_url}
                alt={advertisement.title}
                width={600}
                height={240}
                className="w-full h-40 object-cover"
            />

            <div className="p-5 space-y-3">
                <div className="flex justify-between">
                    <h3 className="font-bold text-lg">
                        {advertisement.title}
                    </h3>
                    <span
                        className={`
                            px-3 py-1 rounded-full text-xs font-semibold
                            ${advertisement.active}
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-red-100 text-red-700"
                            `
                    }
                    >
                        {advertisement.active ? "Active" : "Inactive"}
                    </span>
                </div>

                <p className="text-sm text-slate-500">
                    Position: {advertisement.position}
                </p>

                <p className="text-sm text-slate-500">
                    Priority: {advertisement.priority}
                </p>

                <div className="grid grid-cols-2 gap-3">
                    <form action={async () => {
                        "use server";
                        await toggleAdvertisement(
                            advertisement.id,
                            advertisement.active
                        );
                    }}>
                        <button
                            className="w-full rounded-xl bg-emerald-500 text-white py-2"
                        >
                            {advertisement.active ? "Disable" : "Enable"}
                        </button>
                    </form>

                    <form action={async () => {
                        "use server";
                        await deleteAdvertisement(advertisement.id);
                    }}>
                        <button
                            className="w-full rounded-xl bg-red-500 text-white py-2"
                        >
                            Delete
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}