import PageContainer from "@/components/PageContainer";
import AskingComp from "@/components/AskingComp";

export default function Page() {
  return (
    <PageContainer title="Asking Questions" subtitle="Type your input, then click the button.">
      <AskingComp />
    </PageContainer>
  );
}