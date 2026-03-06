import PageContainer from "@/components/PageContainer";
import ReverseAlphaComp from "@/components/ReverseAlphaComp";

export default function Page() {
  return (
    <PageContainer title="ReverseIt" subtitle="Enter alphanumeric text and click Reverse.">
      <ReverseAlphaComp />
    </PageContainer>
  );
}