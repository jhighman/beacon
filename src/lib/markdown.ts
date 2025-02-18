import fs from "fs";
import path from "path";
import { parse } from "zod-matter";
import Markdoc from "@markdoc/markdoc";
import { config } from "@/config/markdoc.config";
import { z } from "zod";

// ✅ Define the directory where markdown files are stored
const CONTENT_DIR = path.join(process.cwd(), "content/docs");

// ✅ Define frontmatter schema
const frontmatterSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  toc: z.boolean().default(true),
});

// ✅ Function to read and parse Markdown content from `/content/docs/`
export async function getMarkdownContent(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);

  // ✅ Check if the file exists in `content/docs/`
  if (!fs.existsSync(filePath)) {
    return null; // Return null if file is missing
  }

  // ✅ Read the markdown file
  const source = fs.readFileSync(filePath, "utf-8");

  // ✅ Parse frontmatter using zod-matter
  const { data: frontmatter } = parse(source, frontmatterSchema);

  // ✅ Convert Markdown into Markdoc AST
  const ast = Markdoc.parse(source);

  // ✅ Transform AST using Markdoc config
  const content = Markdoc.transform(ast, config);

  return { frontmatter, content };
}
