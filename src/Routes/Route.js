
import {createBrowserRouter} from 'react-router-dom'
import About from '../Components/About/About';
import AllAbout from '../Components/About/Allabout/AllAbout';
import EditAbout from '../Components/About/Editabout/EditAbout';
import Category from '../Components/Category/Category';
import Media from '../Components/Media/Media';
import Home from '../Components/Pages/Home/Home'
import Login from '../Components/Pages/Login/Login';
import SignUp from '../Components/Pages/SignUp/SignUp';
import Posts from '../Components/Post/Posts';
import Main from '../Layout/Main'
import ProvateRoutes from '../Routes/ProvateRoutes/ProvateRoutes';


 const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/category/:id',
                element:<Category></Category>
            },
            {
                path:'/media',
                element:<ProvateRoutes><Media></Media></ProvateRoutes>,
                loader:()=>fetch(`https://socialbook-server-seven.vercel.app/allmediaposts`)

            },
            {
                path:'/about',
                element:<ProvateRoutes><About></About></ProvateRoutes>
            },
            
            {
                path:'/allabout',
                element:<ProvateRoutes><AllAbout></AllAbout></ProvateRoutes>,
                loader:() => fetch(`https://socialbook-server-seven.vercel.app/aboutusers`)
            },
            {
                path:'/update/:email',
                element:<ProvateRoutes><EditAbout></EditAbout></ProvateRoutes>,
                loader:({params}) => fetch(`https://socialbook-server-seven.vercel.app/users/${params.email}`)
            }
        ]
    },
    {
        path:'/',
        element:<Posts></Posts>,
        // loader:()=> fetch(`https://socialbook-server-seven.vercel.app/allmediaposts`)
    },
   
])

export default router;