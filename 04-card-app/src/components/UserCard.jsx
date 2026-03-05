import Card from './Card'

const UserCard = (props) => {
    return (
        <div className='flex flex-wrap items-center justify-center gap-4 py-5'>
            {props.cards.map((elem, idx) => {
                return <Card key={idx}
                    image={elem.image}
                    name={elem.name}
                    role={elem.role}
                    about={elem.about}
                />
            })}
        </div>
    )
}

export default UserCard