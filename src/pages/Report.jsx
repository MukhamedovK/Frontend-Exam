import React, { useState, useEffect } from 'react'

const Report = () => {
  const [reports, setReports] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setReports(data.comments)
      })
  }, []);

  return (
    <>
      <h1 className='text-center text-[30px] mt-10 font-bold'>Reports</h1>
      <div className='flex flex-col m-auto mt-5 w-[30%] gap-5 mb-10'>
        {reports.map((item, id) => (
          <div className="chat chat-start p-[20px] flex flex-col rounded-[20px] bg-slate-900" key={id}>
            <small className='text-slate-300 text-[10px]'>@{item.user.username}</small>
            <div className="">{item.body}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Report
