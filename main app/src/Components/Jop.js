import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Styles/Jop.css";


const Jop = () => {


      return (
            <div className="jop">

                  <div className="overlay">
                  </div>
                  <header>
                        <p >header</p>
                  </header>
                  <div className="main">
                        {/* <div className="">
                              <div className="slidehead d-flex   d-lg-none">
                                    <h5>Admin Panel</h5>
                                    <div className="underline"></div>
                                    <p>6th June 2023</p>
                              </div>
                              <div className="d-flex  flex-row  d-lg-none ">
                                    <div className="d-flex   d-lg-none">
                                          <a href="#" className="navmobile "> <h5>Users</h5></a>

                                          <li class="nav-item dropdown d-sm-none">
                                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                      More
                                                </a>
                                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                      <li><a class="dropdown-item" href="#">Editor</a></li>
                                                      <li><a class="dropdown-item" href="#">Instructors</a></li>
                                                      <li><a class="dropdown-item" href="#">Students</a></li>
                                                </ul>
                                          </li>

                                    </div>
                                    <div className="d-flex   d-lg-none">
                                          <a href="#" className="navmobile"> <h5>Articles</h5> </a> */}

                                          {/* <ul >
                                                <li><a class="active" href="#">Published Articles</a></li>
                                                <li><a href="#">Scheduled Articles</a></li>
                                                <li><a href="#">Saved Drafts</a></li>

                                          </ul> */}
                                    {/* </div>
                                    <div className="d-flex   d-lg-none">
                                          <a href="#" className="navmobile"> <h5>Jops</h5> </a>

                                          <ul> */}
                                                {/* <li><a class="active" href="#">Published Jobs</a></li>
                                                <li><a href="#">Saved Drafts</a></li> */}

                                          {/* </ul>
                                    </div>
                                    <div className="d-flex   d-lg-none">
                                          <a href="#" className="navmobilec"> <h5>Courses</h5> </a>

                                          <ul> */}
                                                {/* <li><a class="active" href="#">Published Courses</a></li>
                                                <li><a href="#">Scheduled Courses</a></li>
                                                <li><a href="#">Saved Drafts</a></li> */}

                                          {/* </ul>
                                    </div>
                              </div>

                        </div> */}
                        <div className="slidepart">
                              <div className="slidehead d-none   d-lg-flex">
                                    <h5>Admin Panel</h5>
                                    <div className="underline"></div>
                                    <p>6th June 2023</p>
                              </div>

                              <div className="slidenav d-none  d-lg-flex">
                                    <div className="users">
                                          <a href="#" className="link"> <h5>Users</h5></a>

                                          < ul class="nav d-flex">

                                                <li class="nav-item">
                                                      <a class="nav-link active" href="#">Admin</a>
                                                </li>

                                                <li class="nav-item dropdown d-lg-none">
                                                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                                                      </a>
                                                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                            <li><a class="dropdown-item" href="#">Editor</a></li>
                                                            <li><a class="dropdown-item" href="#">Instructors</a></li>
                                                            <li><a class="dropdown-item" href="#">Students</a></li>
                                                      </ul>
                                                </li>

                                                <li class="nav-item d-none d-lg-flex">
                                                      <a class="nav-link" href="#">Editor</a>
                                                </li>
                                                <li class="nav-item d-none d-lg-flex">
                                                      <a class="nav-link" href="#">Instructors</a>
                                                </li>
                                                <li class="nav-item d-none d-lg-flex">
                                                      <a class="nav-link" href="#">Students</a>
                                                </li>
                                          </ul>
                                    </div>

                                    <div className="articles ">
                                          <a href="#" className="link"> <h5>Articles</h5> </a>

                                          <ul >
                                                <li><a class="active" href="#">Published Articles</a></li>
                                                <li><a href="#">Scheduled Articles</a></li>
                                                <li><a href="#">Saved Drafts</a></li>

                                          </ul>
                                    </div>

                                    <div className="jops">
                                          <a href="#" className="link"> <h5>Jops</h5> </a>

                                          <ul>
                                                <li><a class="active" href="#">Published Jobs</a></li>
                                                <li><a href="#">Saved Drafts</a></li>

                                          </ul>
                                    </div>

                                    <div className="courses">
                                          <a href="#" className="link"> <h5>Courses</h5> </a>

                                          <ul>
                                                <li><a class="active" href="#">Published Courses</a></li>
                                                <li><a href="#">Scheduled Courses</a></li>
                                                <li><a href="#">Saved Drafts</a></li>

                                          </ul>
                                    </div>
                              </div>

                        </div>



                        <div className="contentpart ">
                              <button type="button" class="btn btn-warning createjop">Create New Jop</button>
                              <div className="jopslist">
                                    <div>
                                          <div className="jopstitle">
                                                <div>
                                                      <h5>Jops</h5>
                                                      <div className="underline"></div>
                                                </div>
                                                <div>
                                                      <input type="text" placeholder="Search in Jops" className="searchbtn" />
                                                </div>
                                          </div>
                                          <div className="dataofjops">

                                                <table>
                                                      <tr>
                                                            <th>Company</th>
                                                            <th>Position</th>
                                                            <th>Status</th>
                                                            <th>Posted At</th>
                                                            <th>Application</th>
                                                      </tr>
                                                      <tr>
                                                            <td>Here's the company name</td>
                                                            <td>Here's the position</td>
                                                            <td><button type="button" class="btn btn-warning statusopen">OPEN</button></td>
                                                            <td>Monday, June 5th <br /> 12:30 PM</td>
                                                            <td>20</td>
                                                            <td><a href="#1"><i className="far fa-edit edit"></i></a> <a href="#2"><i className="fas fa-trash-alt delete" ></i></a></td>

                                                      </tr>
                                                      <tr>
                                                            <td>Here's the company name</td>
                                                            <td>Here's the position</td>
                                                            <td><button type="button" class="btn btn-warning statusopen">OPEN</button></td>
                                                            <td>Monday, June 5th <br /> 12:30 PM</td>
                                                            <td>20</td>
                                                            <td><a href="#1"><i className="far fa-edit edit"></i></a> <a href="#2"><i className="fas fa-trash-alt delete" ></i></a></td>

                                                      </tr>
                                                      <tr>
                                                            <td>Here's the company name</td>
                                                            <td>Here's the position</td>
                                                            <td><button type="button" class="btn btn-secondary statusclosed">Closed</button></td>
                                                            <td>Monday, June 5th <br /> 12:30 PM</td>
                                                            <td>20</td>
                                                            <td><a href="#1"><i className="far fa-edit edit"></i></a> <a href="#2"><i className="fas fa-trash-alt delete" ></i></a></td>

                                                      </tr>
                                                      <tr>
                                                            <td>Here's the company name</td>
                                                            <td>Here's the position</td>
                                                            <td><button type="button" class="btn btn-secondary statusclosed">Closed</button></td>
                                                            <td>Monday, June 5th <br /> 12:30 PM</td>
                                                            <td>20</td>
                                                            <td><a href="#1"><i className="far fa-edit edit"></i></a> <a href="#2"><i className="fas fa-trash-alt delete" ></i></a></td>

                                                      </tr>

                                                      <tr>
                                                            <td>Here's the company name</td>
                                                            <td>Here's the position</td>
                                                            <td><button type="button" class="btn btn-secondary statusclosed">Closed</button></td>
                                                            <td>Monday, June 5th <br /> 12:30 PM</td>
                                                            <td>20</td>
                                                            <td><a href="#1"><i className="far fa-edit edit"></i></a> <a href="#2"><i className="fas fa-trash-alt delete" ></i></a></td>

                                                      </tr>

                                                      <tr>
                                                            <td>Here's the company name</td>
                                                            <td>Here's the position</td>
                                                            <td><button type="button" class="btn btn-secondary statusclosed">Closed</button></td>
                                                            <td>Monday, June 5th <br /> 12:30 PM</td>
                                                            <td>20</td>
                                                            <td><a href="#1"><i className="far fa-edit edit"></i></a> <a href="#2"><i className="fas fa-trash-alt delete" ></i></a></td>

                                                      </tr>

                                                </table>

                                                <ul class="pagination">
                                                      <li class="page-item">
                                                            <a class="page-link previous" href="#" aria-label="Previous">
                                                                  <span aria-hidden="true">&laquo;</span>
                                                                  <span class="sr-only">Previous</span>
                                                            </a>
                                                      </li>
                                                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                      <li class="page-item">
                                                            <a class="page-link next" href="#" aria-label="Next">
                                                                  <span aria-hidden="true">&raquo;</span>
                                                                  <span class="sr-only">Next</span>
                                                            </a>
                                                      </li>
                                                </ul>

                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>




                  <footer>
<p>footer</p>
                  </footer>
            </div >

      )

};

export default Jop;