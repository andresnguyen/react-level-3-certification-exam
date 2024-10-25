import { useState } from "react";
import Modal from "./Modal";
import { Button, Flex, Space, Typography } from "antd";
import LoginForm from "./LoginForm";

export default function SecondFeature() {
  const [showModal, setShowModal] = useState(false);
  const [showRegularDialog, setShowRegularDialog] = useState(false);

  return (
    <>
      <Typography.Title style={{ textAlign: "center" }}>
        Modal Demo
      </Typography.Title>
      <Flex justify="space-between">
        <div>
          <Button type="primary" onClick={() => setShowModal(true)}>
            Open Modal
          </Button>
        </div>
        <div>
          <Button type="primary" onClick={() => setShowRegularDialog(true)}>
            Open Regular Dialog
          </Button>
        </div>
      </Flex>

      <Modal isShow={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>
          <Flex justify="space-between" align="center">
            <Typography.Title level={5}>Login Form</Typography.Title>
            <Button onClick={() => setShowModal(false)}>X</Button>
          </Flex>
        </Modal.Header>

        <Modal.Body>
          <LoginForm />
        </Modal.Body>

        <Modal.Footer>
          <Flex justify="flex-end">
            <Space>
              <Button
                type="primary"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Login
              </Button>
              <Button
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
            </Space>
          </Flex>
        </Modal.Footer>
      </Modal>

      <Modal
        regularDialog
        isShow={showRegularDialog}
        onClose={() => setShowRegularDialog(false)}
      >
        <Modal.Body>
          Are you sure you want to delete this item? This action cannot be
          undone.
        </Modal.Body>

        <Modal.Footer>
          <Flex justify="flex-end">
            <Space>
              <Button
                type="primary"
                onClick={() => {
                  setShowRegularDialog(false);
                }}
              >
                OK
              </Button>
              <Button
                onClick={() => {
                  setShowRegularDialog(false);
                }}
              >
                Cancel
              </Button>
            </Space>
          </Flex>
        </Modal.Footer>
      </Modal>
    </>
  );
}
