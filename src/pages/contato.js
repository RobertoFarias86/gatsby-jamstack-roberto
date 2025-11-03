import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ContactForm from "../components/ContactForm";

const ContatoPage = () => {
  return (
    <Layout>
      <h1>Contato</h1>
      <p>Preencha o formulário abaixo para entrar em contato.</p>
      <ContactForm />
    </Layout>
  );
};

export const Head = () => (
  <Seo title="Contato" description="Formulário de contato do site Jamstack" />
);

export default ContatoPage;