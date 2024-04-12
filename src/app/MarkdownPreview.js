//import { Remarkable } from "remarkable";

//const md = new Remarkable();

export default function MarkdownPreview({ markdown }) {
  const renderedHTML = markdown;
  return <div dangerouslySetInnerHTML={{ __html: renderedHTML }} />;
}
