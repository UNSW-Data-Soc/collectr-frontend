import AdminNavbar from "../../components/AdminNavbar";
import PageDescription from "../../components/typography/PageDescription";
import PageHeading from "../../components/typography/PageHeading";
import BlogsContainer from "./BlogsContainer";

export default function BlogsPage() {
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
        <PageHeading>Blogs</PageHeading>
        <PageDescription>
          Blogs that marketing writes that get posted on the website.
        </PageDescription>
      </header>
      <div className="flex-grow space-y-4">
        <BlogsContainer />
      </div>
    </main>
  );
}
