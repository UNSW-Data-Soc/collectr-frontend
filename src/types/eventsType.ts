export type Event = {
  id: string;
  creator: string;
  title: string;
  slug: string;
  description: string;
  startTime: Date;
  endTime: Date;
  location: string;
  link: string;
  public: boolean;
  lastEditTime: Date;
  photo: string;
  tags: unknown[];
};
