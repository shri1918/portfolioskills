'use client'
import { Button } from "@heroui/button";
import { Card, CardHeader, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/react";
import {  Modal,  ModalContent,  ModalHeader,  ModalBody,  ModalFooter} from "@heroui/modal";
import { Key, useState } from "react";
import Link from "next/link";
import { useDisclosure } from "@nextui-org/react";

import { cardData, CardType } from "./data/cardData";

export default function Cards() {
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const {isOpen, onOpen, onClose} = useDisclosure();

  const handleCardClick = (card: CardType) => {
    setSelectedCard(card);
    setCurrentImageIndex(0);
    onOpen();
  };

  const handleNextImage = () => {
    if (selectedCard?.projectImages) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedCard.projectImages!.length
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedCard?.projectImages) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedCard.projectImages!.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="flex flex-col gap-4 px-8">
      <div className="gap-2 grid grid-cols-12 grid-rows-2">
        {cardData.slice(0, 5).map((card: CardType, index: Key | null | undefined) => (
          <Card
            key={index}
            isPressable
            onPress={() => handleCardClick(card)}
            className={`col-span-12 ${
              index === 3
                ? "sm:col-span-5"
                : index === 4
                  ? "sm:col-span-7"
                  : "sm:col-span-4"
            } h-[300px]`}
            isFooterBlurred={index === 3 || index === 4}
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                {card.description}
              </p>
              <h4 className="text-white font-medium text-large">{card.title}</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={card.imageUrl}
            />
            {card.footerText1 && (
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  {card.footerImage && (
                    <Image
                      alt="Breathing app icon"
                      className="rounded-full w-10 h-11 bg-black"
                      src={card.footerImage}
                    />
                  )}
                  <div className="flex flex-col">
                    <p className="text-tiny text-white/60">{card.footerText1}</p>
                    <p className="text-tiny text-white/60">{card.footerText2}</p>
                  </div>
                </div>
                <Button radius="full" size="sm">
                  {card.footerButtonText}
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Link href="/projects">
          <Button color="primary" size="lg">
            View More Projects
          </Button>
        </Link>
      </div>

      <Modal 
        size="2xl" 
        isOpen={isOpen} 
        onClose={onClose}
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {selectedCard?.title}
              </ModalHeader>
              <ModalBody>
                {selectedCard?.liveUrl ? (
                  <iframe
                    src={selectedCard.liveUrl}
                    className="w-full h-[500px] rounded-lg"
                    title={selectedCard.title}
                  />
                ) : selectedCard?.projectImages ? (
                  <div className="relative">
                    <Image
                      src={selectedCard.projectImages[currentImageIndex]}
                      alt={`Project image ${currentImageIndex + 1}`}
                      className="w-full h-[500px] object-cover rounded-lg"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex justify-between p-4">
                      <Button
                        isIconOnly
                        variant="flat"
                        onClick={handlePrevImage}
                      >
                        ←
                      </Button>
                      <Button
                        isIconOnly
                        variant="flat"
                        onClick={handleNextImage}
                      >
                        →
                      </Button>
                    </div>
                  </div>
                ) : null}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
