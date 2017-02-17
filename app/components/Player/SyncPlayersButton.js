import { linkEvent } from 'inferno';

const SyncPlayersButton = (props) => {
    let { self, syncPlayers } = props.events;

    return (
        <button
            className="component-button sync"
            onClick={ linkEvent(self, syncPlayers) }>Sync Players</button>
    )

}

export default SyncPlayersButton;