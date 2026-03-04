import Link from "next/link";

const tools = [
"resume-builder",
"resume-analyzer",
"cover-letter-generator",
"email-writer",
"job-description-generator",
"business-name-generator",
"business-idea-generator",
"product-description-generator",
"invoice-assistant",
"social-caption-generator"
];

export default function AiPage() {
return (
<main className="p-10">

<h1 className="text-3xl font-bold mb-6">
AI Tools
</h1>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

{tools.map((tool) => (

<Link
key={tool}
href={`/ai/${tool}`}
className="border p-4 rounded hover:bg-black hover:text-white"
>

{tool.replaceAll("-", " ").toUpperCase()}

</Link>

))}

</div>

</main>
);
}