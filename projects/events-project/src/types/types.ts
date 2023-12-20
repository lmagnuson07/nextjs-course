export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  isFeatured: boolean;
  image: string;
  location: string;
};

export type EventDateFilter = {
  year: number;
  month: number;
};
