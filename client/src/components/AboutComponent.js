import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { Fade, Stagger } from 'react-animation-components'

function RenderLeaders({leader}) {

    return (
            <Media tag="li">
                <Media>
                    <Media object src={baseUrl + leader.image}/>
                </Media>
                <Media body className="ml-5">
                    <Media heading style={{fontWeight: 'bold'}}>{leader.name}</Media>
                    <Media title>{leader.occupation}</Media>
                    <p className="mt-3">{leader.description}</p>
                </Media>
            </Media>
    );
}



function About(props) {

    const leaders = props.leaders.leaders.map((leader) => {
        return (
            <div key={leader.id}>
                <Fade in>
                    <RenderLeaders leader={leader}/>
                </Fade>
            </div>
        );
    });

    if (props.leaders.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }

    else if (props.leaders.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.leaders.errMess}</h4>
                </div>
            </div>
        )
    }

     else
         return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>About Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 col-md-6">
                        <h2>Our History</h2>
                        <p>Home to the most famous chef in Paris, Auguste Gusteau. At one time, it was a five-star culinary destination of Paris,</p>
                        <p>The restaurant is now owned by Auguste Gusteau's son, Alfred Linguine.</p>
                    </div>
                    <div className="col-12 col-md-5">
                        <Card>
                            <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                            <CardBody>
                                <dl className="row p-1">
                                    <dt className="col-6">Started</dt>
                                    <dd className="col-6">June 29th, 2007</dd>
                                    <dt className="col-6">Owner</dt>
                                    <dd className="col-6">Alfredo Linguine</dd>
                                    <dt className="col-6">Last Year's Turnover</dt>
                                    <dd className="col-6">$5,254,325</dd>
                                    <dt className="col-6">Employees</dt>
                                    <dd className="col-6">37</dd>
                                </dl>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12">
                        <Card>
                            <CardBody className="bg-faded">
                                <blockquote className="blockquote">
                                    <p className="mb-0">You must be imaginative, strong-hearted. You must try things that may not work, and you must not let anyone define your limits because of where you come from. Your only limit is your soul.
                                        What I say is true - anyone can cook... but only the fearless can be great.</p>
                                    <footer className="blockquote-footer">Auguste Gusteau,
                                        <cite title="Source Title"> Founder of Gusteau's</cite>
                                    </footer>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row row-content">
                    <h2>Culinary Team</h2>
                    <div className="col-12">
                        <Stagger in>
                            <Media list>
                                {leaders}
                            </Media>
                        </Stagger>
                    </div>
                </div>
            </div>
        );
}

export default About;