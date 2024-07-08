import AdminNavbar from "../../components/AdminNavbar";
import PageDescription from "../../components/typography/PageDescription";
import PageHeading from "../../components/typography/PageHeading";
import JobPostings from "./JobPost";

export default function JobPostingsPage() {
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
        <PageHeading>Job Postings</PageHeading>
        <PageDescription>
          These are the Job Postings that are currently avaliable. Apply!
        </PageDescription>
      </header>
      <div className="flex-grow space-y-4">
        <JobPostings />
      </div>
    </main>
  );
}
