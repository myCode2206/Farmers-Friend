import React from 'react'

const Mytext = (props) => {
  
  const { text, user } = props;

  return (
    <>
                {/* mera text  */}

                <div className="flex justify-end">
                    <div className="flex items-end w-auto bg-purple-500 dark:bg-gray-800 m-1 rounded-xl rounded-br-none sm:w-3/4 md:w-auto">
                        <div className="p-2">
                            <div className="text-gray-200">
                                {text}
                                {/* hellonjcennd */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* mera text end */}

    </>
  )
}

export default Mytext