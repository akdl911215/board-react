// import {createBrowserRouter} from "react-router-dom";
//
// const authLogin = async () => {
//     const token = localStorage.getItem('accessToken')
//     if (token) {
//         return getUser(token)
//     }
//     return null
// }
//
// export const router = createBrowserRouter([
//     {
//         path: 'crud',
//         element: <Home />,
//         loader: authLogin,
//         children: [
//             {
//                 index: true,
//                 element: <ArticleList/>
//             },
//             {
//                 path: 'signup',
//                 element: <Signup />
//             },
//             {
//                 path: 'login',
//                 element: <Login />
//             },
//             {
//                 path: 'write',
//                 element: <ArtocleForm/>
//             },
//             {
//                 path: 'modify',
//                 element: <ArticleForm />
//             }
//         ]
//     }
// ])
