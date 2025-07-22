"use client";
import { FieldError, Loader } from "@/assets";
import Footer from "@/components/footer/Footer";
import Header21 from "@/components/header/Header21";
import { login } from "@/redux/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
export default function Page() {
    const router = useRouter();
    const userReducer = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const {
        setValue,
        control,
        watch,
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
    });
    const onSubmit = async (data) => {
        dispatch(login(data, moveToNext, moveToFailure))
    };

    function moveToNext(response) {
        if (response) {
            localStorage.setItem('user', JSON.stringify(response))
            router.push('/dashboard');
        }
    }
    function moveToFailure(error_msg = "some thing went wrong") {
        console.log()
        toast.error(error_msg, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
    return (
        <>
            <ToastContainer />
            <div className="bgc-thm4">
                <Header21 />
                <section className="our-login">
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-lg-6 m-auto wow fadeInUp"
                                data-wow-delay="300ms"
                            >
                                <div className="main-title text-center">
                                    <h2 className="title">Log In</h2>
                                    <p className="paragraph">
                                        Give your visitor a smooth online
                                        experience with a solid UX design
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="row wow fadeInRight"
                            data-wow-delay="300ms"
                        >
                            <div className="col-xl-6 mx-auto">
                                <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                                    <div className="mb30">
                                        <h4>We're glad to see you again!</h4>
                                        <p className="text">
                                            Don't have an account?{" "}
                                            <Link
                                                href="/register"
                                                className="text-thm"
                                            >
                                                Sign Up!
                                            </Link>
                                        </p>
                                    </div>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb20">
                                            <label className="form-label fw500 dark-color">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                {...register('email', { required: 'Email is required' })}
                                                className="form-control"
                                                placeholder=""
                                            />
                                            {
                                                errors.email &&
                                                <FieldError message={errors.email.message} />
                                            }
                                        </div>
                                        <div className="mb15">
                                            <label className="form-label fw500 dark-color">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control"
                                                placeholder=""
                                                {...register('password', { required: 'Password is required' })}
                                            />
                                            {
                                                errors.password &&
                                                <FieldError message={errors.password.message} />
                                            }
                                        </div>
                                        <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb20">
                                            {/* <label className="custom_checkbox fz14 ff-heading">
                                                Remember me
                                                <input
                                                    type="checkbox"
                                                    defaultChecked="checked"
                                                />
                                                <span className="checkmark" />
                                            </label> */}
                                            <a className="fz14 ff-heading">
                                                Lost your password?
                                            </a>
                                        </div>
                                        <div className="d-grid mb20">
                                            {
                                                userReducer.loading === true
                                                    ?
                                                    <Loader />
                                                    :
                                                    <button
                                                        className="ud-btn btn-thm"
                                                        type="submit"
                                                    >
                                                        Log In{" "}
                                                        <i className="fal fa-arrow-right-long" />
                                                    </button>
                                            }
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}
