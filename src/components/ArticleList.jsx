import Article from "./Article";

function ArticleList({ posts = [], articles }) {
  const items = posts.length ? posts : (articles || []);

  return (
    <main>
      {items.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
