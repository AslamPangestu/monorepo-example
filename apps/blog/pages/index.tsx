import { Button, Layout } from "ui";
import { getAPI } from "utils";

import styles from "./index.module.css";

export default function Home({ data }) {
  const goToProfile = () => {
    window.location.href = process.env.PROFILE_URL;
  };
  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        <Button onClick={goToProfile}>Go To Profile</Button>
      </div>
      {data.map((item) => (
        <div key={item.id} className={styles.card}>
          <h5>{item.title}</h5>
          <span>{item.body}</span>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await getAPI("/blogs");

  return {
    props: { data: res.data }, // will be passed to the page component as props
  };
}
