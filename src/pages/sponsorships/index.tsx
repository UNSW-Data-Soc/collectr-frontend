import AdminNavbar from "../../components/AdminNavbar";
import PageDescription from "../../components/typography/PageDescription";
import PageHeading from "../../components/typography/PageHeading";
import Sponsorships from "./Sponsorships";

export default function SponsorshipsPage() {
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
        <PageHeading>Sponsorships</PageHeading>
        <PageDescription>
          Here are the sponsors of UNSW Data Science Society
        </PageDescription>
      </header>
      <div className="flex-grow space-y-4">
        <Sponsorships />
      </div>
    </main>
  );
}
