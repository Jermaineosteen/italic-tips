import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  deleteAdvertisement,
  toggleAdvertisement,
} from "@/app/actions/advertisement";

type Advertisement = {
  id: string;
  title: string;
  image_url: string;
  target_url: string;
  position: string;
  priority: number;
  active: boolean;
};

interface Props {
  advertisement: Advertisement;
}

export default function AdvertisementCard({
  advertisement,
}: Props) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">

      <div className="relative h-44 w-full">
        <Image
          src={advertisement.image_url}
          alt={advertisement.title}
          fill
          className="object-cover"
        />
      </div>

      <CardContent className="space-y-4 pt-5">

        <div className="flex items-start justify-between gap-3">

          <h3 className="text-lg font-bold">
            {advertisement.title}
          </h3>

          <Badge
            variant={
              advertisement.active
                ? "default"
                : "destructive"
            }
          >
            {advertisement.active
              ? "Active"
              : "Inactive"}
          </Badge>

        </div>

        <div className="space-y-2 text-sm text-muted-foreground">

          <div className="flex justify-between">
            <span>Position</span>
            <span className="font-medium text-foreground">
              {advertisement.position}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Priority</span>
            <span className="font-medium text-foreground">
              #{advertisement.priority}
            </span>
          </div>

        </div>

      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-3">

        <form
          action={async () => {
            "use server";

            await toggleAdvertisement(
              advertisement.id,
              advertisement.active
            );
          }}
        >
          <Button
            className="w-full"
            variant={
              advertisement.active
                ? "secondary"
                : "default"
            }
          >
            {advertisement.active
              ? "Disable"
              : "Enable"}
          </Button>
        </form>

        <form
          action={async () => {
            "use server";

            await deleteAdvertisement(
              advertisement.id
            );
          }}
        >
          <Button
            className="w-full"
            variant="destructive"
          >
            Delete
          </Button>
        </form>

      </CardFooter>

    </Card>
  );
}