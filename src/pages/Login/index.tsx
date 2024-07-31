import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, firebaseDB } from "../../utils/firebaseConfig";
import useAuthStore from "../../store";

export default function Login() {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement | null>(null);
  const [authBtnSize, setAuthBtnSize] = useState({ horizontal: 0, vertical: 0 });
  const [buildBtnSize, setBuildBtnSize] = useState({ horizontal: 0, vertical: 0 });
  const [squareBtnWidth, setSquareBtnWidth] = useState({ horizontal: 0, vertical: 0 });
  const [introBtn, setIntroBtnWidth] = useState({ horizontal: 0, vertical: 0 });
  const [commonBtn, setCommonBtn] = useState({ horizontal: 0, vertical: 0 });
  const [mediumBtn, setMediumBtn] = useState({ horizontal: 0, vertical: 0 });
  const [smallBtn, setSmallBtn] = useState({ horizontal: 0, vertical: 0 });
  const [actionBtnSize, setActionBtnSize] = useState({ horizontal: 0, vertical: 0 });
  const [inputSize, setInputSize] = useState({ horizontal: 0, vertical: 0, fontSize: 0 });

  const setAuthenticate = useAuthStore((state) => state.setAuthenticate);

  const updatePadding = () => {
    if (ref.current) {
      setAuthBtnSize({ horizontal: ref.current.offsetWidth * 0.031, vertical: ref.current.offsetHeight * 0.021 });
      setBuildBtnSize({ horizontal: ref.current.offsetWidth * 0.052, vertical: ref.current.offsetHeight * 0.02 });
      setSquareBtnWidth({ horizontal: ref.current.offsetWidth * 0.031, vertical: ref.current.offsetHeight * 0.044 });
      setIntroBtnWidth({ horizontal: ref.current.offsetWidth * 0.023, vertical: ref.current.offsetHeight * 0.03 });
      setCommonBtn({ horizontal: ref.current.offsetWidth * 0.0385, vertical: ref.current.offsetHeight * 0.016 });
      setMediumBtn({ horizontal: ref.current.offsetWidth * 0.048, vertical: ref.current.offsetHeight * 0.019 });
      setSmallBtn({ horizontal: ref.current.offsetWidth * 0.032, vertical: ref.current.offsetHeight * 0.016 });
      setActionBtnSize({ horizontal: ref.current.offsetWidth * 0.04, vertical: ref.current.offsetHeight * 0.015 });
      setInputSize({
        horizontal: ref.current.offsetWidth * 0.077,
        vertical: ref.current.offsetHeight * 0.051,
        fontSize: ref.current.offsetWidth * 0.01,
      });
    }
  };

  const fetchEmailByUserName = async (userName: string) => {
    const usersRef = collection(firebaseDB, 'users');
    const querySnapShot = await getDocs(query(usersRef, where('userName', '==', userName)));
    if (!querySnapShot.empty) {
      const userData = querySnapShot.docs[0].data();
      return userData.email;
    }
    return null;
  };

  useEffect(() => {
    const handleResize = () => updatePadding();

    updatePadding();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const images = ref.current?.querySelectorAll("img");

    const handleImageLoad = () => {
      updatePadding();
    };

    images?.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad);
      }
    });

    return () => {
      images?.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
      });
    };
  }, []);

  return (
    <div className="flex flex-row justify-center">
      <div className="relative" ref={ref}>
        <img
          src="/images/login.png"
          alt="background"
          className="h-full -z-40 min-h-screen"
        />
        <Link
          className="absolute top-[18.2%] left-[4.2%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/home'
          style={{
            padding: `${squareBtnWidth.vertical}px ${squareBtnWidth.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[17.8%] left-[25.2%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/build'
          style={{
            padding: `${buildBtnSize.vertical}px ${buildBtnSize.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[17.8%] left-[64.8%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/search'
          style={{
            padding: `${buildBtnSize.vertical}px ${buildBtnSize.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[18.35%] left-[90%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/register'
          style={{
            padding: `${authBtnSize.vertical}px ${authBtnSize.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[22.4%] left-[90%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/login'
          style={{
            padding: `${authBtnSize.vertical}px ${authBtnSize.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[37%] left-[3.5%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/year'
          style={{
            padding: `${commonBtn.vertical}px ${commonBtn.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[40.3%] left-[3.5%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/era-style'
          style={{
            padding: `${commonBtn.vertical}px ${commonBtn.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[43.8%] left-[3.5%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/location'
          style={{
            padding: `${commonBtn.vertical}px ${commonBtn.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[51%] left-[3.5%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/philosphies'
          style={{
            padding: `${commonBtn.vertical}px ${commonBtn.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[54.3%] left-[3.5%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/muthology'
          style={{
            padding: `${commonBtn.vertical}px ${commonBtn.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[78.4%] left-[4.3%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/manifesto'
          style={{
            padding: `${squareBtnWidth.vertical}px ${squareBtnWidth.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[87.4%] left-[20.3%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/edit-profile'
          style={{
            padding: `${mediumBtn.vertical}px ${mediumBtn.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[86.4%] left-[47.8%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/intro'
          style={{
            padding: `${introBtn.vertical}px ${introBtn.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[87.5%] left-[63%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/home'
          style={{
            padding: `${smallBtn.vertical}px ${smallBtn.horizontal}px`,
          }}
        />
        <Link
          className="absolute top-[78.4%] left-[90%] bg-slate-400 opacity-10 hover:opacity-10"
          to='/third-dimension'
          style={{
            padding: `${squareBtnWidth.vertical}px ${squareBtnWidth.horizontal}px`,
          }}
        />
        <Formik
          initialValues={{
            userName: '',
            password: ''
          }}
          validationSchema={Yup.object().shape({
            userName: Yup.string()
              .required('UserName is required')
              .max(255, 'User Name must be at most 255 characters'),
            password: Yup.string()
              .required('Password is required')
              .min(6, 'Password must be at least 6 characters')
              .max(255, 'Password must be at most 255 characters')
          })}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const email = await fetchEmailByUserName(values.userName);
              if (email) {
                await signInWithEmailAndPassword(firebaseAuth, email, values.password);
                toast.success('Login successful');
                setAuthenticate();
                navigate('/home');
              } else {
                toast.error('User not found');
              }
            } catch (err) {
              console.log(err);
              toast.error('Error occurred during login');
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ handleBlur, handleChange, handleSubmit, values, errors }) => (
            <form onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
              const errorOrder: Array<keyof typeof values> = ['userName', 'password'];
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
                className="absolute top-[40.8%] left-[46.1%] bg-transparent text-center placeholder-red-600 text-red-600 outline-none"
                style={{ width: `${inputSize.horizontal}px`, height: `${inputSize.vertical}px`, fontSize: `${inputSize.fontSize}px` }}
              />
              <input
                type="password"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Password"
                className="absolute top-[58.5%] left-[46.1%] bg-transparent text-center placeholder-red-600 text-red-600 outline-none"
                style={{ width: `${inputSize.horizontal}px`, height: `${inputSize.vertical}px`, fontSize: `${inputSize.fontSize}px` }}
              />
              <button
                type="submit"
                className="absolute top-[67.5%] left-[35.4%] bg-slate-400 opacity-10 hover:opacity-10 cursor-pointer"
                style={{
                  padding: `${actionBtnSize.vertical}px ${actionBtnSize.horizontal}px`,
                }}
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
