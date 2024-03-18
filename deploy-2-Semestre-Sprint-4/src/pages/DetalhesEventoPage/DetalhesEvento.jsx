import React, { useEffect, useState } from "react";
import api, { eventsResource } from "../../Services/Service";
import Table from "../DetalhesEventoPage/TableDEv/TableDEv";
import Container from "../../components/Container/Container";
import MainContent from "../../components/MainContent/MainContent";
import Title from "../../components/Title/Title";

const DetalhesEvento = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    async function getEventDetails() {
      const promise = await api.get(eventsResource);
      const data = promise.data;
      setEventos(data);
    }
    getEventDetails();
  }, []);

  return (
    <>
      <MainContent>
        {/* Listagem de tipo de eventos */}
        <section className="lista-eventos-section">
          <Title titleText="Detalhes Evento" color="white" />
          <Container>
            {/* <Title titleText={"Lista de Eventos"} color="white" /> */}
            <Table dados={eventos} />
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default DetalhesEvento;
