import { linkEvent } from 'inferno';

const DeletePlayerButton = (props) => {
    let { self, deletePlayer } = props.events;

    return (
        <button
            className="component-button delete"
            onClick={ linkEvent(self, deletePlayer) }>Delete Player</button>
    )

}

export default DeletePlayerButton;