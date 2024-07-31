import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from 'yup';
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
import { firebaseAuth, firebaseDB } from "../../utils/firebaseConfig";

export default function Register() {
  const navigate = useNavigate();
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [paddingHorizontal, setPaddingHorizontal] = useState<number>(0);
  const [paddingVertical, setPaddingVertical] = useState<number>(0);
  const [userNameInputSize, setUserNameInputSize] = useState({ horizontal: 0, vertical: 0, fontSize: 0 });
  const [commonInputSize, setCommonInputSize] = useState({ horizontal: 0, vertical: 0, fontSize: 0 });
  const [registerBtnSize, setRegisterBtnSize] = useState({ horizontal: 0, vertical: 0, fontSize: 0 });

  const updatePadding = () => {
    if (imgRef.current) {
      setPaddingHorizontal(imgRef.current.offsetWidth * 0.055);
      setPaddingVertical(imgRef.current.offsetHeight * 0.022);
      setUserNameInputSize({
        horizontal: imgRef.current.offsetWidth * 0.102,
        vertical: imgRef.current.offsetHeight * 0.069,
        fontSize: imgRef.current.offsetWidth * 0.015
      });
      setCommonInputSize({
        horizontal: imgRef.current.offsetWidth * 0.108,
        vertical: imgRef.current.offsetHeight * 0.029,
        fontSize: imgRef.current.offsetWidth * 0.016
      });
      setRegisterBtnSize({
        horizontal: imgRef.current.offsetWidth * 0.12,
        vertical: imgRef.current.offsetHeight * 0.04,
        fontSize: imgRef.current.offsetWidth * 0.02
      });
    }
  }

  useEffect(() => {
    const imgElement = imgRef.current;

    const handleResize = () => {
      updatePadding();
    };

    window.addEventListener('resize', handleResize);

    if (imgElement) {
      imgElement.addEventListener('load', updatePadding);
    }

    updatePadding();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (imgElement) {
        imgElement.removeEventListener('load', updatePadding);
      }
    };
  }, []);

  return (
    <div className="flex flex-row justify-center">
      <div className="relative">
        <img
          src="/images/register.png"
          alt="background"
          className="h-full -z-40 h-screen"
          ref={imgRef}
        />
        <Formik
          initialValues={{
            userName: '',
            email: '',
            email2: '',
            password: '',
            password2: '',
            submit: null
          }}
          validationSchema={Yup.object().shape({
            userName: Yup.string()
              .required('User Name is required')
              .max(255, 'User Name must be at most 255 characters'),
            email: Yup.string()
              .email("Must be a valid email")
              .max(255, 'Email must be at most 255 characters')
              .required('Email is required'),
            email2: Yup.string()
              .oneOf([Yup.ref('email'), undefined], 'Emails must match')
              .required('Please confirm your email'),
            password: Yup.string()
              .required('Password is required')
              .min(6, 'Password must be at least 6 characters')
              .max(255, 'Password must be at most 255 characters'),
            password2: Yup.string()
              .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
              .required('Please confirm your password')
          })}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const userCredentials = await createUserWithEmailAndPassword(
                firebaseAuth,
                values.email,
                values.password
              );
              const user = userCredentials.user;
              await setDoc(doc(firebaseDB, "users", user.uid), {
                userName: values.userName,
                email: values.email
              })
              toast.success('User registered successfully');
              navigate("/login");
              setSubmitting(false);
            } catch (err) {
              console.log(err);
              toast.error('Error occurred during registration');
              setSubmitting(false);
            }
          }}
        >
          {({ handleBlur, handleChange, handleSubmit, values, errors }) => (
            <form onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
              const errorOrder: Array<keyof typeof values> = ['userName', 'email', 'email2', 'password', 'password2'];
              for (const key of errorOrder) {
                if (errors[key]) {
                  toast.error(errors[key]);
                  break;
                }
              }
            }}>
              <input
                type="text"
                name="userName"
                value={values.userName}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="User Name"
                className="absolute top-[35.7%] left-[45.7%] bg-transparent text-center placeholder-red-500 text-red-500 outline-none"
                style={{ width: `${userNameInputSize.horizontal}px`, height: `${userNameInputSize.vertical}px`, fontSize: `${userNameInputSize.fontSize}px` }}
              />
              <input
                type="text"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="E-Mail"
                className="absolute top-[66.2%] left-[22.2%] bg-transparent text-center placeholder-[#a9a38e] text-[#a9a38e] outline-none"
                style={{ width: `${commonInputSize.horizontal}px`, height: `${commonInputSize.vertical}px`, fontSize: `${commonInputSize.fontSize}px` }}
              />
              <input
                type="text"
                name="email2"
                value={values.email2}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Repeat E-Mail"
                className="absolute top-[71.2%] left-[22.2%] bg-transparent text-center placeholder-[#a9a38e] text-[#a9a38e] outline-none"
                style={{ width: `${commonInputSize.horizontal}px`, height: `${commonInputSize.vertical}px`, fontSize: `${commonInputSize.fontSize}px` }}
              />
              <input
                type="password"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Password"
                className="absolute top-[66.2%] left-[69.4%] bg-transparent text-center placeholder-[#a9a38e] text-[#a9a38e] outline-none"
                style={{ width: `${commonInputSize.horizontal}px`, height: `${commonInputSize.vertical}px`, fontSize: `${commonInputSize.fontSize}px` }}
              />
              <input
                type="password"
                name="password2"
                value={values.password2}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Repeat Password"
                className="absolute top-[71.2%] left-[69.4%] bg-transparent text-center placeholder-[#a9a38e] text-[#a9a38e] outline-none"
                style={{ width: `${commonInputSize.horizontal}px`, height: `${commonInputSize.vertical}px`, fontSize: `${commonInputSize.fontSize}px` }}
              />
              <button
                type="submit"
                className="absolute top-[68.2%] left-[44.7%] flex justify-center items-center cursor-pointer"
                style={{ width: `${registerBtnSize.horizontal}px`, height: `${registerBtnSize.vertical}px` }}
              >
                <span className="text-red-600 w-full" style={{ fontSize: `${registerBtnSize.fontSize}px` }}>Register</span>
              </button>
            </form>
          )}
        </Formik>
        <Link
          className="absolute top-[88.6%] left-[45.2%] bg-slate-400 opacity-10 hover:opacity-10"
          to="/home"
          style={{
            padding: `${paddingVertical}px ${paddingHorizontal}px`,
          }}
        />
      </div>
    </div>
  );
}