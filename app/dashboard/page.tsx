import Banner from "@/components/dashboard/banner";
import Menu from "@/components/dashboard/menu";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 px-4">
        <div className="container pt-4 pb-12 space-y-8">
          <Banner />
          <Menu />
        </div>
      </main>
    </div>
  );
}
