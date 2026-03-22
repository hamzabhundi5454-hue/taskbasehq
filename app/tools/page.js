export default function ToolPage({ params }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        {params.slug.replaceAll("-", " ")}
      </h1>
    </div>
  );
}