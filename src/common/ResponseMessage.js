import React from "react"

export default function ResponseMessage({ response }) {

    return (
        <>

            {response ?
                <div className="mt-5">
                    {
                        Array.isArray(response) ? response.map((i, index) => {
                            return <div className="alert alert-danger" key={index}>{i}</div>
                        }) :
                            <div className={response.toLowerCase() === "success" ? "alert alert-success" : "alert alert-danger"}>
                                {response}
                            </div>
                    }
                </div> : null
            }
        </>
    )
}