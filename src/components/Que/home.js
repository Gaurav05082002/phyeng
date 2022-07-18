import { Button, Checkbox, Form, Input } from 'antd';
import React from "react";
import { Layout } from 'antd';
import Questions from "./Question";
import QuestionsM from './Question-mobile';
const { Header, Footer, Sider, Content } = Layout;
const mob = window.innerWidth <= 600;

const Home = (props) => {
    return (
      <Layout class="center bg-image">
      <Header>Physics Engine</Header>
      
      <Content>
      {mob ? <QuestionsM /> : <Questions />}
        {/* <Questions /> */}
      </Content>

    </Layout>
      );
}

export default Home