import PageContainer from "@/components/PageContainer";
import AddingComp from "@/components/AddingComp";

export default function Page() {
  return (
    <PageContainer title="Adding Two Numbers" subtitle='Pick two numbers and click "Add".'>
      <AddingComp />
    </PageContainer>
  );
}