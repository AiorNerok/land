import { UploadForm } from "@/features";
import { Textarea } from "@/shared/ui/textarea";

enum Stage {
  DropAndLoadVacancyData,
  DropAndLoadResumeData,
  ResultMatches,
}

export default function page() {
  return (
    <div className="">
      <UploadForm></UploadForm>
    </div>
  );
}
