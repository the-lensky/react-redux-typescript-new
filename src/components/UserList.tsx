import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h2>ЗагрузОчка</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export default UserList;
