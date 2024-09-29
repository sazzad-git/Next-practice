const getDetailsPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
};

const UserDetail = async ({ params }) => {
  console.log(params.id);

  const { title, body } = await getDetailsPost(params.id);
  return (
    <div>
      <h1>Title: {title}</h1>
      <p>Description: {body}</p>
    </div>
  );
};

export default UserDetail;
