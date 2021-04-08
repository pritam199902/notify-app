import React from 'react'
import { Link } from 'react-router-dom';
import Test from "./Test";

function Home() {
    const arr = ['a', 'b', 'c', 'd']

    return (

        <React.Fragment>
            <>


                <style>{'body { background-color: #d1ddde; }'}</style>
                <div className="row m-0">
                    <div className="col-sm-8 my-2 m-0">
                        {/* <div className="container my-2"> */}
                        <div className="row m-0">
                            <div className="col-lg-12 col-md-10 col-sm-10 m-0">

                                {/* card 1 */}
                                <div>
                                    <div className="card text-center">
                                        <div style={{ padding: '0.3rem' }} className="card-body">
                                            <h5 style={{ fontWeight: 'normal' }} className="card-title">Computer Science & Engineering(CSE)</h5>
                                            <p style={{ fontStyle: 'italic' }} className="card-text">Department of CSE is committed to impart Technical and Research based quality
                                            education and to develop innovative skills among the students and to enrich the academic activities
                                             through continual improvement in the teaching and learning processes.</p>
                                            <label style={{ color: 'blue' }}>For total notice click in View button</label>
                                            <div>
                                                <Link to="/home/dpt/Dept"><button style={{ background: '#17d4d4', color: 'white' }} className="btn">View</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* card 1 end */}
                                {/* card2 */}
                                <div style={{ paddingTop: '5px' }}>
                                    <div className="card text-center">
                                        <div style={{ padding: '0.5rem' }} className="card-body">
                                            <h5 style={{ fontWeight: 'normal' }} className="card-title">Civil Engineering(CE)</h5>
                                            <p style={{ fontStyle: 'italic' }} className="card-text">Civil engineers create, improve and protect the environment in which we live. They plan, design and oversee construction
                                            and maintenance of building structures and infrastructure, such as roads, railways, airports, bridges, harbours, dams, irrigation projects,
                                             power plants, and water and sewerage systems.</p>
                                            <label style={{ color: 'blue' }}>For total notice click in View button</label>
                                            <div>
                                                <Link to="/"><button style={{ background: '#17d4d4', color: 'white' }} className="btn">View</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card2 end */}
                                {/* card3 */}
                                <div style={{ paddingTop: '5px' }}>
                                    <div className="card text-center">
                                        <div style={{ padding: '0.5rem' }} className="card-body">
                                            <h5 style={{ fontWeight: 'normal' }} className="card-title">Electronics & Communication Engineering(ECE)</h5>
                                            <p style={{ fontStyle: 'italic' }} className="card-text">It is the utilization of science and math applied to
                                            practical problems in the field of Electronics & Communication. Electronic communication engineers engage in research,
                                             design, development and testing of the electronic equipment used in various communications systems.</p>
                                            <label style={{ color: 'blue' }}>For total notice click in View button</label>
                                            <div>
                                                <Link to="/"><button style={{ background: '#17d4d4', color: 'white' }} className="btn">View</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card3 end */}
                                {/* card4 */}
                                <div style={{ paddingTop: '5px' }}>
                                    <div className="card text-center">
                                        <div style={{ padding: '0.5rem' }} className="card-body">
                                            <h5 style={{ fontWeight: 'normal' }} className="card-title">Electrical Engineering(EE)</h5>
                                            <p style={{ fontStyle: 'italic' }} className="card-text">Electrical engineers design, develop,
                                            and test electrical devices and equipment, including communications systems, power generators,
                                         motors and navigation systems, and electrical systems for automobiles and aircraft.</p>
                                            <label style={{ color: 'blue' }}>For total notice click in View button</label>
                                            <div>
                                                <Link to="#"><button style={{ background: '#17d4d4', color: 'white' }} className="btn">View</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* card4 end */}


                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    <div className="col-sm-4 my-2 m-0">
                        {/* <div className="container my-2"> */}
                        <div className="row m-0">
                            <div className="col-lg-12 col-md-10 col-sm-10 m-0">
                                <div className="card shadow">
                                    <div style={{ padding: '0.5rem' }} className="card-body">
                                        {/* heading */}
                                        <div className="row">
                                            <div className="col">
                                                <h5 className="text-center" style={{ fontWeight: 'revert', fontStyle: 'italic', color: '#91161a' }}>
                                                    Recent Notice
                                                </h5>
                                            </div>

                                        </div>
                                        <hr />


                                        <Link to="#"><p style={{ fontWeight: 'bold' }}>Notice 1</p></Link>
                                        <Link to="#"><p style={{ fontWeight: 'bold' }}>Notice 2</p></Link>
                                        <Link to="#"><p style={{ fontWeight: 'bold' }}>Notice 3</p></Link>
                                        <Link to="#"><p style={{ fontWeight: 'bold' }}>Notice 4</p></Link>




                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}

                {/* <Test data={{ myobject: 'kousik', address: 'nabagram' }} /> */}
                {arr.map((e, i) => {

                    return <Test data={{ value: e }} key={i} />
                })}
            </>
        </React.Fragment>

    )

}

export default Home
