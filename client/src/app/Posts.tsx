import { useNavigate } from "@solidjs/router";
import { AppLayout } from "../components/Content";
import { createEffect, createSignal, Show } from "solid-js";
import { IconAnimateLoading, IconClose, IconMedia } from "../components/Icons";

export function CreatePost() {
  const navigate = useNavigate();
  const [content, setContent] = createSignal("");
  const [isLoading, setLoading] = createSignal(false);
  const [error, setError] = createSignal<string | null>(null);
  const [mediaFile, setMediaFile] = createSignal<File | null>(null);
  const [mediaPreview, setMediaPreview] = createSignal<string | null>(null);
  const [mediaType, setMediaType] = createSignal<"image" | "video" | null>(null);

  let fileInputRef: HTMLInputElement | undefined;

  createEffect(() => {
    const url = mediaPreview();
    return () => {
      if (url) URL.revokeObjectURL(url);
    }
  });

  const handleMedia = (e: Event) => {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const mimetype = file.type.startsWith("video/") ? "video" : "image";
    if (mimetype === "video" && file.size > 50 * 1024 * 1024) { //limit 50 mb
      setError("Video terlalu besar, maks 50mb");
      return;
    }
    setMediaFile(file);
    setMediaType(mimetype);
    setMediaPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    if (!content().trim()) {
      setError("Tolong ketik sesuatu");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await new Promise(r => setTimeout(r, 1200));
      navigate("/", {replace: true});
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout title="Buat Postingan" navigate="/">
      <form onSubmit={handleSubmit} class="flex flex-col min-h-[calc(100vh-4rem)]">
        <div class="flex-1 p-5">
          <textarea
            id="content"
            value={content()}
            onInput={(e) => setContent(e.currentTarget.value)}
            placeholder="Lagi mikirin sesuatu untuk diketik ?"
            maxLength={280}
            class="w-full h-40 p-4 mt-8 bg-transparent outline-none rounded-xl border-2 border-gray-600 shadow-md text-lg placeholder-gray-500 resize-none"
          />
          <div class="text-right text-sm text-gray-500 mt-2">{content().length} / 280</div>
          {mediaPreview() && (
            <div class="mt-4 relative rounded-xl overflow-hidden border border-gray-600 shadow-md bg-black">
              <Show when={mediaType() === "image"}>
                <img src={mediaPreview()?.toString()} alt="Preview Image" class="w-full h-auto max-h-80 object-contain" />
              </Show>
              <Show when={mediaType() === "video"}>
                <video src={mediaPreview()?.toString()} poster={mediaPreview()?.toString()} controls class="w-full max-h-80 object-contain" />
              </Show>
              <button type="button" class="absolute top-2 right-2 bg-black/70 text-white rounded-full p-1.5 hover:bg-black/90 transition" onClick={() => {
                setMediaFile(null);
                setMediaPreview(null);
                setMediaType(null);
              }}>
                <IconClose />
              </button>
            </div>
          )}
        </div>
        <div class="sticky bottom-0 left-0 right-0 bg-gray-950 flex items-center justify-between backdrop-blur-xl border border-gray-600/50 rounded-full shadow-2xl shadow-black/50 px-6 py-3 transition-all duration-300">
          <button type="button" onClick={() => fileInputRef?.click()} class="p-3 rounded-full hover:bg-gray-800/50 transition text-gray-400 hover:text-white">
            <IconMedia />
          </button>
          <input
            id="media"
            ref={fileInputRef}
            type="file"
            accept="image/*,video/*"
            class="hidden"
            onChange={handleMedia}
          />
          <button type="submit" disabled={isLoading() || (!content().trim() && !mediaFile())} class={`px-8 py-3 rounded-full font-medium transition ${isLoading() || (!content().trim() && !mediaFile()) ? "bg-gray-700 text-gray-500 cursor-not-allowed" : "bg-rose-500 hover:bg-rose-400 text-white shadow-lg shadow-rose-500/30"}`}>
            {isLoading() ? (
              <span class="flex items-center gap-2">
                <IconAnimateLoading />
                Memposting...
              </span>
            ) : ("Posting")}
          </button>
        </div>
        {error() && (
          <div class="fixed bottom-35 left-5 right-5 z-50 p-4 bg-rose-950/90 border border-rose-800/50 rounded-xl text-rose-300 text-center shadow-xl">{error()}</div>
        )}
      </form>
    </AppLayout>
  );
}