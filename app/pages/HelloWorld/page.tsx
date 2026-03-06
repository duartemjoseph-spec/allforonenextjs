import PageContainer from "@/components/PageContainer";
import SayHelloComp from "@/components/SayHelloComp";

export default function Page() {
  return (
    <PageContainer title="Say Hello" subtitle='Click "Hello" or type your name and click "Hello + Name".'>
      <SayHelloComp />
    </PageContainer>
  );
}