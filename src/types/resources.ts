export interface Resource {
  id: string;
  title: string;
  description: string;
  link: string;
  public: boolean;
  internal: boolean;
  lastEditTime: Date;
  createdTime: Date;
  tags: ResourceTag[];
  fileId:string;
};

export interface ResourceTag {
  resourceId: string;
  tagId: string;
  tag: Tag;
}

interface Tag {
  id: string;
  name: string;
  colour: string;
};