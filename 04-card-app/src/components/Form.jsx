import { useState } from 'react'
import ImageURl from './ImageURl'
import UserNameInput from './UserNameInput'
import RoleInput from './RoleInput'
import AboutField from './AboutField'
import SubmitBtn from './SubmitBtn'

const Form = ({onAddCard}) => {

    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [about, setAbout] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const newCard = {
            image,
            name,
            role,
            about
        };

        onAddCard(newCard);

        setImage('');
        setName('');
        setRole('');
        setAbout('');
    }

    return (

        <form onSubmit={(e) => submitHandler(e)}
            className="space-y-5">

            {/* Image URL */}
            <ImageURl image={image} setImage={setImage} />

            {/*  Username */}
            <UserNameInput name={name} setName={setName} />

            {/*  Role */}
            <RoleInput role={role} setRole={setRole} />

            {/* About User */}
            <AboutField about={about} setAbout={setAbout} />

            {/* Button */}
            <SubmitBtn />

        </form>
    )
}

export default Form