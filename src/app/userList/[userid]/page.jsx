function page({ params }) {
  return (
    <div>
      <h2>user Information: {params.userid}</h2>
      <h2>Hello</h2>
    </div>
  );
}

export default page;

export function generateMetadata() {
  return {
    title: "Welcome to hablu programmer website",
    description: "this is hablu programmer website",
  };
}
