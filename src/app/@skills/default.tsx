export default function SkillsFallback() {
  return (
    <div className="text-center text-blue-700 py-8">
      <h3 className="text-xl font-semibold mb-2">Skills overview is loading...</h3>
      <p className="text-sm text-gray-500">
        Loading skillset and technologies. If this persists, try refreshing the page.
      </p>
    </div>
  );
}
