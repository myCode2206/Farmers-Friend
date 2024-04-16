/* eslint-disable react/prop-types */
import React from 'react'

const Usertext = (props) => {
  return (
    <div>
        
                <div className="flex items-end w-3/4">
                    <img className="w-8 h-8 m-3 rounded-full" src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_960_720.png" alt="avatar"/>  
                    <div className="p-3 bg-purple-300 dark:bg-gray-800  mx-3 my-1 rounded-2xl rounded-bl-none sm:w-3/4 md:w-3/6">
                        <div className="text-xs text-gray-100 hidden dark:text-gray-200">
                            {
                               ` props.msg`
                            }
                        </div>
                        <div className="text-gray-700 dark:text-gray-200">
                        {
                            props.msg
                        }
                        </div>
                        <div className="text-xs text-gray-400">
                            1 day ago
                        </div>
                    </div>
                </div>

    </div>
  )
}

export default Usertext