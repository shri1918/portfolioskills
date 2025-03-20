"use client";

import { Button } from "@heroui/button";
import { Card, CardHeader, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { useState } from "react";

import { cardData, CardType } from "../../components/data/cardData";

export default function ProjectsPage() {
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = (card: CardType) => {
    setSelectedCard(card);
    setCurrentImageIndex(0);
    setIsOpen(true);
  };

  const handleNextImage = () => {
    if (selectedCard?.projectImages) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % selectedCard.projectImages!.length,
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedCard?.projectImages) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedCard.projectImages!.length - 1 : prev - 1,
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-center font-bold mb-8">All Projects</h1>
      <div className="grid grid-cols-12 grid-rows-2 gap-2">
        {cardData.map((card: CardType, index) => (
          <Card
            key={index}
            isFooterBlurred
            isPressable
            className={`col-span-12 ${
              index === 3
                ? "sm:col-span-5"
                : index === 4
                  ? "sm:col-span-7"
                  : "sm:col-span-4"
            } h-[300px]`}
            onPress={() => handleCardClick(card)}
          >
            <CardHeader className="flex-col absolute items-start top-1 z-10">
              <p className="text-tiny text-white/60 font-bold uppercase">
                {card.description}
              </p>
              <h4 className="text-large text-white font-medium">
                {card.title}
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="h-full w-full object-cover z-0"
              src={card.imageUrl}
            />
            {card.footerText1 && (
              <CardFooter className="bg-black/40 border-default-600 border-t-1 absolute bottom-0 dark:border-default-100 z-10">
                <div className="flex flex-grow gap-2 items-center">
                  {card.footerImage && (
                    <Image
                      alt="Project icon"
                      className="bg-black h-11 rounded-full w-10"
                      src={card.footerImage}
                    />
                  )}
                  <div className="flex flex-col">
                    <p className="text-tiny text-white/60">
                      {card.footerText1}
                    </p>
                    <p className="text-tiny text-white/60">
                      {card.footerText2}
                    </p>
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

      <Modal
        isOpen={isOpen}
        scrollBehavior="inside"
        size="5xl"
        onClose={() => setIsOpen(false)}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {selectedCard?.title}
              </ModalHeader>
              <ModalBody>
                {selectedCard?.liveUrl ? (
                  <iframe
                    className="h-[500px] rounded-lg w-full"
                    src={selectedCard.liveUrl}
                    title={selectedCard.title}
                  />
                ) : selectedCard?.projectImages ? (
                  <div className="relative">
                    <Image
                      alt={`Project image ${currentImageIndex + 1}`}
                      className="h-[500px] rounded-lg w-full object-cover"
                      src={selectedCard.projectImages[currentImageIndex]}
                    />
                    <div className="flex justify-between p-4 absolute bottom-0 inset-x-0">
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
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => setIsOpen(false)}
                >
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
