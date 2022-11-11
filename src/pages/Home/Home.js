import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { teamsApiUrl } from "../../constants";
import { Container, Row, Button, Col } from "react-bootstrap";
import TeamCreator from "../../components/TeamCreator";
import Pokemon from "../../components/Pokemon";
import pokeball from "../../assets/pokeball.gif";

const Home = () => {
  const [teams, setTeams] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get(`${teamsApiUrl}`)
      .then((response) => response.data)
      .then((teams) => setTeams(teams));
  }, []);

  async function closeModal(title) {
    if (title) {
      await axios
        .post(`${teamsApiUrl}`, {
          title,
        })
        .then((response) => response.data)
        .then((team) => setTeams([...teams, team]));
    }

    setShow(false);
  }

  async function deleteTeam(teamId) {
    await axios
      .delete(`${teamsApiUrl}/${teamId}`, {})
      .then((response) => response.data)
      .then((team) => {
        setTeams(
          teams.filter((t) => {
            return t.teamId !== teamId;
          })
        );
      });
  }

  return (
    <>
      <TeamCreator show={show} closeModal={closeModal} />
      <Container>
        <Row>
          <Col lg={{ span: 3, offset: 9 }} md={{ span: 3, offset: 9 }}>
            <Button onClick={() => setShow(true)}>Create</Button>
          </Col>
        </Row>
        <Row>
          {teams.length === 0 ? (
            <>There are currently no teams</>
          ) : (
            teams.map((team, index) => {
              return (
                <Col key={`team-${index}`} lg={12} md={12} sm={12}>
                  <h1>{team.title}</h1>
                  <a href={`/team/${team.teamId}`}>
                    <img
                      src={pokeball}
                      style={{ width: "50px", borderRadius: "20px" }}
                    />
                  </a>
                  <Button
                    variant="danger"
                    onClick={() => deleteTeam(team.teamId)}
                  >
                    Delete
                  </Button>
                  <hr />
                  <Row>
                    {team.pokemon.length > 0 ? (
                      team.pokemon.map((pokemonName, index) => {
                        return (
                          <Col
                            className="mb-1"
                            key={`${team.title}-${index}`}
                            lg={2}
                            md={3}
                            sm={6}
                          >
                            <Pokemon
                              selectable={false}
                              name={pokemonName}
                            ></Pokemon>
                          </Col>
                        );
                      })
                    ) : (
                      <>There are no pokemon attached to team</>
                    )}
                  </Row>
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    </>
  );
};

export default Home;
