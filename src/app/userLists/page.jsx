import { getData } from "@/services/postApi";
import Link from "next/link";

const page = async () => {
  const postData = await getData();
  // console.log(postData);
  return (
    <div className="grid">
      {postData?.slice(0, 20)?.map(({ title, id, body }) => (
        <div className="item" key={id}>
          <h2>Title: {title}</h2>
          <p>Description: {body}</p>
          <button className="btn-red">
            <Link href={`/userLists/${id}`}>See Details </Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default page;
