/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { PlusCircle } from "iconoir-react";
import { getSponsorships } from "../../api/getSponsorships";
import ToolbarButton from "../../components/ToolbarButton";
import { Sponsorship } from "../../types/sponsorshipsType";
import { useEffect } from "react";

export default function Sponsorships() {
  const [isLoading, setIsLoading] = useState(true);
  const [sponsorships, setSponsorships] = useState<Sponsorship[]>([]);

  // use effect things
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      // TODO: remove this setTimeout -- just to simulate an artificial delay
      void getSponsorships().then((data) =>
        setSponsorships(data.sort((a, b) => (a.company > b.company ? -1 : 1)))
      );
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) return <p>Loading...</p>;

  return (
    <main>
      <div>
        <ToolbarButton className="bg-green-500">
          <PlusCircle className="h-6" />
          Add Sponsor
        </ToolbarButton>
      </div>
      <div>{/* {map to sponsorships card} */}</div>
    </main>
  );
}
