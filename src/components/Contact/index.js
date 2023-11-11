import { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
// import Loader from 'react-loaders'
import emailjs from 'emailjs-com'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        emailjs.init('1qligAiPX9nyDDrH8'); // Replace 'your_user_id' with your actual EmailJS user ID
      }, []);
    

    // personal code as I received errors
    useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
    
    return () => clearTimeout(timer); // This is the cleanup function
    })

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_4ng9ndk', 'template_562pv26', refForm.current, '1qligAiPX9nyDDrH8')
            .then((result) => {
                // console.log(result.text);
                alert("Message successfully sent!")
                window.location.reload(false)
            }, (error) => {
                // console.log(error.text);
                alert("Failed to send the message, please try again")
            });

        // emailjs
        // .sendForm(
        //     'service_4ng9ndk',
        //     'template_b0cc95r',
        //     refForm.current,
        //     '1qligAiPX9nyDDrH8'
        // )

        // .then(
        //     () => {
        //         alert('Message successfully sent!')
        //         window.location.reload(false)
        //     },
        //     () => {
        //         alert('Failed to send the message, please try again')
        //     }
        // )
    }


    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t', ' ','m', 'e']}
                    idx={15}
                    />
        
                </h1>
                <p>
                    I am interested in any new opportunities.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder='Name' required />
                            </li>

                            <li className='half'>
                                <input 
                                type="email" 
                                name="email" 
                                placeholder='Email' 
                                required 
                            />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>

                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>

                            <li>
                                <input type='submit' className='flat-button' value="SEND"></input>
                            </li>

                        </ul>
                    </form>
                </div>

            </div>
        </div>
        {/* <Loader type='pacman' /> */}
        </>
    )
}

export default Contact