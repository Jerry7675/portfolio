import ParallelSlots from "./_components/ParallelSlots";

export default function Home() {
  return (
    <div className="min-h-screen font-sans" style={{ background: "var(--background)" }}>
      <main className="mx-auto flex w-full flex-col gap-20 px-4 py-12">
        <ParallelSlots />
      </main>
    </div>
  );
}
