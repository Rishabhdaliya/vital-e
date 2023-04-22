import React from "react";

export const Snackbar = ({ notify, setNotify }: any) => {
  React.useEffect(() => {
    let timer: any;
    if (notify?.open) {
      timer = setTimeout(() => {
        setNotify({ ...notify, open: false });
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [notify?.open]);

  return (
    <>
      {notify?.open && (
        <div className="alert__content">
          <div
            className={
              notify?.type === "error"
                ? "mx-auto  bg-red-100 border-t-4 max-w-sm	 border-red-500 rounded-b text-red-700 px-4 py-3 shadow-md"
                : "mx-auto  bg-teal-100 border-t-4 max-w-sm	 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
            }
            role="alert"
          >
            <div className="flex">
              <div className="py-1">
                {notify?.type === "error" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className=" h-6 w-6 text-red-500 mr-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" h-6 w-6 text-teal-500 mr-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </div>
              <div>
                <p className="font-bold">{notify.heading} </p>
                <p className="text-sm">{notify.message}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
