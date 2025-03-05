import GeneralLayout from "@/components/layouts/general-layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GeneralLayout>{children}</GeneralLayout>;
}
