import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalButton,
    SIZE,
    ROLE
} from "baseui/modal";
import { KIND as ButtonKind } from "baseui/button";
import Button from "./Button";

export default function RNModal({ isOpen, large, setIsOpen, title, children, action, actionText, loading, containerClass = null }) {

    // const [open, setOpen] = React.useState(false);

    return (
        <Modal
            onClose={() => setIsOpen(false)}
            closeable
            isOpen={isOpen}
            animate
            autoFocus
            size={large ? SIZE.auto : SIZE.default}
            role={ROLE.dialog}
        >
            {title && (
                <ModalHeader>{title}</ModalHeader>
            )}
            <ModalBody>
                {children}
            </ModalBody>
            {
                action && (
                    <ModalFooter>
                        <div className="space-x-5 ">
                            <Button textColor="black" transparent onClick={() => setIsOpen(false)}>
                                Cancel
                            </Button>
                            <Button processing={loading} isDark onClick={action}>{actionText ?? 'Continue'}</Button>
                        </div>
                    </ModalFooter>
                )
            }
        </Modal >
    );
}