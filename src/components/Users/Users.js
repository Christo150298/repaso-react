const Users = (props) => {
    return(
        <ul>
        { props.users.map((item) => {
            return (
                <li>
                <input className='userName'/>
                <button>Eliminar {item} </button>
                <p>
                    Dinero invertido <strong>{ (Math.random() * 10000).toFixed(2) }</strong>
                </p>
                </li>
            );
        }) }
        </ul>
    );
};

export default Users;