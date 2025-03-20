import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import { skills } from "./data/cardData";
export default function SkillsSection() {
  return (
    <section className="p-10 text-center w-full max-w-6xl">
      <h2 className="text-4xl font-semibold mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="text-center transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          >
            {skill.name === "Next.js" ? (
              <>
                <Image
                  alt={skill.name}
                  className="mx-auto dark:hidden"
                  height={64}
                  src={skill.lightSrc ?? ""}
                  width={64}
                />
                <Image
                  alt={skill.name}
                  className="mx-auto hidden dark:block"
                  height={64}
                  src={skill.darkSrc ?? ""}
                  width={64}
                />
              </>
            ) : (
              <Image
                alt={skill.name}
                className="mx-auto"
                height={64}
                src={skill.src ?? ""}
                width={64}
              />
            )}
            <p className="text-lg font-medium mt-2">{skill.name}</p>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) =>
                i < skill.rating ? (
                  <StarIcon key={i} className="h-3 w-3 text-yellow-500" />
                ) : (
                  <OutlineStarIcon key={i} className="h-3 w-3 text-gray-400" />
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
