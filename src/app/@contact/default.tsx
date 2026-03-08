export default function ContactFallback() {
  return (
    <div className="text-center text-blue-700 py-8">
      <h3 className="text-xl font-semibold mb-2">Contact section is loading...</h3>
      <p className="text-sm text-gray-500">
        Preparing contact options. If this takes too long, please refresh or try again later.
      </p>
    </div>
  );
}
