import { useState } from 'react'
import { Container, Row, Col, Card, Button, Form, FloatingLabel } from 'react-bootstrap'
import { auth, googleAuth } from '../../firebase/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
    const [authData, setAuthData] = useState({
        email: "",
        password: ""
    })

    const [isSignup, setIsSignup] = useState(false)

    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const handleAuthData = (field, e) => {
        setAuthData((prev) => ({
            ...prev,
            [field]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if (isSignup) {

                const result = await createUserWithEmailAndPassword(auth, authData.email, authData.password)


                if (!result) {
                    navigate("/login")
                } else {
                    navigate("/trips")
                }

            } else {
                const result = await signInWithEmailAndPassword(auth, authData.email, authData.password)

                if (!result) {
                    navigate("/login")
                } else {
                    navigate("/trips")
                }
            }
        } catch (error) {

            setError(error.message)


        }
    }


    const handleGoogleLogin = async () => {

        try {

            const result = await signInWithPopup(auth, googleAuth)

            if (!result) {
                throw new Error("failed to login")
            }

            console.log("user", result)

            if (!result) {
                navigate("/login")
            } else {
                navigate("/trips")
            }

        } catch (error) {

            setError(error.message)

        }

    }



    return (
        <Container>
            <Row>
                <Col className='d-flex justify-content-center align-items-center min-vh-100'>
                    <Card className='shadow p-4' style={{ width: "400px", borderRadius: "15px" }}>

                        <h3 className='text-center mb-3'>
                            {isSignup ? 'Sign Up' : 'Login'}
                        </h3>

                        <p className='text-center text-danger fs-5'  >{error ? error : ""}</p>

                        <Form onSubmit={handleSubmit}>

                            <FloatingLabel label="Email" className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="email"
                                    required
                                    value={authData.email}
                                    onChange={(e) => handleAuthData("email", e)}
                                />
                            </FloatingLabel>

                            <FloatingLabel label="Password" className="mb-3">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    required
                                    value={authData.password}
                                    onChange={(e) => handleAuthData("password", e)}
                                />
                            </FloatingLabel>

                            <Button type="submit" className="w-100 mb-3">
                                {isSignup ? 'Sign Up' : 'Login'}
                            </Button>

                            <Button
                                variant="danger"
                                className="w-100 mb-3"
                                onClick={handleGoogleLogin}

                            >
                                Continue with Google
                            </Button>

                            <div className="text-center">
                                <small>
                                    {isSignup ? 'Already have an account?' : "Don't have an account?"}
                                    <span
                                        style={{ cursor: 'pointer', marginLeft: '5px', color: 'blue' }}
                                        onClick={() => setIsSignup(!isSignup)}
                                    >
                                        {isSignup ? 'Login' : 'Sign Up'}
                                    </span>
                                </small>
                            </div>

                        </Form>

                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth
