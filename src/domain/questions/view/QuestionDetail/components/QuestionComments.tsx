import React from 'react'
import { PLACEHOLDER_IMAGE } from '../../../../../library/constant/app.constant';
import { UserModel } from '../../../../user/model/user.model';
import { CommentModel } from '../../../model/comment.model';
import { Comment } from "../../../model/Question"

interface Props {
  comments: Comment[]
}

const QuestionComments: React.FC<Props> = ({
  comments
}) => {
  return (
    <div className="card shadow rounded border-0 mt-4">
      <div className="card-body">
        <h5 className="card-title mb-0">Comments :</h5>
        <ul className="media-list list-unstyled mb-0">
          {comments.map((comment, key) => {
            const commentModel = CommentModel.make(comment);
            const userModel = UserModel.make(comment.commentByUser!)
            return (
              <li className="mt-4" key={key}>
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <a className="pe-3" href="blog-left-sidebar-post.html#">
                      <img src={userModel.pluck('image') || PLACEHOLDER_IMAGE} className="img-fluid avatar object-fit avatar-md-sm rounded-circle shadow" alt="img"  />
                    </a>
                    <div className="commentor-detail">
                      <h6 className="mb-0"><a href="javascript:void(0)" className="text-dark media-heading">{userModel.pluck('username')}</a></h6>
                      <small className="text-muted">15th August, 2021 at 01:25 pm</small>
                    </div>
                  </div>
                  <a href="blog-left-sidebar-post.html#" className="text-muted"><i className="mdi mdi-reply" /> Reply</a>
                </div>
                <div className="mt-3">
                  <p className="text-muted fst-italic p-3 bg-light rounded">{commentModel.pluck('content')}</p>
                </div>
              </li>
            )
          })}

        </ul>
      </div>
    </div>
  )
}


export default QuestionComments;