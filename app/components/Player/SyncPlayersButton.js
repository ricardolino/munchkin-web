import { linkEvent } from 'inferno';

const SyncPlayersButton = (props) => {
    let { self, syncPlayers } = props.events;

    return (
        <button
            className="component-button sync"
            onClick={ linkEvent(self, syncPlayers) }><i className="icon-arrows-cw"></i><span>Sync Players</span></button>
    )

}

export default SyncPlayersButton;
