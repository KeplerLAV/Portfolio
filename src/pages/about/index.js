import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  meta,
  worktimeline,
  skills,
  services,
  certifications
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">À propos de moi</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        
        {/* About Me Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Daniel Da Cunha Gomes</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p><strong>Profession :</strong> Administrateur Réseau Junior</p>
              <p><strong>Formation :</strong> Étudiant en Master 1 spécialisé en cloud, sécurité et infrastructure réseau.</p>
              <p><strong>Expérience :</strong> Solide expérience en administration réseau, gestion de serveurs Windows/Linux, et cybersécurité.</p>
              <p><strong>Passion :</strong> Passionné par les défis techniques et l'innovation.</p>
              <p><strong>Langues :</strong> Portugais, Espagnol, Anglais</p>
            </div>
          </Col>
        </Row>
        
        {/* Work Timeline Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Timeline de travail</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        
        {/* Skills Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Compétences</h3>
          </Col>
          <Col lg="7">
            <div>
              <p><strong>Réseaux :</strong> VLAN, Routage (Intervlan, Dynamique), OSPF, Firewalling, HSRP, ACL.</p>
              <p><strong>Administration Système :</strong> DNS/FTP/MDT/WDS (Windows), Linux (Ubuntu, Debian, Kali).</p>
              <p><strong>Hardware :</strong> Montage et dépannage PC.</p>
              <p><strong>Outils :</strong> VMware, Zendesk, GLPI, TeamViewer.</p>
              <p><strong>Certifications :</strong> Microsoft Certified: Azure Fundamentals (AZ-900)<br/>AWS Certified Cloud Practitioner (CLF-C02)</p>
              
              
            </div>
            {/* {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })} */}
          </Col>
        </Row>
        
        {/* Services Section */}
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
              <h3 className="color_sec py-4">Certifications</h3>
          </Col>
          <Col lg="7">
              {certifications.map((data, i) => {
                  return (
                      <div key={i}>
                          <h5 className="certification__title">{data.title}</h5>
                          <p className="certification_desc">{data.description}</p>
                          <a href={data.link} target="_blank" rel="noopener noreferrer">Voir la certification</a>
                      </div>
                  );
              })}
          </Col>
      </Row>

        
        {/* Certifications Section
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Certifications</h3>
          </Col>
          <Col lg="7">
            <ul>
              <li><strong>Microsoft Certified:</strong> Azure Fundamentals (AZ-900)</li>
            </ul>
          </Col>
        </Row> */}
        
        {/* Education Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Formation</h3>
          </Col>
          <Col lg="7">
            <ul>
              <li><strong>Master :</strong> Expert en Cloud, Sécurité & Infrastructure – Ynov Paris (2024-2026)</li>
              <li><strong>Bachelor :</strong> Informatique – Ynov Paris (2021-2024)</li>
            </ul>
          </Col>
        </Row>
        
        {/* Interests Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Centres d’intérêt</h3>
          </Col>
          <Col lg="7">
            <p>Sport (tennis, boxe) <br/>Cinéma <br/>Mécanique.</p>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
