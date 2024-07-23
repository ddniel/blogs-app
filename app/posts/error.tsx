"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="px-3 py-1 border border-neutral-200 rounded-xl hover:bg-foreground hover:text-background"
        onClick={
          // Attempt to recover by trying to re-render the posts
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}
