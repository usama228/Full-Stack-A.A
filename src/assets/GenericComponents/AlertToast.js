import { toast } from "react-toastify";
import Alert from 'react-bootstrap/Alert';
export default function Alert1(props) {

    return (
        <>
            <div className="ui-content">
                <h5 className="title">Message Boxes</h5>
                <div className="message-alart-style1">
                    <div
                        className="alert alart_style_one alert-dismissible fade show mb20"
                        role="alert"
                    >
                        Info: User pending action
                        <i
                            className="far fa-xmark btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                        />
                    </div>
                    <div
                        className="alert alart_style_two alert-dismissible fade show mb20"
                        role="alert"
                    >
                        Warning: User has to be admin
                        <i
                            className="far fa-xmark btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                        />
                    </div>
                    <div
                        className="alert alart_style_three alert-dismissible fade show mb20"
                        role="alert"
                    >
                        Error: Internal Server Error
                        <i
                            className="far fa-xmark btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                        />
                    </div>
                    <div
                        className="alert alart_style_four alert-dismissible fade show mb20"
                        role="alert"
                    >
                        Success: Updated members status
                        <i
                            className="far fa-xmark btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export function AlertToast(message) {
   
        toast.error(message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    
    // if (type === "error") {
    //     return (
    //         toast.error(message, {
    //             position: "top-right",
    //             autoClose: 2000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //         })
    //     )
    // } else if (type === "success") {
    //     return (
    //         toast.success(message, {
    //             position: "top-right",
    //             autoClose: 2000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //         })
    //     )
    // } else if (type === "info") {
    //     return (
    //         toast.info(message, {
    //             position: "top-right",
    //             autoClose: 2000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //         })
    //     )
    // } else {
    //     return (
    //         toast.warn(message, {
    //             position: "top-right",
    //             autoClose: 2000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //         })
    //     )
    // }

}

export function AlertToastMsg(type, message) {

    toast.error(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })

    // if (type === "error") {
    //     return (
    //         toast.error(message, {
    //             position: "top-right",
    //             autoClose: 2000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //         })
    //     )
    // } else if (type === "success") {
    //     return (
    //         toast.success(message, {
    //             position: "top-right",
    //             autoClose: 2000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //         })
    //     )
    // } else if (type === "info") {
    //     return (
    //         toast.info(message, {
    //             position: "top-right",
    //             autoClose: 2000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //         })
    //     )
    // } else {
    //     return (
    //         toast.warn(message, {
    //             position: "top-right",
    //             autoClose: 2000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //         })
    //     )
    // }

}