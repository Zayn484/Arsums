import React from 'react';
import { Modal } from 'antd';

const modal = (props) => (
	<Modal
		title={props.title}
		visible={props.visible}
		onOk={props.handleOk}
		confirmLoading={props.confirmLoading}
		onCancel={props.handleCancel}
		width={props.width}
	>
		<div>{props.children}</div>
	</Modal>
);

export default modal;
