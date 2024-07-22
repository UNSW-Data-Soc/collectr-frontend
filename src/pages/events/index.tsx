import AdminNavbar from "../../components/AdminNavbar";
import PageDescription from "../../components/typography/PageDescription";
import PageHeading from "../../components/typography/PageHeading";
import Events from "./Events";

export default function EventsPage() {
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
        <PageHeading>Events</PageHeading>
        <PageDescription>List of Datasoc events</PageDescription>
      </header>
      <div className="flex-grow space-y-4">
        <Events />
      </div>
    </main>
  );
}
