import { CheckIcon } from '@heroicons/react/20/solid';

Success.defaultProps = {
  message: null,
  errors: {}
}

export default function Success(props) {
  let { message } = props;

  return (
    <div className="rounded-md bg-green-50 p-4 my-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          {message &&
            <h3 className="text-sm font-medium text-green-800">{message}</h3>
          }
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
