import { Link } from "react-router-dom";
import { getCompanyImageKey, getGithubLink } from "../../lib/blob";
import { getSponsorships } from "../../api/getSponsorships";

export default function SponsorshipCard({
  id,
  company,
}: {
  id: string;
  company: string;
}) {
  return (
    <div className="group relative max-w-xl">
      <div className="absolute left-0 top-0 h-full w-full bg-slate-700/50 p-5 text-white opacity-0 transition-opacity group-hover:opacity-100">
        <p>
          id:{" "}
          <Link
            target="_blank"
            className="font-mono hover:underline"
            to={getGithubLink(getCompanyImageKey(id, company))}
          >
            {id}
          </Link>
        </p>
      </div>
    </div>
  );
}
