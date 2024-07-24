import CreateForm from "@/components/ui/create-form";
import { Suspense } from "react";

export default function page() {
  return (
    <Suspense>
      <div>
        <CreateForm />
      </div>
    </Suspense>
  );
}
