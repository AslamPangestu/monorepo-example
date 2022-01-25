import { Button, Layout } from "ui";
import {getAPI} from 'utils';


export default function Profile({data}) {
  return (
    <Layout>
      <h1>Profile</h1>
      <div>
        <table>
          <tr>
            <td>Name</td>
            <td>:</td>
            <td>{data.first_name} {data.last_name}</td>
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
      <Button>Go To Docs</Button>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await getAPI("/profile");
  
  return {
    props: { data: res.data }, // will be passed to the page component as props
  };
}
