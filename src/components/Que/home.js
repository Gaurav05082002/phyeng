import { Button, Checkbox, Form, Input } from 'antd';
import React from "react";
import { Layout } from 'antd';
import Questions from "./Question";
const { Header, Footer, Sider, Content } = Layout;

const Home = (props) => {
    return (
      <Layout class="center bg-image">
      <Header>Physics Engine</Header>
      <Content>
        <Questions />
      </Content>

    </Layout>
      );
}

export default Home