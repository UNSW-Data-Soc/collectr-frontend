/**
 * @todo
 */

import { CoverPhoto } from "../types/coverphoto";

// eslint-disable-next-line @typescript-eslint/require-await
export const getCoverPhotos: () => Promise<CoverPhoto[]> = async () => {
  return [
    {
      id: "00000000-0000-4000-8000-0000075bcd15",
      createdAt: new Date("2023-12-19 07:59:26"),
    },
    {
      id: "9d4e-682f-47e7-84d7-b5a416e60d7d.png",
      createdAt: new Date("2024-03-27 10:30:13"),
    },
  ];
};
