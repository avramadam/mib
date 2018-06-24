import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const Messages = ({ secretData, user }) => (
  <Card className="container">
    <CardTitle
      title="Messages"
      subtitle="This will be where messages are senf from. Neet to init form here"
    />
  {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{secretData}</CardText>}
  </Card>
);

Messages.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Messages;
