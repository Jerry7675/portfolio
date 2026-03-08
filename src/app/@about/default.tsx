export default function AboutFallback() {
  return (
    <div className="text-center text-blue-700 py-8">
      <h3 className="text-xl font-semibold mb-2">About section is loading...</h3>
      <p className="text-sm text-gray-500">
        Please wait while we fetch the latest about info. If this persists, try refreshing the page.
      </p>
    </div>
  );
}
