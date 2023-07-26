import { useEffect, useState } from 'react'
import { TableRow } from '../Components/TableRow'
import axiosInstance from '../axios'
import axios from 'axios'

export const Units = () => {
  const [units, setUnits] = useState([])

  const logout = () => {
    axiosInstance.post('/logouts').then(() => {
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      window.location.href = '/login'
    })
  }

  useEffect(() => {
    axiosInstance
      .get('/units')
      .then((res) => {
        if (res.status == 200) {
          setUnits(res.data)
        }
      })
      .catch(() => {
        console.log('refreshing token')
        axios
          .post('https://test.indusgame.com/auths', {
            refreshToken: localStorage.getItem('refresh_token'),
          })
          .then((res) => {
            console.log('success')
            if (res.status == 200) {
              localStorage.setItem('access_token', res.data.accessToken)
              localStorage.setItem('refresh_token', res.data.refreshToken)
              window.location.href = '/'
            }
          })
          .catch((e) => {
            console.log('error', e)
            // localStorage.removeItem("access_token");
            // localStorage.removeItem("refresh_token");
            window.location.href = '/login'
          })
      })
  }, [])

  return (
    <>
      <div className="flex w-3/4 items-center justify-center overflow-y-auto overflow-x-hidden">
        {/* <h1>Units</h1> */}
        <table className="w-full table-fixed border-collapse overflow-y-scroll border-2 border-gray-300 p-3 shadow-md">
          <thead className="sticky top-0 bg-white">
            <tr className="border-2 border-gray-300 bg-gray-200">
              <th className="p-3">Name</th>
              <th>Type</th>
              <th>Role</th>
              <th>Faction</th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody
            className="bg-grey-light flex w-[75vw] flex-col items-center justify-between overflow-y-scroll"
            style={{ height: '75vh' }}
          >
            {units?.map((unit) => (
              <TableRow unit={unit} key={unit?.code} />
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
        onClick={logout}
      >
        Log Out
      </button>
    </>
  )
}
