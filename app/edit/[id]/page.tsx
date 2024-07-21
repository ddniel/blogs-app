import EditForm from "@/components/ui/edit-form";
import { getPostById } from "@/lib/data";

export default async function page({ params }) {
  const post = await getPostById(params.id);
  return (
    <div>
      <EditForm id={params.id} title={post.title} content={post.content} />
    </div>
  );
}
