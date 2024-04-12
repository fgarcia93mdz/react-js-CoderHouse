export default function MarkdownPreview({ markdown }) {
  const renderedHTML = markdown;
  return <div dangerouslySetInnerHTML={{ __html: renderedHTML }} />;
}
