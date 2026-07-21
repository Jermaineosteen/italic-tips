"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { toast } from "sonner";

import {
  CheckCircle2,
  CircleSlash,
  Loader2,
  Pencil,
  Star,
  Trash2,
  XCircle,
} from "lucide-react";

import { Prediction } from "@/types/prediction";

import {
  updateStatus,
  deletePrediction,
  toggleFeatured,
} from "@/app/admin/action";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface PredictionTableProps {
  predictions: Prediction[];
}

export default function PredictionTable({
  predictions,
}: PredictionTableProps) {
  const [isPending, startTransition] = useTransition();
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  async function handleStatus(
    prediction: Prediction,
    status: "won" | "lost" | "void"
  ) {
    setLoadingId(prediction.id);
    startTransition(async () => {
      try {
        await updateStatus(
          prediction.id,
          status
        );
        toast.success(
          `Prediction marked as ${status}`
        );
      } catch {
        toast.error(
          "Failed to update prediction"
        );
      } finally {
        setLoadingId(null);
      }
    });
  }
  async function handleDelete(id: string) {
    setLoadingId(id);
    startTransition(async () => {
      try {
        await deletePrediction(id);
        toast.success(
          "Prediction deleted"
        );
      } catch {
        toast.error(
          "Failed to delete prediction"
        );
      } finally {
        setLoadingId(null);
        setDeleteId(null);
      }
    });
  }

  async function handleFeature(
    prediction: Prediction
  ) {
    setLoadingId(prediction.id);
    startTransition(async () => {
      try {
        await toggleFeatured(
          prediction.id,
          prediction.featured
        );
        toast.success(
          prediction.featured
            ? "Removed from featured"
            : "Added to featured"
        );
      } catch {
        toast.error(
          "Failed to update featured status"
        );
      } finally {
        setLoadingId(null);
      }
    });
  }

  if (!predictions.length) {
    return (
      <Card>
        <CardContent className="p-8 text-center text-muted-foreground">
          No predictions available.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-5">
      {predictions.map((prediction) => {
        const loading =
          loadingId === prediction.id;
        return (
          <Card
            key={prediction.id}
            className="overflow-hidden transition hover:shadow-lg"
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-bold">
                    {prediction.match_name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {prediction.country}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {prediction.featured && (
                    <Badge
                      variant="secondary"
                      className="gap-1"
                    >
                      <Star className="h-3 w-3 fill-current"/>
                      Featured
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="rounded-xl bg-gradient-to-r from-emerald-50 to-cyan-50 p-4">
                <p className="font-semibold text-slate-900">
                  {prediction.prediction}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">
                  {prediction.category}
                </Badge>
                <Badge variant="outline">
                  {new Date(
                    prediction.kickoff_time
                  ).toLocaleString()}
                </Badge>
                <Badge
                  variant={
                    prediction.status === "won"
                      ? "default"
                      : prediction.status === "lost"
                      ? "destructive"
                      : "secondary"
                  }
                >
                  {prediction.status}
                </Badge>
              </div>
              <Separator />

            <div className="flex flex-col gap-3">
                {/* Edit */}
                <Link
                  href={`/admin/edit/${prediction.id}`}
                >
                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    disabled={loading}
                  >
                    <Pencil className="h-4 w-4" />
                    Edit Prediction
                  </Button>
                </Link>

                {/* Result Actions */}
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    disabled={loading}
                    onClick={() =>
                      handleStatus(
                        prediction,
                        "won"
                      )
                    }
                    className="gap-1 bg-green-600 hover:bg-green-700"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <CheckCircle2 className="h-4 w-4" />
                    )}
                    Won
                  </Button>
                  <Button
                    disabled={loading}
                    onClick={() =>
                      handleStatus(
                        prediction,
                        "lost"
                      )
                    }
                    variant="destructive"
                    className="gap-1"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <XCircle className="h-4 w-4" />
                    )}
                    Lost
                  </Button>
                  <Button
                    disabled={loading}
                    onClick={() =>
                      handleStatus(
                        prediction,
                        "void"
                      )
                    }
                    variant="secondary"
                    className="gap-1"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <CircleSlash className="h-4 w-4" />
                    )}
                    Void
                  </Button>
                </div>

                {/* Feature */}
                <Button
                  disabled={loading}
                  onClick={() =>
                    handleFeature(prediction)
                  }
                  variant="outline"
                  className="gap-2"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Star className="h-4 w-4" />
                  )}
                  {prediction.featured
                    ? "Remove Featured"
                    : "Make Featured"}
                </Button>

                {/* Delete */}
                <AlertDialog
                  open={deleteId === prediction.id}
                  onOpenChange={(open) =>
                    setDeleteId(
                      open
                        ? prediction.id
                        : null
                    )
                  }
                >
                  <AlertDialogTrigger
                    render={
                        <Button
                            variant="destructive"
                            className="gap-2"
                            disabled={loading}
                        >
                            {loading ? (
                                <Loader2 className="h-4 w-4 animate-spin"/>
                            ) : (
                                <Trash2 className="h-4 w-4"/>
                            )}
                            Delete Prediction
                        </Button>
                    }
                    
                  />

                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Delete prediction?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone.
                        The prediction will be permanently removed.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() =>
                          handleDelete(
                            prediction.id
                          )
                        }
                        className="bg-red-600 hover:bg-red-700"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
            <CardFooter className="border-t bg-muted/30 py-3">
              <p className="text-xs text-muted-foreground">
                ID: {prediction.id}
              </p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}