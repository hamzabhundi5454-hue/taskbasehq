export default function ToolBadge({ type }) {
  const styles = {
    Premium: "bg-purple-100 text-purple-700",
    Free: "bg-green-100 text-green-700",
    AI: "bg-blue-100 text-blue-700",
  };

  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-semibold rounded ${styles[type]}`}
    >
      {type}
    </span>
  );
}