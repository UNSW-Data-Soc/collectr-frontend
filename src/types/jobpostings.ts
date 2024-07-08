export type JobPost = {
  id: string;
  title: string;
  description: string;
  body: string;
  company: Company;
  photo: string;
  link: string;
  public: boolean;
  createdTime: Date;
  lastEditedTime: Date;
  expiration: Date;
  creator: string;
};

type Company = {
  id: string;
  name: string;
  description: string;
  websiteUrl: string;
  logo: string;
}