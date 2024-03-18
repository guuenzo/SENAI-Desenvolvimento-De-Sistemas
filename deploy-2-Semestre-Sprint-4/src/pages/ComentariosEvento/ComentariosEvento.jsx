import React, { useContext, useEffect, useState } from "react";
import "./ComentariosEvento.css";
import MainContent from "../../components/MainContent/MainContent";
import Container from "../../components/Container/Container";
import Table from "../../components/TableEvComments/TableEvComments";
import api, {
  eventsResource,
  commentsResourceIA,
} from "../../Services/Service";
import { commentsResource } from "../../Services/Service";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";

const ComentariosEvento = () => {
  const [comments, setComments] = useState([]);
  const { userData } = useContext(UserContext);
  const [events, setEvents] = useState({});

  const { state } = useLocation();

  useEffect(() => {
    async function getEventComments() {
      try {
        if (userData.role === "Administrador") {
          const promise = await api.get(
            `${commentsResource}?id=${state.idEvento}`
          );

          console.log("Comentarios get");
          console.log(promise.data);
          setComments(promise.data);
        } else {
          const promise = await api.get(
            `${commentsResourceIA}/${state.idEvento}`
          );

          console.log("Comentarios get");
          console.log(promise.data);
          setComments(promise.data);
        }
      } catch (error) {
        console.log("DEU RUIM" + error);
      }
    }

    async function getEvents() {
      try {
        const promise = await api.get(eventsResource);
        console.log(promise.data);
        setEvents(promise.data);
      } catch (error) {
        console.log("Deu ruim");
      }
    }

    getEvents();
    getEventComments();
  }, []);

  console.log("State");
  console.log(state);

  comments.map((map) => {
    console.log(map.idEvento);
  });

  return (
    <>
      <MainContent>
        <Container>
          <Table dados={comments} />
        </Container>
      </MainContent>
    </>
  );
};

export default ComentariosEvento;
