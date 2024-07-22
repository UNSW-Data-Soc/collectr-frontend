import AdminNavbar from "../../components/AdminNavbar";
import PageDescription from "../../components/typography/PageDescription";
import PageHeading from "../../components/typography/PageHeading";
import Resources from "./Resources";

export default function ResourcesPage() {
  return (
    <div className="flex w-screen flex-row overflow-hidden">
      <AdminNavbar />
      <MainPage />
    </div>
  );
}

function MainPage() {
  return (
    <main className="flex flex-grow flex-col gap-4 p-10 px-12">
      <header className="space-y-4">
        <PageHeading>Resources</PageHeading>
        <PageDescription>
          The resources page.
        </PageDescription>
      </header>
      <div className="flex-grow space-y-4">
        <Resources />
      </div>
    </main>
  );
}