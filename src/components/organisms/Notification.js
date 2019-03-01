import React, { Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import { NotificationMain } from '../atoms';
import { NotificationHeader } from '../molecules';
import Notice from './Notice';
import NoticeDetails from './NoticeDetails';
import isChildInstanceOf from '../../app/utils/isChildInstanceOf';

export default class Notification extends PureComponent {
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    close: PropTypes.func,
    onBack: PropTypes.func,
    children: PropTypes.node.isRequired,
    details: PropTypes.bool,
    closed: PropTypes.bool,
  };

  static defaultProps = {
    title: null,
    details: false,
    close: null,
    onBack: null,
    closed: false,
  };

  renderChildren() {
    const { children, details } = this.props;

    return React.Children.map(children, (child) => {
      if (isChildInstanceOf(child)(Notice)) {
        return React.cloneElement(child, {
          ...child.props,
          details,
        });
      }

      return child;
    });
  }

  get hasNotices() {
    const { children } = this.props;

    return React
      .Children
      .toArray(children)
      .some(child => isChildInstanceOf(child)(Notice) || isChildInstanceOf(child)(NoticeDetails));
  }

  render() {
    const {
      title, close, onBack, closed
    } = this.props;

    if (closed) {
      return null;
    }

    return (
      <Fragment>
        <NotificationHeader title={title} close={close} onBack={onBack} />
        <NotificationMain notices={this.hasNotices}>
          {this.renderChildren()}
        </NotificationMain>
      </Fragment>
    );
  }
}