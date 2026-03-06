import GreaterLessComp from "@/components/GreaterLessComp";
import PageContainer from "@/components/PageContainer";

export default function Page() {
  return (
    <PageContainer title="Greater or Less" subtitle='Pick two numbers and click "Compare".'>
      <GreaterLessComp />
    </PageContainer>
  );
}