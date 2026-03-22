export default function ToolPage({ params }) {
  return (
    <div className="p-6">
      <h1>{params.slug.replaceAll("-", " ")}</h1>
    </div>
  );
}