import readingTime from "reading-time";

export interface Meta {
  layout: "bookpage";
  book: "Gibberish to a website";
  bookShort: "gibberish";
  title: "Introduction";
  chapter: 1;
  section: 1;
  createdAt: string;
  readingTime: ReturnType<typeof readingTime>;
}
