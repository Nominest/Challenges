import { useParams } from "react-router-dom";
export default function Page() {
  const { pageNumbers } = useParams();
  return <div>Page {pageNumbers}</div>;
}
