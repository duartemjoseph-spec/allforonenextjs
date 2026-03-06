import MadLibComp from "@/components/MadLibComp";
import PageContainer from "@/components/PageContainer";

export default function Page() {
  return (
    <PageContainer title="MadLib" subtitle="Fill in 4 words and click Create.">
      <MadLibComp />
    </PageContainer>
  );
}