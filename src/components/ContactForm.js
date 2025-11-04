import React, { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  max-width: 600px;
  margin: 0 auto;
`;

const ErrorMsg = styled.p`
  color: #b91c1c;
  font-size: 0.85rem;
  margin-top: 0.25rem;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.nome.trim()) newErrors.nome = "Nome é obrigatório.";
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail inválido.";
    }
    if (!formData.mensagem.trim()) {
      newErrors.mensagem = "Mensagem é obrigatória.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    try {
      const response = await fetch("http://localhost:3333/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
        setFormData({ nome: "", email: "", mensagem: "" });
      } else {
        setStatus("Não foi possível enviar. Tente novamente.");
      }
    } catch (err) {
      // professor disse que pode ser endpoint inexistente
      setStatus("Backend não encontrado, mas o formulário funcionou.");
    }
  };

  return (
    <FormWrapper>
      <h2>Fale comigo</h2>
      <p>Preencha os campos abaixo:</p>
      <form onSubmit={handleSubmit} className="form-grid">
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={formData.nome}
            onChange={(e) =>
              setFormData({ ...formData, nome: e.target.value })
            }
            placeholder="Seu nome completo"
          />
          {errors.nome && <ErrorMsg>{errors.nome}</ErrorMsg>}
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="voce@exemplo.com"
          />
          {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
        </div>
        <div>
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows="4"
            value={formData.mensagem}
            onChange={(e) =>
              setFormData({ ...formData, mensagem: e.target.value })
            }
            placeholder="Escreva sua mensagem..."
          ></textarea>
          {errors.mensagem && <ErrorMsg>{errors.mensagem}</ErrorMsg>}
        </div>
        <button type="submit" className="btn">
          Enviar
        </button>
      </form>
      {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
    </FormWrapper>
  );
};

export default ContactForm;