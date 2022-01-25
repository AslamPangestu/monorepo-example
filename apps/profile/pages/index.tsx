import { Button, Layout } from "ui";
import { getAPI } from "utils";

import styles from "./index.module.css";

export default function Profile({ data }) {
  const goToBlog = () => {
    window.location.href = process.env.BLOG_URL;
  };
  return (
    <Layout>
      <div>
        <h1>Profile</h1>
        <Button onClick={goToBlog}>Go To Blog</Button>
      </div>
      <div className={styles.card}>
        <table>
          <tr>
            <td>Name</td>
            <td>:</td>
            <td>
              {data.first_name} {data.last_name}
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>:</td>
            <td>{data.email}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>:</td>
            <td>{data.gender}</td>
          </tr>
        </table>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await getAPI("/profile");

  return {
    props: { data: res.data }, // will be passed to the page component as props
  };
}
