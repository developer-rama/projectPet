import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/css/post.css";
import { api } from "../api/api";

// utilizar UseParams para id da função

export const Post = () => {

  const
    [post, setPost] = useState({});
  const
    { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    busca();
  }, [id]);

  const busca = async () => {
    try {
      const resposta = await api.get(`/posts/${id}`);
      setPost(resposta.data);
    } catch { navigate("/*") }
  };

  // useEffect(() => {
  //   busca(`/posts/${id}`, setPost)
  //     .cath(() => {
  //       history.push("/*")
  //     }

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title} </h2>
        <p className="cartao__texto">{post.body}</p>
      </article>
    </main>
  )
}

