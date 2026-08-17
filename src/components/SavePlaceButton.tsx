import { useEffect, useState } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export function SavePlaceButton({ slug, title }: { slug: string; title: string }) {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!user) {
      setSaved(false);
      return;
    }
    let active = true;
    supabase
      .from("saved_places")
      .select("id")
      .eq("place_slug", slug)
      .maybeSingle()
      .then(({ data }) => {
        if (active) setSaved(Boolean(data));
      });
    return () => {
      active = false;
    };
  }, [user, slug]);

  async function onClick() {
    if (loading) return;
    if (!user) {
      toast.info("Sign in to save places to your trip");
      navigate({ to: "/auth" });
      return;
    }
    setBusy(true);
    if (saved) {
      const { error } = await supabase
        .from("saved_places")
        .delete()
        .eq("user_id", user.id)
        .eq("place_slug", slug);
      if (error) toast.error(error.message);
      else {
        setSaved(false);
        toast.success(`Removed ${title}`);
      }
    } else {
      const { error } = await supabase
        .from("saved_places")
        .insert({ user_id: user.id, place_slug: slug, place_title: title });
      if (error) toast.error(error.message);
      else {
        setSaved(true);
        toast.success(`Saved ${title} to your trip`);
      }
    }
    setBusy(false);
  }

  return (
    <button
      onClick={onClick}
      disabled={busy}
      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent disabled:opacity-60"
    >
      {saved ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}
      {saved ? "Saved" : "Save to my trip"}
    </button>
  );
}
