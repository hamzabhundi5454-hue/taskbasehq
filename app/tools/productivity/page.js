import Link from "next/link";

const tools = [
"salary-calculator",
"loan-calculator",
"gst-tax-calculator",
"invoice-generator",
"qr-code-generator",
"cv-to-pdf",
"resume-analyzer",
"resume-builder",
"cover-letter-generator",
"business-name-generator"
];

export default function ProductivityPage() {
return (
<main className="p-10">

<h1 className="text-3xl font-bold mb-6">
Productivity Tools
</h1>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

{tools.map((tool) => (

<Link
key={tool}
href={`/productivity/${tool}`}
className="border p-4 rounded hover:bg-black hover:text-white"
>

{tool.replaceAll("-", " ").toUpperCase()}

</Link>

))}

</div>

</main>
);
}