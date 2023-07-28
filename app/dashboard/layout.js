import TopNavAdmin from "@components/dashboard/TopNavAdmin";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <TopNavAdmin />
      <main>{children}</main>
    </>
  );
}
