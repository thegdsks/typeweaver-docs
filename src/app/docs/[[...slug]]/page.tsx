import { source } from "@/lib/source";
import {
  PageArticle,
  PageBreadcrumb,
  PageFooter,
  PageRoot,
  PageTOC,
  PageTOCItems,
  PageTOCPopover,
  PageTOCPopoverContent,
  PageTOCPopoverItems,
  PageTOCPopoverTrigger,
  PageTOCTitle,
} from "fumadocs-ui/layouts/docs/page";
import { notFound } from "next/navigation";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/mdx-components";
import { EditOnGitHub, LLMCopyButton, ViewOptions } from "@/components/page-actions";
import {
  generateSEO,
  generateDocumentationStructuredData,
  generateBreadcrumbStructuredData,
} from "@/lib/seo";
import {
  MultipleStructuredData,
} from "@/components/seo/structured-data";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;
  const toc = page.data.toc;

  // Generate structured data
  const documentationData = generateDocumentationStructuredData({
    title: page.data.title,
    description: page.data.description,
    path: page.url,
  });

  // Generate breadcrumb data
  const breadcrumbItems = page.url
    .split("/")
    .filter(Boolean)
    .map((segment, index, array) => ({
      name:
        segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
      url: "/" + array.slice(0, index + 1).join("/"),
    }));

  // Add home to breadcrumbs
  breadcrumbItems.unshift({ name: "Home", url: "/docs" });

  const breadcrumbData = generateBreadcrumbStructuredData(breadcrumbItems);

  return (
    <>
      <MultipleStructuredData items={[documentationData, breadcrumbData]} />
      <PageRoot
        toc={{
          toc,
          single: false,
        }}
      >
        {toc.length > 0 && (
          <PageTOCPopover>
            <PageTOCPopoverTrigger />
            <PageTOCPopoverContent>
              <PageTOCPopoverItems />
            </PageTOCPopoverContent>
          </PageTOCPopover>
        )}
        <PageArticle>
          <PageBreadcrumb />
          <h1 className="text-3xl font-semibold">{page.data.title}</h1>
          <p className="text-lg text-fd-muted-foreground">
            {page.data.description}
          </p>
          <div className="flex flex-row gap-2 items-center border-b pt-2 pb-6">
            <LLMCopyButton markdownUrl={`${page.url}.mdx`} />
            <ViewOptions markdownUrl={`${page.url}.mdx`} />
            <EditOnGitHub filePath={page.file.path} />
          </div>
          <div className="prose flex-1 text-fd-foreground/80">
            <MDXContent
              components={getMDXComponents({
                // this allows you to link to other pages with relative file paths
                a: createRelativeLink(source, page),
              })}
            />
          </div>
          <PageFooter />
        </PageArticle>
        {toc.length > 0 && (
          <PageTOC>
            <PageTOCTitle />
            <PageTOCItems variant="clerk" />
          </PageTOC>
        )}
      </PageRoot>
    </>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  // Extract tags from the page path for better SEO
  const pathSegments = page.url.split("/").filter(Boolean);
  const tags = pathSegments.map((segment) => segment.replace(/-/g, " "));

  // Determine tool-specific branding and SEO enhancement
  const isCommitWeave = pathSegments.includes("commitweave");
  const isGlinProfanity = pathSegments.includes("glin-profanity");
  const isJson2ts = pathSegments.includes("json2ts");

  // Tool-specific title enhancement
  let enhancedTitle = page.data.title;
  let toolSpecificTags: string[] = [];

  if (isCommitWeave) {
    enhancedTitle = `${page.data.title} | CommitWeave | TypeWeaver | GLINR Studio`;
    toolSpecificTags = [
      "CommitWeave",
      "git commits",
      "conventional commits",
      "AI commits",
      "intelligent commits",
    ];
  } else if (isGlinProfanity) {
    enhancedTitle = `${page.data.title} | Glin-Profanity | TypeWeaver | GLINR Studio`;
    toolSpecificTags = [
      "Glin-Profanity",
      "content filtering",
      "profanity detection",
      "moderation tools",
    ];
  } else if (isJson2ts) {
    enhancedTitle = `${page.data.title} | JSON2TS | TypeWeaver | GLINR Studio`;
    toolSpecificTags = [
      "JSON2TS",
      "JSON to TypeScript",
      "type generation",
      "schema conversion",
    ];
  }

  return generateSEO({
    title: enhancedTitle,
    description: page.data.description,
    path: page.url,
    type: "article",
    tags: [...tags, ...toolSpecificTags],
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
  });
}
