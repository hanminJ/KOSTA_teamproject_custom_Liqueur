// import React,{useState} from "react";
// import Helmet from "../components/Helmet/Helmet";
// import { Container,Row,Col,Form,FormGroup } from "reactstrap";
// import {Link, useNavigate} from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import {auth} from "../firebase.config";
// import {toast} from "react-toastify";

// import "../styles/login.css";

// const Login = () => {

//   const [email,setEmail] = useState("");
//   const [password,setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate()

//   const signIn = async (e) =>{

//     e.preventDefault()
//     setLoading(true)

//     try{

//       const userCredential = await signInWithEmailAndPassword(auth,email,
//         password)

//         const user = userCredential.user
        
//         console.log(user)
//         setLoading(false)
//         toast.success("로그인이 성공적으로 이뤄졌습니다")
//         navigate("/../src/pages/Checkout.jsx")

//     } catch (error) {
//       setLoading(false)
//       toast.error(error.message)
//     }

//   }

//   return(
//           <Helmet title="로그인">
//             <section>
//               <Container>
//                 <Row>
//                 {
//                   loading ? <Col lg="12" className="text-center"><h5 
//                   className="fw-bold">Loading...</h5></Col>:
//                 }
//                 </Row>
//               </Container>
//             </section>
//           </Helmet>
//   ) 
// };

// export default Login;

