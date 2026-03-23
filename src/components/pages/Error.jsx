// import { useNavigate } from 'react-router-dom'
// import { Button } from 'react-bootstrap'


// const Error = () => {

//     const navigate = useNavigate()

//     const handleClick = () => {
//         navigate("/")
//     }

//     return (
//         <>
//           <div className="error text-center mt-5">
//               <h1 className='text-center text-danger mt-5' > Error occurred</h1>
//             <Button className='btn' variant='outline-primary' onClick={handleClick} >Home</Button>
//           </div>
//         </>

//     )
// }

// export default Error
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const ErrorPage = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }

    return (
        <div className="error text-center mt-5">
            <h1 className='text-danger mt-5'>Error occurred</h1>
            <Button variant='outline-primary' onClick={handleClick}>
                Home
            </Button>
        </div>
    )
}

export default ErrorPage