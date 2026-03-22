import Link from "next/link";

const tools = [
"pdf-compress",
"pdf-merge",
"pdf-split",
"pdf-delete-pages",
"pdf-rotate",
"pdf-reorder",
"pdf-repair",
"pdf-metadata",
"pdf-protect",
"pdf-unlock",
"pdf-watermark",
"pdf-remove-watermark",
"pdf-to-word",
"pdf-to-excel",
"pdf-to-powerpoint",
"pdf-to-image",
"pdf-to-pdf",
"word-to-pdf",
"excel-to-pdf",
"powerpoint-to-pdf",
"image-to-pdf",
];

export default function ToolsPage() {
return (
<main className="p-10">

<h1 className="text-3xl font-bold mb-6">
PDF Tools
</h1>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

{tools.map((tool) => (

<Link
key={tool}
href={`/tools/${tool}`}
className="border p-4 rounded hover:bg-black hover:text-white"
>

{tool.replaceAll("-", " ").toUpperCase()}

</Link>

))}

</div>

</main>
);
}