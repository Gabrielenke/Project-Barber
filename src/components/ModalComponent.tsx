"use client";

import { Facebook, Linkedin, Twitter } from "@/assets/export";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Image from "next/image";

interface ModalProps {
  image: string;
  imageAlt?: string;
}

export default function ModalComponent({ image, imageAlt }: ModalProps) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button className="bg-primary" onClick={() => setOpenModal(true)}>
        Mais informacoes
      </Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="">Nome do produto</Modal.Header>
        <Modal.Body>
          <div className="flex flex-col space-y-6 ">
            <img
              className="h-96 w-full object-cover"
              src={image}
              alt={imageAlt}
            />
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center gap-2">
                <p>Preço</p>
                <p>258R$</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p>Mais informacoes</p>
                <div className="flex gap-6">
                  <div className="h-6 w-6">
                    <Image src={Facebook} alt="" />
                  </div>
                  <div className="h-6 w-6">
                    <Image src={Linkedin} alt="" />
                  </div>
                  <div className="h-6 w-6">
                    <Image src={Twitter} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
