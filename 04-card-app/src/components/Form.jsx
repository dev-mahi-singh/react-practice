import React from 'react'
import ImageURl from './ImageURl'
import UserNameInput from './UserNameInput'
import RoleInput from './RoleInput'
import AboutField from './AboutField'
import SubmitBtn from './SubmitBtn'

const Form = () => {
    return (

        <form className="space-y-5">

            {/* Image URL */}
            <ImageURl />

            {/*  Username */}
            <UserNameInput />

            {/*  Role */}
            <RoleInput />

            {/* About User */}
            <AboutField />

            {/* Button */}
            <SubmitBtn />

        </form>
    )
}

export default Form