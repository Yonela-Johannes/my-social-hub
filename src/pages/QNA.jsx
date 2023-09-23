import React, { useEffect, useState , useRef} from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const QNA = ({user}) => {
  return (
    <Layout>
      <div className='flex flex-col w-full'>
        <div className="flex items-center justify-between">
          <div className="flex sm:flex-nowrap w-full sm:items-center gap-2 text-[14px] ">
            {/* {user && ( */}
              <button>
                <p>Share opening</p>
                <AiOutlineHome size={11} />
              </button>
            {/* )} */}
            <button>
              <p>Create Gig</p>
              <AiOutlineHome size={12} />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default QNA
