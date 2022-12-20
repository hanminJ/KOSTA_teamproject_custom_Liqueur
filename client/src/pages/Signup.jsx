// import React,{useState} from "react";
// import Helmet from "../components/Helmet/Helmet";
// import { Container,Row,Col,Form,FormGroup } from "reactstrap";
// import {Link} from "react-router-dom";
// import {createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
// import{ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
// import {setDoc,doc} from "firebase/firestore";
// import {auth} from "../firebase.config";


// import {storage} from "../firebase.config";
// import {db} from "../firebase.config";

// import {toast} from "react-toastify";

// import "../styles/login.css";
// import{useNavigate} from "react-router-dom";

// const Signup= () => {

//   const [username,setUsername] = useState("");
//   const [email,setEmail] = useState("");
//   const [password,setPassword] = useState("");
//   const [file,setFile] = useState(null);
//   const [loading,setLoading] = useState(false);

//   const navigate = useNavigate()

//   const Signup = async(e)=>{
//     e.preventDefault()
//     setLoading(true)
    
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//         );

        
//         const user= userCredential.user;
        
//         const storageRef= ref(storage,`images/${Date.now() + username}`)
//         const uploadTask = uploadBytesResumable(storageRef, file)
     
//         uploadTask.on((error)=>{
//           toast.error(error.message)
//         },()=>{
//           getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
//             //update user profile
//             await updateProfile(user,{
//                 displayName: username,
//                 photoURL: downloadURL,

//             });
//               //store user data in firestore database
//               await setDoc(doc(db,"users",user.uid),{
//                 uid: user.uid,
//                 displayName: username,
//                 email,
//                 photoURL: downloadURL,
//               });

//           });
//         }
//         );

//       setLoading(false)  
//       toast.success("회원가입 완료되셨습니다")
//       navigate("/../src/pages/Login.jsx")
//     } catch (error) {
//       setLoading(false)
//       toast.error("잘못 입력하셨습니다");
//     }
//   };

//   return(
//           <Helmet title="Signup">
//             <section>
//               <Container>
//                 <Row>
//                  { 
//                  loading? <Col lg = '12' className="text-center">
//                   <h5 className="fw-bold">Loading....</h5></Col>
//                  :}
//                 </Row>
//               </Container>
//             </section>
//           </Helmet>
//   ) 
// };

// export default Signup;

