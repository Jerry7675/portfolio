export default function ProjectsFallback() {
  return (
    <div className="text-center text-blue-700 py-8">
      <h3 className="text-xl font-semibold mb-2">Projects are loading...</h3>
      <p className="text-sm text-gray-500">
        Fetching project highlights. If this takes too long, please refresh or check your
        connection.
      </p>
    </div>
  );
}
