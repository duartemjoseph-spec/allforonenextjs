import PageContainer from "@/components/PageContainer";
import RestaurantComp from "@/components/RestaurantComp";

export default function Page() {
  return (
    <PageContainer title="Restaurant Picker" subtitle="Pick a category and click Pick.">
      <RestaurantComp />
    </PageContainer>
  );
}