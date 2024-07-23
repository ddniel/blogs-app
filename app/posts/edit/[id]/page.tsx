import EditForm from "@/components/ui/edit-form";
import { getPostById } from "@/lib/data";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: number;
  };
}

export default async function page({ params }: PageProps) {
  const post = await getPostById(params.id);

  if (!post) {
    notFound();
  }
  return (
    <div>
      <EditForm id={params.id} title={post.title} content={post.content} />
    </div>
  );
}
