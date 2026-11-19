import logo from "../assets/logo";

const blogData = {
  name: "Wamalwa's Blog",
  image: logo,
  about: "I'm a software engineering student writing about web development.",
  articles: [
    { id: 1, title: "Learning React", date: "Nov 1, 2026", preview: "Components make UI reusable." },
    { id: 2, title: "Why I love JavaScript", date: "Nov 5, 2026", preview: "It runs everywhere." },
  ],
};

blogData.posts = blogData.articles;

export default blogData;