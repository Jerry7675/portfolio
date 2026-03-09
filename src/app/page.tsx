import Navbar from "@/components/layout/Navbar";
import ParallelSlots from "./_components/ParallelSlots";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-blue-50 font-sans dark:bg-black">
      <Navbar />
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-4 py-12">
        <ParallelSlots />
      </main>
    </div>
  );
}
