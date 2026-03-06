import PageContainer from "@/components/PageContainer";
import ReverseNumbersComp from "@/components/ReverseNumbersComp";

export default function Page() {
  return (
    <PageContainer title="Reverse Numbers Only" subtitle="Enter numbers only and click Reverse.">
      <ReverseNumbersComp />
    </PageContainer>
  );
}