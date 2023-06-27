import React from "react";
import Nav from "@/app/components/Private/Nav";
import Title from "@/app/components/Private/QuickTutorial/Title";
import Lesson from "@/app/components/Private/QuickTutorial/Lesson";
import Content from "@/app/components/Private/QuickTutorial/Content";

function QuickTutorial() {
  return (
    <div className='bg-[linear-gradient(45deg,_#cbdaec,_#fafafa,_#fafafa)] '>
      <Nav />
      <div className="p-6 divide-y divide-gray-400">
        <div>
          <Lesson />
          <Title />
        </div>
        <Content />
      </div>
    </div>
  );
}

export default QuickTutorial;