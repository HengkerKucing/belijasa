import React from 'react'
import "./Messages.scss"
import { Link, useParams } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from './../../utils/newRequest';
import moment from "moment"

const Messages = () => {
const currentUser = JSON.parse(localStorage.getItem("currentUser"))

const queryClient = useQueryClient()

const { isLoading, error, data } = useQuery({
  queryKey: ['conversations'],
  queryFn: () =>
    newRequest.get(`/conversations`)
  .then((res)=>{
      return res.data
    })
})



const mutation = useMutation({
  mutationFn: (id) => {
    return newRequest.put(`/conversations/${id}`)
  },
  onSuccess:()=>{
    queryClient.invalidateQueries(["conversations"])
  }
})

const handleRead = (id) => {
  mutation.mutate(id)
}

  return (
    <div className='messages'>
      {isLoading ? "sabar cik" : error ? "waduhek error rek" : <div className="container">
        <div className="title">
          <h2>Pesan</h2>
        </div>
        <table>
          <tr>
            <th>Pembeli</th>
            <th>Pesan Terakhir</th>
            <th>Waktu</th>
            <th>Aksi</th>
          </tr>
          {data.map(c=>(
          <tr className={(currentUser.isSeller && !c.readBySeller) || (!currentUser.isSeller && !c.readByBuyer)
            && "active"} key={c.id}>
            <td>
              {currentUser.isSeller ? c.buyerId : c.sellerId}
            </td>
            <td>
              <Link to={`/message/${c.id}`} className='link'>
                {c?.lastMessage?.substring(0,100)}...
              </Link>
            </td>
            <td>{moment(c.updatedAt).fromNow()}</td>
            <td>
              {((currentUser.isSeller && !c.readBySeller) || (!currentUser.isSeller && !c.readByBuyer))
              && (<button onClick={()=>handleRead(c.id)}>Tandai telah Dibaca</button>)}
            </td>
          </tr>
          ))}
        </table>
      </div>}
    </div>
  )
}

export default Messages