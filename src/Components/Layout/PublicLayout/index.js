import React from "react";
import { Layout } from "Components/UI-Library";
import { Footer, Header } from "Components";
import "./index.less";

const { Content } = Layout;

const PublicLayout = (props) => {
  return (
    <Layout className="pp_layout">
     <Header/>
      <Content className="pp_container">{props.children}</Content>
      <Footer />
    </Layout>
  );
};

export default PublicLayout;
