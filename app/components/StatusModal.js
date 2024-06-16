// StatusModal.js
'use client'
import { useState, useEffect } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

const StatusModal = ({ isOpen, onOpenChange, status, onConfirm }) => {
  const [dateOfRIP, setDateOfRIP] = useState('');
  const [cause, setCause] = useState('');
  const [date, setDate] = useState('');
  const [severeLevel, setSevereLevel] = useState('');
  const [followUp, setFollowUp] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isOpen) {
      // Clear modal state when it's closed
      setDateOfRIP('');
      setCause('');
      setDate('');
      setSevereLevel('');
      setFollowUp('');
      setSymptoms('');
      setNote('');
      setError('');
    }
  }, [isOpen]);

  const handleConfirm = () => {
    if (status === 'RIP' && (!dateOfRIP || !cause)) {
      setError('Please fill in all fields.');
      return;
    }
    if (status === 'Sick' && (!date || !severeLevel || !followUp || !symptoms)) {
      setError('Please fill in all fields.');
      return;
    }
    if (status === 'Watchout' && (!date || !note)) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    if (status === 'RIP') {
      onConfirm({ dateOfRIP, cause });
    }
    if (status === 'Sick') {
      onConfirm({ date, severeLevel, followUp, symptoms });
    }
    if (status === 'Watchout') {
      onConfirm({ date, note });
    }
    onOpenChange(false); // Close the modal on successful confirmation
  };

  const handleClose = (onClose) => {
    onClose();
    onOpenChange(false); // Ensure the modal closes and state is reset
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Change Status</ModalHeader>
            <ModalBody>
              <p>Are you sure you want to change the status?</p>
              {status === 'RIP' && (
                <>
                  <Input
                    fullWidth
                    label="Date of RIP"
                    placeholder="Enter date of RIP"
                    value={dateOfRIP}
                    onChange={(e) => setDateOfRIP(e.target.value)}
                  />
                  <Input
                    fullWidth
                    label="Cause"
                    placeholder="Enter cause"
                    value={cause}
                    onChange={(e) => setCause(e.target.value)}
                  />
                </>
              )}
              {status === 'Sick' && (
                <>
                  <Input
                    fullWidth
                    label="Date"
                    placeholder="Enter date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <Input
                    fullWidth
                    label="Severe Level"
                    placeholder="Enter severe level"
                    value={severeLevel}
                    onChange={(e) => setSevereLevel(e.target.value)}
                  />
                  <Input
                    fullWidth
                    label="Follow Up"
                    placeholder="Enter follow-up details"
                    value={followUp}
                    onChange={(e) => setFollowUp(e.target.value)}
                  />
                  <Input
                    fullWidth
                    label="Symptoms"
                    placeholder="Enter symptoms"
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                  />
                </>
              )}
              {status === 'Watchout' && (
                <>
                  <Input
                    fullWidth
                    label="Date"
                    placeholder="Enter date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <Input
                    fullWidth
                    label="Note"
                    placeholder="Enter note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </>
              )}
              {error && <p style={{ color: 'red' }}>{error}</p>}
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

export default StatusModal;
