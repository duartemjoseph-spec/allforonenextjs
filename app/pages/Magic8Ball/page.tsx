import Magic8Comp from "@/components/Magic8Comp";
import PageContainer from "@/components/PageContainer";

export default function Page() {
  return (
    <PageContainer title="Magic 8 Ball" subtitle="Ask a question and click Ask.">
      <Magic8Comp />
    </PageContainer>
  );
}