import React from 'react'
import "./Review.scss"
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'

const Review = ({review}) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then(res=>{
        return res.data
      })
  })

  return (
    <div className="review">
              {isLoading ? "Sabar lek" : error ? "waduh error" : <div className="user">
                <img
                  className="pp"
                  src={data.img || "/img/noavatar.jpg"}
                  alt=""
                />
                <div className="info">
                  <span>{data.username}</span>
                  <div className="country">
                    <img
                      src="https://i.pinimg.com/564x/19/25/6f/19256fc3387dc4c7b384e6e8af443d32.jpg"
                      alt=""
                    />
                    <span>{data.country}</span>
                  </div>
                </div>
              </div>}
              <div className="stars">
                {Array(review.star).fill().map((item,i)=>(
                <img src="/img/star.png" alt="" key={i} />
                ))}
                <span>
                {review.star}
                </span>
              </div>
              <p>
              {review.desc}
              </p>
              <div className="helpful">
                <span>Membantu?</span>
                <img src="/img/like.png" alt="" />
                <span>Ya</span>
                <img src="/img/dislike.png" alt="" />
                <span>Tidak</span>
              </div>
            </div>
  )
}

export default Review