import { Config, Tag, Node, RenderableTreeNode } from "@markdoc/markdoc";
import { Endpoint } from "@/components/markdoc/Endpoint";
import { Parameter } from "@/components/markdoc/Parameter";
import { Response } from "@/components/markdoc/Response";
import { TypographyBlockquote } from "@/components/ui/blockquote";
import { TypographyList } from "@/components/ui/list";
import { TypographyP } from "@/components/ui/paragraph";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MarkdocAccordion, MarkdocAccordionItem } from "@/components/markdoc/accordion";
import Callout from "@/components/markdoc/callout";
import { Code } from "@/components/markdoc/code";
import { Heading } from "@/components/markdoc/Heading";
import { MarkdocTab, MarkdocTabs } from "@/components/markdoc/tabs";
import { CustomImage } from "@/components/markdoc/CustomImage"; // ✅ Added Custom Image Renderer
import { tags } from "@/lib/markdoc/config/tags";

interface TabNodeAttributes {
  label?: string;
  default?: boolean;
}

interface TabNode {
  name: string;
  attributes: TabNodeAttributes;
  transformChildren?: (config: Config) => RenderableTreeNode[];
}

export const config: Config = {
  tags: {
    ...tags,
    callout: {
      render: "Callout",
      attributes: {
        title: { type: String, default: "default title" },
        type: { type: String, default: "default" },
      },
    },
    tabs: {
      render: "Tabs",
      children: ["Tab"],
      transform(node: Node, config: Config) {
        const children = node.transformChildren(config) as TabNode[];

        const labels = children
          .filter((child) => child && child.name === "Tab")
          .map((tab) => tab?.attributes?.label ?? null);

        const defaultValue = children.find((tab) => tab?.attributes?.default === true)?.attributes?.label;

        return new Tag(
          this.render,
          { labels, defaultValue },
          children as unknown as RenderableTreeNode[]
        );
      },
    },
    image: {
      render: "CustomImage", // ✅ Uses new Custom Image Renderer
      attributes: {
        src: { type: String, required: true },
        alt: { type: String, required: true },
        width: { type: Number, default: 600 },
        height: { type: Number, default: 400 },
        caption: { type: String },
      },
    },
  },
  nodes: {
    document: { render: undefined },
    paragraph: { render: "Paragraph" },
    heading: {
      render: "Heading",
      attributes: {
        id: { type: String },
        level: { type: Number, required: true },
      },
    },
  },
  variables: {
    environment: process.env.NODE_ENV,
  },
};

export const components = {
  Paragraph: TypographyP,
  Heading,
  Blockquote: TypographyBlockquote,
  Callout: Callout,
  List: TypographyList,
  Table: Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Tabs: MarkdocTabs,
  Tab: MarkdocTab,
  Code: Code,
  Accordion: MarkdocAccordion,
  AccordionItem: MarkdocAccordionItem,
  Endpoint,
  Parameter,
  Response,
  CustomImage, // ✅ Registered Custom Image Component
};
