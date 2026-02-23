import Link from "next/link";
import ToolBadge from "./ToolBadge";

export default function ToolCard({ title, desc, href, type }) {
  return (
    <Link href={href}>
      <div className="border rounded-xl p-5 hover:shadow-md transition cursor-pointer bg-white">
        <div className="mb-2">
          <ToolBadge type={type} />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{desc}</p>
        <p className="text-sm text-blue-600 mt-3">Click to open →</p>
      </div>
    </Link>
  );
}