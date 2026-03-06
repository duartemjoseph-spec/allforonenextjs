import OddEvenComp from "@/components/OddEvenComp";
import PageContainer from "@/components/PageContainer";

export default function Page() {
  return (
    <PageContainer title="Odd or Even" subtitle="Pick a number and click the button.">
      <OddEvenComp />
    </PageContainer>
  );
}