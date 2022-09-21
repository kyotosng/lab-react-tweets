import React from 'react';
import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

function Tweet(props) {
// como mostrar o conteudo direto no tweet, sem ter os componentes criados
// ex. username: {props.tweet.user.name} --> .tweet pq está dentro do componente tweet
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          
          <User user={props.tweet.user.name} /> 
         
          <Timestamp timestamp={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />

        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
