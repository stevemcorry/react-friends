import React from 'react';
import Friend from './Friend';
import friends from "../..friends";

class FriendsList extends React.component {
    constructor( props ) {
        super( props );

        this.state = {
              searchText: ""
            , orderBy: "name"
            , order: "ascending"
        };
    }

    handleChange( field, event ) {
        this.setState( { [ field ]: event.target.value } );
    }

    render () {
        const friendsList = friends.map( friend => (
            <Friend
                currentLocation={ friend.current_location || {} }
                friendCount={ friend.friend_count }
                key={ friend.$$hashKey }
                name={ friend.name }
                pictureUrl={ friend.pic_square }
                status={ friend.status ? friend.status.message : "" }
            />
        ) );
        return (
            <div>
                <form
                    className="form-inline searchForm"
                    role="form"
                >
                    <div className="form-group">

                        <input
                            className="form-control"
                            placeholder="Search Anything For Friends"
                            value={ this.state.searchText }
                        />

                        <select
                            className="input-medium"
                            value={ this.state.orderBy }
                        >
                            <option value="name">Name</option>
                            <option value="friend_count">#Friends</option>
                        </select>

                        <select
                            className="input-medium"
                            value={ this.state.order }
                        >
                            <option value="descending">Descending</option>
                            <option value="ascending">Ascending</option>
                        </select>

                    </div>
                </form>

                <ul>
                    { friendsList }
                </ul>
            </div>
        )
    }
}
export default FriendsList;