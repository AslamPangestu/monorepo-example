import { Button, Layout } from "ui";
import { getAPI } from "utils";

export default function Home({data}) {
  return (
    <Layout>
      <h1>Blog</h1>
      {data.map(item=>(
        <div key={item.id}>
          <h5>{item.title}</h5>
          <span>{item.body}</span>
        </div>
      ))}
      <Button>Go To Web</Button>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await getAPI("/blogs");
  
  return {
    props: { data: res.data }, // will be passed to the page component as props
  };
}
