import React from 'react'

export default function RelatedQuestion() {
  return (
    <div className="card shadow rounded border-0 mt-4">
    <div className="card-body">
      <h5 className="card-title mb-0">Related Posts :</h5>
      <div className="row">
        <div className="col-lg-6 mt-4 pt-2">
          <div className="card blog blog-primary rounded border-0 shadow">
            <div className="position-relative">
              <img src="assets/images/blog/01.jpg" className="card-img-top rounded-top" alt="..." />
              <div className="overlay rounded-top" />
            </div>
            <div className="card-body content">
              <h5><a href="javascript:void(0)" className="card-title title text-dark">Design your apps in your own way</a></h5>
              <div className="post-meta d-flex justify-content-between mt-3">
                <ul className="list-unstyled mb-0">
                  <li className="list-inline-item me-2 mb-0"><a href="javascript:void(0)" className="text-muted like"><i className="uil uil-heart me-1" />33</a></li>
                  <li className="list-inline-item"><a href="javascript:void(0)" className="text-muted comments"><i className="uil uil-comment me-1" />08</a></li>
                </ul>
                <a href="blog-left-sidebar-post.html" className="text-muted readmore">Read More <i className="uil uil-angle-right-b align-middle" /></a>
              </div>
            </div>
            <div className="author">
              <small className="user d-block"><i className="uil uil-user" /> Calvin Carlo</small>
              <small className="date"><i className="uil uil-calendar-alt" /> 25th June 2021</small>
            </div>
          </div>
        </div>{/*end col*/}
        <div className="col-lg-6 mt-4 pt-2">
          <div className="card blog blog-primary rounded border-0 shadow">
            <div className="position-relative">
              <img src="assets/images/blog/02.jpg" className="card-img-top rounded-top" alt="..." />
              <div className="overlay rounded-top" />
            </div>
            <div className="card-body content">
              <h5><a href="javascript:void(0)" className="card-title title text-dark">How apps is changing the IT world</a></h5>
              <div className="post-meta d-flex justify-content-between mt-3">
                <ul className="list-unstyled mb-0">
                  <li className="list-inline-item me-2 mb-0"><a href="javascript:void(0)" className="text-muted like"><i className="uil uil-heart me-1" />33</a></li>
                  <li className="list-inline-item"><a href="javascript:void(0)" className="text-muted comments"><i className="uil uil-comment me-1" />08</a></li>
                </ul>
                <a href="blog-left-sidebar-post.html" className="text-muted readmore">Read More <i className="uil uil-angle-right-b align-middle" /></a>
              </div>
            </div>
            <div className="author">
              <small className="user d-block"><i className="uil uil-user" /> Calvin Carlo</small>
              <small className="date"><i className="uil uil-calendar-alt" /> 25th June 2021</small>
            </div>
          </div>
        </div>{/*end col*/}
      </div>{/*end row*/}
    </div>
  </div>
  )
}
