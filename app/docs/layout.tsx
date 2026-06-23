import { Sidebar } from "@/components/sidebar";
import { getDocsByCategory } from "@/lib/docs";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getDocsByCategory();

  return (
    <div className="mx-auto max-w-screen-2xl flex">
      <div className="hidden lg:block">
        <Sidebar categories={categories} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="mx-auto max-w-3xl px-6 py-10 sm:px-8 lg:px-12">
          {children}
        </div>
      </div>
    </div>
  );
}
