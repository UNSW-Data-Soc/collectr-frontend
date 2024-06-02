import AdminNavbar from "../../components/AdminNavbar";
import PageDescription from "../../components/typography/PageDescription";
import PageHeading from "../../components/typography/PageHeading";
import CoverPhotos from "./CoverPhotos";

export default function CoverPhotoPage() {
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
        <PageHeading>Cover Photos</PageHeading>
        <PageDescription>
          These cover photos appear as the large background image on the website
          landing page.
        </PageDescription>
      </header>
      <div className="flex-grow space-y-4">
        <CoverPhotos />
      </div>
    </main>
  );
}
