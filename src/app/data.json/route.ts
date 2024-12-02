export const dynamic = "force-static";

import { AllProjectsDetails } from "@/projects";

export async function GET() {
  return Response.json(AllProjectsDetails);
}
