function page({ params }) {
  return (
    <div>
      <h2>This is segment routing (topic)</h2>
      <p>{params.topic}</p>
    </div>
  );
}

export default page;
