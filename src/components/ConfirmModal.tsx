const { Modal } = require("antd")

const ConfirmModal = (props: any) => {
    return (
        <Modal
            title={props.title ? props.title : 'Confirm'}
            open={props.open}
            onOk={props.onConfirm}
            onCancel={props.onCancel}
            okText="Yes"
            cancelText="No"
        >
            <p>{props.message}</p>
        </Modal>
    )
}

export default ConfirmModal;