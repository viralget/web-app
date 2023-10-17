import { XCircleIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'

Error.defaultProps = {
  message: null,
  errors: {}
}

export default function Error(props) {
  let { message, errors } = props;

  if (Object.keys(errors).length == 1) {
    //Display first error message as the actual error message instead
    message = Object.values(errors)[0];

    // // console.log({ message })
    errors = [];
  }

  return (
    <div className="rounded-md bg-red-50 p-4 my-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          {message &&
            <h3 className="text-sm font-medium text-red-800">{message}</h3>
          }
          {Object.keys(errors).length > 0 && (
            <div className="mt-2 text-sm text-red-700">
              <ul role="list" className="list-disc pl-5 space-y-1">
                {Object.values(errors).map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              onClick={() => props.setMessage(null)}
              className="inline-flex text-gray-500 rounded-md p-1.5  focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  )
}
