import Carousel from "../../components/user/Carousel";

function HomePage() {
    return (
        <>
            <Carousel />

            <h4 id="" className="fs-4 text-center">
                UNIVERSITY VISION AND MISSION STATEMENTS
            </h4>
            <div className="accordion d-flex flex-column text-center mb-5">
                <button className="btn border border-0 text-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#vision">
                    <h5>VISION</h5>
                </button>
                <div className="collapse show" id="vision">
                    <em>The premier university in historic Cavite globally recognized for excellence in character development, academics, research, innovation and sustainable community engagement.</em>
                </div>

                <button className="btn border border-0 text-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#mission">
                    <h5>MISSION</h5>
                </button>
                <div className="collapse show" id="mission">
                    <em>Cavite State University shall provide excellent, equitable and relevant educational opportunities in the arts, sciences and technology through quality instruction and responsive research and development activities. It shall produce professional, skilled and morally upright individuals for global competitiveness.</em>
                </div>

                <button className="btn border border-0 text-primary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#qualityPolicy">
                    <h5>QUALITY POLICY</h5>
                </button>
                <div className="collapse show" id="qualityPolicy">
                    <em>
                        We <strong>C</strong>ommit to the highest standards of education, <strong>V</strong>alue our stakeholders, <strong>S</strong>trive for continual improvement of our products and services, and <strong>U</strong>phold the University’s tenets of Truth, Excellence, and Service to produce globally competitive and morally upright individuals.
                    </em>
                </div>
            </div>

            <div data-aos="fade-in" className="library-objecttives mb-5">
                <h3>LIBRARY OBJECTIVES</h3>
                <ul className="text-start mt-4">
                    <li>To support the school's graduate and undergraduate programs in its instructional, research, and information needs</li>
                    <li>To provide resources, facilities, and services to the Southern Luzon State University academic community as a means to achieve the school’s goals and objective</li>
                    <li>To develop, enrich, and maintain the library collection in terms of the courses offered and special programs of the College</li>
                    <li>To extend services to non-SLSU students within the limits of its resources</li>
                </ul>
            </div>

            <div data-aos="fade-in" className="library-rules mb-5">
                <h3>LIBRARY RULES AND REGULATIONS</h3>
                <ul className="text-start mt-4">
                    <li>To support the school's graduate and undergraduate programs in its instructional, research, and information needs</li>
                    <li>To provide resources, facilities, and services to the Southern Luzon State University academic community as a means to achieve the school’s goals and objectives</li>
                    <li>To develop, enrich, and maintain the library collection in terms of the course offerings and special programs of the College</li>
                    <li>To extend services to non-SLSU students within the limits of its resources</li>
                </ul>
            </div>

            <div data-aos="fade-in" className="library-borrowingPrevileges mb-5">
                <h3>BORROWING PRIVILEGES</h3>
                <ol className="text-start">
                    <li className="fst-italic mt-3">Reading Room Use only.</li>
                    <ul>
                        <li>Two (2) non-reserved books can be borrowed at a time by library users.</li>
                        <li>Posters, maps, and globes may be borrowed for classroom use and should be returned on the same day.</li>
                        <li>
                            Reference books such as encyclopedias, yearbooks, dictionaries, newly acquired books, reserved books, theses, special projects, dissertations, periodicals, newspapers, audio-visual materials, and vertical file clippings are for <strong>LIBRARY USE ONLY</strong>.
                        </li>
                    </ul>
                    <li className="fst-italic mt-3">Overnight and Home Reading Loans.</li>
                    <ul>
                        <li>Overnight and Home Reading loans of two (2) non-reserved books are issued from 3:00 – 4:30 pm.</li>
                        <li>It should be returned on or before 9:00 am the next school day.</li>
                        <li>Overnight and home reading loans will start on the second week of the semester.</li>
                    </ul>
                    <li className="fst-italic mt-3">Students can borrow a maximum of two (2) books at a time.</li>
                    <li className="fst-italic mt-3">Alumni are allowed to borrow books for library use only.</li>
                    <li className="fst-italic mt-3">Maximum number of books that can be borrowed by faculty and employees are as follows:</li>
                    <ul>
                        <li>Permanent Faculty or College Officials – three (3) titles for two (2) weeks.</li>
                        <li>Permanent Administrative Staff – two (2) titles for one (1) week.</li>
                        <li>Part-time Faculty – three (3) titles for two (2) weeks (with Deans certification).</li>
                    </ul>
                </ol>
            </div>

            <div data-aos="fade-in" className="library-fines mb-5">
                <h4>Overdue Fines</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>CLIENT</th>
                            <th>BOOK TYPE</th>
                            <th>FINES</th>
                        </tr>
                    </thead>
                    <tbody className="text-start fs-7 fs-md-6">
                        <tr>
                            <td>Student</td>
                            <td>
                                <div className="border-bottom">General Circulation</div>
                                <div>Reserve</div>
                            </td>
                            <td>
                                <div className="border-bottom">Php 5.00 / day*</div>
                                <div>Php 50.00 / day*</div>
                            </td>
                        </tr>
                        <tr>
                            <td>Faculty</td>
                            <td>
                                <div className="border-bottom">General Circulation</div>
                                <div>Reserve</div>
                            </td>
                            <td>
                                <div className="border-bottom">Php 10.00 / day*</div>
                                <div>Php 50.00 / day*</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div data-aos="fade-in" className="library-guides mb-5">
                <h4>Guide to CvSU Library</h4>
                <h5 className="mt-3">Orientation</h5>
                <p>The Library Personnel shall orient students and faculty members at the start of each school year on the collections, rules and regulations, and the services that the unit offers.</p>
                <br />
                <h5>Current Awareness</h5>
                <p>Bulletin boards are available for announcements, lists of newly acquired books, delinquent borrowers, and websites.</p>
                <br />
                <h5>Library Users</h5>
                <ul className="text-start">
                    <li>
                        <strong>Regular Users</strong> – all bonafide students, staff, and faculty members of CvSU Main Campus.
                    </li>
                    <li>
                        <strong>Extended Users</strong> – all bonafide students, staff, and faculty members of CvSU Campuses as well as alumni; I.D. is required (library resources for Room Use Only).
                    </li>
                    <li>
                        <strong>Visitors</strong> – users, not from the CvSU System, who have referral letters from librarians or heads of offices where they are enrolled/employed.
                    </li>
                </ul>
            </div>
        </>
    );
}

export default HomePage;
