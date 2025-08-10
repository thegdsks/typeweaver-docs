'use client';

interface StructuredDataProps {
  data: object;
}

/**
 * Component to inject JSON-LD structured data into the page
 */
export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2),
      }}
    />
  );
}

/**
 * Multiple structured data items
 */
export function MultipleStructuredData({ items }: { items: object[] }) {
  return (
    <>
      {items.map((data, index) => (
        <StructuredData key={index} data={data} />
      ))}
    </>
  );
}