import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { Grid, Row, Col, Panel } from "react-bootstrap";
// import OverviewSection from "../components/OverviewSection";
// import PolicySection from "../components/PolicySection";
import "./Dashboard.css";

class Dashboard extends Component {

      render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col md={12}>
                            <Panel>
                                <Panel.Body>Dashboard</Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        {/* <OverviewSection/>
                        <PolicySection/> */}
                    </Row>
                </Grid>
            </div>
        );
    }
}
 
export default withRouter(Dashboard);