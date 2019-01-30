import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { recommendation as NoticeType } from '../../../../propTypes';
import { NotificationContentTitle } from '../../../../../components/atoms';
import { AddNotice, NoNotice } from '../../../../../components/molecules';
import { Notification, Notice } from '../../../../../components/organisms';

const List = ({
  match, notices, dismiss, close 
}) => {
  return (
    <Notification close={close}>
      <NotificationContentTitle>Notifications pour cette page</NotificationContentTitle>
      {notices.length > 0 ? (
        <Fragment>
          {notices.slice(0, 2).map(({
            id, title, contributor: { name }, resource: { url }
          }) => (
            <Notice
              key={id}
              id={id}
              match={match}
              type="Tip"
              message={title}
              contributor={name}
              source={url}
              dismiss={dismiss}
            />
          ))}
        </Fragment>
      ) : (
        <NoNotice />
      )}
      <AddNotice
        as="a"
        href="https://form.jotformeu.com/82702852284358"
        target="_blank"
        rel="noopener noreferrer"
      />
    </Notification>
  );
};

List.propTypes = {
  match: PropTypes.object,
  notices: PropTypes.arrayOf(PropTypes.shape(NoticeType)),
  dismiss: PropTypes.func,
  close: PropTypes.func,
};

List.defaultProps = {
  match: null,
  notices: [],
  dismiss: () => {},
  close: null,
};

export default List;
