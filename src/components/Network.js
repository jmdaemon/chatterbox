import Channel from './Channel'

function Network(props) {
  return (
    <div>
      <li>
        <h1 className="network">{props.name}</h1>
        <Channel channel={props.channel}/>
      </li>
    </div>
  );
}

export default Network;
