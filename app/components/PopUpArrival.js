import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { DatePicker } from "@nextui-org/date-picker";
import { getLocalTimeZone, today } from "@internationalized/date";
import { Input } from "@nextui-org/input";

export default PopUpArrival = ({ isOpen, onOpenChange, status, onConfirm }) => {
    const handleArrivalDateChange = () => {

    }
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Change Status</ModalHeader>
                        <ModalBody>
                            <DatePicker
                                name="arrival-date"
                                label="Arrival Date"
                                className="w-full"
                                labelPlacement="outside"
                                maxValue={today(getLocalTimeZone())}
                                onChange={(value) => handleArrivalDateChange()}
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={() => handleClose(onClose)}>
                                Close
                            </Button>
                            <Button color="primary" onPress={handleConfirm}>
                                Confirm
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};