type BlogNode =
  | {
      type: "heading";
      attrs: {
        level: 1 | 2 | 3;
      };
      content: { type: "text"; text: string }[];
    }
  | {
      type: "image";
      attrs: (
        | { src: string; blogId: null; imageId: null }
        | { src: null; blogId: string; imageId: string }
      ) & {
        alt: string | null;
        title: string | null;
      };
    }
  | {
      type: "paragraph";
      content?: {
        type: "text";
        text: string;
      }[];
    };

export type BlogBody = {
  type: string;
  content: BlogNode[];
};

type BlogTag = {
  blogId: string;
  tagId: string;
  tag: {
    id: string;
    name: string;
    colour: string;
  };
};

export type Blog = {
  id: string;
  creator: string;
  slug: string;
  title: string;
  body: BlogBody;
  author: string;
  createdTime: Date;
  lastEditTime: Date;
  public: boolean;
  tags: BlogTag[];
};
